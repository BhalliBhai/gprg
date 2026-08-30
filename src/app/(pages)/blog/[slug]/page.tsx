import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "../../../../components/Breadcrumbs";
import BlogImage from "../../../../components/BlogImage";
import BlogPostContent from "../../../../components/BlogPostContent";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "../../../../lib/blog";
import { siteConfig } from "../../../../config/site";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) {
    return {
      title: "Post Not Found | GPRM Blog",
    };
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: `${post.title} | GPRM Blog`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | GPRM Blog`,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
    authors: [siteConfig.creatorUrl],
      images: [{ url: `${siteConfig.url}${post.coverImage}`, alt: `${post.title} cover image` }],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | GPRM Blog`,
      description: post.description,
      images: [`${siteConfig.url}${post.coverImage}`],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = getPostBySlug(resolvedParams.slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `${siteConfig.url}${post.coverImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: siteConfig.creatorName,
      url: siteConfig.creatorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.svg`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteConfig.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${siteConfig.url}/blog/${post.slug}` },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-background-dark/30 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <section className="mx-auto px-6 py-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-primary transition-colors mb-8"
        >
          ← Back to blog
        </Link>
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded bg-primary/10 border border-primary/20 text-xs font-semibold text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 border-y border-slate-200 dark:border-primary/10 py-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs select-none">
                BB
              </div>
              <span className="font-bold text-slate-900 dark:text-white">Bhalli B</span>
            </div>
            <span>•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
            </time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <article className="mt-6">
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
            {post.description}
          </p>

          {post.coverImage ? (
            <div className="mt-8 h-72 overflow-hidden rounded-4xl border border-primary/10 sm:h-112">
              <BlogImage
                src={post.coverImage}
                alt={post.title}
                width={1600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          ) : null}

          <div className="prose prose-slate mt-12 max-w-none dark:prose-invert">
            <BlogPostContent slug={post.slug} />
          </div>
        </article>
      </section>

      {/* CTA section */}
      <section className="py-12 max-w-4xl mx-auto px-6 text-center">
        <div className="bg-linear-to-r from-primary/10 to-emerald-500/10 rounded-3xl p-8 sm:p-12 border border-primary/25 glow-effect">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary/80">Build your README now</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white mb-4">
            Design your professional GitHub Profile README in minutes.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Try GPRM for free with zero signups required. Create a polished profile README that reflects your developer story, skills, and project momentum.
          </p>
          <Link
            href="/generator"
            className="px-8 py-4 bg-primary text-slate-950 font-extrabold rounded-xl hover:brightness-110 shadow-lg hover:shadow-primary/20 transition-all text-sm inline-block"
          >
            Start Now
          </Link>
        </div>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="mt-12 p-6">
          <h2 className="text-2xl font-bold text-white">More posts you might like</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="rounded-[1.75rem] border border-primary/25 p-5 transition hover:border-primary/40"
              >
                <p className="text-sm text-slate-400">{new Date(related.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{related.title}</h3>
                <p className="mt-3 text-slate-300 line-clamp-3">{related.description}</p>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
