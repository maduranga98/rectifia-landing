import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { DeepDives } from "@/components/sections/deep-dives";
import { AiTrust } from "@/components/sections/ai-trust";
import { Pricing } from "@/components/sections/pricing";
import { Frameworks } from "@/components/sections/frameworks";
import { WhyRectifia } from "@/components/sections/why-rectifia";
import { Blog } from "@/components/sections/blog";
import { Faq } from "@/components/sections/faq";
import { DemoCta } from "@/components/sections/demo-cta";
import { faqItems, pricingTiers } from "@/lib/content";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Rectifia",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "A workplace misconduct reporting channel employees actually trust, and an investigation workflow that keeps outcomes consistent across every case, department, and investigator.",
  offers: pricingTiers
    .filter((tier) => !tier.price.toLowerCase().includes("contact"))
    .map((tier) => ({
      "@type": "Offer",
      name: tier.name,
      price: tier.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "USD",
      description: tier.range,
    })),
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Place", name: "European Union" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "Japan" },
    { "@type": "Country", name: "Kenya" },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Problem />
        <HowItWorks />
        <Features />
        <DeepDives />
        <AiTrust />
        <Pricing />
        <Frameworks />
        <WhyRectifia />
        <Blog />
        <Faq />
        <DemoCta />
      </main>
      <Footer />
    </>
  );
}
