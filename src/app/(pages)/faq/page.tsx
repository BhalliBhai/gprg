import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FaqSection from "../../../components/FaqSection";
import { faqHubFaqs } from "../../../lib/faq-data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | GPRM",
  description:
    "Got questions about creating, troubleshooting, or customizing your GitHub Profile README with GPRM? Find clear, actionable answers here.",
  alternates: { canonical: "https://gprm.bhalli.dev/faq" },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | GPRM",
    description:
      "Frequently asked questions about GPRM and GitHub profile READMEs - badges, stats, markdown support, and more.",
    url: "https://gprm.bhalli.dev/faq",
    type: "website",
  },
};

export default function FaqPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gprm.bhalli.dev/" },
      { "@type": "ListItem", "position": 2, "name": "FAQ", "item": "https://gprm.bhalli.dev/faq" }
    ]
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqHubFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-background-dark/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]} />

      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 border-b border-slate-200 dark:border-primary/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4 inline-block">
            Support Hub
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">
            Frequently Asked <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-400">Questions</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about GPRM, AI README bios, GitHub stats widgets, and configuring your developer profile to look professional.
          </p>
        </div>
      </section>

      {/* Main FAQ list */}
      <FaqSection faqs={faqHubFaqs} title="Canonical FAQs" />

      {/* Internal Navigation Blocks */}
      <section className="py-12 max-w-4xl mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-2xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-background-dark/50 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4">menu_book</span>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">Step-by-step Guide</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                New to GitHub profiles? Learn how to set up the repository, configure options, and avoid layout issues.
              </p>
            </div>
            <Link href="/guide" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
              Read the Guide <span className="text-xs">→</span>
            </Link>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-background-dark/50 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4">style</span>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">Design Templates</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Explore pre-styled templates (Minimalist, Data-Driven, Corporate) and select your visual theme.
              </p>
            </div>
            <Link href="/templates" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
              Browse Templates <span className="text-xs">→</span>
            </Link>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-background-dark/50 flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined text-primary text-3xl mb-4">edit_document</span>
              <h3 className="text-lg font-bold text-slate-950 dark:text-white mb-2">Open Generator</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Ready to build? Open the live, no-code editor to choose icons, write bios, and customize your stats.
              </p>
            </div>
            <Link href="/generator" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
              Go to Generator <span className="text-xs">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Support footer info */}
      <section className="py-16 text-center max-w-xl mx-auto px-6">
        <p className="text-slate-500 dark:text-slate-400 text-sm">
          Can&apos;t find what you are looking for? Open a feature request, suggest a new icon, or report bugs directly in our{" "}
          <a
            href="https://github.com/BhalliBhai/gprm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-bold hover:underline"
          >
            GitHub Repository
          </a>
          .
        </p>
      </section>
    </main>
  );
}
