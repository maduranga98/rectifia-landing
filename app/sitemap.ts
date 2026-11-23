import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";
import { jurisdictions } from "@/lib/jurisdictions";

export const dynamic = "force-static";

const siteUrl = "https://rectifia.com";

// Fixed dates: the site rebuilds daily, and a lastmod that changes on every
// build tells Google nothing. Bump these when a page's content really changes.
const HOME_UPDATED = new Date("2026-11-23");
const JURISDICTIONS_UPDATED = new Date("2026-11-23");
const LEGAL_UPDATED = new Date("2026-10-07");

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPublishedPosts();
  const latestPost = posts.reduce(
    (max, p) => Math.max(max, new Date(p.updatedAt ?? p.date).getTime()),
    0,
  );
  const blogUpdated = latestPost ? new Date(latestPost) : HOME_UPDATED;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, lastModified: HOME_UPDATED, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: blogUpdated, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${siteUrl}/whistleblower-hotline-software`,
      lastModified: new Date("2026-10-07"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/employee-relations-case-management-software`,
      lastModified: new Date("2026-10-07"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/workplace-investigation-software`,
      lastModified: new Date("2026-10-07"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${siteUrl}/jurisdictions`, lastModified: JURISDICTIONS_UPDATED, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/privacy`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terms`, lastModified: LEGAL_UPDATED, changeFrequency: "yearly", priority: 0.3 },
  ];

  const jurisdictionRoutes: MetadataRoute.Sitemap = jurisdictions.map((jurisdiction) => ({
    url: `${siteUrl}/jurisdictions/${jurisdiction.slug}`,
    lastModified: JURISDICTIONS_UPDATED,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...jurisdictionRoutes, ...blogRoutes];
}
