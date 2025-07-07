import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div className="group">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  Experienced Java Backend Developer with <span className="font-semibold text-blue-600 dark:text-blue-400">6+ years</span> of expertise in building scalable REST APIs using Spring Boot, JWT-based security, and PostgreSQL.
                </p>
              </div>
              
              <div className="group">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  Specialized in <span className="font-semibold text-blue-600 dark:text-blue-400">Backend for Frontend (BFF)</span> architecture and currently focused on full-stack development with Next JS, Docker, and CI/CD.
                </p>
              </div>
              
              <div className="group">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                  Seeking remote backend roles with companies <span className="font-semibold text-blue-600 dark:text-blue-400">over the world</span>, offering clean code, reliability, and team collaboration.
                </p>
              </div>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Current Focus</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Java 21 & Spring Boot 3 BFF Services',
                    'Microservices Architecture Migration',
                    'JWT Authentication & Authorization',
                    'Docker & CI/CD Implementation',
                    'Full-stack Development with Next JS',
                    'Performance Optimization'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group">
                      <svg className="w-5 h-5 text-green-500 mr-3 group-hover:scale-110 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:pl-8">
            <div className="relative">
              {/* Profile Image with Enhanced Design */}
              <div className="relative inline-block mb-8 group">
                <div className="w-64 h-64 mx-auto rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800">
                    <Image
                      src="/images/raihan-uddin.jpeg"
                      alt="Raihan Uddin - Senior Java Backend Developer"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg animate-pulse">
                  Available
                </div>
                <div className="absolute -bottom-2 -left-2 w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">
                  6+ Yrs
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-white/50 dark:hover:bg-gray-700/50 px-2 rounded transition-colors duration-200">
                  <span className="text-gray-600 dark:text-gray-300">Experience</span>
                  <span className="font-semibold text-gray-900 dark:text-white">6+ Years</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-white/50 dark:hover:bg-gray-700/50 px-2 rounded transition-colors duration-200">
                  <span className="text-gray-600 dark:text-gray-300">Location</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Dhaka, Bangladesh</span>
                </div>
                
                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-white/50 dark:hover:bg-gray-700/50 px-2 rounded transition-colors duration-200">
                  <span className="text-gray-600 dark:text-gray-300">Availability</span>
                  <span className="font-semibold text-green-600 dark:text-green-400 flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    Remote Ready
                  </span>
                </div>
                
                {/* <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700 hover:bg-white/50 dark:hover:bg-gray-700/50 px-2 rounded transition-colors duration-200">
                  <span className="text-gray-600 dark:text-gray-300">Time Zone</span>
                  <span className="font-semibold text-gray-900 dark:text-white">UK/EU Preferred</span>
                </div> */}
                
                <div className="flex items-center justify-between py-3 hover:bg-white/50 dark:hover:bg-gray-700/50 px-2 rounded transition-colors duration-200">
                  <span className="text-gray-600 dark:text-gray-300">Languages</span>
                  <span className="font-semibold text-gray-900 dark:text-white">English, Bengali</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 border border-blue-100 dark:border-blue-800 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Education
              </h3>
              <div className="space-y-2">
                <p className="font-medium text-gray-900 dark:text-white">BSc in Software Engineering</p>
                <p className="text-gray-600 dark:text-gray-300">Daffodil International University, Bangladesh</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Graduated: 2019
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
