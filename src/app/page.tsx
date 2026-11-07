import { buildHydratedPlatformState } from "@/lib/erp-sync";
import { getAdminSession, getCustomerSession } from "@/lib/auth";
import { TehzibPlatformClient } from "@/components/TehzibPlatformClient";

export const dynamic = "force-dynamic";

export default async function StorefrontPage() {
  const [hydrated, adminSession, customerSession] = await Promise.all([
    buildHydratedPlatformState(),
    getAdminSession(),
    getCustomerSession(),
  ]);

  const initialData = {
    ...hydrated,
    adminSession,
    customerSession,
  };

  return <TehzibPlatformClient initialData={initialData} initialMode="storefront" />;
}
