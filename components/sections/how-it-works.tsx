import { Kicker } from "@/components/ui/kicker";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { Reveal } from "@/components/ui/reveal";
import { steps, pipeline } from "@/lib/content";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-surface px-8 py-24">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <Kicker className="mb-3.5">HOW IT WORKS</Kicker>
          <h2 className="mb-12 max-w-[640px] font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            From report to a closed case, on a consistent track
          </h2>
        </Reveal>

        <div className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.num} delay={i * 90} className="border-t-2 border-navy pt-5">
              <div className="mb-2.5 font-mono text-[22px] font-medium text-navy">{s.num}</div>
              <div className="mb-2 font-display text-lg font-semibold text-navy">{s.title}</div>
              <p className="font-sans text-sm leading-relaxed text-ink">{s.desc}</p>
            </Reveal>
          ))}
        </div>

        <Reveal>
        <BrowserFrame>
          <div className="p-6">
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
              {pipeline.map((col) => (
                <div key={col.name}>
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: col.dotColor }}
                    />
                    <span className="font-mono text-[11px] font-medium tracking-[0.05em] text-navy">
                      {col.name}
                    </span>
                  </div>
                  {col.cases.map((c) => (
                    <div
                      key={c.id}
                      className="mb-2.5 rounded-lg border border-navy/8 bg-surface p-3"
                    >
                      <div className="mb-1.5 font-mono text-[11px] text-navy">{c.id}</div>
                      <div className="mb-1.5 font-sans text-[13px] font-medium text-ink">
                        {c.category}
                      </div>
                      <div className="font-sans text-xs text-ink/55">{c.dept}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </BrowserFrame>
        </Reveal>
      </div>
    </section>
  );
}
