import Image from 'next/image';
import { personalConfig } from '@/config/personal';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f7f7f2] pt-28 dark:bg-[#101512]">
      <div className="absolute inset-x-0 top-0 h-2 bg-[#c96d35]" />
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.3fr_.7fr] lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-6 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[#237a57] dark:text-[#72c79d]">
            Dhaka, Bangladesh · 7+ years in engineering
          </p>
          <h1 className="font-serif text-5xl font-semibold leading-[1.04] text-[#15231b] sm:text-6xl lg:text-7xl dark:text-[#f4f0e8]">
            Raihan Uddin
          </h1>
          <p className="mt-6 text-xl font-semibold leading-snug text-[#1f4d3a] sm:text-2xl dark:text-[#96d8b4]">
            Principal Software Engineer | Java &amp; Spring Boot
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4f5d54] dark:text-[#c5cec7]">
            I design and lead enterprise backend systems with thoughtful API architecture, durable service layers, and pragmatic technical direction.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex min-h-11 items-center bg-[#237a57] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#185d41] focus:outline-none focus:ring-2 focus:ring-[#c96d35] focus:ring-offset-2 dark:focus:ring-offset-[#101512]">
              Start a conversation
            </a>
            <a href="#experience" className="inline-flex min-h-11 items-center border border-[#a9b6ac] px-5 py-3 text-sm font-semibold text-[#1f4d3a] transition-colors hover:border-[#237a57] hover:bg-[#e7eee8] focus:outline-none focus:ring-2 focus:ring-[#c96d35] focus:ring-offset-2 dark:border-[#617166] dark:text-[#b9dfc8] dark:hover:bg-[#1b2820] dark:focus:ring-offset-[#101512]">
              View experience
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 font-mono text-sm text-[#526159] dark:text-[#c5cec7]">
            <a className="underline decoration-[#c96d35] decoration-2 underline-offset-4 hover:text-[#237a57]" href={`mailto:${personalConfig.contact.email}`}>{personalConfig.contact.email}</a>
            <a className="underline decoration-[#c96d35] decoration-2 underline-offset-4 hover:text-[#237a57]" href={personalConfig.social.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="underline decoration-[#c96d35] decoration-2 underline-offset-4 hover:text-[#237a57]" href={personalConfig.social.github.url} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute -inset-4 border border-[#c96d35]/45" />
          <div className="relative aspect-[4/5] overflow-hidden bg-[#d8e3da]">
            <Image src="/images/raihan-uddin.jpeg" alt="Raihan Uddin" fill priority sizes="(max-width: 1024px) 90vw, 34vw" className="object-cover grayscale" />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-[#15231b] px-5 py-4 font-mono text-xs uppercase tracking-[0.12em] text-[#e8efe9] dark:bg-[#c96d35]">
            Java · Spring Boot · REST APIs
          </div>
        </div>
      </div>
    </section>
  );
}
