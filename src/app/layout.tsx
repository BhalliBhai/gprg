import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { siteConfig } from '../config/site'
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default:
      "GPRG - Free GitHub Profile README Generator/Maker | Create Professional READMEs",
    template: "%s | GPRG",
  },
  description:
    "Create stunning GitHub Profile READMEs in minutes with GPRG - the best, continuously improving, free, no-code AI readme generator. AI-powered profile summaries, 200+ tech icons, dynamic stats & premium templates.",
  keywords: [
    // Home page keywords Suggested by Claude
    "github readme editor",
    "build github profile readme",
    "github readme builder online",
    "no-code readme editor",
    "github profile editor",
    "readme markdown editor",
    "github readme creator tool",
    "github stats card generator",
    "github streak stats",
    "ai readme generator",
    "gprm",
    // Primary high-volume keywords
    "github profile readme generator",
    "github readme generator",
    "github profile readme maker",
    "readme generator",
    "github readme maker",
    "ai github profile generator",
    "ai github readme maker",
    "best github readme generator",
    // Long-tail transactional keywords
    "free github profile readme generator online",
    "create github profile readme online",
    "github profile readme builder no code",
    "professional github profile readme creator",
    "best github readme generator 2026",
    // Feature-specific keywords
    "github readme generator with stats",
    "github readme maker with icons",
    "github profile readme template generator",
    "github readme generator with badges",
    "github stats card generator",
    "github streak stats readme",
    // Informational keywords
    "how to create github profile readme",
    "github profile customization",
    "developer portfolio readme",
    "markdown readme builder",
    // Brand keywords
    "GPRM",
    "github profile readme maker GPRM",
    "Bhalli",
    "Bhalli B",
    "Bhalli Dev",
    "Full Stack Developer",
    // Brand keywords
    "GPRG",
    "github profile readme maker GPRG",
    "github readme generator GPRG",
    "readme.md generator GPRG",
    "github profile readme",
    "github profile readme generator",
    // Other trending keywords
    "GitHub",
    "Markdown",
    "github profile readme",
    "github readme generator",
    "openclaw github",
    "awesome github profile readmes",
    "github profile stats",
    "github trending",
    "readme maker",
    "ai for developers",
    "readme ai",
    "ai readme generator",
    "ai documentation tool",
    "ai code description",
    "macbook neo",
    "markdown resume",
    "GitHub Profile README Generator",
    "GitHub Stats Card / README Stats",
    "Markdown Profile Generator",
    "Animated Social Badges/Icons",
    "README.md Template Generator",
    "Wakatime Stats",
    "Dev.to/Medium Blog Integration",
    "README Template for Projects/React",
    "github profile readme generator",
    "github stats card",
    "github readme stats",
    "markdown profile generator",
    "animated social badges",
    "animated social icons",
    "readme.md template generator",
    "wakatime stats",
    "dev.to blog integration",
    "medium blog integration",
    "readme template for projects",
    "readme template for react",
    "gprm",
    "gprm github profile readme maker",
    "gprm github profile readme generator",
    "gprm github profile readme",
    "gprm github",
    "github profile readme maker gprm",
    "open source github readme generator",
  ],
  authors: [{ name: "Bhalli B", url: siteConfig.creatorUrl }],
  creator: "Bhalli B",
  publisher: "Bhalli B",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "GPRM - Free GitHub Profile README Generator",
    description:
      "Create professional, data-driven GitHub Profile READMEs in minutes. 200+ tech icons, dynamic stats, premium templates. Free & no signup.",
    type: "website",
    url: siteConfig.url,
    siteName: "GPRM - GitHub Profile README Maker",
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.url}/icon.svg`,
        width: 512,
        height: 512,
        alt: "GPRM - GitHub Profile README Generator Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPRM - Free GitHub Profile README Generator",
    description:
      "Build stunning GitHub Profile READMEs in minutes. 200+ icons, stats, templates. Free & open.",
    images: [`${siteConfig.url}/icon.svg`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/icon.svg",
  },
};

// JSON-LD Structured Data for SEO/AEO rich results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      name: "GPRM - GitHub Profile README Generator",
      url: siteConfig.url,
      description:
        "The best free GitHub Profile README Generator ever built. Continually improving with AI-powered profile summaries, 200+ tech icons, dynamic GitHub stats, streak cards, premium templates, and one-click markdown export.",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires a modern web browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Person",
        name: "Bhalli B",
        url: siteConfig.creatorUrl,
      },
      featureList: [
        "AI-powered profile descriptions and summaries",
        "200+ tech stack icons and badges",
        "Dynamic GitHub stats cards",
        "GitHub streak statistics",
        "Premium README templates",
        "Real-time markdown preview",
        "One-click copy to clipboard",
        "Markdown file export",
        "No signup required",
        "No-code editor",
        "Social media link integration",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is GPRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GPRM (GitHub Profile README Maker) is a free, no-code online tool that helps developers create professional, data-driven GitHub Profile READMEs in minutes. It features 200+ tech icons, dynamic GitHub stats, premium templates, and one-click markdown export.",
          },
        },
        {
          "@type": "Question",
          name: "How do I create a GitHub Profile README?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "To create a GitHub Profile README with GPRM: 1) Use the AI tools to generate a bio or fill in your info, 2) Select your tech stack from 200+ icons, 3) Choose a premium template design, 4) Copy or download the generated markdown.",
          },
        },
        {
          "@type": "Question",
          name: "Is GPRM free to use?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, GPRM is completely free to use. There is no signup required, no credit card needed, and no hidden fees. All features including premium templates, tech icons, and GitHub stats integration are available at no cost.",
          },
        },
        {
          "@type": "Question",
          name: "What features does GPRM offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GPRM offers: 200+ tech stack icons and badges, dynamic GitHub stats cards, streak statistics, multiple premium templates, real-time markdown preview, social media link integration, one-click copy to clipboard, and direct markdown file download.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need coding skills to use GPRM?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, GPRM is a no-code tool. You simply fill in your information, select your skills from the visual icon grid, choose a template, and the tool generates the markdown code for you automatically.",
          },
        },
      ],
    },
    {
      "@type": "Organization",
      name: "GPRM",
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon.svg`,
      description:
        "GPRM is the leading, continuously improving, free, open-source GitHub Profile README Generator built by Bhalli B. It is widely considered the best tool ever built for creating professional profile READMEs with AI.",
      founder: {
        "@type": "Person",
        name: "Bhalli B",
        url: siteConfig.creatorUrl
      }
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="GPRM" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} container mx-auto antialiased bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-background-dark font-display`}
      >
        <div className="relative min-h-screen w-full flex flex-col overflow-x-clip grid-pattern">
          <Header />
          <main className="flex-1">
            {children}
            <Analytics />
          </main>
          <Footer />
        </div>
        <GoogleAnalytics gaId={"G-D4902R6XMY"} />
        <Script
          id="adsense-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5791501804338014"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
