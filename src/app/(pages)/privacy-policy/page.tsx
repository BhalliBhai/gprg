import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.fullName}`,
  description:
    `Read the ${siteConfig.name} privacy policy. Learn how we handle your data - ${siteConfig.name} processes everything client-side with no server storage. Your GitHub README data stays in your browser.`,
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
  openGraph: {
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      `${siteConfig.name} processes everything client-side with no server storage. Your GitHub README data stays in your browser.`,
    url: `${siteConfig.url}/privacy-policy`,
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
    title: `Privacy Policy | ${siteConfig.name}`,
    description:
      `${siteConfig.name} processes everything client-side with no server storage. Your GitHub README data stays in your browser.`,
    images: [`${siteConfig.url}/icon.svg`],
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="container-app py-16 max-w-4xl">
      <div className="mb-10">
        <h1 className="heading-xl mb-3">Privacy Policy</h1>
        <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">Last updated: March 1, 2026</p>
      </div>

      <div className="space-y-8 text-body text-text-light dark:text-text-dark">
        <p>
          Welcome to {siteConfig.name}. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>

        <section className="card space-y-3">
          <h2 className="heading-md text-text-light dark:text-text-dark">
            1. Information We Collect
          </h2>
          <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">
            {siteConfig.name} is designed to be a client-side tool. We do not require you to create an account or provide any mandatory personal information to use the basic features of the service.
          </p>
          <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">However, when you use our editor, you may voluntarily input:</p>
          <ul className="list-disc pl-6 space-y-1.5 text-body-sm text-text-muted-light dark:text-text-muted-dark">
            <li><strong>GitHub Username:</strong> To fetch public repository statistics and profile data.</li>
            <li><strong>Social Links:</strong> URLs or handles for platforms like LinkedIn, Twitter, Instagram, etc.</li>
            <li><strong>Biographical Text:</strong> Any text you choose to include in your generated README.</li>
          </ul>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-4">
            <p className="m-0 text-xs text-primary leading-relaxed">
              <strong>Important:</strong> The information you enter into the editor is processed directly in your browser. We do not transmit, save, or harvest this data on our servers. The final markdown is generated locally.
            </p>
          </div>
        </section>

        <section className="card space-y-3">
          <h2 className="heading-md text-text-light dark:text-text-dark">
            2. Cookies and Local Storage
          </h2>
          <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">
            We use browser Local Storage to save your editor progress across sessions. This ensures that if you accidentally close your tab or return later, your previously entered data and selected templates are preserved. This data never leaves your device and is not accessible by us.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="heading-md text-text-light dark:text-text-dark">
            3. Third-Party Services
          </h2>
          <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">
            To provide dynamic content such as stats cards and visitor badges, we utilize third-party APIs embedded within the generated markdown:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-body-sm text-text-muted-light dark:text-text-muted-dark">
            <li><strong>Vercel (GitHub Readme Stats):</strong> Used to render your GitHub stats based on your public username.</li>
            <li><strong>Heroku (Streak Stats):</strong> Used to calculate and display your contribution streak.</li>
            <li><strong>Komarev (Visitor Badge):</strong> Used to track profile views.</li>
          </ul>
          <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">
            These services observe standard web requests when anyone views your generated README on GitHub. They do not have access to any data you enter into our editor beyond what is explicitly placed in the markdown URLs.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="heading-md text-text-light dark:text-text-dark">
            4. Data Security
          </h2>
          <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">
            Since we do not store your personal input data on our servers, the risk of data breach from our systems is practically non-existent.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="heading-md text-text-light dark:text-text-dark">
            5. Contact Us
          </h2>
          <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">
            If you have any questions about this Privacy Policy, please contact us via our{" "}
            <a href={siteConfig.issuesUrl} target="_blank" rel="noopener noreferrer" className="link font-semibold">
              GitHub repository issues page
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
