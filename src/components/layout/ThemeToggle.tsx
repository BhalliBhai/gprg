"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "../Icons";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const stored = localStorage.getItem("theme");
    if (stored) {
      const dark = stored === "dark";
      setIsDark(dark);
      document.documentElement.classList.toggle("dark", dark);
    } else {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(systemDark);
      document.documentElement.classList.toggle("dark", systemDark);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.classList.toggle("dark", nextDark);
    localStorage.setItem("theme", nextDark ? "dark" : "light");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative inline-flex items-center justify-center p-2 rounded-lg border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark hover:bg-surface-hover-light dark:hover:bg-surface-hover-dark transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/40 ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {!mounted ? (
        <span className="w-5 h-5 opacity-0" aria-hidden="true" />
      ) : isDark ? (
        <SunIcon size={18} className="text-amber-400 hover:text-amber-300 transition-transform duration-200 rotate-0 hover:rotate-12" />
      ) : (
        <MoonIcon size={18} className="text-slate-700 hover:text-slate-900 transition-transform duration-200 -rotate-12 hover:rotate-0" />
      )}
    </button>
  );
}
