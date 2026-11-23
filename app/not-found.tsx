import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// Without this file the 404 page inherited the homepage title, description,
// "index, follow" and a canonical pointing at "/".
export const metadata: Metadata = {
  title: { absolute: "Page not found | Rectifia" },
  description: "The page you were looking for does not exist or has moved.",
  robots: { index: false, follow: true },
  alternates: { canonical: null },
};

const links = [
  { href: "/", label: "Home" },
  { href: "/workplace-investigation-software", label: "Workplace investigation software" },
  { href: "/employee-relations-case-management-software", label: "Employee relations case management" },
  { href: "/whistleblower-hotline-software", label: "Whistleblower hotline software" },
  { href: "/blog", label: "Blog" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 px-6 py-28">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="mb-3 font-mono text-xs font-medium tracking-[0.08em] text-ink/50">404</p>
          <h1 className="mb-4 font-display text-[36px] font-bold tracking-tight text-navy">
            Page not found
          </h1>
          <p className="mb-10 text-lg text-ink/70">
            The page you were looking for does not exist or has moved.
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="btn btn-outline-light">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
