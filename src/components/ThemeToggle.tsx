'use client';

import { useEffect, useState } from 'react';
import { useHydrationSafe } from '@/hooks/useHydrationSafe';
import { cleanupThemeStorage } from '@/utils/storageCleanup';

export default function ThemeToggle() {
  const isHydrated = useHydrationSafe();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Load theme from localStorage on mount
  useEffect(() => {
    if (!isHydrated) return;
    
    try {
      // Clean up any malformed theme values
      cleanupThemeStorage();
      
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        setTheme(savedTheme);
      }
    } catch (error) {
      console.error('Error loading theme from localStorage:', error);
    }
  }, [isHydrated]);

  // Apply theme to document and save to localStorage
  useEffect(() => {
    if (!isHydrated || typeof window === 'undefined') return;
    
    try {
      // Apply theme to document
      const htmlElement = document.documentElement;
      htmlElement.classList.remove('dark');
      
      if (theme === 'dark') {
        htmlElement.classList.add('dark');
      }
      
      // Save theme to localStorage
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Error applying theme:', error);
    }
  }, [theme, isHydrated]);

  const toggleTheme = () => {
    if (!isHydrated) return; // Prevent action before hydration
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Always render exactly the same structure - no conditional attributes
  return (
    <button
      onClick={toggleTheme}
      className="group relative p-2 rounded-lg border transition-all duration-300 hover:scale-105 bg-gray-100 border-gray-300 hover:border-blue-500 hover:bg-gray-200"
      aria-label="Toggle theme"
      title="Toggle between light and dark mode"
      suppressHydrationWarning={true}
    >
      <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"/>
      </svg>
    </button>
  );
}
