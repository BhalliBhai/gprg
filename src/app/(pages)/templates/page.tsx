import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FaqSection from "../../../components/FaqSection";
import { templatesFaqs } from "../../../lib/faq-data";

export const metadata: Metadata = {
  title: "GitHub Profile README Templates: Which One Should You Use? | GPRG",
  description:
    "A guide to all 7 GPRG templates - Minimalist, Data-Driven, Developer, Creative, Compact, Terminal, and Corporate - and who each one is best suited for.",
  alternates: { canonical: "https://gprg.bhalli.dev/templates" },
  openGraph: {
    title: "GitHub Profile README Templates: Which One Should You Use?",
    description:
      "A guide to all 7 GPRG templates and who each one is best suited for - pick yours, then build it in the generator.",
    url: "https://gprg.bhalli.dev/templates",
    type: "website",
  },
};

// Source of truth for the 7 templates the generator actually offers.
// Keep this in sync with the generator's own template list - if a template
// is renamed or a new one is added there, update it here too.
const templates = [
  {
    slug: "minimalist",
    name: "Minimalist",
    tagline: "Clean, recruiter-friendly, zero-noise layout.",
    bestFor: [
      "Students and early-career developers",
      "Anyone whose profile is mainly seen by recruiters doing a quick scan",
    ],
    description:
      "Minimalist strips a profile down to a short bio, a tight tech stack row, and nothing that competes for attention. It's the safest default if you're not sure which template to pick - it reads well no matter who's looking at it.",
  },
  {
    slug: "data-driven",
    name: "Data-Driven",
    tagline: "Metrics-first profile for engineering impact.",
    bestFor: [
      "Open-source maintainers with contribution history worth showing",
      "Engineers who want stats, streaks, and top languages to speak for them",
    ],
    description:
      "Data-Driven puts GitHub stats cards, contribution streaks, and top-language breakdowns near the top of the page instead of at the bottom. It works best once you actually have activity worth surfacing - it's less effective on a brand-new account with little history.",
  },
  {
    slug: "developer",
    name: "Developer",
    tagline: "Balanced profile with strong technical depth.",
    bestFor: [
      "Full-stack and backend developers",
      "Anyone who wants both a tech stack and a project list without overloading either",
    ],
    description:
      "Developer is the middle ground between Minimalist and Data-Driven - enough structure to show depth (stack, projects, stats) without any one section dominating the page. It's a good fit if you can't decide between the two extremes.",
  },
  {
    slug: "creative",
    name: "Creative",
    tagline: "Animated banner header with bold visual energy.",
    bestFor: [
      "Designers and frontend developers building a personal brand",
      "Anyone who wants their profile to stand out visually, not just read well",
    ],
    description:
      "Creative leads with an animated banner and leans into visual personality rather than a strict resume format. It's the right choice when you want your profile to feel distinctive - it's a worse fit for strictly formal, recruiter-only audiences.",
  },
  {
    slug: "compact",
    name: "Compact",
    tagline: "Ultra concise format for quick scanning.",
    bestFor: [
      "Developers who prefer their pinned repositories to do most of the talking",
      "Anyone who wants a profile that reads in under 10 seconds",
    ],
    description:
      "Compact trims the profile down to the essentials - a one- or two-line bio, a small stack row, and links. It's the fastest template to scan, which makes it a good fit if you'd rather let your pinned projects carry the weight.",
  },
  {
    slug: "terminal",
    name: "Terminal",
    tagline: "Hacker-style CLI aesthetic for the command-line crowd.",
    bestFor: [
      "Sysadmins, DevOps engineers, and CLI tool authors",
      "Developers who want a distinctive, code-first look",
    ],
    description:
      "Terminal styles the profile like a command-line session - monospace type, prompt-style lines, terminal-green or amber accents. It's a strong fit if your work and audience are already command-line-heavy; it can feel like a mismatch on a profile aimed at non-technical recruiters.",
  },
  {
    slug: "corporate",
    name: "Corporate",
    tagline: "Structured, resume-style layout for recruiter-facing profiles.",
    bestFor: [
      "Freelancers and consultants presenting to clients",
      "Active job seekers who want their GitHub profile to double as a resume",
    ],
    description:
      "Corporate organizes the profile into clearly labeled sections - Experience, Skills, Projects - closer to a resume than a typical developer profile. It's the most formal template and works well when the profile needs to stand on its own for a non-technical reader.",
  },
];

export default function TemplatesPage() {
  return (
    <main>
      {/* Breadcrumbs and FaqSection each render their own JSON-LD internally -
          don't add a second breadcrumbJsonLd/faqJsonLd <script> here or the
          page will emit duplicate structured data, which Google's Rich
          Results Test will flag. */}
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Templates", path: "/templates" }]} />

      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">
          GitHub Profile README Templates: Which One Should You Use?
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          GPRM&apos;s generator includes 7 templates. Pick the one that matches your goal and
          audience below, then build it directly in the{" "}
          <Link href="/generator" className="text-blue-300 hover:text-blue-400 underline">
            generator
          </Link>{" "}
          - every template is available from the same tool, so switching later just means
          selecting a different one during setup.
        </p>

        {/* Quick jump list - helps skimmability and gives search/AI answer
            engines a compact summary block to pull from. */}
        <ul className="mb-10 grid gap-2 sm:grid-cols-2 text-sm">
          {templates.map((t) => (
            <li key={t.slug}>
              <a href={`#${t.slug}`} className="text-blue-300 hover:text-blue-400 underline text-lg">
                {t.name}
              </a>
              <span className="text-slate-500 dark:text-slate-400"> - {t.tagline}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-10">
          {templates.map((t) => (
            <article key={t.slug} id={t.slug} className="scroll-mt-24">
              <h2 className="text-xl font-semibold mb-1">{t.name}</h2>
              <p className="text-sm font-medium text-primary mb-3">{t.tagline}</p>
              <p className="text-slate-600 dark:text-slate-400 mb-3">{t.description}</p>
              <p className="text-sm font-medium mb-1">Best for:</p>
              <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400">
                {t.bestFor.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link
            href="/generator"
            className="inline-flex items-center rounded-md bg-primary px-5 py-3 text-slate-900 font-bold"
          >
            Open the generator →
          </Link>
        </div>
      </section>

      <FaqSection faqs={templatesFaqs} title="Template FAQs" />
    </main>
  );
}