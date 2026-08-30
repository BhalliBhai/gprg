import type { Metadata } from "next";
import { siteConfig } from "../../../config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | GPRM - GitHub Profile README Maker",
  description:
    "Read the GPRM privacy policy. Learn how we handle your data - GPRM processes everything client-side with no server storage. Your GitHub README data stays in your browser.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | GPRM",
    description:
      "GPRM processes everything client-side with no server storage. Your GitHub README data stays in your browser.",
    url: "/privacy-policy",
    type: "website",
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
    title: "Privacy Policy | GPRM",
    description:
      "GPRM processes everything client-side with no server storage. Your GitHub README data stays in your browser.",
    images: [`${siteConfig.url}/icon.svg`],
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
        {/* <p className="text-lg text-slate-600 dark:text-slate-400">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p> */}
        <p className="text-lg text-slate-600 dark:text-slate-400">Last updated: March 1, 2026</p>
      </div>

      <div className="prose prose-slate dark:prose-invert prose-lg max-w-none text-slate-700 dark:text-slate-300">
        <p>
          Welcome to GPRM. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">data_usage</span> 1. Information We Collect
        </h2>
        <p>
          GPRM is designed to be a client-side tool. We do not require you to create an account or provide any mandatory personal information to use the basic features of the service.
        </p>
        <p>However, when you use our editor, you may voluntarily input:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>GitHub Username:</strong> To fetch public repository statistics and profile data.</li>
          <li><strong>Social Links:</strong> URLs or handles for platforms like LinkedIn, Twitter, Instagram, etc.</li>
          <li><strong>Biographical Text:</strong> Any text you choose to include in your generated README.</li>
        </ul>
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 my-6">
          <p className="m-0 text-sm">
            <strong>Important:</strong> The information you enter into the editor is processed directly in your browser. We do not transmit, save, or harvest this data on our servers. The final markdown is generated locally.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">cookie</span> 2. Cookies and Local Storage
        </h2>
        <p>
          We use browser Local Storage to save your editor progress across sessions. This ensures that if you accidentally close your tab or return later, your previously entered data and selected templates are preserved. This data never leaves your device and is not accessible by us.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">api</span> 3. Third-Party Services
        </h2>
        <p>
          To provide dynamic content such as stats cards and visitor badges, we utilize third-party APIs embedded within the generated markdown:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-6">
          <li><strong>Vercel (GitHub Readme Stats):</strong> Used to render your GitHub stats based on your public username.</li>
          <li><strong>Heroku (Streak Stats):</strong> Used to calculate and display your contribution streak.</li>
          <li><strong>Komarev (Visitor Badge):</strong> Used to track profile views.</li>
        </ul>
        <p>
          These services observe standard web requests when anyone views your generated README on GitHub. They do not have access to any data you enter into our editor beyond what is explicitly placed in the markdown URLs. Please refer to their respective privacy policies for more information.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">security</span> 4. Data Security
        </h2>
        <p>
          Since we do not store your personal input data on our servers, the risk of data breach from our systems is practically non-existent. We ensure our hosting environment (Vercel) follows industry-standard security practices for delivering the client application to you.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">child_care</span> 5. Children&apos;s Privacy
        </h2>
        <p>
          Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">update</span> 6. Changes to this Policy
        </h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
        </p>

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">mail</span> 7. Contact Us
        </h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us via our GitHub repository issues page.
        </p>
      </div>
    </div>
  );
}
