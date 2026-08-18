import Image from "next/image";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";

export function Founding() {
  return (
    <section id="founding" className="relative overflow-hidden bg-navy">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 px-8 py-[90px]">
        <Reveal className="relative z-10 max-w-[640px]">
          <Kicker className="mb-4">FOUNDING PROGRAMME</Kicker>
          <h2 className="mb-4.5 font-display text-[32px] font-bold tracking-tight text-white">
            A small group of founding customers, ahead of general availability
          </h2>
          <p className="mb-7 font-sans text-base leading-relaxed text-white/75">
            Rectifia is pre-launch. We&rsquo;re taking on a limited number of founding customers
            at preferential pricing, in exchange for feedback and a case study.
          </p>
          <a
            href="#demo"
            className="inline-block rounded-md bg-gold px-[26px] py-[14px] font-display text-[15px] font-semibold text-navy transition-colors hover:bg-gold-dark"
          >
            Apply to the founding programme
          </a>
        </Reveal>
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block"
        aria-hidden
      >
        <Image
          src="/Founding-programme.webp"
          alt=""
          fill
          className="object-cover object-left"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-navy" />
      </div>
    </section>
  );
}
