import type { BlogPost } from "./content";

/**
 * Posts written ahead of release. Each ships live on its `date` via the daily
 * build (see getPublishedPosts in lib/blog.ts). Re-date an entry to release it
 * in a different weekly batch.
 */
export const scheduledPosts: BlogPost[] = [];
