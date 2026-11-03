import { generatedBlogPosts } from "@/generated-blog-posts";

export interface BlogPost {
  title: string;
  description: string;
  date: string;
  coverImage: string;
  tags: string[];
  slug: string;
  excerpt: string;
  readingTime: string;
  component: (typeof generatedBlogPosts)[number]["component"];
}

const posts: BlogPost[] = generatedBlogPosts
  .map(({ slug, metadata, component, wordCount }) => {
    const rawDate = metadata.date ?? metadata.publishDate;
    if (!rawDate) {
      throw new Error(`Blog post "${slug}" must define a date or publishDate.`);
    }

    const date = new Date(rawDate);
    if (Number.isNaN(date.getTime())) {
      throw new Error(`Blog post "${slug}" has an invalid publish date: "${rawDate}".`);
    }

    return {
      title: metadata.title,
      description: metadata.description,
      date: date.toISOString(),
      coverImage: metadata.coverImage ?? "",
      tags: metadata.tags ?? [],
      slug,
      excerpt: metadata.excerpt ?? metadata.description,
      readingTime: `${Math.max(1, Math.round(wordCount / 200))} min read`,
      component,
    };
  })
  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

export function getAllPosts(): BlogPost[] {
  return [...posts];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  return posts
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      const matchingTagsA = a.tags.filter((tag) => current.tags.includes(tag)).length;
      const matchingTagsB = b.tags.filter((tag) => current.tags.includes(tag)).length;
      if (matchingTagsB !== matchingTagsA) return matchingTagsB - matchingTagsA;
      return Date.parse(b.date) - Date.parse(a.date);
    })
    .slice(0, limit);
}
