"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { DemoTriggerButton } from "@/components/ui/demo-trigger-button";

const solutionLinks = [
  { href: "/whistleblower-hotline-software", label: "Whistleblower hotline software" },
  {
    href: "/employee-relations-case-management-software",
    label: "Employee relations case management",
  },
  { href: "/workplace-investigation-software", label: "Workplace investigation software" },
];

const navLinksBefore = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Platform" },
];

const navLinksAfter = [
  { href: "/#pricing", label: "Pricing" },
  { href: "/#frameworks", label: "Compliance" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
];

const desktopLinkClass =
  "relative font-sans text-[14px] font-medium text-white/80 transition-colors hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gold after:transition-all after:duration-200 hover:after:w-full";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 shadow-[0_1px_0_0_rgba(0,0,0,0.2)] backdrop-blur">
      <div className="hidden items-center justify-center gap-2 border-b border-white/10 bg-gold/10 px-8 py-2 sm:flex">
        <span className="font-mono text-[11px] font-medium tracking-[0.04em] text-gold">
          FOUNDING-PARTNER PRICING
        </span>
        <span className="font-sans text-[12.5px] text-white/65">
          Join the first cohort and lock in early-adopter rates.
        </span>
        <DemoTriggerButton className="font-sans text-[12.5px] font-semibold text-white underline decoration-gold/60 underline-offset-2 transition-colors hover:text-gold">
          Book a demo →
        </DemoTriggerButton>
      </div>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-[18px]">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={34} height={34} className="rounded-lg" priority />
          <span className="font-display text-[19px] font-semibold tracking-tight text-white">
            Rectifia
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {navLinksBefore.map((link) => (
            <a key={link.href} href={link.href} className={desktopLinkClass}>
              {link.label}
            </a>
          ))}
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="flex items-center gap-1 font-sans text-[14px] font-medium text-white/80 transition-colors group-focus-within:text-white group-hover:text-white"
            >
              Solutions
              <span aria-hidden="true" className="text-[10px] transition-transform group-hover:rotate-180">
                ▾
              </span>
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="flex flex-col rounded-lg border border-white/10 bg-navy p-2 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)]">
                {solutionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2.5 font-sans text-sm text-white/80 transition-colors hover:bg-white/5 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinksAfter.map((link) => (
            <a key={link.href} href={link.href} className={desktopLinkClass}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <DemoTriggerButton className="btn btn-sm btn-primary">Book a demo</DemoTriggerButton>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex flex-col gap-1.5 lg:hidden"
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 px-8 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {[...navLinksBefore, ...solutionLinks, ...navLinksAfter].map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-[15px] font-medium text-white/80 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <DemoTriggerButton className="btn btn-md btn-primary mt-5 w-full">
            Book a demo
          </DemoTriggerButton>
        </div>
      )}
    </header>
  );
}
