import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Kicker } from "@/components/ui/kicker";
import { MarkdownContent } from "@/components/blog/markdown-content";
import { DemoCta } from "@/components/sections/demo-cta";
import { DemoTriggerButton } from "@/components/ui/demo-trigger-button";
import { blogPosts } from "@/lib/content";
import { getJurisdiction, jurisdictions } from "@/lib/jurisdictions";

const siteUrl = "https://rectifia.com";

export function generateStaticParams() {
  return jurisdictions.map((jurisdiction) => ({ slug: jurisdiction.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const jurisdiction = getJurisdiction(slug);
  if (!jurisdiction) return {};

  const url = `${siteUrl}/jurisdictions/${jurisdiction.slug}`;

  return {
    title: jurisdiction.metaTitle,
    description: jurisdiction.metaDescription,
    keywords: jurisdiction.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      title: jurisdiction.metaTitle,
      description: jurisdiction.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: jurisdiction.metaTitle,
      description: jurisdiction.metaDescription,
    },
  };
}

export default async function JurisdictionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const jurisdiction = getJurisdiction(slug);
  if (!jurisdiction) notFound();

  const url = `${siteUrl}/jurisdictions/${jurisdiction.slug}`;
  const related = jurisdiction.relatedPosts
    .map((postSlug) => blogPosts.find((post) => post.slug === postSlug))
    .filter((post) => post !== undefined);
  const others = jurisdictions.filter((j) => j.slug !== jurisdiction.slug);

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: jurisdiction.metaTitle,
    headline: jurisdiction.h1,
    description: jurisdiction.metaDescription,
    url,
    inLanguage: "en",
    about: { "@type": "Thing", name: jurisdiction.title },
    isPartOf: { "@type": "WebSite", name: "Rectifia", url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: "Rectifia",
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Compliance",
        item: `${siteUrl}/#frameworks`,
      },
      { "@type": "ListItem", position: 3, name: jurisdiction.metaTitle, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-white px-8 pb-16 pt-20">
          <div className="mx-auto max-w-[720px]">
            <Link
              href="/#frameworks"
              className="mb-8 inline-block font-mono text-xs font-medium tracking-[0.05em] text-navy/60 transition-colors hover:text-gold"
            >
              ← ALL FRAMEWORKS
            </Link>

            <Kicker className="mb-3.5">
              {jurisdiction.code} · {jurisdiction.region.toUpperCase()}
            </Kicker>
            <h1 className="mb-4 font-display text-[32px] font-bold tracking-tight text-navy sm:text-[38px]">
              {jurisdiction.h1}
            </h1>
            <p className="mb-3 font-mono text-[12px] tracking-[0.04em] text-ink/50">
              {jurisdiction.title}
            </p>
            <p className="mb-10 font-sans text-[17px] leading-relaxed text-ink">
              {jurisdiction.lede}
            </p>

            <DemoTriggerButton className="rounded-md bg-gold px-5 py-2.5 font-display text-sm font-semibold text-navy transition-colors hover:bg-gold-dark">
              Book a demo
            </DemoTriggerButton>
          </div>
        </section>

        <section className="border-t border-navy/8 bg-surface px-8 py-16">
          <div className="mx-auto max-w-[1280px]">
            <Kicker className="mb-3.5">WHAT THE OBLIGATION LOOKS LIKE</Kicker>
            <h2 className="mb-8 max-w-[640px] font-display text-[26px] font-bold tracking-tight text-navy">
              {jurisdiction.region} at a glance
            </h2>

            <div className="mb-5 grid grid-cols-1 gap-px border border-navy/8 bg-navy/8 sm:grid-cols-2">
              {jurisdiction.obligations.map((obligation) => (
                <div key={obligation.label} className="bg-white p-7 lg:p-[30px]">
                  <div className="mb-2.5 font-mono text-[11px] font-medium tracking-[0.06em] text-gold">
                    {obligation.label.toUpperCase()}
                  </div>
                  <p className="font-sans text-[13.5px] leading-relaxed text-ink">
                    {obligation.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="max-w-[720px] font-sans text-[12.5px] leading-relaxed text-ink/55">
              Rectifia is designed to support these obligations. It is not legal advice: confirm
              your requirements with counsel.
            </p>
          </div>
        </section>

        <article className="bg-white px-8 py-16">
          <div className="mx-auto max-w-[720px]">
            <MarkdownContent content={jurisdiction.body} />
          </div>
        </article>

        {related.length > 0 && (
          <section className="border-t border-navy/8 bg-surface px-8 py-16">
            <div className="mx-auto max-w-[720px]">
              <h2 className="mb-6 font-display text-lg font-semibold text-navy">
                Read more on {jurisdiction.region}
              </h2>
              <div className="flex flex-col gap-4">
                {related.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="hover-lift block rounded-lg border border-navy/8 bg-white p-5"
                  >
                    <span className="rounded bg-navy/6 px-2 py-1 font-mono text-[10px] font-medium tracking-[0.05em] text-navy">
                      {post.category}
                    </span>
                    <div className="mt-3 font-display text-[15px] font-semibold leading-snug text-navy">
                      {post.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-navy/8 bg-white px-8 py-16">
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-6 font-display text-lg font-semibold text-navy">
              Other jurisdictions
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/jurisdictions/${other.slug}`}
                  className="rounded-md border border-navy/10 px-3.5 py-2 font-mono text-[11px] font-medium tracking-[0.05em] text-navy transition-colors hover:border-gold hover:text-gold"
                >
                  {other.code} · {other.region}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <DemoCta />
      </main>
      <Footer />
    </>
  );
}
