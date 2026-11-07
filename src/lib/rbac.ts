/**
 * Role-Based Access Control.
 * Each ERP module has a permission key. Staff get the permissions listed on their
 * Staff record (granular), falling back to their role's defaults.
 */
export const MODULES = [
  { key: "dashboard", label: "Dashboard & BI", path: "/admin" },
  { key: "products", label: "Product & Catalogue", path: "/admin/products" },
  { key: "inventory", label: "Inventory & Stock", path: "/admin/inventory" },
  { key: "procurement", label: "Suppliers & PO", path: "/admin/procurement" },
  { key: "orders", label: "Orders & POS", path: "/admin/orders" },
  { key: "crm", label: "Customer CRM", path: "/admin/crm" },
  { key: "finance", label: "Expenses & Payments", path: "/admin/finance" },
  { key: "cms", label: "Storefront CMS", path: "/admin/cms" },
  { key: "team", label: "Working Team Admin", path: "/admin/team" },
] as const;

export type ModuleKey = (typeof MODULES)[number]["key"];
export const ALL_MODULE_KEYS = MODULES.map((m) => m.key) as ModuleKey[];

/** Maps the prototype's human labels (stored on seeded staff) to module keys. */
export const LEGACY_ACCESS_LABELS: Record<string, ModuleKey> = Object.fromEntries(
  MODULES.map((m) => [m.label, m.key]),
) as Record<string, ModuleKey>;

export function moduleLabel(key: string): string {
  return MODULES.find((m) => m.key === key)?.label ?? key;
}

export function hasPermission(perms: string[] | undefined, key: ModuleKey): boolean {
  if (!perms) return false;
  return perms.includes("*") || perms.includes(key);
}

