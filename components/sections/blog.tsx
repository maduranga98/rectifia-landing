import Link from "next/link";
import { Kicker } from "@/components/ui/kicker";
import { Reveal } from "@/components/ui/reveal";
import { blogPosts } from "@/lib/content";

export function Blog() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <section id="blog" className="bg-white px-8 py-24">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mb-10 flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <Kicker className="mb-3.5">INSIGHTS</Kicker>
            <h2 className="font-display text-[30px] font-bold tracking-tight text-navy">
              From the blog
            </h2>
          </div>
          <Link
            href="#blog"
            className="font-display text-[14.5px] font-semibold text-navy transition-colors hover:text-gold"
          >
            View all posts →
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {sorted.map((post, i) => (
            <Reveal key={post.slug} delay={i * 90}>
              <Link
                href={`#blog-${post.slug}`}
                className="hover-lift block overflow-hidden rounded-lg border border-navy/8 bg-white"
              >
                <div className="aspect-video overflow-hidden bg-gradient-to-br from-navy/10 to-slate/20" />
                <div className="p-5">
                  <span className="rounded bg-navy/6 px-2 py-1 font-mono text-[10px] font-medium tracking-[0.05em] text-navy">
                    {post.category}
                  </span>
                  <div className="my-3.5 font-display text-[16.5px] font-semibold leading-snug text-navy">
                    {post.title}
                  </div>
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
  );
}
