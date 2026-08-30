import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogImage from "@/components/BlogImage";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";
import { ArrowForwardIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: `Discover developer guides, GitHub profile tips, and articles from the ${siteConfig.name} blog.`,
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: `${siteConfig.name} Blog`,
    description: `Discover developer guides, GitHub profile tips, and articles from the ${siteConfig.name} blog.`,
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
    <main className="min-h-screen pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]} />

      <section className="container-app grid gap-6 md:grid-cols-2 xl:grid-cols-3 my-10">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group card overflow-hidden hover:border-primary/50 transition-transform duration-300 p-0 flex flex-col justify-between"
          >
            <div>
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
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted-light dark:text-text-muted-dark">
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

                <h2 className="heading-md mt-3 text-text-light dark:text-text-dark">
                  <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>

                <p className="mt-3 text-body-sm text-text-muted-light dark:text-text-muted-dark line-clamp-3 leading-relaxed">
                  {post.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="badge-neutral text-[10px] font-semibold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-6 pb-6 pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="link font-semibold text-sm inline-flex items-center gap-1"
              >
                Read article <ArrowForwardIcon size={14} />
              </Link>
            </div>
          </article>
        ))}
      </section>

      {/* CTA section */}
      <section className="container-app py-12 max-w-4xl text-center">
        <div className="card p-8 sm:p-12 text-center flex flex-col items-center gap-4 bg-surface-hover-light/40 dark:bg-surface-dark/40">
          <h2 className="heading-lg">
            Build your README now
          </h2>
          <p className="subheading max-w-lg mx-auto">
            Design your professional GitHub Profile README in minutes. Try {siteConfig.name} for free with zero signups required.
          </p>
          <Link
            href="/generator"
            className="btn-primary btn-lg mt-2"
          >
            Start Now <ArrowForwardIcon size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
