'use client';

import { useContactForm } from '@/hooks/useContactForm';
import { personalConfig } from '@/config/personal';

export default function Contact() {
  const {
    formData,
    isLoading,
    isSuccess,
    error,
    handleChange,
    handleSubmit,
  } = useContactForm();

  const { contact, social } = personalConfig;

  return (
    <section id="contact" className="bg-[#15231b] py-24 text-[#f4f0e8]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[#e5a06e]">Contact</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
            Let's Work Together
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#c5cec7]">
            I'm actively seeking remote backend roles with companies around the world. 
            Let's discuss how I can contribute to your team's success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="border-y border-white/20 py-8">
              <h3 className="mb-6 text-2xl font-semibold">Get In Touch</h3>
              
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e5a06e]">
                    <svg className="h-5 w-5 text-[#e5a06e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#aebbb1]">Email</p>
                    <a href={`mailto:${contact.email}`} className="text-[#f4f0e8] transition-colors hover:text-[#e5a06e]">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e5a06e]">
                    <svg className="h-5 w-5 text-[#e5a06e]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#aebbb1]">LinkedIn</p>
                    <a href={social.linkedin.url} target="_blank" rel="noopener noreferrer" className="text-[#f4f0e8] transition-colors hover:text-[#e5a06e]">
                      linkedin.com/in/{social.linkedin.username}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e5a06e]">
                    <svg className="h-5 w-5 text-[#e5a06e]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#aebbb1]">GitHub</p>
                    <a href={social.github.url} target="_blank" rel="noopener noreferrer" className="text-[#f4f0e8] transition-colors hover:text-[#e5a06e]">
                      github.com/{social.github.username}
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#e5a06e]">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#aebbb1]">Location</p>
                    <p className="text-white">{contact.location}</p>
                    <p className="text-blue-200 text-sm">{personalConfig.availability}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-b border-white/20 py-8">
              <h4 className="mb-4 text-xl font-semibold">What I'm Looking For</h4>
              <ul className="space-y-3">
                {[
                  "Remote Backend Developer positions",
                  "Companies with a focus on Java/Spring Boot",
                  "Microservices architecture projects",
                  "Collaborative development teams",
                  "Growth-oriented organizations"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-[#c5cec7]">
                    <svg className="mr-3 h-4 w-4 shrink-0 text-[#72c79d]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border border-white/20 p-6 sm:p-8">
            <h3 className="mb-6 text-2xl font-semibold">Send Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success Message */}
              {isSuccess && (
                <div className="bg-green-500/20 border border-green-400 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-green-400 font-medium">Message sent successfully!</span>
                  </div>
                  <p className="text-green-300 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              )}

              {/* Error Message */}
              {error && (
                <div className="bg-red-500/20 border border-red-400 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <span className="text-red-400 font-medium">Error</span>
                  </div>
                  <p className="text-red-300 text-sm">{error}</p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#aebbb1]">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-[#aebbb1] focus:border-[#e5a06e] focus:outline-none focus:ring-1 focus:ring-[#e5a06e] disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your full name"
                  required
                  suppressHydrationWarning={true}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#aebbb1]">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-[#aebbb1] focus:border-[#e5a06e] focus:outline-none focus:ring-1 focus:ring-[#e5a06e] disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="your.email@company.com"
                  required
                  suppressHydrationWarning={true}
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#aebbb1]">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-[#aebbb1] focus:border-[#e5a06e] focus:outline-none focus:ring-1 focus:ring-[#e5a06e] disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your company name (optional)"
                  suppressHydrationWarning={true}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[#aebbb1]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading}
                  rows={4}
                  className="w-full resize-none border border-white/30 bg-white/10 px-4 py-3 text-white placeholder-[#aebbb1] focus:border-[#e5a06e] focus:outline-none focus:ring-1 focus:ring-[#e5a06e] disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about the role and your team..."
                  required
                  suppressHydrationWarning={true}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex min-h-11 w-full items-center justify-center bg-[#c96d35] px-6 py-3 font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:bg-[#a95425] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                suppressHydrationWarning={true}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-white font-medium">Available for remote opportunities</span>
          </div>
        </div>
      </div>
    </section>
  );
}
