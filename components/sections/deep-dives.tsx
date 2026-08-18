import Image from "next/image";
import { Kicker } from "@/components/ui/kicker";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { Reveal } from "@/components/ui/reveal";
import { CheckIcon } from "@/components/icons";
import {
  consistencyChecklist,
  anonymityChecklist,
  deadlineChecklist,
  deadlineRows,
} from "@/lib/content";

function Checklist({ items }: { items: string[] }) {
  return (
    <div className="mb-5 flex flex-col gap-3">
      {items.map((c) => (
        <div key={c} className="flex items-start gap-2.5">
          <CheckIcon className="mt-0.5 shrink-0" />
          <span className="font-sans text-[14.5px] text-ink">{c}</span>
        </div>
      ))}
    </div>
  );
}

function DeepDiveLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-display text-[14.5px] font-semibold text-navy underline decoration-gold underline-offset-4"
    >
      {children}
    </a>
  );
}

export function DeepDives() {
  return (
    <section id="deep-dives" className="flex flex-col gap-24 bg-white px-8 py-24">
      {/* Consistency & Bias Engine */}
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-9 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Kicker className="mb-3.5">CONSISTENCY &amp; BIAS ENGINE</Kicker>
          <h2 className="mb-4.5 font-display text-[28px] font-bold tracking-tight text-navy sm:text-[30px]">
            Every decision checked against your own record
          </h2>
          <p className="mb-3.5 font-sans text-base leading-relaxed text-ink">
            Before a case closes, the engine compares the proposed action against similar closed
            cases in your organisation: same category, comparable severity and evidence.
          </p>
          <p className="mb-5 font-sans text-base leading-relaxed text-ink">
            If the proposal is unusually lenient or unusually severe, it&rsquo;s flagged before
            it&rsquo;s finalized, with the reasoning attached, not just the outcome.
          </p>
          <Checklist items={consistencyChecklist} />
          <DeepDiveLink href="/blog/consistency-bias-engine-explained">
            See how scoring works
          </DeepDiveLink>
        </Reveal>
        <Reveal delay={150}>
          <BrowserFrame>
            <Image
              src="/Consistency.webp"
              alt="Rectifia consistency and bias engine comparing a proposed case outcome against similar closed cases"
              width={1408}
              height={768}
              className="h-auto w-full"
            />
          </BrowserFrame>
        </Reveal>
      </div>

      {/* Anonymity */}
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-9 lg:grid-cols-2 lg:gap-14">
        <Reveal className="lg:order-1">
          <BrowserFrame>
            <Image
              src="/Anonymity.webp"
              alt="Rectifia anonymous and confidential reporting options with a case confirmation ID and passcode"
              width={1408}
              height={768}
              className="h-auto w-full"
            />
          </BrowserFrame>
        </Reveal>
        <Reveal delay={150} className="lg:order-2">
          <Kicker className="mb-3.5">ANONYMITY</Kicker>
          <h2 className="mb-4.5 font-display text-[28px] font-bold tracking-tight text-navy sm:text-[30px]">
            Anonymity that survives an investigation
          </h2>
          <p className="mb-3.5 font-sans text-base leading-relaxed text-ink">
            Reporters choose anonymous or confidential at intake. Anonymous means no identity is
            ever stored, not even as a hash HR could theoretically reverse.
          </p>
          <p className="mb-5 font-sans text-base leading-relaxed text-ink">
            A case ID and passcode let a reporter check status or add evidence later, without
            ever creating a login or an email trail back to them.
          </p>
          <Checklist items={anonymityChecklist} />
          <DeepDiveLink href="/blog/anonymous-vs-confidential-reporting">
            See how identity protection works
          </DeepDiveLink>
        </Reveal>
      </div>

      {/* Compliance deadlines */}
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-9 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <Kicker className="mb-3.5">COMPLIANCE DEADLINES</Kicker>
          <h2 className="mb-4.5 font-display text-[28px] font-bold tracking-tight text-navy sm:text-[30px]">
            Deadlines you don&rsquo;t have to remember
          </h2>
          <p className="mb-3.5 font-sans text-base leading-relaxed text-ink">
            Acknowledgment and feedback clocks start the moment a report is filed, computed per
            jurisdiction and shown on every case.
          </p>
          <p className="mb-5 font-sans text-base leading-relaxed text-ink">
            Handlers see a countdown, not a calendar reminder they have to set themselves, and HR
            sees which cases are at risk before a deadline passes.
          </p>
          <Checklist items={deadlineChecklist} />
          <DeepDiveLink href="/blog/eu-whistleblower-directive-deadlines">
            See deadline tracking
          </DeepDiveLink>
        </Reveal>
        <Reveal delay={150}>
          <BrowserFrame>
            <div className="bg-white p-5">
              {deadlineRows.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between border-b border-navy/6 py-3 last:border-b-0"
                >
                  <div>
                    <div className="font-mono text-xs text-navy">{r.id}</div>
                    <div className="font-sans text-[12.5px] text-ink/60">{r.dept}</div>
                  </div>
                  <div className="font-mono text-xl text-navy">{r.days}</div>
                  <span
                    className="rounded px-2 py-1 font-mono text-[10px] font-medium"
                    style={{ color: r.color, background: `${r.color}1a` }}
                  >
                    {r.status}
                  </span>
                </div>
              ))}
            </div>
          </BrowserFrame>
        </Reveal>
      </div>
    </section>
  );
}
