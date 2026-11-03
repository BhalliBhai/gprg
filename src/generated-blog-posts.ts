type BlogMetadata = {
  title: string;
  description: string;
  date?: string;
  publishDate?: string;
  coverImage?: string;
  tags?: string[];
  excerpt?: string;
};

import BlogPost0, { metadata as sourceMetadata0 } from "./content/blog/ai-github-bio-generator-tone-guide.mdx";
const blogMetadata0: BlogMetadata = sourceMetadata0;
import BlogPost1, { metadata as sourceMetadata1 } from "./content/blog/ai-github-bio-generator.mdx";
const blogMetadata1: BlogMetadata = sourceMetadata1;
import BlogPost2, { metadata as sourceMetadata2 } from "./content/blog/automate-github-readme-with-github-actions.mdx";
const blogMetadata2: BlogMetadata = sourceMetadata2;
import BlogPost3, { metadata as sourceMetadata3 } from "./content/blog/best-github-readme-template-2026.mdx";
const blogMetadata3: BlogMetadata = sourceMetadata3;
import BlogPost4, { metadata as sourceMetadata4 } from "./content/blog/github-profile-readme-ideas-recruiters-attention.mdx";
const blogMetadata4: BlogMetadata = sourceMetadata4;
import BlogPost5, { metadata as sourceMetadata5 } from "./content/blog/github-profile-readme-mistakes-to-avoid.mdx";
const blogMetadata5: BlogMetadata = sourceMetadata5;
import BlogPost6, { metadata as sourceMetadata6 } from "./content/blog/github-readme-freelance-developers.mdx";
const blogMetadata6: BlogMetadata = sourceMetadata6;
import BlogPost7, { metadata as sourceMetadata7 } from "./content/blog/github-readme-open-source-maintainers.mdx";
const blogMetadata7: BlogMetadata = sourceMetadata7;

export const generatedBlogPosts = [
  { slug: "ai-github-bio-generator-tone-guide", metadata: blogMetadata0, component: BlogPost0, wordCount: 1853 },
  { slug: "ai-github-bio-generator", metadata: blogMetadata1, component: BlogPost1, wordCount: 1117 },
  { slug: "automate-github-readme-with-github-actions", metadata: blogMetadata2, component: BlogPost2, wordCount: 1913 },
  { slug: "best-github-readme-template-2026", metadata: blogMetadata3, component: BlogPost3, wordCount: 1806 },
  { slug: "github-profile-readme-ideas-recruiters-attention", metadata: blogMetadata4, component: BlogPost4, wordCount: 1975 },
  { slug: "github-profile-readme-mistakes-to-avoid", metadata: blogMetadata5, component: BlogPost5, wordCount: 1647 },
  { slug: "github-readme-freelance-developers", metadata: blogMetadata6, component: BlogPost6, wordCount: 1704 },
  { slug: "github-readme-open-source-maintainers", metadata: blogMetadata7, component: BlogPost7, wordCount: 1612 },
];
