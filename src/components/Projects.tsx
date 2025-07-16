'use client';

import Image from 'next/image';
import { useState } from 'react';
import { personalConfig } from '@/config/personal';

export default function Projects() {
  const { social } = personalConfig;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleResumeDownload = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    try {
      // First, try to fetch the file to ensure it exists
      const response = await fetch('/resume/Raihan_Uddin_Resume.pdf');
      
      if (!response.ok) {
        throw new Error('Resume file not found');
      }
      
      // Create blob from response
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Raihan_Uddin_Resume.pdf';
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL object
      window.URL.revokeObjectURL(url);
      
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback to direct link
      window.open('/resume/Raihan_Uddin_Resume.pdf', '_blank');
    }
  };

  const projects = [
    {
      title: "B2B E-Commerce",
      description: "Full-stack B2B shop with user/admin roles, order management, product catalog, JWT auth, cart checkout, and admin dashboard with charts.",
      status: "In Progress",
      image: "/images/b2b-ecommerce.png",
      technologies: ["Java", "Spring Boot", "React", "Docker", "PostgreSQL", "JWT"],
      features: [
        "User & Admin role-based authentication",
        "Product catalog with search and filtering",
        "Shopping cart and checkout system",
        "Order management system",
        "Admin dashboard with analytics",
        "CI/CD pipeline with GitHub Actions"
      ],
      links: {
        github: "https://github.com/raihanuddin561/b2b-ecommerce",
        live: null
      }
    },
    {
      title: "Microservices Based Application",
      description: "Led the migration of a legacy monolithic application to microservices architecture, improving scalability and maintainability.",
      status: "Completed",
      image: "/api/placeholder/600/400",
      technologies: ["Java 21", "Spring Boot 3", "Docker", "Kubernetes", "PostgreSQL", "Redis"],
      features: [
        "Implemented API Gateway pattern",
        "Service discovery with Eureka",
        "Circuit breaker pattern implementation",
        "Distributed tracing and monitoring",
        "Database per service pattern"
      ],
      links: {
        github: "https://github.com/raihanuddin561/microservice-based-app",
        live: null
      }
    },
    {
      title: "BFF Service for Multi-Platform Frontend",
      description: "Backend for Frontend service optimizing API responses for React and Angular applications, reducing payload size by 40%.",
      status: "Completed",
      image: "/api/placeholder/600/400",
      technologies: ["Java 21", "Spring Boot 3", "Spring WebClient", "MapStruct", "JUnit 5"],
      features: [
        "Client-specific API endpoints",
        "Data aggregation from multiple services",
        "Response optimization and caching",
        "JWT-based security integration",
        "Comprehensive test coverage (95%)",
        "OpenAPI documentation"
      ],
      links: {
        github: null,
        live: null
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          {/* Enhanced Header with Animation */}
          <div className="mb-8">
            {/* Social Links Row - Enhanced */}
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 font-medium">Connect with me</p>
                <div className="flex justify-center space-x-6">
                  <a
                    href={social.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    suppressHydrationWarning={true}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-black rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <svg className="w-7 h-7 text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href={social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border-2 border-blue-300 dark:border-blue-600 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    suppressHydrationWarning={true}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <svg className="w-7 h-7 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={`mailto:${personalConfig.contact.email}`}
                    className="group relative p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border-2 border-green-300 dark:border-green-600 hover:border-green-600 dark:hover:border-green-400 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    suppressHydrationWarning={true}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <svg className="w-7 h-7 text-green-600 dark:text-green-400 group-hover:text-green-700 dark:group-hover:text-green-300 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Resume Download Menu - Enhanced and Prominent */}
            <div className="mb-12 max-w-2xl mx-auto">
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-700 shadow-lg">
                <div className="text-center">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-4 shadow-lg">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Download My Resume
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Get a detailed overview of my experience, skills, and accomplishments
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                      onClick={handleResumeDownload}
                      className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[200px] cursor-pointer"
                      suppressHydrationWarning={true}
                    >
                      <svg className="w-5 h-5 mr-3 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Resume
                      <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                    
                    <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>PDF Format • Updated {new Date().toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  {/* Resume highlights */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-purple-600 dark:text-purple-400 font-semibold text-sm mb-1">Experience</div>
                      <div className="text-gray-900 dark:text-white font-bold">5+ Years</div>
                    </div>
                    <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm mb-1">Projects</div>
                      <div className="text-gray-900 dark:text-white font-bold">15+ Completed</div>
                    </div>
                    <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-4 backdrop-blur-sm">
                      <div className="text-purple-600 dark:text-purple-400 font-semibold text-sm mb-1">Technologies</div>
                      <div className="text-gray-900 dark:text-white font-bold">Java, Spring, React</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Portfolio Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-400 rounded-full text-sm font-medium mb-6 border border-blue-200 dark:border-blue-700 shadow-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Portfolio Showcase
              <div className="ml-3 px-2 py-1 bg-white/50 dark:bg-gray-800/50 rounded-full text-xs">
                {new Date().getFullYear()}
              </div>
            </div>

            {/* Enhanced Main Title */}
            <div className="relative mb-8">
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
                Featured{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Projects
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full opacity-30"></div>
                </span>
              </h2>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400/20 rounded-full blur-sm animate-pulse"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-purple-400/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Enhanced Description */}
            <div className="relative max-w-5xl mx-auto mb-8">
              <div className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Discover my latest work in{' '}
                <span className="relative inline-block">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">backend development</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-400/50 rounded-full"></div>
                </span>
                ,{' '}
                <span className="relative inline-block">
                  <span className="font-semibold text-purple-600 dark:text-purple-400">microservices architecture</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-400/50 rounded-full"></div>
                </span>
                , and{' '}
                <span className="relative inline-block">
                  <span className="font-semibold text-indigo-600 dark:text-indigo-400">full-stack solutions</span>
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-indigo-400/50 rounded-full"></div>
                </span>
                .
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">3+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Projects</div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">Test Coverage</div>
            </div>
          </div>

          {/* Scroll Button */}
          <div className="mb-8">
            <button
              onClick={() => {
                const firstProject = document.querySelector('.project-card');
                firstProject?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="group inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              suppressHydrationWarning={true}
            >
              <span className="mr-2">Explore Projects</span>
              <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="lg:flex">
                <div className="lg:w-1/3">
                  {project.image.startsWith('/images/') ? (
                    <div 
                      className="h-64 lg:h-full relative overflow-hidden cursor-pointer group"
                      onClick={() => setSelectedImage(project.image)}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} banner`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 group-hover:to-black/10 transition-all duration-300"></div>
                      {/* View indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 dark:bg-gray-800/90 rounded-full p-3 backdrop-blur-sm">
                          <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-64 lg:h-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="lg:w-2/3 p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      project.status === 'In Progress' 
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400'
                        : 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Features</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg className="w-4 h-4 text-green-500 mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 text-sm font-medium rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                        suppressHydrationWarning={true}
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        View Code
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        suppressHydrationWarning={true}
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/raihanuddin561"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            suppressHydrationWarning={true}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View All Projects on GitHub
          </a>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 backdrop-blur-sm transition-colors duration-200"
              aria-label="Close image viewer"
              suppressHydrationWarning={true}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Project preview"
                width={1200}
                height={800}
                className="object-contain max-w-full max-h-full rounded-lg shadow-2xl"
                quality={100}
              />
            </div>
            
            {/* Navigation hint */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              Click outside to close
            </div>
          </div>
        </div>
      )}

      {/* Floating Resume Download Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={handleResumeDownload}
          className="group relative bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 hover:from-purple-700 hover:to-indigo-700 cursor-pointer"
          suppressHydrationWarning={true}
          title="Download Resume - Quick Access"
        >
          {/* Ripple effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Pulsing ring */}
          <div className="absolute inset-0 rounded-full border-2 border-purple-300 animate-ping opacity-75"></div>
          
          {/* Icon */}
          <svg className="w-6 h-6 relative z-10 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <div className="bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
              Download Resume
              <div className="absolute top-full right-4 -mt-1 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}
