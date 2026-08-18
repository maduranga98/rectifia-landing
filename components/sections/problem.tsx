import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { problemPoints } from "@/lib/content";

export function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-navy px-8 pb-24 pt-14">
      <Image src="/problem.webp" alt="" fill className="object-cover" />
      <div className="absolute inset-0 bg-navy/78" />
      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 gap-8 sm:grid-cols-3">
        {problemPoints.map((p, i) => (
          <Reveal key={p.num} delay={i * 100}>
            <div className="mb-4 font-mono text-[13px] font-medium text-gold">{p.num}</div>
            <p className="font-display text-[22px] font-semibold leading-snug tracking-tight text-white">
              {p.text}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
