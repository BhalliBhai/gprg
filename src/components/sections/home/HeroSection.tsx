import Link from 'next/link';
import { siteConfig } from '../../../config/site';

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-16 px-6 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-6 lg:gap-8 text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">v2.0 is live</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
            Level Up Your <br className="hidden sm:block lg:hidden" /> <span className="text-primary">GitHub Profile</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Create professional, data-driven READMEs in minutes. Generate your bio with AI, showcase your skills, stats, and projects like a pro - all for free.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
            <Link href="/generator" className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary text-background-dark text-base font-bold hover:scale-[1.02] transition-transform glow-effect w-full sm:w-auto">
              Get Started <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Built by <a className="font-bold text-primary hover:underline" href={siteConfig.creatorUrl} target="_blank" rel="noopener noreferrer">Bhalli.dev</a> for developers who want a profile that looks world-class.
          </p>
        </div>

        {/* Visual Preview Mockup */}
        <div className="relative order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-full">
          <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30"></div>
          <div className="relative rounded-xl border border-slate-200 dark:border-primary/20 bg-white dark:bg-[#152a1c] p-2 shadow-2xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-primary/10 bg-slate-50 dark:bg-background-dark/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="mx-auto text-[10px] font-mono text-slate-400 dark:text-primary/40 uppercase tracking-widest flex items-center gap-1">
                <span className="material-symbols-outlined text-[10px]">edit</span> readme-generator.md
              </div>
            </div>
            <div className="aspect-square sm:aspect-4/3 lg:aspect-square xl:aspect-4/3 w-full bg-white dark:bg-background-dark p-4 sm:p-6 overflow-hidden">
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center justify-between">
                  <div className="h-6 sm:h-8 w-32 sm:w-48 bg-slate-100 dark:bg-primary/10 rounded-lg"></div>
                  <div className="h-5 sm:h-6 w-20 sm:w-24 bg-primary/20 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="h-24 sm:h-32 rounded-lg border border-slate-100 dark:border-primary/10 bg-slate-50 dark:bg-primary/5 p-3 sm:p-4 flex flex-col justify-end gap-2">
                    <div className="h-2 w-full bg-primary/30 rounded"></div>
                    <div className="h-2 w-2/3 bg-primary/20 rounded"></div>
                  </div>
                  <div className="h-24 sm:h-32 rounded-lg border border-slate-100 dark:border-primary/10 bg-slate-50 dark:bg-primary/5 p-3 sm:p-4 flex flex-col justify-end gap-2">
                    <div className="h-2 w-full bg-primary/30 rounded"></div>
                    <div className="h-2 w-2/3 bg-primary/20 rounded"></div>
                  </div>
                  <div className="hidden sm:flex h-32 rounded-lg border border-slate-100 dark:border-primary/10 bg-slate-50 dark:bg-primary/5 p-4 flex-col justify-end gap-2">
                    <div className="h-2 w-full bg-primary/30 rounded"></div>
                    <div className="h-2 w-2/3 bg-primary/20 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2 sm:space-y-3">
                  <div className="h-2 sm:h-3 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                  <div className="h-2 sm:h-3 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                  <div className="h-2 sm:h-3 w-4/5 bg-slate-100 dark:bg-slate-800 rounded"></div>
                </div>
                <div className="pt-2 sm:pt-4 flex gap-2 sm:gap-3">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/20"></div>
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/20"></div>
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/20"></div>
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}