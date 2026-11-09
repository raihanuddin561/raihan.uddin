import { personalConfig } from '@/config/personal';

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-[#080c14] border-t border-slate-800/80 light:bg-slate-50 light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 light:text-sky-600 mb-3">
            <span>02</span>
            <span className="h-px w-6 bg-sky-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Technical Expertise & Tooling
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            Honest, verified technical competencies across server-side architecture, relational data management, and automated verification.
          </p>
        </div>

        {/* 6 Category Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personalConfig.skills.map((cat, idx) => (
            <div
              key={cat.category}
              className="flex flex-col justify-between rounded-xl border border-slate-800/90 bg-[#0e1524]/90 p-6 transition-all duration-200 hover:border-slate-700 hover:bg-[#111a2c] light:bg-white light:border-slate-200 light:hover:border-slate-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-4 light:border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-sky-500/10 font-mono text-xs font-semibold text-sky-400 border border-sky-500/20">
                      {idx + 1}
                    </span>
                    <h3 className="text-base font-semibold text-white light:text-slate-900">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="font-mono text-[0.7rem] text-slate-500">
                    {cat.skills.length} items
                  </span>
                </div>
                <p className="text-xs text-slate-400 light:text-slate-500 mb-4">
                  {cat.description}
                </p>
              </div>

              {/* Skill Badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => {
                  const isLearning = skill.includes('(learning)');
                  return (
                    <span
                      key={skill}
                      className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-mono transition-colors ${
                        isLearning
                          ? 'border border-amber-500/30 bg-amber-500/10 text-amber-300 light:bg-amber-50 light:border-amber-300 light:text-amber-800'
                          : 'border border-slate-700/60 bg-slate-900/80 text-slate-200 hover:border-sky-500/40 hover:text-sky-300 light:bg-slate-100 light:border-slate-200 light:text-slate-700 light:hover:border-sky-300'
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Note on Transparency & Practice */}
        <div className="mt-8 flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-900/40 px-4 py-3 light:bg-white light:border-slate-200">
          <div className="flex items-center gap-2.5 text-xs text-slate-400 light:text-slate-600">
            <svg className="h-4 w-4 text-sky-400 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>Proficiencies reflect hands-on production engineering experience and ongoing technical research. No exaggerated metrics or arbitrary percentage gauges.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
