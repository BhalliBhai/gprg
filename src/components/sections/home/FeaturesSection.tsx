import React from 'react';
import {
  SparklesIcon,
  CodeIcon,
  StyleIcon,
  CopyIcon,
  CheckCircleIcon,
  ConstructionIcon,
  EditDocumentIcon,
} from '@/components/Icons';

type Feature = {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    Icon: SparklesIcon,
    title: 'AI-Powered Bio & Socials',
    description:
      'Write your bio in seconds with our AI generator - pick a tone and let AI craft the perfect intro. Link your socials with beautiful, consistent iconography.',
  },
  {
    Icon: CodeIcon,
    title: '200+ Tech Icons',
    description:
      'An interactive skill selection grid. Search and filter through a massive library of framework and language badges.',
  },
  {
    Icon: StyleIcon,
    title: 'Premium Templates',
    description:
      'Choose from diverse, high-conversion README designs tailored for different developer roles and styles.',
  },
];

function FeatureCard({ Icon, title, description }: Feature) {
  return (
    <div className="card hover:border-primary/40 transition-colors">
      <div className="size-10 sm:size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-6">
        <Icon size={22} />
      </div>
      <h3 className="heading-sm mb-2 text-text-light dark:text-text-dark">{title}</h3>
      <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 px-6 border-b border-border-light dark:border-border-dark">
      <div className="container-app">
        <div className="flex flex-col items-center text-center gap-3 mb-12 sm:mb-16">
          <span className="badge-green gap-1.5 uppercase tracking-[0.2em]">
            <ConstructionIcon size={14} /> Features
          </span>
          <h2 className="heading-lg">
            Everything you need for a <br className="hidden sm:block lg:hidden" />
            <span className="text-primary">perfect README</span>
          </h2>
          <p className="subheading max-w-2xl text-center">
            Powerful tools designed to make your GitHub profile stand out from the crowd.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}

          {/* Markdown Export card */}
          <div className="card hover:border-primary/40 transition-colors sm:col-span-2 lg:col-span-3">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center">
              <div className="flex-1">
                <div className="size-10 sm:size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-6">
                  <CopyIcon size={22} />
                </div>
                <h3 className="heading-sm mb-2 text-text-light dark:text-text-dark">Markdown Export</h3>
                <p className="text-body-sm text-text-muted-light dark:text-text-muted-dark max-w-2xl">
                  No complicated downloads required. One-click copy to clipboard or download the .md file directly to your local machine.
                </p>
              </div>
              <div className="w-full md:w-auto flex flex-wrap gap-2 p-3 bg-background-light dark:bg-background-dark rounded-lg hairline-border-light dark:hairline-border items-center justify-center">
                <div className="px-3 py-1 bg-primary/10 rounded text-xs font-mono text-primary flex items-center gap-1.5">
                  <EditDocumentIcon size={12} /> README.md
                </div>
                <div className="px-3 py-1 bg-surface-light dark:bg-surface-dark rounded text-xs font-mono text-text-muted-light dark:text-text-muted-dark flex items-center gap-1.5">
                  <CheckCircleIcon size={12} className="text-primary" /> Instant Export
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}