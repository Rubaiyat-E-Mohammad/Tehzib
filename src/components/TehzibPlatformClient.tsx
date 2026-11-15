"use client";

import React, { useEffect, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { PLATFORM_HTML_MARKUP } from "@/lib/platform-markup";
import { useStorefrontStore } from "@/store/useStorefrontStore";

declare global {
  interface Window {
    __TEHZIB_INITIAL_SERVER_STATE__?: Record<string, any>;
    __TEHZIB_INITIAL_MODE__?: "storefront" | "admin";
    __tehzibZustandGetState?: () => {
      theme: "light" | "dark";
      cart: Array<{ id: string; qty: number; variant: string; selected: boolean }>;
      wishlist: string[];
      appMode: "storefront" | "admin";
    };
    __tehzibZustandSync?: (partial: {
      theme?: "light" | "dark";
      cart?: Array<{ id: string; qty: number; variant: string; selected: boolean }>;
      wishlist?: string[];
      appMode?: "storefront" | "admin";
    }) => void;
    __tehzibScheduleServerSync?: (
      payload: {
        erpDb?: Record<string, any>;
        logos?: { light?: string; dark?: string };
        notifications?: Array<Record<string, any>>;
        deletedStaffIds?: string[];
      },
      options?: { immediate?: boolean },
    ) => void;
    __tehzibRuntimeLoaded?: boolean;
    __tehzibRuntimeVersion?: string;
  }
}

const RUNTIME_VERSION = "79";
const STATIC_MARKUP = { __html: PLATFORM_HTML_MARKUP };

/**
 * Memoized DOM shell so React never resets the interactive DOM after mount.
 */
const TehzibStaticDomShell = React.memo(
  function TehzibStaticDomShellInner({ initialMode }: { initialMode: "storefront" | "admin" }) {
    return (
      <div
        id="tehzib-platform-dom"
        data-initial-mode={initialMode}
        suppressHydrationWarning
        dangerouslySetInnerHTML={STATIC_MARKUP}
      />
    );
  },
  () => true,
);

type SyncPayload = {
  erpDb?: Record<string, any>;
  logos?: { light?: string; dark?: string };
  notifications?: Array<Record<string, any>>;
  deletedStaffIds?: string[];
};

type QueuedSyncEntry = {
  payload: SyncPayload;
  seq: number;
};

export function TehzibPlatformClient({
  initialData,
  initialMode = "storefront",
}: {
  initialData: Record<string, any>;
  initialMode?: "storefront" | "admin";
}) {
  const queryClient = useQueryClient();
  const syncTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const syncSeqRef = useRef(0);
  const inFlightRef = useRef(false);
  const timerPendingRef = useRef(false);
  const pendingSyncRef = useRef<QueuedSyncEntry | null>(null);

  // TanStack Query cache for PostgreSQL-hydrated platform state
  useQuery({
    queryKey: ["tehzib-platform-state"],
    queryFn: async () => {
      const res = await fetch("/api/platform", { cache: "no-store" });
      const json = await res.json();
      return json.data;
    },
    initialData,
    refetchOnWindowFocus: false,
  });

  // TanStack Query mutation for persisting Storefront & ERP changes to PostgreSQL
  const persistMutation = useMutation({
    mutationFn: async ({ payload, seq }: QueuedSyncEntry) => {
      const staffList = Array.isArray(payload.erpDb?.staffMembers)
        ? payload.erpDb.staffMembers
        : [];
      const sentPasswords = staffList
        .filter((st: any) => typeof st?.newPassword === "string" && st.newPassword.length >= 4)
        .map((st: any) => ({
          id: st.id || st.dbId || "",
          email: (st.email || "").trim().toLowerCase(),
          newPassword: String(st.newPassword),
        }));
      const sentDeletedStaffIds = Array.from(
        new Set(
          [
            ...(Array.isArray(payload.deletedStaffIds) ? payload.deletedStaffIds : []),
            ...(Array.isArray(payload.erpDb?.__deletedStaffIds)
              ? payload.erpDb.__deletedStaffIds
              : []),
          ]
            .map((id) => String(id || "").trim())
            .filter(Boolean),
        ),
      );

      const res = await fetch("/api/platform", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          sentDeletedStaffIds.length > 0
            ? { ...payload, deletedStaffIds: sentDeletedStaffIds }
            : payload,
        ),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(json?.error || "Failed to sync with PostgreSQL");
      }
      return { json, seq, sentPasswords, sentDeletedStaffIds };
    },
    onSuccess: ({ json, seq, sentPasswords, sentDeletedStaffIds }) => {
      const liveErpDb = (window as any).ERP_DB;
      // Clear already-committed staff deletions so a subsequent sync preserves newer deletes only
      if (liveErpDb && Array.isArray(liveErpDb.__deletedStaffIds) && sentDeletedStaffIds.length > 0) {
        const sentDelSet = new Set(sentDeletedStaffIds);
        liveErpDb.__deletedStaffIds = liveErpDb.__deletedStaffIds.filter(
          (id: any) => !sentDelSet.has(String(id || "").trim()),
        );
        try {
          localStorage.setItem("tehzib_unified_ems_v8", JSON.stringify(liveErpDb));
        } catch {}
      }

      // Clear already-persisted one-time passwords without touching newer edits
      const liveStaff = liveErpDb?.staffMembers;
      if (Array.isArray(liveStaff) && sentPasswords.length > 0) {
        for (const sent of sentPasswords) {
          const match = liveStaff.find(
            (st: any) =>
              (sent.id && (st.id === sent.id || st.dbId === sent.id)) ||
              (sent.email && (st.email || "").trim().toLowerCase() === sent.email),
          );
          if (match && match.newPassword === sent.newPassword) {
            delete match.newPassword;
          }
        }
      }

      // Guard against stale responses overwriting newer queued/pending client mutations
      const isLatest = seq === syncSeqRef.current && !pendingSyncRef.current;
      if (isLatest && json?.data) {
        queryClient.setQueryData(["tehzib-platform-state"], json.data);
        if (window.__TEHZIB_INITIAL_SERVER_STATE__ && json.data.erpDb) {
          window.__TEHZIB_INITIAL_SERVER_STATE__.erpDb = json.data.erpDb;
        }
        if (
          typeof (window as any).__tehzibApplyServerStaffSync === "function" &&
          Array.isArray(json.data.erpDb?.staffMembers)
        ) {
          (window as any).__tehzibApplyServerStaffSync(
            json.data.erpDb.staffMembers,
            json.data.erpDb.staffRoles,
          );
        }
      }
    },
    onError: (err: unknown) => {
      const msg = err instanceof Error ? err.message : "Failed to sync changes with PostgreSQL";
      if (typeof (window as any).showToast === "function") {
        (window as any).showToast(msg, "error");
      }
    },
    onSettled: () => {
      inFlightRef.current = false;
      if (pendingSyncRef.current && !timerPendingRef.current) {
        flushPendingSyncRef.current();
      }
    },
  });

  const persistMutateRef = useRef(persistMutation.mutate);
  persistMutateRef.current = persistMutation.mutate;

  const flushPendingSyncRef = useRef(() => {});
  flushPendingSyncRef.current = () => {
    if (inFlightRef.current || !pendingSyncRef.current) return;
    const nextEntry = pendingSyncRef.current;
    pendingSyncRef.current = null;
    inFlightRef.current = true;
    persistMutateRef.current(nextEntry);
  };

  useEffect(() => {
    window.__TEHZIB_INITIAL_SERVER_STATE__ = initialData;
    window.__TEHZIB_INITIAL_MODE__ = initialMode;

    window.__tehzibZustandGetState = () => {
      const s = useStorefrontStore.getState();
      return {
        theme: s.theme,
        cart: s.cart,
        wishlist: s.wishlist,
        appMode: s.appMode,
      };
    };

    window.__tehzibZustandSync = (partial) => {
      const store = useStorefrontStore.getState();
      if (partial.theme) store.setTheme(partial.theme);
      if (partial.cart) store.setCart(partial.cart);
      if (partial.wishlist) store.setWishlist(partial.wishlist);
      if (partial.appMode) store.setAppMode(partial.appMode);
    };

    window.__tehzibScheduleServerSync = (payload, options) => {
      syncSeqRef.current += 1;
      pendingSyncRef.current = { payload, seq: syncSeqRef.current };
      if (syncTimerRef.current) {
        clearTimeout(syncTimerRef.current);
        syncTimerRef.current = null;
      }
      if (options?.immediate) {
        timerPendingRef.current = false;
        flushPendingSyncRef.current();
        return;
      }
      timerPendingRef.current = true;
      syncTimerRef.current = setTimeout(() => {
        timerPendingRef.current = false;
        syncTimerRef.current = null;
        flushPendingSyncRef.current();
      }, 250);
    };

    const strayErpToast = document.getElementById("erpToast");
    if (strayErpToast) strayErpToast.remove();

    if (window.__tehzibRuntimeLoaded && window.__tehzibRuntimeVersion !== RUNTIME_VERSION) {
      window.location.reload();
      return;
    }

    if (!window.__tehzibRuntimeLoaded) {
      window.__tehzibRuntimeLoaded = true;
      window.__tehzibRuntimeVersion = RUNTIME_VERSION;
      const script = document.createElement("script");
      script.src = `/tehzib-runtime.js?v=${RUNTIME_VERSION}`;
      script.async = false;
      document.body.appendChild(script);
    } else if (
      typeof (window as any).switchWorkspaceMode === "function" &&
      (window as any).state?.appMode !== initialMode
    ) {
      (window as any).switchWorkspaceMode(initialMode);
    }

    return () => {
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialMode]);

  return <TehzibStaticDomShell initialMode={initialMode} />;
}

