import { siteConfig } from "../config/site";

interface BlogPostSchemaProps {
  title: string;
  description: string;
  publishDate: string;
  coverImage: string;
  slug: string;
}

export default function BlogPostSchema({
  title,
  description,
  publishDate,
  coverImage,
  slug,
}: BlogPostSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: `${siteConfig.url}${coverImage}`,
    datePublished: publishDate,
    dateModified: publishDate,
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
    mainEntityOfPage: `${siteConfig.url}/blog/${slug}`,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
