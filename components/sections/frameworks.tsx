import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { frameworks } from "@/lib/content";

export function Frameworks() {
  return (
    <section id="frameworks" className="bg-surface px-8 pb-24">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <Kicker className="mb-3.5">COMPLIANCE</Kicker>
          <h2 className="mb-10 max-w-[640px] font-display text-[32px] font-bold tracking-tight text-navy">
            Built for the frameworks you&rsquo;re measured against
          </h2>
        </Reveal>

        <div className="mb-5 grid grid-cols-1 gap-px border border-navy/8 bg-navy/8 sm:grid-cols-2 lg:grid-cols-3">
          {frameworks.map((f, i) => (
            <Reveal
              key={f.code}
              delay={(i % 3) * 90}
              className="hover-lift bg-white p-7 lg:p-[30px]"
            >
              <div className="mb-2.5 font-mono text-[11px] font-medium tracking-[0.06em] text-gold">
                {f.code}
              </div>
              <div
                className={`mb-2.5 font-display font-semibold text-navy ${
                  f.span === "wide" ? "text-[17px]" : "text-[15.5px]"
                }`}
              >
                {f.title}
              </div>
              <p className="font-sans text-[13.5px] leading-relaxed text-ink">{f.desc}</p>
            </Reveal>
          ))}
        </div>

        <p className="max-w-[720px] font-sans text-[12.5px] leading-relaxed text-ink/55">
          Rectifia is designed to support these obligations. It is not legal advice: confirm your
          requirements with counsel.
        </p>
      </div>
    </section>
  );
}
