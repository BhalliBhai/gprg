"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/generator", label: "Generator", icon: "edit_document" },
  { href: "/guide", label: "Guide", icon: "menu_book" },
  { href: "/templates", label: "Templates", icon: "style" },
  { href: "/faq", label: "FAQ", icon: "quiz" },
  { href: "/blog", label: "Blog", icon: "article" },
];

export function Header() {
  const creatorSupportUrl =
    process.env.NEXT_PUBLIC_BUY_ME_A_COFFEE_URL || "https://buymeacoffee.com/bhalli";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu on route change (e.g. tapping a link)
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="px-4 h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-background-light dark:bg-background-dark rounded-lg border border-primary/10 flex items-center justify-center">
              <Image className="rounded-full" src="/icon0.svg" alt="Logo" width={50} height={50} />
            </div>
          </div>
          <div className="md:flex flex-col space-y-0 hidden">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter text-slate-900 dark:text-white">
              GITHUB
            </h2>
            <span className="text-[9px] sm:text-[10px] font-bold text-primary/80 uppercase tracking-[0.2em] leading-none">
              Readme Maker
            </span>
          </div>
        </Link>

        {/* Desktop nav - unchanged */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8 text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5"
              href={link.href}
            >
              <span className="material-symbols-outlined text-[1.1rem]">{link.icon}</span>{" "}
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={creatorSupportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="items-center justify-center rounded-lg h-9 sm:h-10 px-4 sm:px-6 py-1 bg-primary text-slate-900 text-xs sm:text-sm font-bold hover:brightness-110 transition-all gap-2"
          >
            <span className="text-base sm:text-lg">☕</span>
            <span>Buy me a coffee</span>
          </a>

          {/* Hamburger button - mobile & tablet only */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-primary/10 text-slate-700 dark:text-slate-200"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 top-16 sm:top-20 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-down mobile/tablet menu panel */}
      <div
        id="mobile-nav-panel"
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 z-40 origin-top border-b border-primary/10 bg-background-light dark:bg-background-dark shadow-lg transition-all duration-200 ease-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-3 text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[1.3rem]">{link.icon}</span>
              {link.label}
            </Link>
          ))}

          {/* <a
            href={creatorSupportUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-slate-900 hover:brightness-110 transition-all"
          >
            <span className="text-lg">☕</span>
            <span>Buy me a coffee</span>
          </a> */}
        </nav>
      </div>
    </header>
  );
}