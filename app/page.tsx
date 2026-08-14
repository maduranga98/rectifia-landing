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
import { Founding } from "@/components/sections/founding";
import { Blog } from "@/components/sections/blog";
import { Faq } from "@/components/sections/faq";
import { DemoCta } from "@/components/sections/demo-cta";

export default function Home() {
  return (
    <>
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
        <Founding />
        <Blog />
        <Faq />
        <DemoCta />
      </main>
      <Footer />
    </>
  );
}
