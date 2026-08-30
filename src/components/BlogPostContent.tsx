"use client";

import { useEffect, useState } from "react";
import mdxComponents from "../mdx-components";
import type { ComponentType } from "react";

interface BlogPostContentProps {
  slug: string;
}

export default function BlogPostContent({ slug }: BlogPostContentProps) {
  const [MDXComponent, setMDXComponent] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    let active = true;

    import(`../content/blog/${slug}.mdx`)
      .then((mod) => {
        if (active) {
          setMDXComponent(() => mod.default ?? null);
        }
      })
      .catch(() => {
        if (active) {
          setMDXComponent(() => null);
        }
      });

    return () => {
      active = false;
    };
  }, [slug]);

  if (!MDXComponent) {
    return <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">Loading article content…</p>;
  }

  return <MDXComponent components={mdxComponents} />;
}
