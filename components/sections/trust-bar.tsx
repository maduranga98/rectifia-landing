import { Reveal } from "@/components/ui/reveal";
import { heroStats } from "@/lib/content";

export function TrustBar() {
  return (
    <section className="relative border-t border-white/10 bg-navy px-8 py-10">
      <Reveal className="mx-auto grid max-w-[1280px] grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8">
        {heroStats.map((s) => (
          <div key={s.label} className="border-l border-white/10 pl-5">
            <div className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {s.value}
            </div>
            <div className="mt-1 font-sans text-[12.5px] leading-snug text-white/55">
              {s.label}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
