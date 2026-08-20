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
    <section id="projects" className="relative overflow-hidden bg-[#eef1ec] py-24 dark:bg-[#151b17]">
      {/* Background Decorative Elements */}
      <div className="hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-indigo-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Clean section header */}
        <div className="mb-14 flex flex-col justify-between gap-4 border-b border-[#cbd6ce] pb-6 sm:flex-row sm:items-end dark:border-[#3a463e]">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[#c96d35]">Work</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-[#15231b] sm:text-5xl dark:text-[#f4f0e8]">Featured Projects</h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-[#657269] dark:text-[#aebbb1]">Selected engineering work in backend systems, microservices, and full-stack development.</p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card overflow-hidden border-t border-[#cbd6ce] bg-[#f7f7f2] transition-colors duration-300 hover:border-[#237a57] dark:border-[#3a463e] dark:bg-[#101512] dark:hover:border-[#72c79d]">
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
                    <div className="flex h-64 items-center justify-center bg-[#d8e3da] dark:bg-[#1b2820] lg:h-full">
                      <div className="text-center p-8">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border border-[#237a57]">
                          <svg className="h-8 w-8 text-[#237a57]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                          className="border border-[#cbd6ce] px-3 py-1 text-sm text-[#526159] dark:border-[#3a463e] dark:text-[#c5cec7]"
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
                        className="inline-flex min-h-9 items-center gap-2 border border-[#a9b6ac] px-4 py-2 text-sm font-semibold text-[#1f4d3a] transition-colors hover:border-[#237a57] hover:bg-[#e7eee8] dark:border-[#617166] dark:text-[#b9dfc8] dark:hover:bg-[#1b2820]"
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
                        className="inline-flex min-h-9 items-center gap-2 bg-[#237a57] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#185d41]"
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

        <div className="mt-14 border-t border-[#cbd6ce] pt-8 text-center dark:border-[#3a463e]">
          <a
            href="https://github.com/raihanuddin561"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 border border-[#a9b6ac] px-6 py-3 text-sm font-semibold text-[#1f4d3a] transition-colors hover:border-[#237a57] hover:bg-[#e7eee8] dark:border-[#617166] dark:text-[#b9dfc8] dark:hover:bg-[#1b2820]"
            suppressHydrationWarning={true}
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View all projects on GitHub
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
