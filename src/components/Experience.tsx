import { personalConfig } from '@/config/personal';

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-[#0b101a] border-t border-slate-800/80 light:bg-white light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 light:text-sky-600 mb-3">
            <span>03</span>
            <span className="h-px w-6 bg-sky-400" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Professional Experience & Career Progression
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            7+ years of hands-on engineering progression from Software Developer to Senior Backend Engineer to Principal Software Engineer.
          </p>
        </div>

        {/* Companies Stack */}
        <div className="space-y-12">
          {personalConfig.experience.map((companyGroup) => (
            <div
              key={companyGroup.company}
              className="rounded-2xl border border-slate-800/90 bg-[#0e1626]/70 p-6 sm:p-8 transition-all light:bg-slate-50 light:border-slate-200"
            >
              {/* Company Level Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-800/80 pb-6 mb-8 light:border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 font-mono text-sm font-bold text-sky-400 light:bg-sky-50 light:border-sky-300 light:text-sky-700">
                    {companyGroup.company.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <h3 className="text-xl font-bold text-white light:text-slate-900">
                        {companyGroup.company}
                      </h3>
                      {companyGroup.isCurrent && (
                        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[0.65rem] font-semibold uppercase tracking-wider text-emerald-400 light:bg-emerald-50 light:border-emerald-300 light:text-emerald-700">
                          Current Organization
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-mono text-slate-400 light:text-slate-500 mt-0.5">
                      {companyGroup.location}
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono font-medium text-slate-300 bg-slate-900/80 border border-slate-800 rounded-md px-3 py-1.5 self-start sm:self-auto light:bg-white light:border-slate-200 light:text-slate-700">
                  {companyGroup.period}
                </div>
              </div>

              {/* Roles Timeline within Company */}
              <div className="relative pl-6 sm:pl-8 space-y-10">
                {/* Vertical timeline spine */}
                <div className="absolute left-2 sm:left-3 top-2.5 bottom-2.5 w-px bg-slate-800 light:bg-slate-300" />

                {companyGroup.roles.map((role) => (
                  <div key={role.title} className="relative group">
                    {/* Timeline Node Indicator */}
                    <div
                      className={`absolute -left-6 sm:-left-8 top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 transition-transform ${
                        role.current
                          ? 'border-emerald-400 bg-emerald-500 shadow-md shadow-emerald-500/30'
                          : 'border-slate-600 bg-slate-900 light:bg-white light:border-slate-400'
                      }`}
                    >
                      {role.current && (
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />
                      )}
                    </div>

                    {/* Role Details */}
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                        <div className="flex items-center gap-2">
                          <h4 className="text-lg font-semibold text-white light:text-slate-900 group-hover:text-sky-400 transition-colors">
                            {role.title}
                          </h4>
                          {role.current && (
                            <span className="rounded bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 font-mono text-[0.65rem] text-sky-400 font-semibold">
                              Current Role
                            </span>
                          )}
                        </div>
                        <span className="font-mono text-xs text-slate-400 light:text-slate-500">
                          {role.period}
                        </span>
                      </div>

                      {/* Bullet points */}
                      <ul className="mt-3 space-y-2">
                        {role.points.map((pt, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300 light:text-slate-600"
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sky-400 light:bg-sky-600" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technology tags */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {role.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded border border-slate-700/60 bg-slate-900/60 px-2.5 py-0.5 font-mono text-[0.7rem] text-slate-300 light:bg-white light:border-slate-200 light:text-slate-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
