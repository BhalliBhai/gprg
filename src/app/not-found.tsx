import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl">
        <div className="rounded-2xl bg-primary/10 border border-primary/20 p-6 mb-4 animate-pulse">
          <span className="material-symbols-outlined text-6xl text-primary">broken_image</span>
        </div>
        
        <h1 className="text-6xl sm:text-8xl font-black text-slate-900 dark:text-white tracking-tighter">
          404
        </h1>
        
        <h2 className="text-2xl sm:text-3xl font-bold dark:text-slate-200">
          Page Not Found
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg mb-4">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let&apos;s get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
          <Link 
            href="/" 
            className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 border border-slate-200 dark:border-primary/20 bg-white dark:bg-primary/5 text-slate-900 dark:text-white text-base font-bold hover:bg-slate-50 dark:hover:bg-primary/10 transition-all w-full sm:w-auto"
          >
            <span className="material-symbols-outlined">home</span>
            Return Home
          </Link>
          <Link 
            href="/generator"
            className="flex items-center justify-center gap-2 rounded-lg h-14 px-8 bg-primary text-background-dark text-base font-bold hover:scale-[1.02] transition-transform glow-effect w-full sm:w-auto"
          >
            Go to Editor
            <span className="material-symbols-outlined">edit_document</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
