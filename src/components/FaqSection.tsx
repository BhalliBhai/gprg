import type { FaqItem } from "@/lib/schema";

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
}

export default function FaqSection({ faqs, title = "Frequently Asked Questions" }: FaqSectionProps) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
        {title}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-lg border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer font-semibold text-slate-900 dark:text-white list-none">
              <span className="pr-4">{faq.question}</span>
              <span className="material-symbols-outlined text-primary transition-transform group-open:rotate-180 select-none">
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
