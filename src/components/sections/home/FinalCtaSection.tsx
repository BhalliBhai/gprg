import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { RocketIcon, BoltIcon, CheckCircleIcon } from '@/components/Icons';

export function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 px-6 relative overflow-hidden">
      <div className="container-app text-center flex flex-col items-center gap-6 sm:gap-8 max-w-3xl mx-auto">
        <div className="rounded-full bg-primary/10 p-4 border border-primary/20 text-primary">
          <RocketIcon size={32} />
        </div>
        <h2 className="heading-xl text-3xl sm:text-4xl lg:text-5xl font-bold">
          Ready to transform your profile?
        </h2>
        <p className="subheading text-base sm:text-lg max-w-xl">
          Join developers who have elevated their GitHub presence using {siteConfig.name}.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
          <Link
            href="/generator"
            className="btn-primary btn-lg w-full sm:w-auto"
          >
            Get Started Now <BoltIcon size={18} />
          </Link>
          <p className="text-xs text-text-muted-light dark:text-text-muted-dark flex items-center justify-center gap-1.5 mt-2 sm:mt-0">
            <CheckCircleIcon size={14} className="text-primary" /> Free to use. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}