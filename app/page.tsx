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
import { faqItems } from "@/lib/content";

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

export default function Home() {
  return (
    <>
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
