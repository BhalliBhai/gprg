type Faq = {
  question: string;
  answer: string;
};

const editorFaqs: Faq[] = [
  {
    question: 'Do I need to create an account to use GPRM?',
    answer:
      "No. GPRM doesn't require sign-up or a GitHub OAuth connection. Just enter your public GitHub username and fill in your details directly in the editor.",
  },
  {
    question: 'Is my data saved or stored on your servers?',
    answer:
      'No. Everything you enter is processed directly in your browser. GPRM uses browser local storage to save your progress on your device so you can pick up where you left off - nothing is transmitted to or stored on our servers.',
  },
  {
    question: 'Can I edit my README after generating it?',
    answer:
      'Yes. You can come back to the readme generator at any time, adjust your info, tech stack, or template, and regenerate the markdown. Your previous progress is preserved via local storage.',
  },
  {
    question: 'Do I need to know Markdown to use the Readme generator?',
    answer:
      "No. GPRM is a no-code tool - you fill in fields and make selections visually, and the editor generates the Markdown for you automatically.",
  },
  {
    question: 'How do I add the generated README to my GitHub profile?',
    answer:
      'Copy the generated markdown (or download the .md file), create a repository with the same name as your GitHub username, and paste the content into its README.md file. GitHub automatically displays it on your profile page.',
  },
];

export function EditorFaq() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        Readme Generator FAQs
      </h2>
      <div className="space-y-3">
        {editorFaqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-lg border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 px-5 py-4"
          >
            <summary className="flex items-center justify-between cursor-pointer font-semibold text-slate-900 dark:text-white list-none">
              {faq.question}
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}