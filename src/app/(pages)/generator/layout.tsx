import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `GitHub README Generator | ${siteConfig.fullName}`,
  description:
    `Build your GitHub Profile README with ${siteConfig.name}'s interactive no-code editor. Choose from 200+ tech icons, add GitHub stats and streak cards, select premium templates, and export clean markdown in one click.`,
  keywords: [
    siteConfig.name.toLowerCase(),
    "github readme editor",
    "github readme generator",
    "build github profile readme",
    "github readme builder online",
    "no-code readme editor",
    "github profile editor",
    "readme markdown editor",
    "github readme creator tool",
    "github stats card generator",
    "github streak stats",
    "ai readme generator",
    "GitHub",
    "Markdown",
  ],
  alternates: {
    canonical: `${siteConfig.url}/generator`,
  },
  openGraph: {
    title: `GitHub README Generator | ${siteConfig.fullName}`,
    description:
      "Interactive no-code generator - 200+ icons, stats, templates. Build & export your GitHub README in minutes.",
    url: `${siteConfig.url}/generator`,
    type: "website",
    siteName: siteConfig.fullName,
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.url}/icon.svg`,
        width: 512,
        height: 512,
        alt: `${siteConfig.name} - GitHub Profile README Generator Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `GitHub README Generator | ${siteConfig.fullName}`,
    description:
      "Interactive no-code generator - 200+ icons, stats, templates. Build & export your GitHub README in minutes.",
    images: [`${siteConfig.url}/icon.svg`],
  },
};

const generatorJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HowTo',
      name: `How to Create a GitHub Profile README with ${siteConfig.name}`,
      description: `Step-by-step process for building a GitHub profile README using the ${siteConfig.name} editor.`,
      step: [
        {
          '@type': 'HowToStep',
          name: 'Fill Info',
          text: 'Add your personal details, biography, and location. No GitHub sign-in required.',
        },
        {
          '@type': 'HowToStep',
          name: 'Select Tech',
          text: 'Choose from 200+ icons of frameworks, languages, and tools you use.',
        },
        {
          '@type': 'HowToStep',
          name: 'Choose Design',
          text: 'Pick a template layout and customize colors and style to match your brand.',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `Do I need to create an account to use ${siteConfig.name}?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: `No. ${siteConfig.name} doesn't require sign-up or a GitHub OAuth connection. Just enter your public GitHub username and fill in your details directly in the editor.`,
          },
        },
        {
          '@type': 'Question',
          name: 'Is my data saved or stored on your servers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `No. Everything you enter is processed directly in your browser. ${siteConfig.name} uses browser local storage to save your progress on your device - nothing is transmitted to or stored on our servers.`,
          },
        },
      ],
    },
  ],
};

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generatorJsonLd) }}
      />
      {children}
    </>
  );
}
