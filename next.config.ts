import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/sitemaps.xml",
        destination: "/sitemap.xml",
      },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
      },
    ];
  },
};

export default nextConfig;
