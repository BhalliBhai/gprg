import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "../../../components/Breadcrumbs";
import FaqSection from "../../..//components/FaqSection";
import { guideFaqs } from "../../../lib/faq-data";

export const metadata: Metadata = {
  title: "How to Create a GitHub Profile README (Step-by-Step Guide) | GPRM",
  description:
    "A complete walkthrough for creating a GitHub profile README: setting up the special repo, writing your bio, adding stats and badges, and avoiding common mistakes.",
  alternates: { canonical: "https://gprm.bhalli.dev/guide" },
  openGraph: {
    title: "How to Create a GitHub Profile README (Step-by-Step Guide)",
    description:
      "Follow this guide to set up your GitHub profile README from scratch - repo setup, AI bio, tech icons, stats cards, and design.",
    url: "https://gprm.bhalli.dev/guide",
    type: "article",
  },
};

const steps = [
  {
    title: "Create the special profile repository",
    body: "On GitHub, create a new public repository named exactly the same as your username (e.g. if your username is alex, the repo must be named alex). GitHub detects this repo name automatically and treats its README.md as your profile README.",
  },
  {
    title: "Fill in your info",
    body: "Open the GPRM generator and connect your GitHub username. Add your bio, location, and current role - GPRM pulls in what it can automatically and lets you fill the rest.",
  },
  {
    title: "Write your bio with AI",
    body: "Pick a tone - Professional, Witty, Casual, or Minimal - and let GPRM's AI bio generator draft your intro in seconds. Edit it to match your voice before moving on.",
  },
  {
    title: "Select your tech stack",
    body: "Search and select from 200+ tech icons covering languages, frameworks, and tools. Keep this list to what you actually use - a long badge wall reads as clutter, not credibility.",
  },
  {
    title: "Choose a design and add stats",
    body: "Pick a template layout, then enable dynamic stats: contribution streaks, top languages, and repo stats. Preview how it will look on both desktop and the GitHub mobile app.",
  },
  {
    title: "Export and publish",
    body: "Copy the generated Markdown or download the README.md file, commit it to your profile repository, and refresh your GitHub profile page to confirm it's live.",
  },
];

const mistakes = [
  "Repository name doesn't exactly match your GitHub username (case and spelling matter).",
  "Repository is set to private - profile READMEs only render from public repos.",
  "README.md isn't at the root of the repository.",
  "Too many badges/images stacked at the top, pushing your bio below the fold.",
  "Stats card image URLs that aren't publicly reachable, causing broken images or a stuck \"0\".",
];

export default function GuidePage() {
  return (
    <main>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Guide", path: "/guide" }]} />

      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">
          How to Create a GitHub Profile README
        </h1>
        <p className="text-slate-600 dark:text-slate-400 mb-8">
          A GitHub profile README is the pinned Markdown page that appears at the top of your
          GitHub profile. This guide walks through creating one from scratch, using GPRM to
          skip the manual Markdown work.
        </p>

        <ol className="space-y-8">
          {steps.map((step, i) => (
            <li key={step.title}>
              <h2 className="text-xl font-semibold mb-1">
                {i + 1}. {step.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-400">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="my-10 rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-semibold mb-3">Common mistakes to avoid</h2>
          <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400">
            {mistakes.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/generator"
            className="inline-flex items-center rounded-md bg-black px-5 py-3 text-white font-medium"
          >
            Start building your README →
          </Link>
          <Link
            href="/templates"
            className="inline-flex items-center rounded-md border border-gray-300 px-5 py-3 font-medium"
          >
            Browse templates
          </Link>
        </div>
      </section>

      <FaqSection faqs={guideFaqs} title="Guide FAQs" />
    </main>
  );
}