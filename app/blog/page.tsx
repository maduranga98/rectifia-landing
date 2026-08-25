import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { CategoryThumbnail } from "@/components/blog/category-thumbnail";
import { blogPosts } from "@/lib/content";

const description =
  "Notes on consistent case outcomes, whistleblower compliance deadlines, and how Rectifia's reporting and investigation platform actually works.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    url: "https://rectifia.com/blog",
    title: "Blog | Rectifia",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Rectifia",
    description,
  },
};

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="bg-navy px-8 py-20">
          <div className="mx-auto max-w-[1280px]">
            <Kicker className="mb-3.5">INSIGHTS</Kicker>
            <h1 className="font-display text-[38px] font-bold tracking-tight text-white sm:text-[44px]">
              From the blog
            </h1>
            <p className="mt-3.5 max-w-[560px] font-sans text-base leading-relaxed text-white/70">
              Product mechanics, compliance deadlines, and honest comparisons - how Rectifia
              actually works, written by the team building it.
            </p>
          </div>
        </section>

        <section className="bg-white px-8 py-20">
          <div className="mx-auto max-w-[1280px]">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sorted.map((post, i) => (
                <Reveal key={post.slug} delay={i * 70}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover-lift block h-full overflow-hidden rounded-lg border border-navy/8 bg-white"
                  >
                    <CategoryThumbnail category={post.category} />
                    <div className="p-5">
                      <span className="rounded bg-navy/6 px-2 py-1 font-mono text-[10px] font-medium tracking-[0.05em] text-navy">
                        {post.category}
                      </span>
                      <div className="my-3.5 font-display text-[16.5px] font-semibold leading-snug text-navy">
                        {post.title}
                      </div>
                      <p className="mb-3.5 font-sans text-[13.5px] leading-relaxed text-ink/70">
                        {post.excerpt}
                      </p>
                      <div className="font-mono text-[11px] text-ink/50">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}{" "}
                        · {post.readTime}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
