import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Kicker } from "@/components/ui/kicker";
import { MarkdownContent } from "@/components/blog/markdown-content";
import { AUTHOR, ORGANIZATION_ID } from "@/lib/site";
import {
  getJurisdictionsForPost,
  getPost,
  getPublishedPosts,
  getRelatedPosts,
  OG_IMAGE,
  seoTitles,
} from "@/lib/blog";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `https://rectifia.com/blog/${post.slug}`;

  const seoTitle = seoTitles[post.slug] ?? post.title;

  return {
    title: seoTitle,
    description: post.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: seoTitle,
      description: post.metaDescription,
      publishedTime: post.date,
      ...(post.updatedAt && { modifiedTime: post.updatedAt }),
      section: post.category,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: seoTitle,
      description: post.metaDescription,
      images: [OG_IMAGE.url],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);
  const hubs = getJurisdictionsForPost(post.slug);
  const url = `https://rectifia.com/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: "https://rectifia.com/opengraph-image.png",
    inLanguage: "en",
    wordCount: post.content.split(/\s+/).filter(Boolean).length,
    datePublished: post.date,
    dateModified: post.updatedAt ?? post.date,
    articleSection: post.category,
    author: AUTHOR.name
      ? {
          "@type": "Person",
          name: AUTHOR.name,
          ...(AUTHOR.url && { url: AUTHOR.url }),
        }
      : { "@type": "Organization", "@id": ORGANIZATION_ID, name: "Rectifia" },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Rectifia",
      logo: { "@type": "ImageObject", url: "https://rectifia.com/logo.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rectifia.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://rectifia.com/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqJsonLd = post.faqs && {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <article className="bg-white px-8 py-20">
          <div className="mx-auto max-w-[720px]">
            <Link
              href="/blog"
              className="mb-8 inline-block font-mono text-xs font-medium tracking-[0.05em] text-navy/60 transition-colors hover:text-gold"
            >
              ← ALL POSTS
            </Link>

            <Kicker className="mb-3.5">{post.category.toUpperCase()}</Kicker>
            <h1 className="mb-4 font-display text-[32px] font-bold tracking-tight text-navy sm:text-[38px]">
              {post.title}
            </h1>
            <div className="mb-10 font-mono text-[12px] text-ink/50">
              {formatDate(post.date)} · {post.readTime}
              {post.updatedAt && (
                <div className="mt-1">
                  Last reviewed {formatDate(post.updatedAt)}
                  {post.reviewedBy && ` · ${post.reviewedBy}`}
                </div>
              )}
            </div>

            <MarkdownContent content={post.content} />

            {post.faqs && (
              <section className="mt-12">
                <h2 className="mb-6 font-display text-[22px] font-bold tracking-tight text-navy">
                  Frequently asked questions
                </h2>
                <div className="flex flex-col gap-6">
                  {post.faqs.map((faq) => (
                    <div key={faq.q}>
                      <h3 className="mb-2 font-display text-[17px] font-semibold text-navy">
                        {faq.q}
                      </h3>
                      <p className="font-sans text-base leading-relaxed text-ink">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {hubs.length > 0 && (
              <aside className="mt-12 rounded-lg border border-navy/8 bg-surface p-6">
                <div className="mb-3 font-mono text-[11px] font-medium tracking-[0.06em] text-gold">
                  COMPLIANCE GUIDES
                </div>
                <ul className="flex flex-col gap-2">
                  {hubs.map((hub) => (
                    <li key={hub.slug}>
                      <Link
                        href={`/jurisdictions/${hub.slug}`}
                        className="font-display text-[15px] font-semibold text-navy transition-colors hover:text-gold"
                      >
                        {hub.h1} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            )}
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-navy/8 bg-surface px-8 py-16">
            <div className="mx-auto max-w-[720px]">
              <h2 className="mb-6 font-display text-lg font-semibold text-navy">
                More from the blog
              </h2>
              <div className="flex flex-col gap-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="hover-lift block rounded-lg border border-navy/8 bg-white p-5"
                  >
                    <span className="rounded bg-navy/6 px-2 py-1 font-mono text-[10px] font-medium tracking-[0.05em] text-navy">
                      {p.category}
                    </span>
                    <div className="mt-3 font-display text-[15px] font-semibold leading-snug text-navy">
                      {p.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
