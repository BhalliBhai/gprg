import mdxComponents from "../mdx-components";
import type { BlogPost } from "@/lib/blog";

interface BlogPostContentProps {
  post: BlogPost;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const MDXComponent = post.component;
  return <MDXComponent components={mdxComponents} />;
}
