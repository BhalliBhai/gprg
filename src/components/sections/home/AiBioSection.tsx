import Link from 'next/link';
import { SparklesIcon, CheckCircleIcon } from '@/components/Icons';

const tones = ['Professional', 'Witty', 'Casual', 'Minimal'];

export function AiBioSection() {
  return (
    <section className="py-16 sm:py-24 px-6 border-b border-border-light dark:border-border-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container-app relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="flex flex-col gap-6">
            <div className="badge-green gap-2 w-fit">
              <SparklesIcon size={14} className="text-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Industry First</span>
            </div>
            <h2 className="heading-lg leading-tight">
              Write Your Bio with <span className="text-primary">AI</span>
            </h2>
            <p className="subheading leading-relaxed max-w-lg">
              No other GitHub README generator offers this. Just fill in your details, pick a tone, and our AI writes a
              professional, witty, or casual bio for you in seconds - powered by Google&apos;s latest Generative AI.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              {tones.map((tone) => (
                <span
                  key={tone}
                  className="badge-neutral text-xs font-semibold px-3 py-1"
                >
                  {tone}
                </span>
              ))}
            </div>
            <Link
              href="/generator"
              className="btn-primary w-fit mt-2"
            >
              <SparklesIcon size={16} />
              Try AI Bio Generator
            </Link>
          </div>

          {/* Right: Visual Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-primary/30 via-accent-blue/20 to-primary/30 rounded-2xl blur-sm opacity-60"></div>
            <div className="relative rounded-xl hairline-border-light dark:hairline-border bg-surface-light dark:bg-surface-dark p-1 shadow-2xl">
              {/* Top bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border-light dark:border-border-dark bg-surface-hover-light dark:bg-background-dark/50 rounded-t-lg">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="mx-auto text-[10px] font-mono text-text-muted-light dark:text-text-muted-dark uppercase tracking-widest flex items-center gap-1.5">
                  <SparklesIcon size={12} className="text-primary" /> ai-bio-generator
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-5">
                {/* Tone selector mock */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted-light dark:text-text-muted-dark">Tone:</span>
                  <span className="px-2.5 py-0.5 rounded bg-primary text-white text-[10px] font-bold">Witty</span>
                  <span className="px-2.5 py-0.5 rounded bg-surface-hover-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark text-[10px] font-medium">
                    Professional
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-surface-hover-light dark:bg-surface-dark border border-border-light dark:border-border-dark text-text-muted-light dark:text-text-muted-dark text-[10px] font-medium">
                    Casual
                  </span>
                </div>
                {/* Generated bio mock */}
                <div className="space-y-2.5 font-mono text-xs text-text-light dark:text-text-dark leading-relaxed">
                  <p className="text-primary font-bold">## 👋 Hey, I&apos;m Alex!</p>
                  <p>
                    A <span className="text-primary font-bold">Full Stack Developer</span> who turns caffeine into code ☕
                  </p>
                  <p>🔭 Currently building the next big thing</p>
                  <p>
                    🌱 Learning <span className="text-primary">Rust</span> and <span className="text-primary">WebAssembly</span>
                  </p>
                  <p>
                    💬 Ask me about <span className="text-primary">React</span>, <span className="text-primary">Node.js</span>, and modern web
                  </p>
                  <p>
                    📫 Reach me at <span className="text-primary underline">alex@dev.io</span>
                  </p>
                </div>
                {/* Bottom bar */}
                <div className="flex items-center justify-between pt-3 border-t border-border-light dark:border-border-dark">
                  <span className="text-[10px] text-text-muted-light dark:text-text-muted-dark font-bold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircleIcon size={12} className="text-primary" /> Generated in 1.2s
                  </span>
                  <span className="btn-primary btn-sm text-[10px] py-0.5 px-2.5">Copy to Editor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}