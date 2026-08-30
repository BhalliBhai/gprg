import { siteConfig } from '../../../config/site'

const highlights = [
  {
    icon: 'lock_open',
    title: 'MIT Licensed',
    description: 'Free to use, fork, and build on - no restrictions.',
  },
  {
    icon: 'bug_report',
    title: 'Issues Welcome',
    description: 'Found a bug or have an idea? Open an issue directly.',
  },
  {
    icon: 'volunteer_activism',
    title: 'Free Forever',
    description: 'No paywalls, no premium tier. GPRM stays free for everyone.',
  },
];

export function OpenSourceSection() {
  return (
    <section className="py-16 sm:py-24 px-6 border-b border-slate-200 dark:border-primary/10 bg-white dark:bg-background-dark">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]">
              <span className="material-symbols-outlined text-sm">code</span> Open Source
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 text-xs font-semibold">
              <span className="material-symbols-outlined text-sm">verified</span> MIT Licensed
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white leading-tight">
            Free, Open Source, and Built in the Open
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg">
            GPRM is completely open source under the MIT license. Star the repo to support the project, or open an
            issue if you hit a bug or have a feature idea - it&apos;s actively maintained and every issue gets looked at.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            
            <a 
              href={siteConfig.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 bg-slate-900 text-white dark:bg-primary dark:text-background-dark font-bold hover:scale-[1.02] transition-transform"
            >
              <span className="material-symbols-outlined text-lg">star</span>
              Star on GitHub
            </a>
            
            <a 
              href={`${siteConfig.repoUrl}/issues/new`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 rounded-lg h-12 px-6 border border-slate-300 dark:border-primary/30 text-slate-700 dark:text-slate-200 font-bold hover:border-primary hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">bug_report</span>
              Report an Issue
            </a>
          </div>

          {/* Highlight chips - qualitative, no fabricated numbers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {highlights.map((item) => (
              <div key={item.title} className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-lg">{item.icon}</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{item.description}</p>
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
                className="group relative block rounded-2xl border border-slate-200 dark:border-primary/20 bg-slate-50 dark:bg-primary/5 p-8 shadow-xl hover:border-primary/40 transition-colors"
            >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <svg className="w-9 h-9 text-slate-900 dark:text-white shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.42-4.04-1.42-.55-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.84 1.23 1.84 1.23 1.06 1.81 2.77 1.29 3.45.99.1-.77.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.31-.54-1.56.12-3.24 0 0 1.01-.32 3.3 1.24a11.4 11.4 0 0 1 6.01 0c2.28-1.56 3.3-1.24 3.3-1.24.66 1.68.24 2.93.12 3.24.77.84 1.24 1.92 1.24 3.24 0 4.63-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22v3.29c0 .32.21.69.83.58A12 12 0 0 0 12 .5Z" />
                </svg>
                <div>
                  <p className="font-black text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    BhalliBhai/gprm
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Public repository</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-400 dark:text-slate-500 group-hover:text-primary group-hover:translate-x-0.5 transition-all">
                arrow_outward
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 dark:border-primary/15 bg-white dark:bg-background-dark p-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">balance</span>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">MIT</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">License</p>
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-primary/15 bg-white dark:bg-background-dark p-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">terminal</span>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">TypeScript</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Next.js</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-primary/10 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              View source, open issues, or submit a pull request
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}