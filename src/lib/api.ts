import "server-only";
import { NextResponse } from "next/server";
import { ZodError, type ZodType } from "zod";
import { AuthError } from "@/lib/auth";
import { Prisma } from "@prisma/client";

/**
 * Route-handler helpers. Every API handler is wrapped with `handle()` so that
 * auth errors, validation errors and business-rule errors become consistent JSON:
 *   { ok: true, data } | { ok: false, error }
 */

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

export function ok<T>(data: T, init?: ResponseInit) {
  return NextResponse.json({ ok: true, data }, init);
}

export function fail(status: number, error: string, details?: unknown) {
  return NextResponse.json({ ok: false, error, details }, { status });
}

type Handler<C> = (req: Request, ctx: C) => Promise<Response>;

export function handle<C = unknown>(fn: Handler<C>): Handler<C> {
  return async (req, ctx) => {
    try {
      return await fn(req, ctx);
    } catch (e) {
      if (e instanceof AuthError) return fail(e.status, e.message);
      if (e instanceof ApiError) return fail(e.status, e.message);
      if (e instanceof ZodError) {
        const first = e.issues[0];
        return fail(422, first ? `${first.path.join(".") || "input"}: ${first.message}` : "Invalid input", e.issues);
      }
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") return fail(409, `Duplicate value for ${String(e.meta?.target ?? "unique field")}`);
        if (e.code === "P2025") return fail(404, "Record not found");
      }
      console.error("[api]", e);
      return fail(500, e instanceof Error ? e.message : "Internal server error");
    }
  };
}

export async function parseBody<T>(req: Request, schema: ZodType<T>): Promise<T> {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    throw new ApiError(400, "Request body must be valid JSON");
  }
  return schema.parse(raw);
}

/** Next 16 route context: params is a Promise. */
export type IdCtx = { params: Promise<{ id: string }> };

