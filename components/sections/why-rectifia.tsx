import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { whyRectifiaPoints } from "@/lib/content";
import { ScaleIcon, ShieldIcon, CheckIcon } from "@/components/icons";

const iconMap = {
  scale: ScaleIcon,
  shield: ShieldIcon,
  check: CheckIcon,
};

export function WhyRectifia() {
  return (
    <section id="why-rectifia" className="bg-navy px-8 py-24">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto max-w-[640px] text-center">
          <Kicker className="mx-auto mb-4">WHY RECTIFIA</Kicker>
          <h2 className="mb-4.5 font-display text-[32px] font-bold tracking-tight text-white sm:text-[40px]">
            Consistency and policy-grounded AI, not black-box scoring
          </h2>
          <p className="mb-10 font-sans text-base leading-relaxed text-white/75">
            Every case is checked against how similar cases were handled before, and every AI
            flag is grounded in your own policy documents, not a generic model of misconduct.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {whyRectifiaPoints.map((point, i) => {
            const Icon = iconMap[point.icon];
            return (
              <Reveal
                key={point.title}
                delay={i * 90}
                className="hover-lift rounded-xl border border-white/15 bg-white/[0.04] p-7 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.4)]"
              >
                <Icon className="mb-5" />
                <div className="mb-2.5 font-display text-[17px] font-semibold text-white">
                  {point.title}
                </div>
                <p className="font-sans text-sm leading-relaxed text-white/75">{point.desc}</p>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a href="#demo" className="btn btn-lg btn-primary">
            See Rectifia in action
          </a>
        </div>
      </div>
    </section>
  );
}
