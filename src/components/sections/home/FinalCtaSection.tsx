import Link from 'next/link';

export function FinalCtaSection() {
  return (
    <section className="py-16 sm:py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 sm:gap-10">
        <div className="rounded-full bg-primary/10 p-4 border border-primary/20 text-primary">
          <span className="material-symbols-outlined text-4xl">rocket_launch</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold dark:text-white">Ready to transform your profile?</h2>
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
          Join over 50,000+ developers who have already elevated their GitHub presence using GPRM.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/generator"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg h-14 px-10 bg-primary text-background-dark text-lg font-bold hover:scale-[1.05] transition-transform glow-effect"
          >
            Get Started Now <span className="material-symbols-outlined">bolt</span>
          </Link>
          <p className="text-sm text-slate-500 dark:text-slate-500 flex items-center justify-center gap-1 mt-2 sm:mt-0">
            <span className="material-symbols-outlined text-xs">money_off</span> Free to use. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
}