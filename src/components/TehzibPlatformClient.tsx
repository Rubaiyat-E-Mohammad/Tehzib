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
    __tehzibScheduleServerSync?: (payload: {
      erpDb?: Record<string, any>;
      logos?: { light?: string; dark?: string };
      notifications?: Array<Record<string, any>>;
    }) => void;
    __tehzibRuntimeLoaded?: boolean;
    __tehzibRuntimeVersion?: string;
  }
}

const RUNTIME_VERSION = "66";
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

export function TehzibPlatformClient({
  initialData,
  initialMode = "storefront",
}: {
  initialData: Record<string, any>;
  initialMode?: "storefront" | "admin";
}) {
  const queryClient = useQueryClient();
  const syncTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    mutationFn: async (payload: {
      erpDb?: Record<string, any>;
      logos?: { light?: string; dark?: string };
      notifications?: Array<Record<string, any>>;
    }) => {
      const res = await fetch("/api/platform", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to sync with PostgreSQL");
      return res.json();
    },
    onSuccess: (json) => {
      if (json?.data) {
        queryClient.setQueryData(["tehzib-platform-state"], json.data);
      }
    },
  });

  const persistMutateRef = useRef(persistMutation.mutate);
  persistMutateRef.current = persistMutation.mutate;

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

    window.__tehzibScheduleServerSync = (payload) => {
      if (syncTimerRef.current) clearTimeout(syncTimerRef.current);
      syncTimerRef.current = setTimeout(() => {
        persistMutateRef.current(payload);
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

