import { z } from "zod";
import { db } from "@/lib/db";
import { handle, ok, parseBody } from "@/lib/api";

const Schema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const POST = handle(async (req) => {
  const { email } = await parseBody(req, Schema);
  const sub = await db.newsletterSubscriber.upsert({
    where: { email: email.toLowerCase().trim() },
    create: { email: email.toLowerCase().trim() },
    update: {},
  });
  return ok({ subscriber: sub });
});

