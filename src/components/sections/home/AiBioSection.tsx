import Link from 'next/link';

const tones = ['Professional', 'Witty', 'Casual', 'Minimal'];

export function AiBioSection() {
  return (
    <section className="py-16 sm:py-24 px-6 border-b border-slate-200 dark:border-primary/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 w-fit">
              <span className="material-symbols-outlined text-primary text-sm animate-pulse">auto_awesome</span>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Industry First</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white leading-tight">
              Write Your Bio with <span className="text-primary">AI</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              No other GitHub README generator offers this. Just fill in your details, pick a tone, and our AI writes a
              professional, witty, or casual bio for you in seconds - powered by Google&apos;s latest Generative AI.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {tones.map((tone) => (
                <span
                  key={tone}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white dark:bg-primary/10 border border-slate-200 dark:border-primary/20 text-slate-700 dark:text-slate-300"
                >
                  {tone}
                </span>
              ))}
            </div>
            <Link
              href="/generator"
              className="flex items-center justify-center gap-2 rounded-lg h-12 px-8 bg-primary text-background-dark text-sm font-bold hover:scale-[1.02] transition-transform glow-effect w-fit mt-2"
            >
              <span className="material-symbols-outlined text-sm">auto_awesome</span>
              Try AI Bio Generator
            </Link>
          </div>

          {/* Right: Visual Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-primary/40 via-primary/20 to-primary/40 rounded-2xl blur-sm opacity-60 animate-pulse"></div>
            <div className="relative rounded-xl border border-primary/20 bg-white dark:bg-dark p-1 shadow-2xl">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 dark:border-primary/10 bg-slate-50 dark:bg-background-dark/50 rounded-t-lg">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="mx-auto text-[10px] font-mono text-slate-400 dark:text-primary/40 uppercase tracking-widest flex items-center gap-1">
                  <span className="material-symbols-outlined text-[10px]">auto_awesome</span> ai-bio-generator
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-5">
                {/* Tone selector mock */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Tone:</span>
                  <span className="px-2 py-0.5 rounded bg-primary text-background-dark text-[10px] font-bold">Witty</span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-slate-200 dark:border-primary/10 text-slate-500 dark:text-slate-400 text-[10px] font-bold">
                    Professional
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-slate-200 dark:border-primary/10 text-slate-500 dark:text-slate-400 text-[10px] font-bold">
                    Casual
                  </span>
                </div>
                {/* Generated bio mock */}
                <div className="space-y-3 font-mono text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  <p className="text-primary font-bold">## 👋 Hey, I&apos;m Alex!</p>
                  <p>
                    A <span className="text-primary font-bold">Full Stack Developer</span> who turns caffeine into code ☕
                  </p>
                  <p>🔭 Currently building the next big thing</p>
                  <p>
                    🌱 Learning <span className="text-primary">Rust</span> and <span className="text-primary">WebAssembly</span>
                  </p>
                  <p>
                    💬 Ask me about <span className="text-primary">React</span>, <span className="text-primary">Node.js</span>, and why
                    tabs are better
                  </p>
                  <p>
                    📫 Reach me at <span className="text-primary underline">alex@dev.io</span>
                  </p>
                </div>
                {/* Bottom bar */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-primary/10">
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1">
                    <span className="material-symbols-outlined text-primary text-xs">check_circle</span> Generated in 1.2s
                  </span>
                  <span className="px-3 py-1 bg-primary rounded text-background-dark text-[10px] font-bold">Copy to Editor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}