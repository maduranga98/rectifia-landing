import { Kicker } from "@/components/ui/kicker";
import { DemoTriggerButton } from "@/components/ui/demo-trigger-button";
import { Reveal } from "@/components/ui/reveal";
import { pricingTiers, pulseAddon } from "@/lib/content";

const ctaClass =
  "block w-full rounded-md py-2.5 text-center font-display text-sm font-semibold transition-colors";
const primaryCta = `${ctaClass} border-none bg-gold text-navy hover:bg-gold-dark`;
const secondaryCta = `${ctaClass} border border-navy/20 text-navy hover:border-navy/40`;

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface px-8 py-24">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <Kicker className="mb-3.5">PRICING</Kicker>
          <h2 className="mb-3 max-w-[640px] font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Priced by headcount, not by report
          </h2>
          <p className="mb-12 max-w-[640px] font-sans text-base leading-relaxed text-ink">
            Billing is based on employee headcount. Rectifia never bills per report, since
            charging per report would create an incentive to suppress reports.
          </p>
        </Reveal>

        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 90}
              className={`hover-lift rounded-lg border border-navy/8 bg-white p-7 ${
                tier.highlight ? "border-t-[3px] border-t-gold" : ""
              }`}
            >
              {tier.highlight && (
                <span className="mb-3.5 inline-block rounded bg-gold/18 px-2 py-1 font-mono text-[10px] font-medium tracking-[0.06em] text-navy">
                  MOST COMMON
                </span>
              )}
              <div className="mb-1.5 font-display text-[19px] font-semibold text-navy">
                {tier.name}
              </div>
              <div className="mb-4.5 font-sans text-[13px] text-ink/60">{tier.range}</div>
              <div className="mb-6 font-display text-[30px] font-bold text-navy">
                {tier.price}
              </div>
              {tier.isDemo ? (
                <DemoTriggerButton className={tier.highlight ? primaryCta : secondaryCta}>
                  {tier.ctaLabel}
                </DemoTriggerButton>
              ) : (
                <a href="mailto:sales@rectifia.com" className={secondaryCta}>
                  {tier.ctaLabel}
                </a>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-wrap items-center justify-between gap-6 rounded-lg border border-navy/8 bg-white px-7 py-6">
          <div>
            <span className="font-mono text-[10px] font-medium tracking-[0.06em] text-gold">
              ADD-ON
            </span>
            <div className="mt-1.5 font-display text-base font-semibold text-navy">
              Pulse Check: proactive wellness surveys
            </div>
            <p className="mt-1.5 max-w-[480px] font-sans text-[13.5px] text-ink/65">
              Never bundled into Core, never sold standalone.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            {pulseAddon.map((p) => (
              <div key={p.tier} className="text-center">
                <div className="mb-1 font-mono text-[10px] text-ink/55">{p.tier}</div>
                <div className="font-display text-base font-semibold text-navy">{p.price}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
