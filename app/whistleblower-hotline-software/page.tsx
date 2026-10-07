import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Kicker } from "@/components/ui/kicker";
import { DemoCta } from "@/components/sections/demo-cta";
import { DemoTriggerButton } from "@/components/ui/demo-trigger-button";
import { getPost, OG_IMAGE } from "@/lib/blog";
import { pricingTiers } from "@/lib/content";
import { ORGANIZATION_ID } from "@/lib/site";

const siteUrl = "https://rectifia.com";
const url = `${siteUrl}/whistleblower-hotline-software`;
const published = "2026-10-07";
const metaTitle = "Whistleblower Hotline Software for HR Teams";
const description =
  "Whistleblower hotline software where employees report anonymously with a Case ID and passcode, no login. AI-assisted intake, human-led investigations.";

export const metadata: Metadata = {
  title: metaTitle,
  description,
  keywords: [
    "whistleblower hotline software",
    "whistleblower hotline",
    "ethics hotline",
    "whistleblower software",
    "whistleblower reporting software",
    "whistleblowing system",
  ],
  alternates: { canonical: url },
  openGraph: {
    type: "website",
    url,
    title: `${metaTitle} | Rectifia`,
    description,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: `${metaTitle} | Rectifia`,
    description,
    images: [OG_IMAGE.url],
  },
};

const reportingPoints = [
  {
    label: "Anonymous or confidential",
    detail:
      "Employees choose how they report. Anonymous reporting limits what is collected about the reporter. Confidential reporting keeps a route open for follow-up.",
  },
  {
    label: "No login",
    detail: "Reporting does not require an account, so there is nothing to create before speaking up.",
  },
  {
    label: "Case ID and passcode",
    detail:
      "After filing, the reporter gets a Case ID and passcode. They use both to check status and add evidence later.",
  },
  {
    label: "No recovery flow by design",
    detail:
      "A lost passcode cannot be reset through an email address or phone number. Reporters keep their Case ID and passcode somewhere private.",
  },
];

const intakeSteps = [
  "Structuring the report into a consistent format",
  "Categorizing it: harassment, toxic management, retaliation or burnout",
  "Routing it to the right handler",
  "Scoring severity and evidence completeness separately",
  "Organizing the evidence attached to the case",
];

const faqs = [
  {
    q: "Is Rectifia a phone hotline?",
    a: "No. Rectifia is software, not a staffed phone line. Employees report through the product with no login, and use a Case ID and passcode to come back to their case.",
  },
  {
    q: "Can a reporter stay anonymous?",
    a: "Reporters can choose anonymous or confidential reporting, with no login. No tool can promise anonymity in every case, because what a report says and the size of the team can also point to a person.",
  },
  {
    q: "What happens if a reporter loses their passcode?",
    a: "Rectifia has no recovery flow by design, so a lost passcode cannot be reset. Reporters should keep their Case ID and passcode somewhere private.",
  },
  {
    q: "Does the AI decide the outcome of a case?",
    a: "No. AI assists with intake by structuring, categorizing, routing, scoring and organizing evidence. Humans make all investigation decisions.",
  },
  {
    q: "How is Rectifia priced?",
    a: "By employee headcount, not by report. Starter is $59/mo for up to 25 employees, Growth is $199/mo for 26 to 200, and Scale is $549/mo for 201 to 500. Enterprise, for 500+ employees, is contact sales.",
  },
];

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  name: `${metaTitle} | Rectifia`,
  headline: "Whistleblower hotline software for anonymous workplace reporting",
  description,
  url,
  inLanguage: "en",
  datePublished: published,
  dateModified: published,
  isPartOf: { "@type": "WebSite", "@id": `${siteUrl}/#website` },
  publisher: { "@type": "Organization", "@id": ORGANIZATION_ID, name: "Rectifia" },
  about: { "@id": `${siteUrl}/#software` },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
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
    { "@type": "ListItem", position: 2, name: "Whistleblower hotline software", item: url },
  ],
};

const linkClass = "font-semibold text-navy underline decoration-gold underline-offset-4";

export default function WhistleblowerHotlineSoftwarePage() {
  const explainer = getPost("what-is-a-whistleblower-hotline");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-white px-8 pb-16 pt-20">
          <div className="mx-auto max-w-[720px]">
            <Kicker className="mb-3.5">WHISTLEBLOWER HOTLINE SOFTWARE</Kicker>
            <h1 className="mb-4 font-display text-[32px] font-bold tracking-tight text-navy sm:text-[38px]">
              Whistleblower hotline software for anonymous workplace reporting
            </h1>
            <p className="mb-10 font-sans text-[17px] leading-relaxed text-ink">
              Employees report anonymously or confidentially, with no login. AI assists with
              intake, and your investigators make every decision. One record runs from the first
              report to a closed case.
            </p>
            <DemoTriggerButton className="rounded-md bg-gold px-5 py-2.5 font-display text-sm font-semibold text-navy transition-colors hover:bg-gold-dark">
              Book a demo
            </DemoTriggerButton>
          </div>
        </section>

        <section className="border-t border-navy/8 bg-surface px-8 py-16">
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-4 font-display text-[26px] font-bold tracking-tight text-navy">
              What is a whistleblower hotline?
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-ink">
              A whistleblower hotline, also called an ethics hotline, is a channel employees use to
              report wrongdoing at work. The word comes from the telephone, but today it describes
              the channel rather than the technology. Rectifia is software, not a staffed phone
              line.
            </p>
            {explainer && (
              <p className="font-sans text-base leading-relaxed text-ink">
                For a plain-English overview, read{" "}
                <Link href={`/blog/${explainer.slug}`} className={linkClass}>
                  what a whistleblower hotline is and how it works
                </Link>
                .
              </p>
            )}
          </div>
        </section>

        <section className="bg-white px-8 py-16">
          <div className="mx-auto max-w-[1280px]">
            <Kicker className="mb-3.5">ANONYMOUS REPORTING</Kicker>
            <h2 className="mb-8 max-w-[640px] font-display text-[26px] font-bold tracking-tight text-navy">
              How anonymous reporting works
            </h2>
            <div className="mb-5 grid grid-cols-1 gap-px border border-navy/8 bg-navy/8 sm:grid-cols-2">
              {reportingPoints.map((point) => (
                <div key={point.label} className="bg-white p-7 lg:p-[30px]">
                  <h3 className="mb-2.5 font-mono text-[11px] font-medium tracking-[0.06em] text-gold">
                    {point.label.toUpperCase()}
                  </h3>
                  <p className="font-sans text-[13.5px] leading-relaxed text-ink">{point.detail}</p>
                </div>
              ))}
            </div>
            <p className="max-w-[720px] font-sans text-[12.5px] leading-relaxed text-ink/55">
              No tool can promise anonymity in every case. Read{" "}
              <Link href="/blog/can-a-whistleblower-remain-anonymous" className={linkClass}>
                can a whistleblower remain anonymous
              </Link>{" "}
              for where it holds and where it breaks.
            </p>
          </div>
        </section>

        <section className="border-t border-navy/8 bg-surface px-8 py-16">
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-4 font-display text-[26px] font-bold tracking-tight text-navy">
              AI-assisted intake, human-led investigations
            </h2>
            <p className="mb-5 font-sans text-base leading-relaxed text-ink">
              AI helps the first hour of a case go faster. It does the following and nothing more:
            </p>
            <ul className="mb-5 flex flex-col gap-2.5">
              {intakeSteps.map((step) => (
                <li
                  key={step}
                  className="flex items-start gap-2.5 font-sans text-base leading-relaxed text-ink"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{step}</span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-base leading-relaxed text-ink">
              Humans make all investigation decisions. AI never decides guilt, never recommends
              discipline and never closes a case.
            </p>
          </div>
        </section>

        <section className="bg-white px-8 py-16">
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-4 font-display text-[26px] font-bold tracking-tight text-navy">
              A consistency check before a case closes
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-ink">
              When a proposed action deviates from how your company handled similar past cases,
              Rectifia flags it. The flag works in either direction, whether the action looks
              harsher or more lenient than your own record. It never recommends an action.
            </p>
            <p className="font-sans text-base leading-relaxed text-ink">
              Read{" "}
              <Link href="/blog/consistency-bias-engine-explained" className={linkClass}>
                how the consistency check scores a case
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-navy/8 bg-surface px-8 py-16">
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-4 font-display text-[26px] font-bold tracking-tight text-navy">
              A whistleblowing system with deadline tracking
            </h2>
            <p className="mb-4 font-sans text-base leading-relaxed text-ink">
              A hotline gets a report in the door. A whistleblowing system also tracks what
              happens next. Rectifia follows the EU Whistleblower Directive&apos;s clocks by
              default: 7 days to acknowledge a report and 3 months to give feedback.
            </p>
            <p className="font-sans text-base leading-relaxed text-ink">
              See the{" "}
              <Link
                href="/jurisdictions/eu-whistleblower-directive-compliance-software"
                className={linkClass}
              >
                EU Whistleblower Protection Directive guide
              </Link>{" "}
              or compare{" "}
              <Link
                href="/blog/best-investigation-case-management-software-anonymous-complaints"
                className={linkClass}
              >
                what to look for in case management software
              </Link>
              . Rectifia supports your process and is not legal advice. Confirm your requirements
              with counsel.
            </p>
          </div>
        </section>

        <section className="bg-white px-8 py-16">
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-4 font-display text-[26px] font-bold tracking-tight text-navy">
              Pricing by headcount, not by report
            </h2>
            <ul className="mb-5 flex flex-col gap-2.5">
              {pricingTiers.map((tier) => (
                <li
                  key={tier.name}
                  className="flex items-start gap-2.5 font-sans text-base leading-relaxed text-ink"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>
                    <strong className="font-semibold text-navy">{tier.name}</strong>:{" "}
                    {tier.range}, {tier.price}
                  </span>
                </li>
              ))}
            </ul>
            <p className="font-sans text-base leading-relaxed text-ink">
              See{" "}
              <Link href="/#pricing" className={linkClass}>
                full pricing on the homepage
              </Link>{" "}
              or read{" "}
              <Link href="/blog/whistleblowing-software-pricing-models-compared" className={linkClass}>
                how whistleblower hotline pricing models compare
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-navy/8 bg-surface px-8 py-16">
          <div className="mx-auto max-w-[720px]">
            <h2 className="mb-6 font-display text-[26px] font-bold tracking-tight text-navy">
              Frequently asked questions
            </h2>
            <div className="flex flex-col gap-6">
              {faqs.map((faq) => (
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
