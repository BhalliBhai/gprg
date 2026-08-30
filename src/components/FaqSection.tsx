import type { FaqItem } from "@/lib/schema";
import { ChevronDownIcon } from "@/components/Icons";

interface FaqSectionProps {
  faqs: FaqItem[];
  title?: string;
}

export default function FaqSection({ faqs, title = "Frequently Asked Questions" }: FaqSectionProps) {
  return (
    <section className="container-app py-16 sm:py-20">
      <h2 className="heading-lg text-center mb-8">
        {title}
      </h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq) => (
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
