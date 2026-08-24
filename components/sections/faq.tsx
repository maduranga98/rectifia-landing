"use client";

import { useState } from "react";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { faqItems } from "@/lib/content";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-surface px-8 py-24">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <Kicker className="mb-3.5 text-center" tone="gold">
            FAQ
          </Kicker>
          <h2 className="mb-10 text-center font-display text-[32px] font-bold tracking-tight text-navy">
            Common questions
          </h2>
        </Reveal>

        <div className="border-t border-navy/10">
          {faqItems.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className="border-b border-navy/10">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-5.5 text-left"
                >
                  <span className="font-display text-[16.5px] font-semibold text-navy">
                    {item.q}
                  </span>
                  <span
                    className="shrink-0 font-sans text-xl text-gold transition-transform duration-150"
                    style={{ transform: open ? "rotate(45deg)" : "none" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="mb-5.5 max-w-[640px] font-sans text-[15px] leading-relaxed text-ink">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
