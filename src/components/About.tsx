import { personalConfig } from '@/config/personal';

export default function About() {
  return (
    <section id="overview" className="relative py-20 bg-[#0b101a] border-t border-slate-800/80 light:bg-white light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 light:text-sky-600 mb-3">
            <span>01</span>
            <span className="h-px w-6 bg-sky-400" />
            <span>Professional Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Enterprise Backend Engineering with Technical Ownership
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            {personalConfig.summary.long}
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {personalConfig.overviewPillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group relative rounded-xl border border-slate-800/90 bg-[#0e1626]/80 p-6 transition-all duration-200 hover:border-sky-500/40 hover:bg-[#121c30] light:bg-slate-50 light:border-slate-200 light:hover:border-sky-300 ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className="font-mono text-xs font-semibold text-sky-400 light:text-sky-600 bg-sky-500/10 light:bg-sky-50 px-2 py-0.5 rounded border border-sky-500/20">
                  {pillar.badge}
                </span>
                <span className="font-mono text-xs text-slate-500">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-slate-100 light:text-slate-900 group-hover:text-sky-400 transition-colors">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-400 light:text-slate-600">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Engineering Profile Facts strip */}
        <div className="mt-12 rounded-xl border border-slate-800 bg-[#0e1524]/50 p-5 sm:p-6 light:bg-slate-50 light:border-slate-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">Total Experience</p>
              <p className="mt-1 text-xl font-bold text-white light:text-slate-900">7+ Years</p>
              <p className="text-xs text-slate-400 light:text-slate-500">Continuous backend growth</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">Primary Specialization</p>
              <p className="mt-1 text-xl font-bold text-white light:text-slate-900">Java & Spring</p>
              <p className="text-xs text-slate-400 light:text-slate-500">Enterprise microservices</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">Current Designation</p>
              <p className="mt-1 text-xl font-bold text-white light:text-slate-900">Principal Engineer</p>
              <p className="text-xs text-slate-400 light:text-slate-500">BJIT Ltd. (Dhaka)</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500">Formal Education</p>
              <p className="mt-1 text-xl font-bold text-white light:text-slate-900">B.Sc. Software Eng.</p>
              <p className="text-xs text-slate-400 light:text-slate-500">Daffodil Int. University</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
