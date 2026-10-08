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

const desktopLinkClass = "font-sans text-sm text-white/75 transition-colors hover:text-gold";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={32} height={32} className="rounded-lg" priority />
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            Rectifia
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinksBefore.map((link) => (
            <a key={link.href} href={link.href} className={desktopLinkClass}>
              {link.label}
            </a>
          ))}
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="font-sans text-sm text-white/75 transition-colors group-focus-within:text-gold group-hover:text-gold"
            >
              Solutions <span aria-hidden="true">▾</span>
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="flex flex-col rounded-md border border-white/10 bg-navy p-2 shadow-lg">
                {solutionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded px-3 py-2 font-sans text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-gold"
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
          <DemoTriggerButton className="rounded-md bg-gold px-5 py-2.5 font-display text-sm font-semibold text-navy transition-colors hover:bg-gold-dark">
            Book a demo
          </DemoTriggerButton>
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
                className="font-sans text-sm text-white/75 hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <DemoTriggerButton className="mt-5 w-full rounded-md bg-gold px-5 py-2.5 font-display text-sm font-semibold text-navy transition-colors hover:bg-gold-dark">
            Book a demo
          </DemoTriggerButton>
        </div>
      )}
    </header>
  );
}
