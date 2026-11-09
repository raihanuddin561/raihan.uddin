'use client';

import Image from 'next/image';
import { useState } from 'react';
import { personalConfig } from '@/config/personal';

export default function Projects() {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-20 bg-[#080c14] border-t border-slate-800/80 light:bg-slate-50 light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 light:text-sky-600 mb-3">
            <span>04</span>
            <span className="h-px w-6 bg-sky-400" />
            <span>Project Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Selected Engineering Projects
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            Real-world backend systems and B2B platforms demonstrating service-layer design, REST contracts, and relational data architecture.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {personalConfig.projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-slate-800/90 bg-[#0e1524]/90 overflow-hidden transition-all duration-200 hover:border-slate-700 light:bg-white light:border-slate-200"
            >
              <div className="grid lg:grid-cols-12 gap-0">
                {/* Visual / Architecture Display Column (Cols 1-5) */}
                <div className="lg:col-span-5 bg-[#0b101b] border-b lg:border-b-0 lg:border-r border-slate-800/80 flex flex-col justify-center p-6 sm:p-8 light:bg-slate-100 light:border-slate-200">
                  {project.image ? (
                    <div className="space-y-3">
                      <div
                        className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-700/80 bg-slate-900 cursor-pointer shadow-lg"
                        onClick={() => setZoomedImage(project.image)}
                        title="Click to view full screenshot"
                      >
                        <Image
                          src={project.image}
                          alt={`${project.title} interface preview`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 40vw"
                          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/0 transition-colors" />
                        <div className="absolute bottom-2.5 right-2.5 rounded-md bg-slate-950/80 px-2 py-1 font-mono text-[0.65rem] text-slate-300 backdrop-blur-sm border border-slate-700 flex items-center gap-1">
                          <svg className="h-3 w-3 text-sky-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                          </svg>
                          Expand
                        </div>
                      </div>
                      <p className="text-center font-mono text-[0.7rem] text-slate-500">
                        Verified application dashboard &amp; catalog preview
                      </p>
                    </div>
                  ) : (
                    /* Architectural Blueprint Card for SkyZoneBD */
                    <div className="rounded-xl border border-slate-700/80 bg-slate-900/80 p-6 space-y-4 light:bg-white light:border-slate-200">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3 light:border-slate-200">
                        <span className="font-mono text-xs font-semibold text-sky-400">
                          SYSTEM ARCHITECTURE
                        </span>
                        <span className="font-mono text-[0.65rem] text-slate-400">
                          B2B COMMERCE
                        </span>
                      </div>
                      <div className="space-y-2 text-xs font-mono text-slate-300 light:text-slate-600">
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>Buyer Vetting Pipeline</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                          <span>Tiered Pricing &amp; MOQ Matrix</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                          <span>RFQ &amp; Supplier Counter-Offer</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                          <span>Partner Profit Settlement</span>
                        </div>
                      </div>
                      <div className="pt-2 text-[0.7rem] text-slate-500 font-mono border-t border-slate-800 light:border-slate-200">
                        PostgreSQL + Prisma relational model
                      </div>
                    </div>
                  )}
                </div>

                {/* Details & Specifications Column (Cols 6-12) */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Header: Title & Badges */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-2.5 py-0.5 font-mono text-[0.7rem] font-semibold text-sky-400 light:bg-sky-50 light:border-sky-300 light:text-sky-700">
                        {project.badge}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-slate-700 bg-slate-900/80 px-2 py-0.5 font-mono text-[0.65rem] text-slate-300 light:bg-slate-100 light:border-slate-200 light:text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white light:text-slate-900 mb-3">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Architectural Highlights */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 light:text-slate-600">
                        Key Architectural Highlights:
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {project.highlights.map((item) => (
                          <div
                            key={item.label}
                            className="rounded-lg border border-slate-800/80 bg-slate-900/50 p-3 light:bg-slate-50 light:border-slate-200"
                          >
                            <p className="font-mono text-xs font-semibold text-sky-400 light:text-sky-600">
                              {item.label}
                            </p>
                            <p className="mt-1 text-xs text-slate-300 light:text-slate-600 leading-relaxed">
                              {item.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Full Stack Tech Badges */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-slate-700/60 bg-slate-900/90 px-2 py-0.5 font-mono text-[0.7rem] text-slate-300 light:bg-slate-100 light:border-slate-200 light:text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3 light:border-slate-200">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-slate-900 border border-slate-700 px-4 py-2 text-xs font-semibold text-slate-200 hover:border-sky-500/60 hover:text-white transition-all light:bg-white light:border-slate-300 light:text-slate-800"
                      >
                        <svg className="h-4 w-4 fill-current text-sky-400" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        <span>View Repository</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
                      >
                        <span>Live Demo</span>
                        <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Explorer Callout */}
        <div className="mt-12 text-center">
          <a
            href={personalConfig.social.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-[#0e1524]/60 px-5 py-3 text-xs font-mono font-medium text-slate-300 hover:border-sky-500/50 hover:text-white transition-all light:bg-white light:border-slate-200 light:text-slate-700"
          >
            <svg className="h-4 w-4 fill-current text-sky-400" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>Explore more repositories on GitHub (github.com/raihanuddin561)</span>
          </a>
        </div>
      </div>

      {/* Lightbox Modal for Real Screenshot */}
      {zoomedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setZoomedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-xl border border-slate-700 bg-slate-900 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-4 py-3">
              <span className="font-mono text-xs text-slate-300">
                B2B E-Commerce Interface Preview
              </span>
              <button
                onClick={() => setZoomedImage(null)}
                className="rounded p-1 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close image preview"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={zoomedImage}
                alt="Enlarged project preview"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
