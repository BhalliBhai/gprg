"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./ThemeToggle";
import {
  EditDocumentIcon,
  MenuBookIcon,
  StyleIcon,
  QuizIcon,
  ArticleIcon,
  MenuIcon,
  CloseIcon,
  CoffeeIcon,
} from "../Icons";

const navLinks = [
  { href: "/generator", label: "Generator", Icon: EditDocumentIcon },
  { href: "/guide", label: "Guide", Icon: MenuBookIcon },
  { href: "/templates", label: "Templates", Icon: StyleIcon },
  { href: "/faq", label: "FAQ", Icon: QuizIcon },
  { href: "/blog", label: "Blog", Icon: ArticleIcon },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMenuOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-light dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="container-app h-16 sm:h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent-blue rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-surface-light dark:bg-surface-dark rounded-lg hairline-border-light dark:hairline-border flex items-center justify-center p-1">
              <Image className="rounded-full" src="/icon0.svg" alt={`${siteConfig.name} Logo`} width={36} height={36} />
            </div>
          </div>
          <div className="md:flex flex-col space-y-0 hidden">
            <h2 className="text-xl sm:text-2xl font-black tracking-tighter text-text-light dark:text-text-dark">
              GITHUB
            </h2>
            <span className="text-[9px] sm:text-[10px] font-bold text-primary uppercase tracking-[0.2em] leading-none">
              Readme Maker
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8 text-text-muted-light dark:text-text-muted-dark">
          {navLinks.map(({ href, label, Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                  isActive
                    ? "text-primary font-semibold"
                    : "text-text-muted-light dark:text-text-muted-dark hover:text-text-light dark:hover:text-text-dark"
                }`}
                href={href}
              >
                <Icon size={16} className={isActive ? "text-primary" : "opacity-70"} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <a
            href={siteConfig.buyMeACoffeeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-sm sm:btn"
          >
            <CoffeeIcon size={16} />
            <span className="hidden sm:inline">Buy me a coffee</span>
            <span className="sm:hidden">Coffee</span>
          </a>

          {/* Hamburger button - mobile & tablet only */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden relative z-50 flex h-9 w-9 items-center justify-center rounded-lg hairline-border-light dark:hairline-border bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark"
          >
            {isMenuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
        className={`lg:hidden fixed inset-0 top-16 sm:top-20 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-200 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Slide-down mobile/tablet menu panel */}
      <div
        id="mobile-nav-panel"
        className={`lg:hidden fixed inset-x-0 top-16 sm:top-20 z-40 origin-top border-b border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-xl transition-all duration-200 ease-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="container-app flex flex-col py-4 gap-1">
          {navLinks.map(({ href, label, Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-base font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary font-bold"
                    : "text-text-light dark:text-text-dark hover:bg-surface-hover-light dark:hover:bg-surface-hover-dark"
                }`}
              >
                <Icon size={18} className={isActive ? "text-primary" : "opacity-70"} />
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}