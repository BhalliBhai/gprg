import type { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <section className="text-slate-100 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="mb-10 rounded-4xl border border-primary/10 bg-primary/90 p-10 shadow-[0_30px_90px_-60px_rgba(17,212,82,0.55)]">
          <div className="max-w-4xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-dark">
              Articles &amp; Insights
            </p>
            <h1 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl">
              The GPRG Blogs
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Stay ahead with technical guides, design inspiration, and optimization tips to build a powerful developer presence on GitHub.
            </p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
