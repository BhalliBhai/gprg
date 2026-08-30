type Step = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: '01',
    icon: 'account_circle',
    title: 'Fill Info',
    description:
      'Connect your GitHub account and add your personal details, biography, and location automatically.',
  },
  {
    number: '02',
    icon: 'token',
    title: 'Select Tech',
    description:
      'Pick from 200+ icons of frameworks, languages, and tools you use from our extensive curated library.',
  },
  {
    number: '03',
    icon: 'dashboard_customize',
    title: 'Choose Design',
    description:
      'Select from multiple modern layouts and customize colors, themes, and animations to match your personal brand.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-24 px-6 border-y border-slate-200 dark:border-primary/10 bg-slate-50 dark:bg-white/2">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-12 sm:mb-20">
          <span className="text-primary font-bold text-sm uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">route</span> Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white">Three steps to a better profile</h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Our streamlined process helps you build a stunning README without touching any complex markdown code.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group relative flex flex-col p-6 sm:p-8 rounded-xl border border-slate-200 dark:border-primary/10 bg-white dark:bg-background-dark hover:border-primary/40 transition-all ${
                index === steps.length - 1 ? 'sm:col-span-2 md:col-span-1' : ''
              }`}
            >
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-4xl sm:text-6xl font-black text-slate-100 dark:text-primary/5 select-none">
                {step.number}
              </div>
              <div className="size-12 sm:size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-2xl sm:text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 dark:text-white">{step.title}</h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}