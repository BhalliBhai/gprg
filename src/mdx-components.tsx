import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import BlogImage from "./components/BlogImage";

const MdxImage = ({ alt, src, className, width, height, ...props }: ComponentPropsWithoutRef<"img">) => {
  const imageSrc = typeof src === "string" ? src : "";
  const parsedWidth = typeof width === "string" ? parseInt(width, 10) : width ?? 1200;
  const parsedHeight = typeof height === "string" ? parseInt(height, 10) : height ?? 675;

  return (
    <span className={`my-8 block overflow-hidden rounded-2xl hairline-border-light dark:hairline-border bg-surface-light dark:bg-surface-dark ${className ?? ""}`}>
      <BlogImage
        src={imageSrc}
        alt={alt ?? "Blog image"}
        width={parsedWidth}
        height={parsedHeight}
        className="h-auto w-full object-cover"
        {...props}
      />
    </span>
  );
};

const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={`heading-xl mt-8 mb-4 ${className ?? ""}`} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={`heading-lg mt-10 mb-3 ${className ?? ""}`} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={`heading-md mt-8 mb-2 ${className ?? ""}`} {...props} />
  ),
  h4: ({ className, ...props }) => (
    <h4 className={`heading-sm mt-6 mb-2 ${className ?? ""}`} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={`text-body mt-4 leading-relaxed ${className ?? ""}`} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={`mt-4 list-disc list-inside space-y-2 text-body ${className ?? ""}`} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={`mt-4 list-decimal list-inside space-y-2 text-body ${className ?? ""}`} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={`pl-1 ${className ?? ""}`} {...props} />
  ),
  a: ({ href, className, ...props }) => (
    <Link
      href={href ?? "#"}
      className={`link font-semibold ${className ?? ""}`}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={`mt-6 rounded-xl border-l-4 border-primary bg-primary/5 p-4 text-text-light dark:text-text-dark ${className ?? ""}`}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre className={`code-block my-6 ${className ?? ""}`} {...props} />
  ),
  code: ({ className, ...props }) => (
    <code className={`rounded px-1.5 py-0.5 font-mono text-xs text-primary bg-surface-hover-light dark:bg-surface-hover-dark ${className ?? ""}`} {...props} />
  ),
  img: MdxImage,
  table: ({ className, ...props }) => (
    <div className="my-6 overflow-hidden rounded-xl hairline-border-light dark:hairline-border">
      <table className={`w-full border-collapse bg-surface-light dark:bg-surface-dark text-left text-sm text-text-light dark:text-text-dark ${className ?? ""}`} {...props} />
    </div>
  ),
  thead: ({ className, ...props }) => (
    <thead className={`bg-surface-hover-light dark:bg-surface-hover-dark ${className ?? ""}`} {...props} />
  ),
  tbody: ({ className, ...props }) => <tbody className={className ?? ""} {...props} />, 
  tr: ({ className, ...props }) => (
    <tr className={`border-t border-border-light dark:border-border-dark ${className ?? ""}`} {...props} />
  ),
  th: ({ className, ...props }) => (
    <th className={`border border-border-light dark:border-border-dark px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-text-light dark:text-text-dark ${className ?? ""}`} {...props} />
  ),
  td: ({ className, ...props }) => (
    <td className={`border border-border-light dark:border-border-dark px-4 py-2.5 align-top text-xs text-text-muted-light dark:text-text-muted-dark ${className ?? ""}`} {...props} />
  ),
};

export function useMDXComponents(components: MDXComponents = {}): MDXComponents {
  return {
    ...components,
    ...mdxComponents,
  };
}

export default mdxComponents;
