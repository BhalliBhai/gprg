import React from 'react';
import { siteConfig } from '@/config/site';
import {
  CodeIcon,
  VerifiedIcon,
  StarIcon,
  BugReportIcon,
  LockOpenIcon,
  VolunteerActivismIcon,
  ScaleIcon,
  TerminalIcon,
  ArrowOutwardIcon,
  GitHubIcon,
} from '@/components/Icons';

type Highlight = {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
};

const highlights: Highlight[] = [
  {
    Icon: LockOpenIcon,
    title: 'MIT Licensed',
    description: 'Free to use, fork, and build on - no restrictions.',
  },
  {
    Icon: BugReportIcon,
    title: 'Issues Welcome',
    description: 'Found a bug or have an idea? Open an issue directly.',
  },
  {
    Icon: VolunteerActivismIcon,
    title: 'Free Forever',
    description: `No paywalls, no premium tier. ${siteConfig.name} stays free for everyone.`,
  },
];

export function OpenSourceSection() {
  return (
    <section className="py-16 sm:py-24 px-6 border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-background-dark">
      <div className="container-app grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge-green gap-1.5 uppercase tracking-[0.2em]">
              <CodeIcon size={14} /> Open Source
            </span>
            <span className="badge-neutral gap-1.5 font-semibold">
              <VerifiedIcon size={14} className="text-primary" /> MIT Licensed
            </span>
          </div>

          <h2 className="heading-lg leading-tight">
            Free, Open Source, and Built in the Open
          </h2>

          <p className="subheading leading-relaxed max-w-lg">
            {siteConfig.name} is completely open source under the MIT license. Star the repo to support the project, or open an
            issue if you hit a bug or have a feature idea - it&apos;s actively maintained and every issue gets looked at.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a 
              href={siteConfig.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <StarIcon size={16} />
              Star on GitHub
            </a>
            
            <a 
              href={siteConfig.issuesUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary"
            >
              <BugReportIcon size={16} />
              Report an Issue
            </a>
          </div>

          {/* Highlight chips */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {highlights.map(({ Icon, title, description }) => (
              <div key={title} className="flex flex-col gap-1">
                <div className="flex items-center gap-2 text-primary font-bold text-sm">
                  <Icon size={16} />
                  <span className="text-text-light dark:text-text-dark">{title}</span>
                </div>
                <p className="text-xs text-text-muted-light dark:text-text-muted-dark leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Repo card */}
        <div className="relative">
          <div className="absolute -inset-5 bg-primary/15 blur-3xl rounded-full pointer-events-none"></div>
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block card-interactive shadow-xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <GitHubIcon size={32} className="text-text-light dark:text-text-dark group-hover:text-primary transition-colors shrink-0" />
                <div>
                  <p className="font-bold text-text-light dark:text-text-dark group-hover:text-primary transition-colors text-base">
                    BhalliBhai/gprg
                  </p>
                  <p className="text-xs text-text-muted-light dark:text-text-muted-dark">Public repository</p>
                </div>
              </div>
              <ArrowOutwardIcon size={18} className="text-text-muted-light dark:text-text-muted-dark group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg hairline-border-light dark:hairline-border bg-background-light dark:bg-background-dark p-3.5 flex items-center gap-2.5">
                <ScaleIcon size={18} className="text-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold text-text-light dark:text-text-dark">MIT</p>
                  <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark">License</p>
                </div>
              </div>
              <div className="rounded-lg hairline-border-light dark:hairline-border bg-background-light dark:bg-background-dark p-3.5 flex items-center gap-2.5">
                <TerminalIcon size={18} className="text-primary shrink-0" />
                <div>
                  <p className="text-xs font-bold text-text-light dark:text-text-dark">TypeScript</p>
                  <p className="text-[10px] text-text-muted-light dark:text-text-muted-dark">Next.js</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border-light dark:border-border-dark flex items-center gap-2 text-xs text-text-muted-light dark:text-text-muted-dark">
              <ArrowOutwardIcon size={12} className="opacity-70" />
              View source, open issues, or submit a pull request
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}