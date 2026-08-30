import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface BlogFrontMatter {
  title: string;
  description: string;
  date: string;
  coverImage: string;
  tags: string[];
  slug: string;
  excerpt?: string;
}

export interface BlogPost extends BlogFrontMatter {
  content: string;
  readingTime: string;
}

const postsDirectory = path.join(process.cwd(), "src", "content", "blog");

function getPostFilePaths(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"));
}

function extractExcerpt(content: string, fallback?: string) {
  if (fallback) return fallback;

  const sanitized = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/export\s+const\s+metadata\s*=\s*\{[\s\S]*?\};?/g, "")
    .replace(/^\s*(?:"use client"|'use client');?\s*$/gm, "")
    .replace(/<\/?.+?>/g, "")
    .replace(/\n\s*\n+/g, "\n\n");

  const paragraphs = sanitized
    .split(/\n\s*\n/)
    .map((block) => block.replace(/^#+\s*/, "").trim())
    .filter(Boolean)
    .filter((block) => !/^(import|export)\s/.test(block));

  return paragraphs[0]?.slice(0, 160) ?? "";
}

function extractObjectLiteral(rawSource: string, startIndex: number): string | undefined {
  let braceDepth = 0;
  let inSingleQuote = false;
  let inDoubleQuote = false;
  let inTemplateString = false;
  let escaped = false;

  for (let i = startIndex; i < rawSource.length; i++) {
    const char = rawSource[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === "\\") {
      escaped = true;
      continue;
    }

    if (!inSingleQuote && !inDoubleQuote && !inTemplateString) {
      if (char === "{") {
        braceDepth += 1;
      } else if (char === "}") {
        braceDepth -= 1;
        if (braceDepth === 0) {
          return rawSource.slice(startIndex, i + 1);
        }
      }
    }

    if (char === "'" && !inDoubleQuote && !inTemplateString) {
      inSingleQuote = !inSingleQuote;
    }

    if (char === '"' && !inSingleQuote && !inTemplateString) {
      inDoubleQuote = !inDoubleQuote;
    }

    if (char === "`" && !inSingleQuote && !inDoubleQuote) {
      inTemplateString = !inTemplateString;
    }
  }

  return undefined;
}

export function getAllPosts(): BlogPost[] {
  return getPostFilePaths()
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const rawSource = fs.readFileSync(filePath, "utf8");
      const { data: initialData, content } = matter(rawSource);
      let data = initialData;
      const slug = filename.replace(/\.mdx?$/, "");

      // If no YAML frontmatter was found, try to extract an `export const metadata = {...}`
      // block from the MDX file and evaluate it safely to a plain object.
      if (!data || Object.keys(data).length === 0) {
        const metadataStartMatch = rawSource.match(/export\s+const\s+metadata\s*=\s*\{/m);
        if (metadataStartMatch && metadataStartMatch.index !== undefined) {
          const startIndex = metadataStartMatch.index + metadataStartMatch[0].length - 1;
          const objectLiteral = extractObjectLiteral(rawSource, startIndex);

          if (objectLiteral) {
            try {
              // Evaluate the object literal in a new Function scope to avoid leaking local scope.
              // This assumes the metadata object uses plain literals (strings, arrays, primitives).
              // It's a pragmatic fallback for MDX files that export metadata as JS.
              const parsed = new Function(`return (${objectLiteral})`)();
              if (parsed && typeof parsed === "object") {
                data = parsed;
              }
            } catch {
              // If parsing fails, leave data as-is (empty) and continue; post will still be included with defaults.
            }
          }
        }
      }

      return {
        title: String(data.title ?? data?.title ?? "Untitled Post"),
        description: String(data.description ?? data?.description ?? ""),
        date: String(data.date ?? data?.date ?? data?.publishDate ?? new Date().toISOString()),
        coverImage: String(data.coverImage ?? data?.coverImage ?? "/images/blogs/default-cover.svg"),
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
        slug,
        excerpt: extractExcerpt(content, typeof data.excerpt === "string" ? data.excerpt : undefined),
        content,
        readingTime: `${Math.max(1, Math.round(content.split(/\s+/).filter(Boolean).length / 200))} min read`,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];

  return getAllPosts()
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      const matchingTagsA = a.tags.filter((tag) => current.tags.includes(tag)).length;
      const matchingTagsB = b.tags.filter((tag) => current.tags.includes(tag)).length;
      if (matchingTagsB !== matchingTagsA) return matchingTagsB - matchingTagsA;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, limit);
}
