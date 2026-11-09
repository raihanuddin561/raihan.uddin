import Image from 'next/image';
import { personalConfig } from '@/config/personal';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 overflow-hidden bg-[#080c14] light:bg-slate-50"
    >
      {/* Subtle background technical grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] light:opacity-[0.05]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Subtle ambient accent glow */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-[42rem] rounded-full bg-sky-500/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Text & Content (Cols 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Availability Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/20 bg-sky-500/5 px-3.5 py-1.5 text-xs text-slate-300 light:border-sky-300 light:bg-sky-50 light:text-slate-700">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-mono text-[0.7rem] uppercase tracking-wider text-emerald-400 font-semibold light:text-emerald-700">
                Principal Software Engineer @ BJIT Ltd.
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-400 light:text-sky-600 font-medium">
                Professional Portfolio · 7+ Years Experience
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white light:text-slate-900 leading-[1.08]">
                {personalConfig.name}
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-200 light:text-slate-800 tracking-tight">
                {personalConfig.headline}
                <span className="block text-sm sm:text-base font-normal font-mono text-slate-400 light:text-slate-600 mt-1">
                  Java · Spring Boot · Microservices · Backend Architecture
                </span>
              </p>
            </div>

            {/* Core Value Statement */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
              {personalConfig.tagline}
            </p>

            {/* Location & Summary Snippet */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 light:text-slate-600">
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Dhaka, Bangladesh</span>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Enterprise Java Systems</span>
              </div>
              <span className="text-slate-600">·</span>
              <div className="flex items-center gap-1.5">
                <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                </svg>
                <span>Production Relational DBs</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-sky-500 px-6 text-sm font-semibold text-slate-950 transition-all hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/20 active:scale-[0.98]"
              >
                <span>View My Work</span>
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>

              <a
                href="/resume/Raihan_Uddin_Resume.pdf"
                download
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-900/90 px-6 text-sm font-semibold text-slate-200 transition-all hover:border-sky-500/50 hover:bg-slate-800 hover:text-white active:scale-[0.98] light:bg-white light:border-slate-300 light:text-slate-800"
              >
                <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex h-11 items-center justify-center rounded-md border border-slate-800 px-5 text-sm font-medium text-slate-400 transition-colors hover:border-slate-700 hover:text-slate-200 light:border-slate-200 light:text-slate-600 light:hover:text-slate-900"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="pt-2 flex items-center gap-4 border-t border-slate-800/80 light:border-slate-200">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
              <a
                href={personalConfig.social.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-sky-400 transition-colors"
              >
                <svg className="h-4 w-4 fill-current text-sky-400" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href={personalConfig.social.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-sky-400 transition-colors"
              >
                <svg className="h-4 w-4 fill-current text-sky-400" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                href={`mailto:${personalConfig.contact.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
              >
                <svg className="h-4 w-4 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span>{personalConfig.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Professional Portrait (Cols 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Outer decorative framing with subtle technical corner borders */}
              <div className="relative rounded-2xl p-2.5 bg-gradient-to-b from-slate-700/50 via-slate-800/20 to-slate-800/60 border border-slate-700/60 shadow-2xl shadow-black/60 light:from-slate-200 light:to-slate-100 light:border-slate-300">
                {/* Subtle cyan corner accent mark */}
                <div className="absolute top-0 left-0 h-4 w-4 border-t-2 border-l-2 border-sky-400 rounded-tl-2xl pointer-events-none" />
                <div className="absolute top-0 right-0 h-4 w-4 border-t-2 border-r-2 border-sky-400 rounded-tr-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 h-4 w-4 border-b-2 border-l-2 border-sky-400 rounded-bl-2xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 h-4 w-4 border-b-2 border-r-2 border-sky-400 rounded-br-2xl pointer-events-none" />

                {/* Portrait Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-slate-900 light:bg-slate-200">
                  <Image
                    src="/images/raihan-uddin.jpeg"
                    alt="Raihan Uddin — Senior Backend Engineer"
                    fill
                    priority
                    sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 380px"
                    className="object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                  />
                  {/* Subtle inner gradient shadow at bottom to improve readability of overlay tag */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/90 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Executive Title Card / Overlay Banner */}
                <div className="absolute bottom-5 left-5 right-5 rounded-lg border border-slate-700/80 bg-[#080c14]/95 p-3.5 backdrop-blur-md shadow-lg light:bg-white/95 light:border-slate-200">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-bold text-white light:text-slate-900 tracking-tight">
                        Raihan Uddin
                      </p>
                      <p className="text-[0.7rem] font-mono text-sky-400 light:text-sky-600">
                        Principal Software Engineer
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded border border-slate-700 bg-slate-900/80 px-2 py-1 font-mono text-[0.65rem] text-slate-300 light:border-slate-300 light:bg-slate-100 light:text-slate-700">
                      BJIT Ltd.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
