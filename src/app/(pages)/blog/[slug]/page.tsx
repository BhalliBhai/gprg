import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogImage from "@/components/BlogImage";
import BlogPostContent from "@/components/BlogPostContent";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";
import { ArrowBackIcon, ArrowForwardIcon } from "@/components/Icons";

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
      title: `Post Not Found | ${siteConfig.name} Blog`,
    };
  }

  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    title: `${post.title} | ${siteConfig.name} Blog`,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: `${post.title} | ${siteConfig.name} Blog`,
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
      title: `${post.title} | ${siteConfig.name} Blog`,
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
    <main className="min-h-screen pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <section className="container-app max-w-4xl py-12">
        <Link
          href="/blog"
          className="link font-bold text-sm inline-flex items-center gap-1.5 mb-8"
        >
          <ArrowBackIcon size={16} /> Back to blog
        </Link>
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="badge-green text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="heading-xl mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-text-muted-light dark:text-text-muted-dark border-y border-border-light dark:border-border-dark py-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs select-none">
                BB
              </div>
              <span className="font-bold text-text-light dark:text-text-dark">{siteConfig.creatorName}</span>
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
          <p className="subheading text-lg leading-relaxed mb-8">
            {post.description}
          </p>

          {post.coverImage ? (
            <div className="my-8 h-72 overflow-hidden rounded-2xl hairline-border-light dark:hairline-border sm:h-112">
              <BlogImage
                src={post.coverImage}
                alt={post.title}
                width={1600}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          ) : null}

          <div className="prose prose-slate mt-10 max-w-none dark:prose-invert">
            <BlogPostContent slug={post.slug} />
          </div>
        </article>
      </section>

      {/* CTA section */}
      <section className="container-app py-12 max-w-4xl text-center">
        <div className="card p-8 sm:p-12 text-center flex flex-col items-center gap-4 bg-surface-hover-light/40 dark:bg-surface-dark/40">
          <p className="badge-green text-xs font-semibold uppercase tracking-[0.2em]">Build your README now</p>
          <h2 className="heading-lg">
            Design your professional GitHub Profile README in minutes.
          </h2>
          <p className="subheading max-w-lg mx-auto">
            Try {siteConfig.name} for free with zero signups required. Create a polished profile README that reflects your developer story, skills, and project momentum.
          </p>
          <Link
            href="/generator"
            className="btn-primary btn-lg mt-2"
          >
            Start Now <ArrowForwardIcon size={18} />
          </Link>
        </div>
      </section>

      {relatedPosts.length > 0 ? (
        <section className="container-app max-w-4xl mt-12">
          <h2 className="heading-md mb-6">More posts you might like</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="card hover:border-primary/40 transition-colors p-5 flex flex-col justify-between"
              >
                <div>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">{new Date(related.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</p>
                  <h3 className="heading-sm mt-2 text-text-light dark:text-text-dark">{related.title}</h3>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark line-clamp-2 mt-2">{related.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}
