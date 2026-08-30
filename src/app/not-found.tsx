import Link from 'next/link';
import { BrokenImageIcon, HomeIcon, EditDocumentIcon } from '@/components/Icons';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 relative overflow-hidden">
      {/* Background Decorators */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center gap-6 max-w-2xl">
        <div className="rounded-2xl bg-primary/10 border border-primary/20 p-5 mb-2">
          <BrokenImageIcon size={48} className="text-primary" />
        </div>
        
        <h1 className="text-6xl sm:text-8xl font-black text-text-light dark:text-text-dark tracking-tighter">
          404
        </h1>
        
        <h2 className="heading-lg">
          Page Not Found
        </h2>
        
        <p className="subheading max-w-lg mb-2">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
          <Link 
            href="/" 
            className="btn-secondary btn-lg w-full sm:w-auto"
          >
            <HomeIcon size={18} />
            Return Home
          </Link>
          <Link 
            href="/generator"
            className="btn-primary btn-lg w-full sm:w-auto"
          >
            Go to Generator
            <EditDocumentIcon size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
