import { personalConfig } from '@/config/personal';

export default function Education() {
  const edu = personalConfig.education[0];

  return (
    <section id="education" className="relative py-20 bg-[#080c14] border-t border-slate-800/80 light:bg-slate-50 light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 light:text-sky-600 mb-3">
            <span>06</span>
            <span className="h-px w-6 bg-sky-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl rounded-xl border border-slate-800/90 bg-[#0e1524]/90 p-6 sm:p-8 light:bg-white light:border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400 font-mono text-base font-bold light:bg-sky-50 light:border-sky-300 light:text-sky-700">
                SE
              </div>
              <div>
                <h3 className="text-xl font-bold text-white light:text-slate-900">
                  {edu.degree}
                </h3>
                <p className="text-base font-medium text-sky-400 light:text-sky-600 mt-0.5">
                  {edu.institution}
                </p>
                <p className="text-xs font-mono text-slate-400 light:text-slate-500 mt-1">
                  {edu.location}
                </p>
              </div>
            </div>

            <div className="self-start sm:self-auto rounded-md border border-slate-700 bg-slate-900/80 px-3 py-1 font-mono text-xs text-slate-300 light:bg-slate-100 light:border-slate-300 light:text-slate-700">
              {edu.period}
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-800/80 text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed light:border-slate-200">
            Foundational computer science and software engineering coursework including algorithms, data structures, relational database management systems, object-oriented software engineering, network protocols, and software testing.
          </div>
        </div>
      </div>
    </section>
  );
}

