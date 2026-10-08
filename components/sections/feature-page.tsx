import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Kicker } from "@/components/ui/kicker";
import { MarkdownContent } from "@/components/blog/markdown-content";
import { DemoCta } from "@/components/sections/demo-cta";
import { DemoTriggerButton } from "@/components/ui/demo-trigger-button";
import { getPost, OG_IMAGE } from "@/lib/blog";
import { pricingTiers } from "@/lib/content";
import { ORGANIZATION_ID } from "@/lib/site";

const siteUrl = "https://rectifia.com";

export type FeaturePageConfig = {
  /** Route, e.g. "/workplace-investigation-software". */
  path: string;
  /** Search title without the " | Rectifia" suffix. */
  metaTitle: string;
  description: string;
  keywords: string[];
  kicker: string;
  h1: string;
  lede: string;
  /** Name used in the breadcrumb trail. */
  breadcrumb: string;
  published: string;
  /** Section bodies use the same lightweight markdown as blog posts. */
  sections: { heading: string; body: string }[];
  /** Blog slugs shown under "Related reading" once each post is live. */
  related: { slug: string; label: string }[];
  faqs: { q: string; a: string }[];
};

export function buildFeatureMetadata(config: FeaturePageConfig): Metadata {
  const url = `${siteUrl}${config.path}`;
  const title = `${config.metaTitle} | Rectifia`;

  return {
    title: config.metaTitle,
    description: config.description,
    keywords: config.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description: config.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: config.description,
      images: [OG_IMAGE.url],
    },
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function FeaturePage({ config }: { config: FeaturePageConfig }) {
  const url = `${siteUrl}${config.path}`;
  const related = config.related.flatMap((item) => {
    const post = getPost(item.slug);
    return post ? [{ ...item, slug: post.slug }] : [];
  });

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: `${config.metaTitle} | Rectifia`,
    headline: config.h1,
    description: config.description,
    url,
    inLanguage: "en",
    datePublished: config.published,
    dateModified: config.published,
    isPartOf: { "@type": "WebSite", "@id": `${siteUrl}/#website` },
    publisher: { "@type": "Organization", "@id": ORGANIZATION_ID, name: "Rectifia" },
    about: { "@id": `${siteUrl}/#software` },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: config.breadcrumb, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={webPageJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Header />
      <main className="flex-1">
        <section className="bg-white px-8 pb-16 pt-20">
          <div className="mx-auto max-w-[720px]">
            <Kicker className="mb-3.5">{config.kicker}</Kicker>
            <h1 className="mb-4 font-display text-[32px] font-bold tracking-tight text-navy sm:text-[38px]">
              {config.h1}
            </h1>
            <p className="mb-10 font-sans text-[17px] leading-relaxed text-ink">{config.lede}</p>
            <DemoTriggerButton className="rounded-md bg-gold px-5 py-2.5 font-display text-sm font-semibold text-navy transition-colors hover:bg-gold-dark">
              Book a demo
            </DemoTriggerButton>
          </div>
        </section>

        {config.sections.map((section, i) => (
          <section
            key={section.heading}
            className={`border-t border-navy/8 px-8 py-16 ${i % 2 === 0 ? "bg-surface" : "bg-white"}`}
          >
            <div className="mx-auto max-w-[720px]">
              <h2 className="mb-4 font-display text-[26px] font-bold tracking-tight text-navy">
                {section.heading}
              </h2>
              <MarkdownContent content={section.body} />
            </div>
          </section>
        ))}

        <section
          className={`border-t border-navy/8 px-8 py-16 ${config.sections.length % 2 === 0 ? "bg-surface" : "bg-white"}`}
        >
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-4 font-display text-[26px] font-bold tracking-tight text-navy">
              Pricing by headcount, not by case
            </h2>
            <ul className="mb-5 flex flex-col gap-2.5">
              {pricingTiers.map((tier) => (
                <li
                  key={tier.name}
                  className="flex items-start gap-2.5 font-sans text-base leading-relaxed text-ink"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>
                    <strong className="font-semibold text-navy">{tier.name}</strong>: {tier.range},{" "}
                    {tier.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-base leading-relaxed text-ink">
              No per-case or per-report fees.{" "}
              <Link
                href="/#pricing"
                className="font-semibold text-navy underline decoration-gold underline-offset-4"
              >
                See pricing
              </Link>{" "}
              for what each plan includes.
            </p>
          </div>
        </section>

        {related.length > 0 && (
          <section
            className={`border-t border-navy/8 px-8 py-16 ${(config.sections.length + 1) % 2 === 0 ? "bg-surface" : "bg-white"}`}
          >
            <div className="mx-auto max-w-[720px]">
              <h2 className="mb-4 font-display text-[26px] font-bold tracking-tight text-navy">
                Related reading
              </h2>
              <ul className="flex flex-col gap-2.5">
                {related.map((item) => (
                  <li
                    key={item.slug}
                    className="flex items-start gap-2.5 font-sans text-base leading-relaxed text-ink"
                  >
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <Link
                      href={`/blog/${item.slug}`}
                      className="font-semibold text-navy underline decoration-gold underline-offset-4"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section
          className={`border-t border-navy/8 px-8 py-16 ${(config.sections.length + 1 + (related.length > 0 ? 1 : 0)) % 2 === 0 ? "bg-surface" : "bg-white"}`}
        >
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-6 font-display text-[26px] font-bold tracking-tight text-navy">
              Frequently asked questions
            </h2>
            <div className="flex flex-col gap-6">
              {config.faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="mb-2 font-display text-[17px] font-semibold text-navy">
                    {faq.q}
                  </h3>
                  <p className="font-sans text-base leading-relaxed text-ink">{faq.a}</p>
                </div>
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
