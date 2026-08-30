import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.fullName}`,
  description:
    `Terms of Service for ${siteConfig.name} - the free GitHub Profile README Generator. Understand your rights and responsibilities when using our service.`,
  alternates: {
    canonical: `${siteConfig.url}/terms-of-service`,
  },
  openGraph: {
    title: `Terms of Service | ${siteConfig.fullName}`,
    description:
      `Terms of Service for ${siteConfig.name} - the free GitHub Profile README Generator.`,
    url: `${siteConfig.url}/terms-of-service`,
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
    title: `Terms of Service | ${siteConfig.fullName}`,
    description:
      `Terms of Service for ${siteConfig.name} - the free GitHub Profile README Generator.`,
    images: [`${siteConfig.url}/icon.svg`],
  },
};

export default function TermsOfService() {
  return (
    <div className="container-app py-16 max-w-4xl">
      <div className="mb-10">
        <h1 className="heading-xl mb-3">Terms of Service</h1>
        <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">Last updated: March 1, 2026</p>
      </div>

      <div className="space-y-8 text-body text-text-light dark:text-text-dark">
        <p>
          By accessing or using the {siteConfig.name} website and service (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you disagree with any part of the terms then you may not access the Service.
        </p>

        <section className="card space-y-3">
          <h2 className="heading-md text-text-light dark:text-text-dark">
            1. Use License
          </h2>
          <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">
            {siteConfig.name} provides a free tool for generating Markdown files to be used on GitHub profiles.
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-body-sm text-text-muted-light dark:text-text-muted-dark">
            <li>You are granted a non-exclusive, non-transferable license to use the Service strictly in accordance with these Terms.</li>
            <li>You own the copyright to the content you input and generate using this tool.</li>
            <li>The underlying code, design, and structure of the {siteConfig.name} application itself are open source under the MIT license.</li>
          </ul>
        </section>

        <section className="card space-y-3">
          <h2 className="heading-md text-text-light dark:text-text-dark">
            2. Disclaimer
          </h2>
          <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">
            The materials on {siteConfig.name}&apos;s website are provided on an &apos;as is&apos; basis. {siteConfig.name} makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
          </p>
        </section>

        <section className="card space-y-3">
          <h2 className="heading-md text-text-light dark:text-text-dark">
            3. Third-Party Links and APIs
          </h2>
          <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">
            The Service generates code that embeds elements from third-party services (such as GitHub Readme Stats and Devicons). {siteConfig.name} is not responsible for the contents or continued uptime of any such linked site or service.
          </p>
        </section>
      </div>
    </div>
  );
}
