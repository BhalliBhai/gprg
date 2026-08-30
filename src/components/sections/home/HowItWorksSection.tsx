import React from 'react';
import { RouteIcon, EditDocumentIcon, CodeIcon, StyleIcon } from '@/components/Icons';

type Step = {
  number: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: '01',
    Icon: EditDocumentIcon,
    title: 'Fill Info',
    description:
      'Connect your GitHub account and add your personal details, biography, and location automatically.',
  },
  {
    number: '02',
    Icon: CodeIcon,
    title: 'Select Tech',
    description:
      'Pick from 200+ icons of frameworks, languages, and tools you use from our extensive curated library.',
  },
  {
    number: '03',
    Icon: StyleIcon,
    title: 'Choose Design',
    description:
      'Select from multiple modern layouts and customize colors, themes, and animations to match your personal brand.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-24 px-6 border-y border-border-light dark:border-border-dark bg-surface-hover-light/50 dark:bg-surface-dark/40">
      <div className="container-app">
        <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
          <span className="badge-green gap-1.5 uppercase tracking-[0.2em]">
            <RouteIcon size={14} /> Workflow
          </span>
          <h2 className="heading-lg">Three steps to a better profile</h2>
          <p className="subheading max-w-2xl text-center">
            Our streamlined process helps you build a stunning README without touching any complex markdown code.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.Icon;
            return (
              <div
                key={step.number}
                className={`group relative card flex flex-col hover:border-primary/40 transition-all ${
                  index === steps.length - 1 ? 'sm:col-span-2 md:col-span-1' : ''
                }`}
              >
                <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-4xl sm:text-6xl font-black text-border-light/40 dark:text-primary/5 select-none">
                  {step.number}
                </div>
                <div className="size-12 sm:size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="heading-sm mb-2 text-text-light dark:text-text-dark">{step.title}</h3>
                <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}