type Feature = {
  icon: string;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: 'auto_awesome',
    title: 'AI-Powered Bio & Socials',
    description:
      'Write your bio in seconds with our AI generator - pick a tone and let AI craft the perfect intro. Link your socials with beautiful, consistent iconography.',
  },
  {
    icon: 'apps',
    title: '200+ Tech Icons',
    description:
      'An interactive skill selection grid. Search and filter through a massive library of framework and language badges.',
  },
  {
    icon: 'insights',
    title: 'Dynamic Analytics',
    description:
      'Real-time preview of your GitHub stats, top languages, and contribution streaks directly in the editor.',
  },
  {
    icon: 'auto_awesome_motion',
    title: 'Premium Templates',
    description:
      'Choose from 5+ diverse, high-conversion README designs tailored for different developer roles and styles.',
  },
];

function FeatureCard({ icon, title, description }: Feature) {
  return (
    <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 hover:bg-primary/10 transition-colors">
      <div className="size-10 sm:size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4 sm:mb-6">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 dark:text-white">{title}</h3>
      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 px-6 border-b border-slate-200 dark:border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12 sm:mb-20">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">construction</span> Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white">
            Everything you need for a <br className="hidden sm:block lg:hidden" />
            <span className="text-primary">perfect README</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Powerful tools designed to make your GitHub profile stand out from the crowd.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}

          {/* Markdown Export - different layout, kept explicit rather than
              forced into the shared FeatureCard shape */}
          <div className="p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-primary/5 hover:bg-primary/10 transition-colors sm:col-span-2">
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start md:items-center">
              <div className="flex-1">
                <div className="size-10 sm:size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-4 sm:mb-6">
                  <span className="material-symbols-outlined">content_copy</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 dark:text-white">Markdown Export</h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                  No complicated downloads required. One-click copy to clipboard or download the .md file directly to your local machine.
                </p>
              </div>
              <div className="w-full md:w-auto flex md:flex-col lg:flex-row gap-2 p-4 bg-background-dark/50 rounded-lg border border-primary/20 items-center justify-center">
                <span className="material-symbols-outlined text-primary hidden md:block lg:hidden">download</span>
                <div className="px-3 py-1 bg-primary/10 rounded text-xs font-mono text-primary flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px] lg:hidden">description</span> README.md
                </div>
                <div className="px-3 py-1 bg-white/5 rounded text-xs font-mono text-slate-400 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px] lg:hidden">check_circle</span> Exported
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}