declare module "*.mdx" {
  import type { ComponentType } from "react";
  export const metadata: {
    title: string;
    description: string;
    date?: string;
    publishDate?: string;
    coverImage?: string;
    tags?: string[];
    excerpt?: string;
    [key: string]: unknown;
  };
  const MDXComponent: ComponentType<{ components?: Record<string, unknown> }>;
  export default MDXComponent;
}
