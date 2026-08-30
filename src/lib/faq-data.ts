// lib/faq-data.ts
// One export per page. Keep answers 1-3 sentences - that length is what
// gets pulled into Google's answer boxes and quoted by LLMs (AEO/GEO).
// Edit copy here only - every page/schema reads from this single source,
// so wording never drifts between the visible FAQ block and the JSON-LD.

import type { FaqItem } from "./schema";

export const homeFaqs: FaqItem[] = [
  {
    question: "What does GPRG stand for?",
    answer:
      "GPRG stands for GitHub Profile README Generator - a free, no-code tool to build professional GitHub profile READMEs.",
  },
  {
    question: "Is GPRG open source?",
    answer:
      "Yes. GPRG is hosted on GitHub and is open to issue reports and pull requests from the community.",
  },
  {
    question: "Does GPRG require me to sign up or log in?",
    answer:
      "No - you can generate and download a README without creating an account. Linking your GitHub account is only needed for advanced integrations like live stats cards.",
  },
  {
    question: "How long does it take to make a README with GPRG?",
    answer:
      "Most developers can generate a complete, styled README in under a minute using a template and the AI bio writer.",
  },
  {
    question: "Can I use GPRG for a company or team GitHub org profile?",
    answer:
      "Yes - a generated README works for an organization profile as long as it follows GitHub's repo naming and visibility rules for org profile READMEs.",
  },
  {
    question: "Does GPRG work if I don't have any GitHub repos yet?",
    answer:
      "Yes. GPRG only needs your GitHub username and the details you enter - it doesn't require existing repositories, though stats cards will show more once you do.",
  },
];

export const guideFaqs: FaqItem[] = [
  {
    question: "How do I make my GitHub profile show a README?",
    answer:
      "Create a public repository with the exact same name as your GitHub username, add a README.md file to it, and GitHub automatically displays that README at the top of your profile page.",
  },
  {
    question: "Why isn't my GitHub profile README showing up after I created it?",
    answer:
      "The most common causes are: the repository name doesn't exactly match your username, the repository is private instead of public, or the file isn't named README.md at the repository root.",
  },
  {
    question: "Does my GitHub profile README repository need to be public?",
    answer:
      "Yes - GitHub only displays profile READMEs that live in a public repository.",
  },
  {
    question: "Can I edit my GitHub profile README after publishing it?",
    answer:
      "Yes - edit README.md in your profile repository and commit the change; your profile page updates automatically.",
  },
  {
    question: "What's the difference between a profile README and a regular repo README?",
    answer:
      "A profile README appears on your personal GitHub profile page and lives in a repo named exactly like your username, while a regular repo README only documents that specific project.",
  },
  {
    question: "How do I add GitHub stats and streak badges to my README?",
    answer:
      "Use GPRG's stats card tool to generate an image or Markdown snippet for your stats, then paste it into your README - make sure the image URL stays publicly accessible so GitHub can render it.",
  },
  {
    question: "Can I use GPRG without a GitHub account?",
    answer:
      "You can build and preview a README without signing in, but you'll need a GitHub account to actually publish it to your profile repository.",
  },
  {
    question: "What are the most common mistakes when creating a profile README?",
    answer:
      "The most frequent issues are an incorrect repo name, a private repository, broken badge URLs, and overloading the top of the README with too many badges or images.",
  },
];

export const templatesFaqs: FaqItem[] = [
  {
    question: "Which GitHub README template should a beginner use?",
    answer:
      "Minimalist is the safest choice for beginners - it's clean, short, and reads well no matter who's viewing your profile.",
  },
  {
    question: "What's the difference between the Developer and Data-Driven templates?",
    answer:
      "Developer balances a tech stack and project list evenly, while Data-Driven leads with GitHub stats, streaks, and top languages - Data-Driven works best once you have contribution history worth showing.",
  },
  {
    question: "Is the Terminal template hard to read for non-technical visitors?",
    answer:
      "It can be - Terminal's command-line aesthetic is aimed at a technical audience, so it's a better fit when most profile visitors are other developers rather than recruiters.",
  },
  {
    question: "Which template is best for a recruiter-facing profile?",
    answer:
      "Corporate is the most resume-like option, with clearly labeled Experience, Skills, and Projects sections - Minimalist is a lighter alternative if you want something less formal.",
  },
  {
    question: "Can I switch templates after I've already generated a README?",
    answer:
      "Yes - you can select a different template in the generator at any time and regenerate your README without losing your entered details.",
  },
  {
    question: "Are GPRG templates free to use commercially?",
    answer:
      "Yes, all 7 GPRG templates are free to use, including for freelance or client-facing profiles.",
  },
  {
    question: "Which template works best if I don't have much GitHub activity yet?",
    answer:
      "Minimalist or Compact work well with little activity, since neither depends on stats or contribution history to look complete.",
  },
  {
    question: "Does the Creative template's animated banner slow down my profile page?",
    answer:
      "The banner is a lightweight image or SVG served externally, so it has minimal impact on load time - the bigger tradeoff is that it reads as less formal than templates like Corporate or Minimalist.",
  },
];

export const faqHubFaqs: FaqItem[] = [
  {
    question: "What is GPRG?",
    answer:
      "GPRG is a free GitHub Profile README Generator that helps developers build professional profile READMEs using templates, an AI bio writer, and dynamic stats cards.",
  },
  {
    question: "Is GPRG really free?",
    answer:
      "Yes - the generator and its templates are free to use, with no signup or credit card required.",
  },
  {
    question: "Does GPRG store or sell my GitHub data?",
    answer:
      "GPRG does not sell personal GitHub data. See the Privacy Policy page for full details on what is stored and for how long.",
  },
  {
    question: "How is GPRG different from other GitHub README generators?",
    answer:
      "GPRG's main differentiators are its AI-powered bio writer, a library of 200+ tech icons, and premium templates - features not all competing generators offer together in one free tool.",
  },
  {
    question: "Do I need to know Markdown to use GPRG?",
    answer:
      "No - GPRG's visual editor handles the Markdown for you, though basic Markdown knowledge helps if you want to fine-tune the output afterward.",
  },
  {
    question: "How does the AI bio generator work?",
    answer:
      "You provide a few details about yourself and pick a tone, and the AI bio generator writes a short, ready-to-use bio in seconds using that input.",
  },
  {
    question: "Can I use GPRG's stats badges outside of a GitHub README?",
    answer:
      "Yes - the generated stats card images are standard image URLs, so they can be embedded anywhere Markdown or HTML images are supported, not just GitHub.",
  },
  {
    question: "Why does my generated stats card show \"0\" or fail to load on GitHub?",
    answer:
      "This is usually caused by an incorrect GitHub username, a temporary rate limit on the stats service, or the image URL not being publicly reachable.",
  },
  {
    question: "Is there a limit to how many times I can regenerate my README?",
    answer:
      "There's no meaningful limit for normal, individual use; automated or bulk-scripted requests may be rate-limited to keep the service reliable for everyone.",
  },
  {
    question: "How do I report a bug or request a new template or icon?",
    answer:
      "Open an issue on GPRG's GitHub repository with steps to reproduce the bug or a description of the template or icon you'd like added.",
  },
];