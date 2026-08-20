'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#d7dfd9]/80 bg-[#f7f7f2]/90 backdrop-blur-md dark:border-[#344238] dark:bg-[#101512]/90">
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex h-[4.5rem] items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="font-serif text-2xl font-semibold tracking-tight text-[#15231b] dark:text-[#f4f0e8]" suppressHydrationWarning={true}>
              Raihan<span className="text-[#c96d35]">.</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-7">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-1 py-2 font-mono text-xs uppercase tracking-[0.12em] text-[#526159] transition-colors duration-200 hover:text-[#237a57] dark:text-[#c5cec7] dark:hover:text-[#72c79d]"
                  suppressHydrationWarning={true}
                >
                  {item.name}
                </a>
              ))}
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-[#a9b6ac] text-[#526159] hover:border-[#237a57] hover:text-[#237a57] focus:outline-none focus:ring-2 focus:ring-[#c96d35] dark:border-[#617166] dark:text-[#c5cec7]"
              suppressHydrationWarning={true}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="mt-2 space-y-1 border border-[#d7dfd9] bg-[#f7f7f2] px-2 pb-3 pt-2 shadow-lg dark:border-[#344238] dark:bg-[#101512]">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 font-mono text-xs uppercase tracking-[0.12em] text-[#526159] transition-colors duration-200 hover:text-[#237a57] dark:text-[#c5cec7] dark:hover:text-[#72c79d]"
                  onClick={() => setIsMenuOpen(false)}
                  suppressHydrationWarning={true}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
