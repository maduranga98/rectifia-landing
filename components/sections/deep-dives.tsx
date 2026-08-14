import { Kicker } from "@/components/ui/kicker";
import { BrowserFrame } from "@/components/ui/browser-frame";
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

function DeepDiveLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#blog"
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
        <div>
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
          <DeepDiveLink>See how scoring works</DeepDiveLink>
        </div>
        <BrowserFrame>
          <div className="bg-white p-7">
            <div className="rounded-lg border border-gold/35 bg-gold/6 p-5">
              <div className="mb-3.5 flex items-center justify-between">
                <span className="font-mono text-[11px] text-navy">RC-2026-8843</span>
                <span className="rounded bg-slate/12 px-2 py-0.5 font-mono text-[10px] font-medium tracking-[0.05em] text-slate">
                  LENIENT
                </span>
              </div>
              <p className="mb-4 font-sans text-sm leading-snug text-ink">
                4 similar cases found · typical action was{" "}
                <strong className="font-semibold">written warning</strong> · proposed action is{" "}
                <strong className="font-semibold">verbal warning</strong>
              </p>
              <textarea
                readOnly
                placeholder="Acknowledge with a note explaining the difference…"
                className="h-14 w-full resize-none rounded-md border border-navy/15 bg-white p-2.5 font-sans text-[13px] text-ink"
              />
            </div>
          </div>
        </BrowserFrame>
      </div>

      {/* Anonymity */}
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-9 lg:grid-cols-2 lg:gap-14">
        <div className="lg:order-1">
          <BrowserFrame>
            <div className="bg-white p-7">
              <div className="mb-4.5 flex gap-2.5">
                <div className="flex-1 rounded-lg border-2 border-navy p-3.5">
                  <div className="mb-1.5 font-display text-sm font-semibold text-navy">
                    Anonymous
                  </div>
                  <div className="font-sans text-xs leading-relaxed text-ink/70">
                    No identity stored at all
                  </div>
                </div>
                <div className="flex-1 rounded-lg border border-navy/15 p-3.5">
                  <div className="mb-1.5 font-display text-sm font-semibold text-navy">
                    Confidential
                  </div>
                  <div className="font-sans text-xs leading-relaxed text-ink/70">
                    Identity encrypted, HR can follow up
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-navy/10 bg-surface p-4">
                <div className="mb-2 font-mono text-[11px] text-navy/50">
                  CASE CONFIRMATION
                </div>
                <div className="flex gap-2.5">
                  <div className="flex-1 rounded-md border border-navy/12 bg-white p-2.5 font-mono text-[13px] text-navy">
                    RC-2026-8851
                  </div>
                  <div className="flex-1 rounded-md border border-navy/12 bg-white p-2.5 font-mono text-[13px] text-navy">
                    ••••••
                  </div>
                </div>
              </div>
            </div>
          </BrowserFrame>
        </div>
        <div className="lg:order-2">
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
          <DeepDiveLink>See how identity protection works</DeepDiveLink>
        </div>
      </div>

      {/* Compliance deadlines */}
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-9 lg:grid-cols-2 lg:gap-14">
        <div>
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
          <DeepDiveLink>See deadline tracking</DeepDiveLink>
        </div>
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
      </div>
    </section>
  );
}
