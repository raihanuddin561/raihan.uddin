'use client';

import { useEffect, useRef, useState } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    { title: 'Backend', skills: ['Java 21', 'Spring Boot', 'Spring Security', 'JPA / Hibernate', 'Microservices', 'REST APIs', 'Spring WebFlux'] },
    { title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'Database Design', 'Query Optimisation', 'Transaction Management'] },
    { title: 'Architecture', skills: ['BFF Pattern', 'API Gateway', 'Circuit Breaker', 'Clean Architecture', 'SOLID Principles', 'Domain-Driven Design'] },
    { title: 'Testing', skills: ['JUnit 5', 'Mockito', 'Integration Testing', 'Test-Driven Development'] },
    { title: 'DevOps & Build', skills: ['Docker', 'GitHub Actions', 'Git', 'Maven', 'Gradle', 'Swagger / OpenAPI', 'Postman'] },
    { title: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Next.js'] },
  ];

  const tools = ['IntelliJ IDEA', 'VS Code', 'Jira', 'Confluence', 'Bitbucket', 'GitHub', 'Docker Desktop', 'pgAdmin'];

  const highlights = [
    { metric: '90%+', label: 'Test coverage', desc: 'Comprehensive unit and integration tests on every service.' },
    { metric: '100K+', label: 'Monthly users', desc: 'Production systems built for scale, reliability, and low latency.' },
    { metric: '5+', label: 'Years leading', desc: 'Technical leadership, architecture reviews, and team mentoring.' },
  ];

  return (
    <section id="skills" ref={sectionRef} className="bg-white py-24 dark:bg-[#101512]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[#c96d35]">Toolkit</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold text-[#15231b] sm:text-5xl dark:text-[#f4f0e8]">
            Technical Skills
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#526159] dark:text-[#c5cec7]">
            Spanning backend systems, data architecture, DevOps, and modern software design patterns.
          </p>
        </div>

        {/* Tag grid by category */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="mb-4 flex items-center gap-3 border-b border-[#d7dfd9] pb-3 dark:border-[#3a463e]">
                <span className="font-mono text-xs font-semibold text-[#c96d35]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="font-semibold text-[#15231b] dark:text-[#f4f0e8]">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-[#cbd6ce] px-3 py-1.5 text-sm text-[#526159] transition-colors duration-150 hover:border-[#237a57] hover:text-[#237a57] dark:border-[#3a463e] dark:text-[#c5cec7] dark:hover:border-[#72c79d] dark:hover:text-[#72c79d]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Daily tools strip */}
        <div className="mt-12 border-y border-[#d7dfd9] py-8 dark:border-[#3a463e]">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[#657269]">Daily Tools &amp; IDEs</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <span
                key={tool}
                className="border border-[#cbd6ce] px-3 py-1.5 font-mono text-xs text-[#526159] transition-colors duration-150 hover:border-[#237a57] hover:text-[#237a57] dark:border-[#3a463e] dark:text-[#8a968d] dark:hover:border-[#72c79d] dark:hover:text-[#72c79d]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Highlights strip */}
        <div className="mt-12 grid gap-px border border-[#d7dfd9] bg-[#d7dfd9] dark:border-[#3a463e] dark:bg-[#3a463e] sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.metric} className="bg-white px-6 py-7 dark:bg-[#101512]">
              <p className="font-serif text-3xl font-semibold text-[#15231b] dark:text-[#f4f0e8]">{item.metric}</p>
              <p className="mt-1 font-semibold text-[#237a57] dark:text-[#72c79d]">{item.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-[#526159] dark:text-[#8a968d]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

