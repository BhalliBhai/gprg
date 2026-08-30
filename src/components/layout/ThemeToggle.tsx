"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "../Icons";

function subscribe() {
  // No external events to subscribe to — mount status never changes after
  // the initial client render, so this is a no-op unsubscribe.
  return () => {};
}

function useMounted() {
  return useSyncExternalStore(
    subscribe,
    () => true,   // client snapshot
    () => false   // server snapshot
  );
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
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
        <SunIcon
          size={18}
          className="text-amber-400 hover:text-amber-300 transition-transform duration-200 rotate-0 hover:rotate-12"
        />
      ) : (
        <MoonIcon
          size={18}
          className="text-slate-700 hover:text-slate-900 transition-transform duration-200 -rotate-12 hover:rotate-0"
        />
      )}
    </button>
  );
}