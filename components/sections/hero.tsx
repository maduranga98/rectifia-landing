import Image from "next/image";
import { Kicker } from "@/components/ui/kicker";
import { DemoTriggerButton } from "@/components/ui/demo-trigger-button";
import { trustStrip } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-navy px-8 pb-16 pt-20 lg:pb-24 lg:pt-28"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[55%_45%] lg:gap-8">
        <div>
          <Kicker className="mb-5">
            WORKPLACE MISCONDUCT REPORTING &amp; CASE MANAGEMENT
          </Kicker>
          <h1 className="mb-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Fair cases.
            <br />
            Consistent outcomes.
          </h1>
          <p className="mb-9 max-w-[520px] font-sans text-lg leading-relaxed text-white/78">
            A reporting channel employees actually trust, and an investigation workflow that
            keeps outcomes consistent across every case, department, and investigator.
          </p>
          <div className="mb-10 flex flex-wrap gap-3.5">
            <DemoTriggerButton className="rounded-md bg-gold px-[26px] py-[14px] font-display text-[15px] font-semibold text-navy transition-colors hover:bg-gold-dark">
              Book a demo
            </DemoTriggerButton>
            <a
              href="#pricing"
              className="rounded-md border border-white/35 px-[26px] py-[14px] font-display text-[15px] font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              See pricing
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {trustStrip.map((t) => (
              <span
                key={t}
                className="border-r border-white/20 pr-4 font-mono text-[11px] font-medium tracking-[0.06em] text-white/55 last:border-r-0"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative min-h-[320px] overflow-hidden rounded-[10px] bg-gradient-to-br from-slate to-navy">
            <Image
              src="/hero.png"
              alt="Rectifia case management dashboard used by HR and compliance teams"
              width={1408}
              height={768}
              priority
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-navy/12" />
          </div>
          <svg
            className="absolute -right-6 -top-6 h-24 w-24 rotate-[12deg] lg:-right-7 lg:-top-7"
            viewBox="0 0 100 100"
            fill="none"
          >
            <polyline
              points="20,15 75,50 20,85"
              stroke="#DB9B3A"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
