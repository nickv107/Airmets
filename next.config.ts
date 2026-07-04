import type { NextConfig } from "next";

const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  output: isStaticExport ? "export" : "standalone",
  ...(isStaticExport ? { trailingSlash: true } : {}),
  images: {
    unoptimized: isStaticExport,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
