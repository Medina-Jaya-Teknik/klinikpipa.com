import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.domain;

  // 1. Static & Core Service Silo Routes
  const staticRoutes = [
    { path: "", priority: 1.0 },
    { path: "/layanan/saluran-mampet-bandung", priority: 1.0 },
    { path: "/layanan/deteksi-pipa-bocor-bandung", priority: 1.0 },
    { path: "/layanan", priority: 0.9 },
    { path: "/tentang", priority: 0.8 },
    { path: "/kontak", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
  ].map((item) => ({
    url: `${baseUrl}${item.path}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: item.priority,
  }));

  // 2. Programmatic Area Local SEO Routes (/kota/[area])
  const areaRoutes = siteConfig.areas.map((area) => ({
    url: `${baseUrl}/kota/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. Blog Article Detail Routes (/blog/[slug])
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedDate || post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...areaRoutes, ...blogRoutes];
}
