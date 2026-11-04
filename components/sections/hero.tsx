import { DemoTriggerButton } from "@/components/ui/demo-trigger-button";
import { Reveal } from "@/components/ui/reveal";
import { trustStrip } from "@/lib/content";

const mockCases = [
  { id: "RC-2026-8851", category: "Harassment", dept: "Operations", severity: "High", color: "#B3261E" },
  { id: "RC-2026-8843", category: "Toxic Management", dept: "Finance", severity: "Medium", color: "#D4A72C" },
];

function HeroMockup() {
  return (
    <div className="relative mr-0 sm:mb-28 sm:mr-10">
      {/* main dashboard card */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-white shadow-[0_30px_70px_-20px_rgba(0,0,0,0.55)]">
        <div className="flex h-9 items-center gap-1.5 border-b border-navy/8 bg-[#F1F2F5] px-4">
          <span className="h-2.5 w-2.5 rounded-full bg-[#D6D9DE]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D6D9DE]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#D6D9DE]" />
          <span className="ml-2.5 rounded bg-white px-2.5 py-0.5 font-mono text-[11px] text-navy/50">
            app.rectifia.com/cases
          </span>
        </div>
        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <span className="font-display text-sm font-semibold text-navy">Active cases</span>
            <span className="rounded bg-navy/5 px-2 py-1 font-mono text-[10px] font-medium tracking-[0.05em] text-navy/50">
              2 OPEN
            </span>
          </div>
          <div className="flex flex-col gap-2.5">
            {mockCases.map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between rounded-lg border border-navy/8 bg-surface px-4 py-3"
              >
                <div className="min-w-0">
                  <div className="font-mono text-[11px] text-navy/70">{c.id}</div>
                  <div className="truncate font-sans text-[13px] font-medium text-ink">
                    {c.category}
                  </div>
                  <div className="font-sans text-[11.5px] text-ink/50">{c.dept}</div>
                </div>
                <span
                  className="shrink-0 rounded px-2 py-1 font-mono text-[10px] font-medium"
                  style={{ color: c.color, background: `${c.color}1a` }}
                >
                  {c.severity}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* floating consistency-flag card */}
      <div className="absolute -bottom-20 left-6 hidden w-[240px] rounded-xl border border-navy/8 bg-white p-4 shadow-[0_20px_45px_-15px_rgba(11,44,73,0.35)] sm:block">
        <div className="mb-1.5 flex items-center gap-2">
          <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
          <span className="font-mono text-[10px] font-medium tracking-[0.05em] text-navy">
            CONSISTENCY CHECK
          </span>
        </div>
        <p className="font-sans text-[12.5px] leading-snug text-ink/70">
          Proposed action deviates from 6 similar closed cases. Review before closing.
        </p>
      </div>

      {/* floating severity badge */}
      <div className="absolute -right-6 -top-6 hidden items-center gap-2 rounded-full border border-navy/8 bg-white px-4 py-2.5 shadow-[0_15px_35px_-12px_rgba(11,44,73,0.35)] sm:flex">
        <span className="h-2 w-2 rounded-full bg-[#3B7A57]" />
        <span className="font-sans text-xs font-semibold text-navy">Deadline on track</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-navy px-8 pb-20 pt-16 lg:pb-28 lg:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[56%_44%] lg:gap-10">
        <Reveal>
          <p className="mb-5 font-display text-sm font-semibold tracking-[0.04em] text-gold">
            Fair cases. Consistent outcomes.
          </p>
          <h1 className="mb-6 font-display text-[44px] font-bold leading-[1.05] tracking-tight text-white sm:text-[56px] lg:text-[64px]">
            Workplace misconduct reporting,
            <br className="hidden lg:block" /> handled consistently.
          </h1>
          <p className="mb-9 max-w-[520px] font-sans text-lg leading-relaxed text-white/75">
            A reporting channel employees actually trust, and an investigation workflow that
            keeps outcomes consistent across every case, department, and investigator.
          </p>
          <div className="mb-10 flex flex-wrap gap-3.5">
            <DemoTriggerButton className="rounded-md bg-gold px-[26px] py-[14px] font-display text-[15px] font-semibold text-navy transition-colors hover:bg-gold-dark">
              Book a demo
            </DemoTriggerButton>
            <a
              href="#pricing"
              className="rounded-md border border-white/25 px-[26px] py-[14px] font-display text-[15px] font-semibold text-white transition-colors hover:border-gold hover:text-gold"
            >
              See pricing
            </a>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {trustStrip.map((t) => (
              <span
                key={t}
                className="border-r border-white/15 pr-4 font-mono text-[11px] font-medium tracking-[0.06em] text-white/50 last:border-r-0"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mt-4 lg:mt-8">
          <HeroMockup />
        </Reveal>
      </div>
    </section>
  );
}
