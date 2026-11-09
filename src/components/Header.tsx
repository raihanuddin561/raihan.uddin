'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { personalConfig } from '@/config/personal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080c14]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 light:bg-white/90 light:border-slate-200'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus-visible:outline-none"
            aria-label="Raihan Uddin - Home"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-sky-500/30 bg-sky-500/10 font-mono text-xs font-semibold text-sky-400 group-hover:border-sky-400 group-hover:bg-sky-500/20 transition-colors">
              RU
            </span>
            <span className="text-sm font-semibold tracking-tight text-slate-100 group-hover:text-sky-400 transition-colors light:text-slate-900">
              Raihan Uddin
            </span>
            <span className="hidden sm:inline-block text-xs font-mono text-slate-500 border-l border-slate-800 pl-2.5 light:border-slate-200">
              Backend Engineer
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-sky-400 transition-colors rounded-md hover:bg-slate-800/40 light:text-slate-600 light:hover:text-sky-600 light:hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/resume/Raihan_Uddin_Resume.pdf"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900 border border-slate-700/80 rounded-md hover:border-sky-500/60 hover:text-sky-300 hover:bg-slate-800/80 transition-all light:bg-slate-100 light:border-slate-300 light:text-slate-800"
            >
              <svg className="h-3.5 w-3.5 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-md transition-colors shadow-sm shadow-sky-500/20"
            >
              Contact
            </a>

            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:border-slate-600 hover:text-white"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#080c14]/98 px-4 py-5 shadow-2xl backdrop-blur-xl light:bg-white light:border-slate-200">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800/60 hover:text-sky-400 light:text-slate-700 light:hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-800/80 flex flex-col gap-2 light:border-slate-200">
              <a
                href="/resume/Raihan_Uddin_Resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900 py-2.5 text-xs font-semibold text-slate-200 light:bg-slate-100 light:border-slate-300 light:text-slate-800"
              >
                <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Resume (PDF)
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center rounded-md bg-sky-500 py-2.5 text-xs font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
              >
                Start a Conversation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
