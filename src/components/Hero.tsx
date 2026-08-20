import Image from 'next/image';
import { personalConfig } from '@/config/personal';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f7f7f2] pt-28 dark:bg-[#101512]">
      <div className="absolute inset-x-0 top-0 h-2 bg-[#c96d35]" />
      {/* Subtle dot-grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]" style={{backgroundImage:'radial-gradient(circle,#15231b 1px,transparent 1px)',backgroundSize:'28px 28px'}} />
      <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.55fr_.65fr] lg:gap-16 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          {/* Availability badge */}
          <div className="mb-6 inline-flex items-center gap-2 border border-[#9bc5ac] bg-[#e8f3ec] px-3 py-1.5 dark:border-[#3a6650] dark:bg-[#1b2e22]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#237a57] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#237a57]" />
            </span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#237a57] dark:text-[#72c79d]">Open to opportunities</span>
          </div>

          <p className="mb-4 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[#657269] dark:text-[#8a968d]">
            Dhaka, Bangladesh · 7+ years in engineering
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.04] text-[#15231b] sm:text-6xl lg:text-7xl dark:text-[#f4f0e8]">
            Raihan Uddin
          </h1>
          <p className="mt-5 text-xl font-semibold leading-snug text-[#1f4d3a] sm:text-2xl dark:text-[#96d8b4]">
            Principal Software Engineer · Java &amp; Spring Boot
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4f5d54] dark:text-[#c5cec7]">
            I design and lead enterprise backend systems with thoughtful API architecture, durable service layers, and pragmatic technical direction.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex min-h-11 items-center bg-[#237a57] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#185d41] focus:outline-none focus:ring-2 focus:ring-[#c96d35] focus:ring-offset-2 dark:focus:ring-offset-[#101512]">
              Start a conversation
            </a>
            <a href="/resume/Raihan_Uddin_Resume.pdf" download className="inline-flex min-h-11 items-center gap-2 border border-[#a9b6ac] px-5 py-3 text-sm font-semibold text-[#1f4d3a] transition-colors hover:border-[#237a57] hover:bg-[#e7eee8] focus:outline-none focus:ring-2 focus:ring-[#c96d35] focus:ring-offset-2 dark:border-[#617166] dark:text-[#b9dfc8] dark:hover:bg-[#1b2820] dark:focus:ring-offset-[#101512]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17v3a1 1 0 001 1h16a1 1 0 001-1v-3" /></svg>
              Download Resume
            </a>
            <a href="#experience" className="inline-flex min-h-11 items-center border border-[#a9b6ac] px-5 py-3 text-sm font-semibold text-[#1f4d3a] transition-colors hover:border-[#237a57] hover:bg-[#e7eee8] focus:outline-none focus:ring-2 focus:ring-[#c96d35] focus:ring-offset-2 dark:border-[#617166] dark:text-[#b9dfc8] dark:hover:bg-[#1b2820] dark:focus:ring-offset-[#101512]">
              View experience
            </a>
          </div>

          {/* Key metrics strip */}
          <div className="mt-10 grid grid-cols-3 gap-px border border-[#d7dfd9] bg-[#d7dfd9] dark:border-[#3a463e] dark:bg-[#3a463e]">
            <div className="bg-[#f7f7f2] px-5 py-4 dark:bg-[#101512]">
              <p className="font-serif text-2xl font-semibold text-[#15231b] dark:text-[#f4f0e8]">7+</p>
              <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.1em] text-[#657269]">Yrs experience</p>
            </div>
            <div className="bg-[#f7f7f2] px-5 py-4 dark:bg-[#101512]">
              <p className="font-serif text-2xl font-semibold text-[#15231b] dark:text-[#f4f0e8]">5</p>
              <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.1em] text-[#657269]">Companies</p>
            </div>
            <div className="bg-[#f7f7f2] px-5 py-4 dark:bg-[#101512]">
              <p className="font-serif text-2xl font-semibold text-[#15231b] dark:text-[#f4f0e8]">10+</p>
              <p className="mt-0.5 font-mono text-xs uppercase tracking-[0.1em] text-[#657269]">Projects</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 font-mono text-sm text-[#526159] dark:text-[#c5cec7]">
            <a className="underline decoration-[#c96d35] decoration-2 underline-offset-4 hover:text-[#237a57]" href={`mailto:${personalConfig.contact.email}`}>{personalConfig.contact.email}</a>
            <a className="underline decoration-[#c96d35] decoration-2 underline-offset-4 hover:text-[#237a57]" href={personalConfig.social.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="underline decoration-[#c96d35] decoration-2 underline-offset-4 hover:text-[#237a57]" href={personalConfig.social.github.url} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-sm">
          <div className="absolute -inset-3 translate-x-3 translate-y-3 border border-[#c96d35]/45" />
          <div className="relative aspect-[5/4] overflow-hidden bg-[#d8e3da]">
            <Image src="/images/raihan-uddin.jpg" alt="Raihan Uddin" fill priority sizes="(max-width: 1024px) 90vw, 28vw" className="object-cover grayscale" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-[#15231b] px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#e8efe9] dark:bg-[#c96d35]">
            Java · Spring Boot · REST APIs
          </div>
        </div>
      </div>
    </section>
  );
}
