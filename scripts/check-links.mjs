// Fails the build if an internal markdown link in lib/content.ts points to a
// missing slug/route, or to a blog post dated after the post that links to it.
import { readFileSync } from "node:fs";

const source =
  readFileSync(new URL("../lib/content.ts", import.meta.url), "utf8") +
  readFileSync(new URL("../lib/content-scheduled.ts", import.meta.url), "utf8");
const jurisdictionSource = readFileSync(
  new URL("../lib/jurisdictions.ts", import.meta.url),
  "utf8",
);

const posts = [];
const starts = [...source.matchAll(/^\s{4}slug: "([^"]+)",/gm)];
for (const [i, match] of starts.entries()) {
  const chunk = source.slice(match.index, starts[i + 1]?.index ?? source.length);
  const date = chunk.match(/date: "([^"]+)"/)?.[1];
  const content = chunk.match(/content: `([\s\S]*?)`,/)?.[1] ?? "";
  posts.push({ slug: match[1], date, content });
}

const postBySlug = new Map(posts.map((p) => [p.slug, p]));
const jurisdictionSlugs = new Set(
  [...jurisdictionSource.matchAll(/^\s{4}slug: "([^"]+)",/gm)].map((m) => m[1]),
);
const staticRoutes = new Set([
  "/",
  "/blog",
  "/jurisdictions",
  "/privacy",
  "/terms",
  "/whistleblower-hotline-software",
]);
const today = new Date();

const errors = [];
let checked = 0;

for (const post of posts) {
  for (const [, , href] of post.content.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) {
    if (!href.startsWith("/")) continue;
    checked++;
    const [path, hash] = href.split("#");
    const where = `${post.slug} -> ${href}`;

    if (path === "/" || path === "") {
      if (hash && !hash.length) errors.push(`${where}: empty anchor`);
    } else if (path.startsWith("/blog/")) {
      const target = postBySlug.get(path.slice("/blog/".length));
      if (!target) errors.push(`${where}: no such post`);
      else if (new Date(target.date) > new Date(post.date) && new Date(target.date) > today)
        errors.push(`${where}: target (${target.date}) is not live yet and is dated after this post (${post.date})`);
    } else if (path.startsWith("/jurisdictions/")) {
      if (!jurisdictionSlugs.has(path.slice("/jurisdictions/".length)))
        errors.push(`${where}: no such jurisdiction page`);
    } else if (!staticRoutes.has(path)) {
      errors.push(`${where}: unknown route`);
    }
  }
}

if (errors.length) {
  console.error(`check-links: ${errors.length} problem(s)\n` + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}
console.log(`check-links: ${checked} internal links across ${posts.length} posts OK`);
