import { personalConfig } from '@/config/personal';

const focusAreas = [
  'Enterprise backend architecture',
  'REST APIs and BFF services',
  'Service-layer design and data modelling',
  'Modernization and production problem solving',
  'Technical leadership and mentoring',
  'Specification-driven AI workflows',
];

export default function About() {
  return (
    <section id="about" className="bg-white py-24 dark:bg-[#151b17]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:px-12">
        <div>
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[#c96d35]">Profile</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold text-[#15231b] sm:text-5xl dark:text-[#f4f0e8]">Engineering with ownership.</h2>
        </div>
        <div>
          <p className="max-w-3xl text-xl leading-9 text-[#47564d] dark:text-[#c5cec7]">{personalConfig.summary.long}</p>
          <div className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area} className="border-t border-[#d7dfd9] pt-4 dark:border-[#3a463e]">
                <span className="font-mono text-xs text-[#c96d35]">01</span>
                <p className="mt-2 font-medium text-[#1d2d23] dark:text-[#e3e8e3]">{area}</p>
              </div>
            ))}
          </div>
          <dl className="mt-12 grid gap-6 border-y border-[#d7dfd9] py-6 sm:grid-cols-3 dark:border-[#3a463e]">
            <div><dt className="font-mono text-xs uppercase tracking-[0.12em] text-[#657269]">Experience</dt><dd className="mt-2 text-lg font-semibold text-[#1d2d23] dark:text-[#e3e8e3]">7+ years</dd></div>
            <div><dt className="font-mono text-xs uppercase tracking-[0.12em] text-[#657269]">Based in</dt><dd className="mt-2 text-lg font-semibold text-[#1d2d23] dark:text-[#e3e8e3]">Dhaka, Bangladesh</dd></div>
            <div><dt className="font-mono text-xs uppercase tracking-[0.12em] text-[#657269]">Education</dt><dd className="mt-2 text-lg font-semibold text-[#1d2d23] dark:text-[#e3e8e3]">B.Sc. Software Engineering</dd></div>
          </dl>
        </div>
      </div>
    </section>
  );
}
