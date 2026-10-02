import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { OG_IMAGE } from "@/lib/blog";
import { jurisdictions } from "@/lib/jurisdictions";

const siteUrl = "https://rectifia.com";
const url = `${siteUrl}/jurisdictions`;
const title = "Whistleblowing Compliance by Jurisdiction";
const description =
  "Compare whistleblowing rules across the EU, UK, Australia, Japan, US and Kenya, and see how Rectifia helps you meet each one. Book a demo.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    type: "website",
    url,
    title,
    description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [OG_IMAGE.url],
  },
};

export default function JurisdictionsPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: "Rectifia", url: siteUrl },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: jurisdictions.map((j, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: j.h1,
        url: `${siteUrl}/jurisdictions/${j.slug}`,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Jurisdictions", item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-navy px-8 py-20">
          <div className="mx-auto max-w-[1280px]">
            <Kicker className="mb-3.5">COMPLIANCE</Kicker>
            <h1 className="font-display text-[38px] font-bold tracking-tight text-white sm:text-[44px]">
              Whistleblowing compliance by jurisdiction
            </h1>
            <p className="mt-3.5 max-w-[560px] font-sans text-base leading-relaxed text-white/70">
              Each region sets different deadlines, thresholds, and duties. Pick the one you
              operate in to see what it asks of you and how Rectifia supports it.
            </p>
          </div>
        </section>

        <section className="bg-white px-8 py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {jurisdictions.map((j, i) => (
                <Reveal key={j.slug} delay={i * 70}>
                  <Link
                    href={`/jurisdictions/${j.slug}`}
                    className="hover-lift block h-full rounded-lg border border-navy/8 bg-white p-6"
                  >
                    <span className="rounded bg-navy/6 px-2 py-1 font-mono text-[10px] font-medium tracking-[0.05em] text-navy">
                      {j.code}
                    </span>
                    <div className="my-3.5 font-display text-[16.5px] font-semibold leading-snug text-navy">
                      {j.region}
                    </div>
                    <p className="mb-4 line-clamp-3 font-sans text-[13.5px] leading-relaxed text-ink/70">
                      {j.lede}
                    </p>
                    <span className="font-mono text-[11px] font-medium tracking-[0.05em] text-gold">
                      READ THE GUIDE →
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <p className="mt-10 max-w-[720px] font-sans text-[12.5px] leading-relaxed text-ink/55">
              Rectifia is designed to support these obligations. It is not legal advice: confirm
              your requirements with counsel.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
