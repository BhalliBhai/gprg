import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import FaqSection from "@/components/FaqSection";
import { faqHubFaqs } from "@/lib/faq-data";
import { siteConfig } from "@/config/site";
import { MenuBookIcon, StyleIcon, EditDocumentIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: `Frequently Asked Questions (FAQ) | ${siteConfig.name}`,
  description:
    `Got questions about creating, troubleshooting, or customizing your GitHub Profile README with ${siteConfig.name}? Find clear, actionable answers here.`,
  alternates: { canonical: `${siteConfig.url}/faq` },
  openGraph: {
    title: `Frequently Asked Questions (FAQ) | ${siteConfig.name}`,
    description:
      `Frequently asked questions about ${siteConfig.name} and GitHub profile READMEs - badges, stats, markdown support, and more.`,
    url: `${siteConfig.url}/faq`,
    type: "website",
  },
};

export default function FaqPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
      { "@type": "ListItem", position: 2, name: "FAQ", item: `${siteConfig.url}/faq` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqHubFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen">
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
      <section className="relative overflow-hidden py-16 sm:py-20 border-b border-border-light dark:border-border-dark">
        <div className="container-app text-center max-w-4xl">
          <span className="badge-green mb-4 uppercase tracking-[0.2em]">
            Support Hub
          </span>
          <h1 className="heading-xl mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="subheading max-w-2xl mx-auto">
            Everything you need to know about {siteConfig.name}, AI README bios, GitHub stats widgets, and configuring your developer profile to look professional.
          </p>
        </div>
      </section>

      {/* Main FAQ list */}
      <FaqSection faqs={faqHubFaqs} title="Canonical FAQs" />

      {/* Internal Navigation Blocks */}
      <section className="container-app py-12 max-w-4xl">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="card flex flex-col justify-between hover:border-primary/40 transition-colors">
            <div>
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <MenuBookIcon size={20} />
              </div>
              <h3 className="heading-sm mb-2 text-text-light dark:text-text-dark">Step-by-step Guide</h3>
              <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark mb-4">
                New to GitHub profiles? Learn how to set up the repository, configure options, and avoid layout issues.
              </p>
            </div>
            <Link href="/guide" className="link font-semibold text-sm flex items-center gap-1">
              Read the Guide →
            </Link>
          </div>

          <div className="card flex flex-col justify-between hover:border-primary/40 transition-colors">
            <div>
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <StyleIcon size={20} />
              </div>
              <h3 className="heading-sm mb-2 text-text-light dark:text-text-dark">Design Templates</h3>
              <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark mb-4">
                Explore pre-styled templates (Minimalist, Data-Driven, Corporate) and select your visual theme.
              </p>
            </div>
            <Link href="/templates" className="link font-semibold text-sm flex items-center gap-1">
              Browse Templates →
            </Link>
          </div>

          <div className="card flex flex-col justify-between hover:border-primary/40 transition-colors">
            <div>
              <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                <EditDocumentIcon size={20} />
              </div>
              <h3 className="heading-sm mb-2 text-text-light dark:text-text-dark">Open Generator</h3>
              <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark mb-4">
                Ready to build? Open the live, no-code editor to choose icons, write bios, and customize your stats.
              </p>
            </div>
            <Link href="/generator" className="link font-semibold text-sm flex items-center gap-1">
              Go to Generator →
            </Link>
          </div>
        </div>
      </section>

      {/* Support footer info */}
      <section className="container-app py-12 text-center max-w-xl">
        <p className="text-xs text-text-muted-light dark:text-text-muted-dark">
          Can&apos;t find what you are looking for? Open a feature request, suggest a new icon, or report bugs directly in our{" "}
          <a
            href={siteConfig.repoUrl}
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
