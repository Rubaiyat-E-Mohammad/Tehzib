import { ApiError, handle, ok } from "@/lib/api";
import { getAdminSession, getCustomerSession } from "@/lib/auth";
import { buildHydratedPlatformState, persistPlatformStateToPostgres } from "@/lib/erp-sync";
import { uploadDataUri } from "@/lib/storage";

export const dynamic = "force-dynamic";

export const GET = handle(async () => {
  const [state, adminSession, customerSession] = await Promise.all([
    buildHydratedPlatformState(),
    getAdminSession(),
    getCustomerSession(),
  ]);
  return ok({
    ...state,
    adminSession,
    customerSession,
  });
});

export const PUT = handle(async (req) => {
  const body = (await req.json().catch(() => null)) as {
    erpDb?: Record<string, any>;
    logos?: { light?: string; dark?: string };
    notifications?: Array<Record<string, any>>;
  } | null;

  if (!body || typeof body !== "object") {
    throw new ApiError(400, "Invalid platform sync payload");
  }

  // Convert any base64 data URIs uploaded in logos, products, categories, or hero slides
  // through our S3/local storage adapter so they become real stored URLs.
  if (body.logos) {
    if (body.logos.light?.startsWith("data:")) {
      body.logos.light = await uploadDataUri(body.logos.light, "logos");
    }
    if (body.logos.dark?.startsWith("data:")) {
      body.logos.dark = await uploadDataUri(body.logos.dark, "logos");
    }
  }

  if (body.erpDb) {
    if (Array.isArray(body.erpDb.products)) {
      for (const p of body.erpDb.products) {
        if (typeof p.image === "string" && p.image.startsWith("data:")) {
          p.image = await uploadDataUri(p.image, "products");
        }
        if (Array.isArray(p.gallery)) {
          for (let i = 0; i < p.gallery.length; i++) {
            if (typeof p.gallery[i] === "string" && p.gallery[i].startsWith("data:")) {
              p.gallery[i] = await uploadDataUri(p.gallery[i], "products");
            }
          }
        }
      }
    }
    if (body.erpDb.cms) {
      if (Array.isArray(body.erpDb.cms.categories)) {
        for (const c of body.erpDb.cms.categories) {
          if (typeof c.customImage === "string" && c.customImage.startsWith("data:")) {
            c.customImage = await uploadDataUri(c.customImage, "categories");
          }
        }
      }
      if (Array.isArray(body.erpDb.cms.heroSliders)) {
        for (const hs of body.erpDb.cms.heroSliders) {
          if (typeof hs.image === "string" && hs.image.startsWith("data:")) {
            hs.image = await uploadDataUri(hs.image, "sliders");
          }
        }
      }
    }
  }

  await persistPlatformStateToPostgres(body);
  const fresh = await buildHydratedPlatformState();
  return ok(fresh);
});

