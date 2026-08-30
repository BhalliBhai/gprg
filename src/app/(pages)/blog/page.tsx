import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs";
import BlogImage from "../../../components/BlogImage";
import { getAllPosts } from "../../../lib/blog";
import { siteConfig } from "../../../config/site";

export const metadata: Metadata = {
  title: "Blog | GPRM",
  description: "Discover developer guides, GitHub profile tips, and MDX-powered articles from the GPRM blog.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "GPRM Blog",
    description: "Discover developer guides, GitHub profile tips, and MDX-powered articles from the GPRM blog.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
    ],
  };

  return (
    <main className="min-h-screen text-slate-100 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />

      <section className="mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-3 my-10">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-2xl border border-primary/30 hover:border-primary/50  hover:shadow-[0_10px_70px_-40px_rgba(17,212,82,0.45)] transition-transform duration-500"
          >
            <div className="relative aspect-video overflow-hidden">
              {post.coverImage ? (
                <BlogImage
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="relative h-full w-full bg-linear-to-br from-[#07150f] via-[#0c2b1d] to-[#0b3c29]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(17,212,82,0.18),transparent_35%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs uppercase tracking-[0.32em] text-primary/70">GitHub blog</p>
                    <h2 className="mt-4 text-2xl font-bold text-white">{post.title}</h2>
                  </div>
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{post.readingTime}</span>
              </div>

              <h2 className="mt-4 text-2xl font-semibold text-white leading-tight">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary">
                  {post.title}
                </Link>
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 line-clamp-3">{post.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-primary/15 bg-slate-900/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary/80"
              >
                Read article →
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* CTA section */}
      <section className="py-12 max-w-4xl mx-auto px-6 text-center">
        <div className="bg-linear-to-r from-primary/10 to-emerald-500/10 rounded-3xl p-8 sm:p-12 border border-primary/25 glow-effect">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white mb-4">
            Build your README now
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
            Design your professional GitHub Profile README in minutes. Try GPRM for free with zero signups required.
          </p>
          <Link
            href="/generator"
            className="px-8 py-4 bg-primary text-slate-950 font-extrabold rounded-xl hover:brightness-110 shadow-lg hover:shadow-primary/20 transition-all text-sm inline-block"
          >
            Start Now
          </Link>
        </div>
      </section>
    </main>
  );
}
