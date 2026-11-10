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

  return (
    <section id="contact" className="relative py-20 bg-[#0b101a] border-t border-slate-800/80 light:bg-white light:border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-sky-400 light:text-sky-600 mb-3">
            <span>07</span>
            <span className="h-px w-6 bg-sky-400" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white light:text-slate-900">
            Let's Discuss Engineering Opportunities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            I am open to senior backend engineering opportunities, architectural design discussions, and technical collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Information (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-slate-800/90 bg-[#0e1626]/80 p-6 sm:p-8 light:bg-slate-50 light:border-slate-200 space-y-6">
              <h3 className="text-lg font-bold text-white light:text-slate-900">
                Contact Details
              </h3>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400 light:bg-sky-50 light:border-sky-300 light:text-sky-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                    Direct Email
                  </p>
                  <a
                    href={`mailto:${personalConfig.contact.email}`}
                    className="text-sm font-semibold text-slate-100 hover:text-sky-400 transition-colors light:text-slate-900 break-all"
                  >
                    {personalConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400 light:bg-sky-50 light:border-sky-300 light:text-sky-700">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                    LinkedIn Profile
                  </p>
                  <a
                    href={personalConfig.social.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-100 hover:text-sky-400 transition-colors light:text-slate-900 break-all"
                  >
                    linkedin.com/in/{personalConfig.social.linkedin.username}
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400 light:bg-sky-50 light:border-sky-300 light:text-sky-700">
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                    GitHub Profile
                  </p>
                  <a
                    href={personalConfig.social.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-100 hover:text-sky-400 transition-colors light:text-slate-900 break-all"
                  >
                    github.com/{personalConfig.social.github.username}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-400 light:bg-sky-50 light:border-sky-300 light:text-sky-700">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 light:text-slate-500">
                    Location &amp; Availability
                  </p>
                  <p className="text-sm font-semibold text-slate-100 light:text-slate-900">
                    {personalConfig.location}
                  </p>
                  <p className="text-xs text-sky-400 light:text-sky-600 mt-0.5">
                    {personalConfig.contact.availability}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800/90 bg-[#0e1626]/80 p-6 sm:p-8 light:bg-slate-50 light:border-slate-200">
              <h3 className="text-lg font-bold text-white light:text-slate-900 mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400 light:text-slate-500 mb-6">
                Fill out the form below or reach out directly at {personalConfig.contact.email}
              </p>

              {isSuccess && (
                <div className="mb-6 rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-300 light:bg-emerald-50 light:text-emerald-800">
                  <div className="flex items-center gap-2 font-semibold">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Message sent successfully!
                  </div>
                  <p className="mt-1 text-xs text-emerald-400/90 light:text-emerald-700">
                    Thank you for reaching out. I will respond to your inquiry shortly.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300 light:bg-red-50 light:text-red-800">
                  <div className="flex items-center gap-2 font-semibold">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    {error}
                  </div>
                  <div className="mt-3 pt-3 border-t border-red-500/20 text-xs text-slate-300 light:text-slate-700">
                    <p className="mb-1.5">You can still send your message right away:</p>
                    <a
                      href={`mailto:${personalConfig.contact.email}?subject=${encodeURIComponent(
                        formData.name ? `Portfolio Message from ${formData.name}` : 'Portfolio Contact Message'
                      )}&body=${encodeURIComponent(
                        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\n\nMessage:\n${formData.message}`
                      )}`}
                      className="inline-flex items-center gap-1.5 font-semibold text-sky-400 hover:text-sky-300 light:text-sky-700 underline"
                    >
                      <span>Click here to send directly via your email client →</span>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-slate-400 light:text-slate-600 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Smith"
                      className="w-full rounded-md border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 light:bg-white light:border-slate-300 light:text-slate-900"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-slate-400 light:text-slate-600 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. alex@company.com"
                      className="w-full rounded-md border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 light:bg-white light:border-slate-300 light:text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block font-mono text-xs text-slate-400 light:text-slate-600 mb-1">
                    Company / Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Technology Company"
                    className="w-full rounded-md border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 light:bg-white light:border-slate-300 light:text-slate-900"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-mono text-xs text-slate-400 light:text-slate-600 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe the opportunity, technical challenge, or reason for connecting..."
                    className="w-full rounded-md border border-slate-700 bg-slate-900/90 px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 light:bg-white light:border-slate-300 light:text-slate-900 resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${personalConfig.contact.email}`}
                    className="text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors light:text-slate-500"
                  >
                    Or open default email client →
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
