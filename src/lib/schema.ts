// lib/schema.ts
// Central place for every JSON-LD builder used across the site.
// Keep factual strings (icon counts, dev counts) consistent everywhere they're
// reused - pull them from a single SITE constant instead of re-typing numbers.

export const SITE = {
  name: "GPRG",
  url: "https://gprg.bhalli.dev",
  logo: "https://gprg.bhalli.dev/icon.svg",
  description:
    "Free no-code tool to generate professional GitHub Profile READMEs with AI-written bios, 200+ tech icons, dynamic stats cards, and premium templates.",
  iconCount: "200+", // single source of truth - fixes the 200+ vs 200+ mismatch
  devCount: "50,000+",
  founder: {
    name: "Bhalli B",
    url: "https://bhalli.dev",
  },
  sameAs: ["https://bhalli.dev"],
};

export type FaqItem = {
  question: string;
  answer: string;
};

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: SITE.logo,
    sameAs: SITE.sameAs,
    founder: {
      "@type": "Person",
      name: SITE.founder.name,
      url: SITE.founder.url,
    },
  };
}

/**
 * Only include `aggregateRating` once you have real rating data.
 * Passing it as `undefined` (the default) omits the field entirely -
 * do NOT fabricate a ratingValue/ratingCount, Google treats that as spam.
 */
export function softwareApplicationSchema(aggregateRating?: {
  ratingValue: string;
  ratingCount: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GPRG - GitHub Profile README Generator",
    url: SITE.url,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any (Web-based)",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    ...(aggregateRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: aggregateRating.ratingValue,
            ratingCount: aggregateRating.ratingCount,
          },
        }
      : {}),
    description: SITE.description,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    author: {
      "@type": "Person",
      name: SITE.founder.name,
      url: SITE.founder.url,
    },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: SITE.logo },
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
  };
}