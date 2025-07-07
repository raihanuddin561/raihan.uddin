'use client';

import { useState, useEffect } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);
  const skillCategories = [
    {
      title: "Backend Development",
      icon: "🔧",
      skills: [
        { name: "Java 21", level: 95 },
        { name: "Spring Boot", level: 90 },
        { name: "Spring Security", level: 85 },
        { name: "JPA/Hibernate", level: 85 },
        { name: "Microservices", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Database Design", level: 85 }
      ]
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 75 },
        { name: "Tailwind CSS", level: 80 },
        { name: "JavaScript", level: 75 },
        { name: "TypeScript", level: 70 }
      ]
    },
    {
      title: "DevOps & Tools",
      icon: "⚙️",
      skills: [
        { name: "Docker", level: 80 },
        { name: "GitHub Actions", level: 75 },
        { name: "Git", level: 90 },
        { name: "Maven/Gradle", level: 85 },
        { name: "Swagger/OpenAPI", level: 80 },
        { name: "Postman", level: 85 }
      ]
    },
    {
      title: "Testing",
      icon: "🧪",
      skills: [
        { name: "JUnit 5", level: 90 },
        { name: "Mockito", level: 85 },
        { name: "Integration Testing", level: 80 },
        { name: "Test-Driven Development", level: 75 }
      ]
    },
    {
      title: "Architecture & Patterns",
      icon: "🏗️",
      skills: [
        { name: "BFF Pattern", level: 90 },
        { name: "Circuit Breaker", level: 75 },
        { name: "API Gateway", level: 80 },
        { name: "SOLID Principles", level: 85 },
        { name: "Clean Architecture", level: 80 }
      ]
    }
  ];

  const tools = [
    "IntelliJ IDEA",
    "VS Code",
    "Jira",
    "Confluence",
    "Bitbucket",
    "GitHub",
    "Docker Desktop",
    "pgAdmin"
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My comprehensive skill set spanning backend development, databases, DevOps, and modern software architecture patterns.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${idx * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Development Tools & IDEs</h3>
            <p className="text-gray-600 dark:text-gray-300">Tools I use daily for development, debugging, and project management</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-gray-800 dark:text-gray-200 rounded-lg font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800/50 dark:hover:to-purple-800/50 transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">90%+ Test Coverage</h4>
            <p className="text-gray-600 dark:text-gray-300">Committed to writing comprehensive unit and integration tests</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Performance Focused</h4>
            <p className="text-gray-600 dark:text-gray-300">Optimizing applications to serve 100K+ monthly users efficiently</p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Team Collaboration</h4>
            <p className="text-gray-600 dark:text-gray-300">Experienced in Agile methodologies and cross-functional teams</p>
          </div>
        </div>
      </div>
    </section>
  );
}
