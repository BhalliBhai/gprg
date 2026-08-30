import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import Script from "next/script";
import { Providers } from "@/components/layout/providers";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
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
    "gprg",
    "gprm",
    "github profile readme generator",
    "github readme generator",
    "github profile readme maker",
    "readme generator",
    "github readme maker",
    "ai github profile generator",
    "ai github readme maker",
    "best github readme generator",
    "free github profile readme generator online",
    "create github profile readme online",
    "github profile readme builder no code",
    "professional github profile readme creator",
    "best github readme generator 2026",
    "github readme generator with stats",
    "github readme maker with icons",
    "github profile readme template generator",
    "github readme generator with badges",
    "how to create github profile readme",
    "github profile customization",
    "developer portfolio readme",
    "markdown readme builder",
    siteConfig.creatorName,
    siteConfig.name,
    "open source github readme generator",
  ],
  authors: [{ name: siteConfig.creatorName, url: siteConfig.creatorUrl }],
  creator: siteConfig.creatorName,
  publisher: siteConfig.creatorName,
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
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    locale: "en_US",
    images: [
      {
        url: `${siteConfig.url}/gprg-og-image.png`,
        width: 512,
        height: 512,
        alt: `${siteConfig.name} - GitHub Profile README Generator Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/gprg-og-image.png`],
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
      name: siteConfig.fullName,
      url: siteConfig.url,
      description: siteConfig.description,
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
        name: siteConfig.creatorName,
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
          name: `What is ${siteConfig.name}?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `${siteConfig.name} (${siteConfig.fullName}) is a free, no-code online tool that helps developers create professional, data-driven GitHub Profile READMEs in minutes. It features 200+ tech icons, dynamic GitHub stats, premium templates, and one-click markdown export.`,
          },
        },
        {
          "@type": "Question",
          name: "How do I create a GitHub Profile README?",
          acceptedAnswer: {
            "@type": "Answer",
            text: `To create a GitHub Profile README with ${siteConfig.name}: 1) Use the AI tools to generate a bio or fill in your info, 2) Select your tech stack from 200+ icons, 3) Choose a premium template design, 4) Copy or download the generated markdown.`,
          },
        },
        {
          "@type": "Question",
          name: `Is ${siteConfig.name} free to use?`,
          acceptedAnswer: {
            "@type": "Answer",
            text: `Yes, ${siteConfig.name} is completely free to use. There is no signup required, no credit card needed, and no hidden fees. All features including premium templates, tech icons, and GitHub stats integration are available at no cost.`,
          },
        },
      ],
    },
    {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon.svg`,
      description: siteConfig.description,
      founder: {
        "@type": "Person",
        name: siteConfig.creatorName,
        url: siteConfig.creatorUrl,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${spaceGrotesk.variable} antialiased bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark selection:bg-primary selection:text-white font-sans`}
      >
        <Providers>
          <div className="relative min-h-screen w-full flex flex-col overflow-x-clip grid-pattern">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <Analytics />
        <GoogleAnalytics gaId={"G-PVRCXDQL3P"} />
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
