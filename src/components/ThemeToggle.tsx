'use client';

import { useEffect, useState } from 'react';
import { useHydrationSafe } from '@/hooks/useHydrationSafe';

export default function ThemeToggle() {
  const isHydrated = useHydrationSafe();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      const saved = localStorage.getItem('portfolio_theme');
      if (saved === 'light') {
        setIsDark(false);
      } else {
        setIsDark(true);
      }
    } catch {
      setIsDark(true);
    }
  }, [isHydrated]);

  const toggleTheme = () => {
    if (!isHydrated) return;
    const nextDark = !isDark;
    setIsDark(nextDark);

    try {
      const root = document.documentElement;
      if (nextDark) {
        root.classList.add('dark');
        root.classList.remove('light');
        localStorage.setItem('portfolio_theme', 'dark');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        localStorage.setItem('portfolio_theme', 'light');
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700/60 bg-slate-900/60 text-slate-300 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      suppressHydrationWarning
    >
      {isDark ? (
        // Sun icon for dark mode (click to go light)
        <svg
          className="h-4 w-4 text-slate-300 transition-transform duration-200 hover:rotate-45"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      ) : (
        // Moon icon for light mode (click to go dark)
        <svg
          className="h-4 w-4 text-slate-600"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      )}
    </button>
  );
}
