import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#how-it-works" },
      { label: "Platform", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Compliance", href: "/#frameworks" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Founding programme", href: "/#founding" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact sales", href: "mailto:sales@rectifia.com" },
    ],
  },
  {
    title: "Trust",
    links: [
      { label: "Security", href: "/#ai-trust" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Terms of service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy px-8 py-16">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={28} height={28} className="rounded-lg" />
              <span className="font-display text-lg font-semibold text-white">Rectifia</span>
            </div>
            <p className="mt-3 max-w-[240px] font-sans text-sm leading-relaxed text-white/55">
              Fair cases. Consistent outcomes. A reporting channel employees trust.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div className="font-mono text-xs font-medium tracking-[0.06em] text-white/45">
                {col.title.toUpperCase()}
              </div>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-sans text-sm text-white/70 transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 pt-8 sm:flex-row">
          <span className="font-sans text-xs text-white/45">
            © {new Date().getFullYear()} Rectifia. All rights reserved.
          </span>
          <span className="font-mono text-[11px] tracking-[0.06em] text-white/35">
            NOT LEGAL ADVICE - CONFIRM REQUIREMENTS WITH COUNSEL
          </span>
        </div>
      </div>
    </footer>
  );
}
