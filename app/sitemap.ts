import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";
import { jurisdictions } from "@/lib/jurisdictions";

export const dynamic = "force-static";

const siteUrl = "https://rectifia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: buildDate, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: buildDate, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/privacy`, lastModified: buildDate, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: buildDate, changeFrequency: "yearly", priority: 0.3 },
  ];

  const jurisdictionRoutes: MetadataRoute.Sitemap = jurisdictions.map((jurisdiction) => ({
    url: `${siteUrl}/jurisdictions/${jurisdiction.slug}`,
    lastModified: buildDate,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...jurisdictionRoutes, ...blogRoutes];
}
