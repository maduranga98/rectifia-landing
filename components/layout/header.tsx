"use client";

import Link from "next/link";
import { useState } from "react";
import { DemoTriggerButton } from "@/components/ui/demo-trigger-button";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Platform" },
  { href: "#pricing", label: "Pricing" },
  { href: "#frameworks", label: "Compliance" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-8 py-4">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight text-white">
          Rectifia
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-sans text-sm text-white/75 transition-colors hover:text-gold"
            >
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
            {navLinks.map((link) => (
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
