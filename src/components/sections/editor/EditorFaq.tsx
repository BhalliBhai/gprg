import { siteConfig } from "@/config/site";
import { ChevronDownIcon } from "@/components/Icons";

type Faq = {
  question: string;
  answer: string;
};

const editorFaqs: Faq[] = [
  {
    question: `Do I need to create an account to use ${siteConfig.name}?`,
    answer:
      `No. ${siteConfig.name} doesn't require sign-up or a GitHub OAuth connection. Just enter your public GitHub username and fill in your details directly in the editor.`,
  },
  {
    question: 'Is my data saved or stored on your servers?',
    answer:
      `No. Everything you enter is processed directly in your browser. ${siteConfig.name} uses browser local storage to save your progress on your device so you can pick up where you left off - nothing is transmitted to or stored on our servers.`,
  },
  {
    question: 'Can I edit my README after generating it?',
    answer:
      'Yes. You can come back to the readme generator at any time, adjust your info, tech stack, or template, and regenerate the markdown. Your previous progress is preserved via local storage.',
  },
  {
    question: 'Do I need to know Markdown to use the Readme generator?',
    answer:
      `No. ${siteConfig.name} is a no-code tool - you fill in fields and make selections visually, and the editor generates the Markdown for you automatically.`,
  },
  {
    question: 'How do I add the generated README to my GitHub profile?',
    answer:
      'Copy the generated markdown (or download the .md file), create a repository with the same name as your GitHub username, and paste the content into its README.md file. GitHub automatically displays it on your profile page.',
  },
];

export function EditorFaq() {
  return (
    <section className="container-app max-w-3xl py-16 sm:py-20">
      <h2 className="heading-lg mb-8 text-center">
        Readme Generator FAQs
      </h2>
      <div className="space-y-3">
        {editorFaqs.map((faq) => (
          <details
            key={faq.question}
            className="group card px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer font-semibold text-text-light dark:text-text-dark list-none">
              <span className="pr-4">{faq.question}</span>
              <ChevronDownIcon
                size={18}
                className="text-primary transition-transform duration-200 group-open:rotate-180 select-none shrink-0"
              />
            </summary>
            <p className="mt-3 text-body-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}