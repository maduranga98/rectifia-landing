import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { XIcon } from "@/components/icons";
import { aiDoesNot } from "@/lib/content";

export function AiTrust() {
  return (
    <section id="ai-trust" className="bg-navy px-8 py-24">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-2">
        <Reveal>
          <Kicker className="mb-3.5">AI POLICY</Kicker>
          <h2 className="mb-5 max-w-[440px] font-display text-[28px] font-bold tracking-tight text-white sm:text-[34px]">
            Every decision stays with your investigators.
          </h2>
          <p className="mb-4 max-w-[440px] font-sans text-base leading-relaxed text-white/75">
            AI in Rectifia structures intake, scores severity and evidence completeness
            separately, routes cases, organises evidence, and tracks deadlines.
          </p>
          <p className="max-w-[440px] font-sans text-[15px] leading-relaxed text-white/55">
            Scoring and checklists are grounded in your own uploaded policy documents, so
            guidance is specific to your organisation, never a generic model of misconduct.
          </p>
        </Reveal>
        <Reveal delay={150} className="overflow-hidden rounded-lg border border-white/15">
          {aiDoesNot.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3.5 border-b border-white/10 px-6.5 py-5.5 last:border-b-0"
            >
              <XIcon className="mt-0.5 shrink-0" />
              <span className="font-sans text-[15.5px] leading-relaxed text-white">{item}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
