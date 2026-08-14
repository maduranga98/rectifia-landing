import { problemPoints } from "@/lib/content";

export function Problem() {
  return (
    <section id="problem" className="bg-navy px-8 pb-24 pt-14">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 sm:grid-cols-3">
        {problemPoints.map((p) => (
          <div key={p.num}>
            <div className="mb-4 font-mono text-[13px] font-medium text-gold">{p.num}</div>
            <p className="font-display text-[22px] font-semibold leading-snug tracking-tight text-white">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
