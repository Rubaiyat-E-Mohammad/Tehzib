import "server-only";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

/**
 * S3-compatible storage adapter:
 *  - When STORAGE_DRIVER="s3" and S3_BUCKET is set, uploads directly to S3 / Cloudflare R2.
 *  - Otherwise ("local"), writes to `public/uploads/<folder>/<uuid>.<ext>` and returns `/uploads/<folder>/<uuid>.<ext>`.
 * Also supports data URI (`data:image/...;base64,...`) and multipart File uploads.
 */

function getS3Client() {
  const endpoint = process.env.S3_ENDPOINT || undefined;
  const region = process.env.S3_REGION || "auto";
  const accessKeyId = process.env.S3_ACCESS_KEY_ID || "";
  const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY || "";
  return new S3Client({
    region,
    endpoint,
    credentials: { accessKeyId, secretAccessKey },
  });
}

function extFromMime(mime: string): string {
  const clean = mime.toLowerCase().split(";")[0].trim();
  const map: Record<string, string> = {
    "image/jpeg": "jpg",
    "image/jpg": "jpg",
    "image/png": "png",
    "image/webp": "webp",
    "image/gif": "gif",
    "image/svg+xml": "svg",
    "video/mp4": "mp4",
    "video/webm": "webm",
    "video/quicktime": "mov",
  };
  return map[clean] || "bin";
}

export async function uploadBuffer(opts: {
  buffer: Buffer;
  contentType: string;
  folder?: string;
  filename?: string;
}): Promise<{ url: string; driver: "local" | "s3"; key: string }> {
  const folder = (opts.folder || "media").replace(/[^a-zA-Z0-9_-]/g, "");
  const ext = opts.filename?.includes(".")
    ? opts.filename.split(".").pop()!.toLowerCase().replace(/[^a-z0-9]/g, "")
    : extFromMime(opts.contentType);
  const name = `${Date.now()}-${crypto.randomBytes(6).toString("hex")}.${ext || "bin"}`;
  const key = `${folder}/${name}`;

  const driver = process.env.STORAGE_DRIVER === "s3" && process.env.S3_BUCKET ? "s3" : "local";

  if (driver === "s3") {
    const client = getS3Client();
    const bucket = process.env.S3_BUCKET!;
    await client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: opts.buffer,
        ContentType: opts.contentType,
      }),
    );
    const base = (process.env.S3_PUBLIC_BASE_URL || "").replace(/\/+$/, "");
    const url = base ? `${base}/${key}` : `https://${bucket}.s3.amazonaws.com/${key}`;
    return { url, driver: "s3", key };
  }

  const destDir = path.join(process.cwd(), "public", "uploads", folder);
  await mkdir(destDir, { recursive: true });
  const filePath = path.join(destDir, name);
  await writeFile(filePath, opts.buffer);
  return { url: `/uploads/${key}`, driver: "local", key };
}

export async function uploadDataUri(dataUri: string, folder = "media"): Promise<string> {
  if (!dataUri.startsWith("data:")) return dataUri;
  const match = dataUri.match(/^data:([^;]+);base64,(.+)$/);
  if (!match) return dataUri;
  const contentType = match[1];
  const buffer = Buffer.from(match[2], "base64");
  const res = await uploadBuffer({ buffer, contentType, folder });
  return res.url;
}
