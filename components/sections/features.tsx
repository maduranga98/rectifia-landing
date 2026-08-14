import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { features } from "@/lib/content";
import {
  EyeOffIcon,
  SplitIcon,
  ScaleIcon,
  ClockIcon,
  LockIcon,
  PulseIcon,
} from "@/components/icons";

const iconMap = {
  eyeOff: EyeOffIcon,
  split: SplitIcon,
  scale: ScaleIcon,
  clock: ClockIcon,
  lock: LockIcon,
  pulse: PulseIcon,
};

export function Features() {
  return (
    <section id="features" className="bg-surface px-8 pb-24">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <Kicker className="mb-3.5">PLATFORM</Kicker>
          <h2 className="mb-10 max-w-[640px] font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
            Built around consistency, not conclusions
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-px border border-navy/8 bg-navy/8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = iconMap[f.icon];
            return (
              <Reveal
                key={f.title}
                delay={(i % 3) * 90}
                className="hover-lift bg-white p-8"
              >
                <Icon className="mb-5" />
                <div className="mb-2.5 font-display text-[17px] font-semibold text-navy">
                  {f.title}
                </div>
                <p className="font-sans text-sm leading-relaxed text-ink">{f.desc}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
