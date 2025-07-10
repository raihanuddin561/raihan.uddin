'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = [
    "Senior Java Backend Developer",
    "Spring Boot Expert", 
    "Microservices Architect",
    "BFF Specialist"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-400/20 rounded-full animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-400/20 rounded-full animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-cyan-400/20 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className={`mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative inline-block group">
              <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-pulse hover:animate-none transition-all duration-300 group-hover:scale-105">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                  <Image
                    src="/images/raihan-uddin.jpeg"
                    alt="Raihan Uddin - Senior Java Backend Developer"
                    width={160}
                    height={160}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Status Indicator */}
              <div className="absolute -bottom-2 -right-2 flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 relative">
                  <div className="absolute inset-0 w-full h-full rounded-full bg-green-400 animate-ping"></div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-xs animate-bounce" style={{ animationDelay: '0.5s' }}>
                Java
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xs animate-bounce" style={{ animationDelay: '1s' }}>
                Spring
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xs animate-bounce" style={{ animationDelay: '1.5s' }}>
                React
              </div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-xs animate-bounce" style={{ animationDelay: '2s' }}>
                Docker
              </div>
            </div>
          </div>
          
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Raihan Uddin
              </span>
            </h1>
            
            <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto min-h-[60px] flex items-center justify-center">
              <span className="inline-block">
                <span 
                  className="font-semibold text-blue-600 dark:text-blue-400 transition-all duration-500"
                  role="img" 
                  aria-label={`Current role: ${roles[currentRole]}`}
                >
                  {roles[currentRole]}
                </span>
                {' '}specializing in{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">Backend for Frontend (BFF)</span>
                {' '}architecture
              </span>
              
              {/* Hidden text for SEO - contains all roles for search engines */}
              <span className="sr-only">
                Senior Java Backend Developer, Spring Boot Expert, Microservices Architect, and BFF Specialist specializing in Backend for Frontend architecture
              </span>
            </div>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="#contact"
              className="group relative inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-200"></span>
              <span className="relative">Get In Touch</span>
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-base font-medium rounded-full text-gray-700 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>View Projects</span>
              <svg className="ml-2 w-5 h-5 transform group-hover:rotate-45 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div className={`flex justify-center space-x-6 mb-16 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <a
              href="https://github.com/raihanuddin561"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 transform hover:scale-110"
            >
              <span className="sr-only">GitHub</span>
              <div className="relative">
                <div className="absolute -inset-2 bg-gray-200 dark:bg-gray-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </div>
            </a>
            <a
              href="https://linkedin.com/in/raihanuddin561"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 transform hover:scale-110"
            >
              <span className="sr-only">LinkedIn</span>
              <div className="relative">
                <div className="absolute -inset-2 bg-blue-200 dark:bg-blue-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                <svg className="w-6 h-6 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
            </a>
            <a
              href="mailto:raihanuddin561@gmail.com"
              className="group relative text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-200 transform hover:scale-110"
            >
              <span className="sr-only">Email</span>
              <div className="relative">
                <div className="absolute -inset-2 bg-green-200 dark:bg-green-700 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-200"></div>
                <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className={`flex justify-center transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
              <span className="text-sm mb-2 animate-pulse">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
