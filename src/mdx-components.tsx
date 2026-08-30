import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import type { MDXComponents } from "mdx/types";
import BlogImage from "./components/BlogImage";

const MdxImage = ({ alt, src, className, width, height, ...props }: ComponentPropsWithoutRef<"img">) => {
  const imageSrc = typeof src === "string" ? src : "";
  const parsedWidth = typeof width === "string" ? parseInt(width, 10) : width ?? 1200;
  const parsedHeight = typeof height === "string" ? parseInt(height, 10) : height ?? 675;

  return (
    <span className={`my-8 block overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950 ${className ?? ""}`}>
      <BlogImage
        src={imageSrc}
        alt={alt ?? "Blog image"}
        width={parsedWidth}
        height={parsedHeight}
        className="h-auto w-full object-cover"
        {...(props as any)}
      />
    </span>
  );
};

const mdxComponents: MDXComponents = {
  h1: ({ className, ...props }) => (
    <h1 className={`mt-8 scroll-mt-20 text-4xl font-black tracking-tight text-slate-950 dark:text-white ${className ?? ""}`} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <h2 className={`mt-12 scroll-mt-20 text-3xl font-bold tracking-tight text-slate-900 dark:text-white ${className ?? ""}`} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <h3 className={`mt-10 scroll-mt-20 text-2xl font-semibold text-slate-900 dark:text-white ${className ?? ""}`} {...props} />
  ),
  h4: ({ className, ...props }) => (
    <h4 className={`mt-8 text-xl font-semibold text-slate-900 dark:text-white ${className ?? ""}`} {...props} />
  ),
  p: ({ className, ...props }) => (
    <p className={`mt-6 leading-8 text-slate-700 dark:text-slate-300 ${className ?? ""}`} {...props} />
  ),
  ul: ({ className, ...props }) => (
    <ul className={`mt-6 list-disc list-inside space-y-3 text-slate-700 dark:text-slate-300 ${className ?? ""}`} {...props} />
  ),
  ol: ({ className, ...props }) => (
    <ol className={`mt-6 list-decimal list-inside space-y-3 text-slate-700 dark:text-slate-300 ${className ?? ""}`} {...props} />
  ),
  li: ({ className, ...props }) => (
    <li className={`pl-1 ${className ?? ""}`} {...props} />
  ),
  a: ({ href, className, ...props }) => (
    <Link
      href={href ?? "#"}
      className={`text-primary underline decoration-primary/30 hover:decoration-primary hover:text-primary-dark ${className ?? ""}`}
      {...props}
    />
  ),
  blockquote: ({ className, ...props }) => (
    <blockquote
      className={`mt-8 rounded-3xl border-l-4 border-primary/40 bg-primary/5 p-6 text-slate-800 dark:border-primary/60 dark:bg-primary/10 dark:text-slate-100 ${className ?? ""}`}
      {...props}
    />
  ),
  pre: ({ className, ...props }) => (
    <pre className={`my-8 overflow-x-auto rounded-3xl border border-slate-200 bg-slate-950/95 p-5 text-slate-100 ${className ?? ""}`} {...props} />
  ),
  code: ({ className, ...props }) => (
    <code className={`rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-primary dark:bg-slate-800 dark:text-primary ${className ?? ""}`} {...props} />
  ),
  img: MdxImage,
  table: ({ className, ...props }) => (
    <div className="my-8 overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-700">
      <table className={`w-full border-collapse bg-slate-50 text-left text-sm text-slate-700 dark:bg-slate-950 dark:text-slate-200 ${className ?? ""}`} {...props} />
    </div>
  ),
  thead: ({ className, ...props }) => (
    <thead className={`bg-slate-100 dark:bg-slate-900 ${className ?? ""}`} {...props} />
  ),
  tbody: ({ className, ...props }) => <tbody className={className ?? ""} {...props} />, 
  tr: ({ className, ...props }) => (
    <tr className={`border-t border-slate-200 odd:bg-slate-50 even:bg-white dark:border-slate-800 dark:odd:bg-slate-900 dark:even:bg-slate-950 ${className ?? ""}`} {...props} />
  ),
  th: ({ className, ...props }) => (
    <th className={`border border-slate-200 px-4 py-3 text-left text-sm font-semibold uppercase tracking-wide text-slate-900 dark:border-slate-800 dark:text-slate-100 ${className ?? ""}`} {...props} />
  ),
  td: ({ className, ...props }) => (
    <td className={`border border-slate-200 px-4 py-3 align-top text-sm text-slate-700 dark:border-slate-800 dark:text-slate-200 ${className ?? ""}`} {...props} />
  ),
};

export default mdxComponents;
