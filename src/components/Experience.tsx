'use client';

import { personalConfig } from '@/config/personal';

export default function Experience() {
  const experiences = personalConfig.experience;

  return (
    <section id="experience" className="bg-[#eef1ec] py-24 dark:bg-[#151b17]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-14 flex flex-col justify-between gap-4 border-b border-[#cbd6ce] pb-6 sm:flex-row sm:items-end dark:border-[#3a463e]">
          <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[#c96d35]">Career</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#15231b] sm:text-5xl dark:text-[#f4f0e8]">
            Work Experience
          </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#657269] dark:text-[#aebbb1]">A track record of building dependable systems and helping teams deliver with clarity.</p>
        </div>

        {/* Vertical timeline */}
        <div className="relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pb-12 pl-7 last:pb-0 sm:pl-10">
              {/* Timeline connector line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-[5px] top-[18px] h-full w-px bg-[#cbd6ce] dark:bg-[#3a463e] sm:left-[7px]" />
              )}
              {/* Timeline dot */}
              <div className={`absolute left-0 top-[7px] h-3 w-3 rounded-full ring-4 ${
                exp.type === 'Current Role'
                  ? 'bg-[#237a57] ring-[#eef1ec] dark:ring-[#151b17]'
                  : 'bg-[#a9b6ac] ring-[#eef1ec] dark:bg-[#526159] dark:ring-[#151b17]'
              }`} />

              {/* Header */}
              <div className="mb-1.5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl font-semibold text-[#15231b] sm:text-2xl dark:text-[#f4f0e8]">{exp.title}</h3>
                  {exp.type === 'Current Role' && (
                    <span className="border border-[#9bc5ac] px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-[#237a57] dark:border-[#527e64] dark:text-[#72c79d]">Current</span>
                  )}
                </div>
                <span className="shrink-0 font-mono text-xs text-[#8a968d]">{exp.period}</span>
              </div>

              {/* Company */}
              <p className="mb-4 font-semibold text-[#237a57] dark:text-[#72c79d]">
                {exp.company}
                <span className="mx-2 font-normal text-[#a9b6ac]">·</span>
                <span className="font-normal text-[#657269] dark:text-[#8a968d]">{exp.location}</span>
              </p>

              {/* Responsibilities */}
              <ul className="mb-4 space-y-2">
                {exp.responsibilities.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="mt-[9px] h-1 w-1 shrink-0 bg-[#c96d35]" />
                    <span className="leading-relaxed text-[#526159] dark:text-[#c5cec7]">{r}</span>
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, idx) => (
                  <span key={idx} className="border border-[#cbd6ce] px-2.5 py-0.5 font-mono text-xs text-[#526159] dark:border-[#3a463e] dark:text-[#8a968d]">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <span className="inline-flex items-center gap-2 border border-[#c96d35] px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] text-[#c96d35]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
            7+ Years of Professional Experience
          </span>
        </div>
      </div>
    </section>
  );
}
