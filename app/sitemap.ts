import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/content";
import { jurisdictions } from "@/lib/jurisdictions";

export const dynamic = "force-static";

const siteUrl = "https://rectifia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const jurisdictionRoutes: MetadataRoute.Sitemap = jurisdictions.map((jurisdiction) => ({
    url: `${siteUrl}/jurisdictions/${jurisdiction.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...jurisdictionRoutes, ...blogRoutes];
}
