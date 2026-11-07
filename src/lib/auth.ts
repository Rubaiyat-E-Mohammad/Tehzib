import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { hasPermission, type ModuleKey } from "@/lib/rbac";

/**
 * Stateless signed-cookie sessions (HS256 JWT via `jose`).
 *  - Admin ERP:  cookie `tz_admin`    (staff id, role, permission keys)
 *  - Storefront: cookie `tz_customer` (customer id)
 */

export const ADMIN_COOKIE = "tz_admin";
export const CUSTOMER_COOKIE = "tz_customer";

export type AdminSession = {
  staffId: string;
  name: string;
  email: string;
  role: string;
  avatar: string;
  permissions: string[];
};

export type CustomerSession = {
  customerId: string;
  name: string;
  email?: string;
  phone?: string;
  emailVerified?: boolean;
  phoneVerified?: boolean;
};

function key(kind: "admin" | "customer") {
  const fallback =
    kind === "admin"
      ? "tehzib-admin-session-secret-key-2026-oms"
      : "tehzib-customer-session-secret-key-2026-prive";
  const envSecret = kind === "admin" ? process.env.ADMIN_SESSION_SECRET : process.env.CUSTOMER_SESSION_SECRET;
  const secret = envSecret && envSecret.length >= 16 ? envSecret : fallback;
  return new TextEncoder().encode(secret);
}

async function sign(payload: Record<string, unknown>, kind: "admin" | "customer", days: number) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${days}d`)
    .sign(key(kind));
}

async function verify<T>(token: string | undefined, kind: "admin" | "customer"): Promise<T | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, key(kind));
    return payload as unknown as T;
  } catch {
    return null;
  }
}

const cookieOpts = (days: number) => ({
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: days * 24 * 3600,
});

// ---------------- Admin ----------------
export async function createAdminSession(s: AdminSession, remember = true) {
  const days = remember ? 7 : 1;
  const token = await sign(s, "admin", days);
  (await cookies()).set(ADMIN_COOKIE, token, cookieOpts(days));
}

export async function getAdminSession(): Promise<AdminSession | null> {
  return verify<AdminSession>((await cookies()).get(ADMIN_COOKIE)?.value, "admin");
}

export async function destroyAdminSession() {
  (await cookies()).delete(ADMIN_COOKIE);
}

export class AuthError extends Error {
  constructor(public status: 401 | 403, message: string) {
    super(message);
  }
}

/** Throws AuthError when not signed in or lacking the module permission. */
export async function requireAdmin(module?: ModuleKey): Promise<AdminSession> {
  const s = await getAdminSession();
  if (!s) throw new AuthError(401, "Admin session required");
  if (module && !hasPermission(s.permissions, module)) {
    throw new AuthError(403, `Your role does not have access to this module (${module})`);
  }
  return s;
}

// ---------------- Customer ----------------
export async function createCustomerSession(s: CustomerSession) {
  const token = await sign(s, "customer", 30);
  (await cookies()).set(CUSTOMER_COOKIE, token, cookieOpts(30));
}

export async function getCustomerSession(): Promise<CustomerSession | null> {
  return verify<CustomerSession>((await cookies()).get(CUSTOMER_COOKIE)?.value, "customer");
}

export async function destroyCustomerSession() {
  (await cookies()).delete(CUSTOMER_COOKIE);
}

