import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The ERP + storefront read live PostgreSQL state on every request, so we use
  // the classic dynamic rendering model (pages opt in with `dynamic = "force-dynamic"`).
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**.r2.cloudflarestorage.com" },
      { protocol: "https", hostname: "**.amazonaws.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  experimental: {
    serverActions: { bodySizeLimit: "60mb" },
  },
};

export default nextConfig;
