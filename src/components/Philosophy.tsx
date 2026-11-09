import { personalConfig } from '@/config/personal';

export default function Philosophy() {
  return (
    <section id="philosophy" className="relative py-20 bg-[#0b101a] border-t border-slate-800/80 light:bg-white light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 light:text-sky-600 mb-3">
            <span>05</span>
            <span className="h-px w-6 bg-sky-400" />
            <span>Engineering Principles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Engineering Philosophy &amp; Core Focus
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            The principles that guide how I architect systems, write backend code, and solve technical challenges.
          </p>
        </div>

        {/* 6 Philosophy Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {personalConfig.philosophy.map((item) => (
            <div
              key={item.number}
              className="group relative rounded-xl border border-slate-800/90 bg-[#0e1626]/80 p-6 transition-all duration-200 hover:border-sky-500/40 hover:bg-[#121c30] light:bg-slate-50 light:border-slate-200 light:hover:border-sky-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-sm font-bold text-sky-400 light:text-sky-600 bg-sky-500/10 light:bg-sky-50 px-2.5 py-1 rounded border border-sky-500/20">
                  {item.number}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-700 group-hover:bg-sky-400 transition-colors" />
              </div>
              <h3 className="text-base font-bold text-slate-100 light:text-slate-900 group-hover:text-sky-400 transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 light:text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

