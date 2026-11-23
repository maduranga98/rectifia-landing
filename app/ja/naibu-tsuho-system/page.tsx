import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Kicker } from "@/components/ui/kicker";
import { DemoTriggerButton } from "@/components/ui/demo-trigger-button";
import { OG_IMAGE } from "@/lib/blog";
import { ORGANIZATION_ID } from "@/lib/site";
import {
  EN_JAPAN_PATH,
  JA_PATH,
  jaAmendments,
  jaFaqs,
  jaFeatures,
  jaObligations,
  jaPage,
  jaPricing,
  jaSources,
} from "@/lib/japan-ja";

const siteUrl = "https://rectifia.com";
const url = `${siteUrl}${JA_PATH}`;
const enUrl = `${siteUrl}${EN_JAPAN_PATH}`;

export const metadata: Metadata = {
  title: jaPage.metaTitle,
  description: jaPage.metaDescription,
  keywords: [
    "公益通報者保護法 対応",
    "内部通報システム",
    "公益通報 従事者",
    "改正公益通報者保護法 2026",
    "内部通報 窓口 システム",
  ],
  alternates: {
    canonical: url,
    languages: { en: enUrl, ja: url, "x-default": enUrl },
  },
  openGraph: {
    type: "website",
    url,
    locale: "ja_JP",
    title: jaPage.metaTitle,
    description: jaPage.metaDescription,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: jaPage.metaTitle,
    description: jaPage.metaDescription,
    images: [OG_IMAGE.url],
  },
};

export default function JapanJaPage() {
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: jaPage.metaTitle,
    headline: jaPage.h1,
    description: jaPage.metaDescription,
    url,
    inLanguage: "ja",
    about: { "@type": "Thing", name: "公益通報者保護法（Whistleblower Protection Act of Japan）" },
    isPartOf: { "@id": `${siteUrl}/#website` },
    publisher: { "@id": ORGANIZATION_ID },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "ja",
    mainEntity: jaFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Jurisdictions", item: `${siteUrl}/jurisdictions` },
      { "@type": "ListItem", position: 3, name: jaPage.metaTitle, item: url },
    ],
  };

  return (
    <>
      {[webPageJsonLd, faqJsonLd, breadcrumbJsonLd].map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <Header />
      <main lang="ja" className="flex-1">
        <section className="bg-white px-8 pb-16 pt-20">
          <div className="mx-auto max-w-[720px]">
            <div className="mb-8 flex items-center justify-between gap-4">
              <Link
                href="/jurisdictions"
                className="font-mono text-xs font-medium tracking-[0.05em] text-navy/60 transition-colors hover:text-gold"
              >
                ← 管轄一覧（英語）
              </Link>
              <Link
                href={EN_JAPAN_PATH}
                hrefLang="en"
                lang="en"
                className="font-mono text-xs font-medium tracking-[0.05em] text-navy/60 transition-colors hover:text-gold"
              >
                English
              </Link>
            </div>

            <Kicker className="mb-3.5">{jaPage.kicker}</Kicker>
            <h1 className="mb-6 font-display text-[30px] font-bold leading-snug tracking-tight text-navy sm:text-[36px]">
              {jaPage.h1}
            </h1>
            <p className="mb-10 font-sans text-[17px] leading-relaxed text-ink">{jaPage.lede}</p>

            <DemoTriggerButton className="rounded-md bg-gold px-5 py-2.5 font-display text-sm font-semibold text-navy transition-colors hover:bg-gold-dark">
              {jaPage.cta}
            </DemoTriggerButton>
          </div>
        </section>

        <section className="border-t border-navy/8 bg-surface px-8 py-16">
          <div className="mx-auto max-w-[720px]">
            <Kicker className="mb-3.5">2026年12月1日施行</Kicker>
            <h2 className="mb-4 font-display text-[26px] font-bold tracking-tight text-navy">
              {jaAmendments.heading}
            </h2>
            <p className="mb-8 font-sans text-[16px] leading-relaxed text-ink">{jaAmendments.intro}</p>
            <div className="flex flex-col gap-px border border-navy/8 bg-navy/8">
              {jaAmendments.items.map((item) => (
                <div key={item.title} className="bg-white p-6">
                  <h3 className="mb-2 font-display text-[16px] font-semibold text-navy">{item.title}</h3>
                  <p className="font-sans text-[14.5px] leading-relaxed text-ink">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 font-sans text-[14.5px] leading-relaxed text-ink">{jaAmendments.guideline}</p>
          </div>
        </section>

        <section className="border-t border-navy/8 bg-white px-8 py-16">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="mb-4 max-w-[720px] font-display text-[26px] font-bold tracking-tight text-navy">
              {jaObligations.heading}
            </h2>
            <p className="mb-8 max-w-[720px] font-sans text-[16px] leading-relaxed text-ink">
              {jaObligations.intro}
            </p>
            <div className="grid grid-cols-1 gap-px border border-navy/8 bg-navy/8 sm:grid-cols-2">
              {jaObligations.items.map((o) => (
                <div key={o.label} className="bg-white p-7 lg:p-[30px]">
                  <h3 className="mb-2.5 font-display text-[15px] font-semibold text-gold">{o.label}</h3>
                  <p className="font-sans text-[14px] leading-relaxed text-ink">{o.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-navy/8 bg-surface px-8 py-16">
          <div className="mx-auto max-w-[1280px]">
            <h2 className="mb-8 font-display text-[26px] font-bold tracking-tight text-navy">
              {jaFeatures.heading}
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {jaFeatures.items.map((f) => (
                <div key={f.title} className="rounded-lg border border-navy/8 bg-white p-6">
                  <h3 className="mb-2 font-display text-[16px] font-semibold text-navy">{f.title}</h3>
                  <p className="font-sans text-[14px] leading-relaxed text-ink">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-navy/8 bg-white px-8 py-16">
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-4 font-display text-[26px] font-bold tracking-tight text-navy">
              {jaPricing.heading}
            </h2>
            <p className="mb-6 font-sans text-[16px] leading-relaxed text-ink">{jaPricing.intro}</p>
            <table className="w-full border-collapse text-left font-sans text-[14.5px]">
              <tbody>
                {jaPricing.tiers.map((t) => (
                  <tr key={t.name} className="border-b border-navy/8">
                    <th scope="row" className="py-3 pr-4 font-display font-semibold text-navy">
                      {t.name}
                    </th>
                    <td className="py-3 pr-4 text-ink/70">{t.range}</td>
                    <td className="py-3 text-ink">{t.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-t border-navy/8 bg-surface px-8 py-16">
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-8 font-display text-[26px] font-bold tracking-tight text-navy">よくある質問</h2>
            <div className="flex flex-col gap-7">
              {jaFaqs.map((f) => (
                <div key={f.question}>
                  <h3 className="mb-2 font-display text-[16px] font-semibold text-navy">{f.question}</h3>
                  <p className="font-sans text-[14.5px] leading-relaxed text-ink">{f.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-navy/8 bg-white px-8 py-16">
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-4 font-display text-lg font-semibold text-navy">出典</h2>
            <ul className="mb-8 flex list-disc flex-col gap-2 pl-5 font-sans text-[13.5px] leading-relaxed text-ink">
              {jaSources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="underline decoration-gold underline-offset-4" rel="noopener">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mb-8 font-sans text-[12.5px] leading-relaxed text-ink/55">
              本ページは法制度の一般的な説明であり、法的助言ではありません。具体的な対応は弁護士にご確認ください。
            </p>
            <DemoTriggerButton className="rounded-md bg-gold px-5 py-2.5 font-display text-sm font-semibold text-navy transition-colors hover:bg-gold-dark">
              {jaPage.cta}
            </DemoTriggerButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
