// Personal Configuration - Update all your information from this single file
export const personalConfig = {
  // Basic Information
  name: "Raihan Uddin",
  title: "Senior Java Backend Developer",
  subtitle: "Specializing in Spring Boot, Microservices & BFF Architecture",
  location: "Dhaka, Bangladesh",
  availability: "Available for remote opportunities",
  
  // Contact Information
  contact: {
    email: "raihanuddin561@gmail.com",
    phone: "+880 1749948344", 
    location: "Dhaka, Bangladesh",
    timezone: "GMT+6",
  },
  
  // Social Profiles
  social: {
    github: {
      url: "https://github.com/raihanuddin561",
      username: "raihanuddin561"
    },
    linkedin: {
      url: "https://linkedin.com/in/raihanuddin561",
      username: "raihanuddin561"
    },
    twitter: {
      url: "https://twitter.com/raihanuddin561", // Update if you have Twitter
      username: "raihanuddin561"
    }
  },
  
  // Professional Summary
  summary: {
    short: "Senior Java Backend Developer with 6+ years of experience in Spring Boot, microservices architecture, and BFF (Backend for Frontend) development.",
    long: "Passionate Senior Java Backend Developer with over 6 years of professional experience in designing and developing scalable, high-performance backend systems. Expertise in Spring Boot, microservices architecture, and Backend for Frontend (BFF) patterns. Strong background in REST API development, database design, and DevOps practices. Proven track record of leading technical initiatives and mentoring junior developers while delivering robust solutions for enterprise-level applications."
  },
  
  // Experience Data
  experience: [
    {
      title: "Senior Software Engineer",
      company: "BJIT Ltd",
      location: "Dhaka, Bangladesh",
      period: "Aug 2021 – Present",
      type: "Current Role",
      description: "Working on backend development initiatives with focus on BFF architecture and microservices",
      responsibilities: [
        "Developed and maintained BFF (Backend for Frontend) services in Java 21 and Spring Boot 3, enabling optimized data aggregation and transformation for web/mobile frontends",
        "Designed and implemented REST APIs tailored specifically for different frontend clients (React, Angular), ensuring separation of concerns and reduced payload size",
        "Utilized record types and sealed classes in Java 21 to create concise, immutable DTOs and domain models",
        "Integrated JWT-based authentication and role-based authorization using Spring Security, securing BFF endpoints",
        "Coordinated with frontend developers to deliver client-specific API responses, simplifying complex domain logic at the backend",
        "Employed Spring WebClient and RestTemplate for downstream service integration, including timeout handling, retries, and circuit breakers",
        "Used MapStruct for clean and efficient data mapping between entities and DTOs",
        "Designed unit tests and integration tests using JUnit 5 and Mockito, achieving high test coverage",
        "Containerized the BFF service using Docker, and contributed to CI/CD workflows using GitHub Actions"
      ],
      technologies: ["Java 21", "Spring Boot 3", "JWT", "PostgreSQL", "Docker", "GitHub Actions", "JUnit 5", "Mockito", "MapStruct", "Spring Security"]
    },
    {
      title: "Java Developer",
      company: "ServicEngine Ltd",
      location: "Dhaka, Bangladesh",
      period: "Feb 2020 – Aug 2021",
      type: "Previous Role",
      description: "Full-stack Java development with focus on enterprise applications",
      responsibilities: [
        "Delivered RESTful APIs for internal finance and HR systems",
        "Collaborated with frontend teams via REST/BFF endpoints",
        "Designed relational DB schemas and implemented stored procedures",
        "Participated in Agile/Scrum with code reviews and Git branching strategies",
        "Built secure and scalable microservices using Spring Boot",
        "Led migration of legacy monolith to microservices architecture",
        "Wrote unit/integration tests with 90%+ coverage using JUnit/Mockito"
      ],
      technologies: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "Microservices", "Git", "Agile/Scrum", "JUnit", "Mockito"]
    },
    {
      title: "Java Developer",
      company: "Merinasoft Ltd",
      location: "Dhaka, Bangladesh",
      period: "May 2019 – Jan 2020",
      type: "Previous Role",
      description: "Software development for pc applications with java swing",
      responsibilities: [
        "Developed a Point of Sale system using Java Swing and MySQL, adhering to OOP principles",
        "Designed and implemented a Utility Management System using Java Swing and MySQL"
      ],
      technologies: ["Java", "Java Swing", "MySQL"]
    }
  ],
  
  // Skills Configuration
  skills: {
    primary: [
      { name: "Java", level: 95, category: "Programming Languages" },
      { name: "Spring Boot", level: 90, category: "Frameworks" },
      { name: "Microservices", level: 85, category: "Architecture" },
      { name: "REST APIs", level: 90, category: "Web Services" },
      { name: "PostgreSQL", level: 85, category: "Databases" },
      { name: "Docker", level: 80, category: "DevOps" }
    ],
    secondary: [
      { name: "Spring Security", level: 85, category: "Security" },
      { name: "JUnit & Mockito", level: 90, category: "Testing" },
      { name: "Git", level: 90, category: "Version Control" },
      { name: "CI/CD", level: 80, category: "DevOps" },
      { name: "JWT", level: 85, category: "Authentication" }
    ],
    categories: [
      "Programming Languages",
      "Frameworks",
      "Architecture",
      "Web Services",
      "Databases",
      "DevOps",
      "Security",
      "Testing",
      "Version Control",
      "Authentication"
    ]
  },
  
  // Projects (you can add your projects here)
  projects: [
    {
      title: "Enterprise BFF Service",
      description: "Backend for Frontend service serving multiple client applications",
      technologies: ["Java 21", "Spring Boot 3", "PostgreSQL", "Docker"],
      features: [
        "Client-specific API responses",
        "JWT-based authentication",
        "Circuit breaker pattern",
        "Comprehensive testing suite"
      ],
      status: "Production",
      type: "Professional"
    },
    {
      title: "Microservices Migration",
      description: "Led migration from monolith to microservices architecture",
      technologies: ["Java", "Spring Boot", "Docker", "PostgreSQL"],
      features: [
        "Service decomposition",
        "API gateway implementation",
        "Database per service",
        "Monitoring and logging"
      ],
      status: "Completed",
      type: "Professional"
    }
  ],
  
  // Education
  education: [
    {
      degree: "Bachelor of Science in Computer Science", // Update with your actual degree
      institution: "Daffodil International University", // Update with your actual university
      year: "2019", // Update with your graduation year
      location: "Dhaka, Bangladesh"
    }
  ],
  
  // Certifications
  certifications: [
    {
      name: "Oracle Certified Professional, Java SE", // Update with actual certifications
      issuer: "Oracle",
      year: "2021",
      credentialId: "123456789" // Update with actual credential ID
    },
    {
      name: "Spring Professional Certification", // Update with actual certifications
      issuer: "VMware",
      year: "2022",
      credentialId: "987654321" // Update with actual credential ID
    }
  ],
  
  // Expertise Areas
  expertise: [
    "Java & Spring Boot Development",
    "Microservices Architecture",
    "Backend for Frontend (BFF)",
    "REST API Design",
    "Database Design & Optimization",
    "DevOps & CI/CD",
    "Performance Optimization",
    "Security Implementation"
  ],
  
  // Animated roles for Hero section
  animatedRoles: [
    "Senior Java Developer",
    "Backend Architect",
    "Spring Boot Expert",
    "Microservices Specialist",
    "BFF Developer",
    "API Designer"
  ],
  
  // Tech badges for floating animation
  techBadges: [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Docker",
    "Microservices",
    "REST APIs",
    "JWT",
    "Spring Security",
    "JUnit",
    "Git"
  ],
  
  // Meta information for SEO
  meta: {
    title: "Raihan Uddin - Senior Java Backend Developer",
    description: "Senior Java Backend Developer specializing in Spring Boot, microservices, and BFF architecture. 6+ years experience in enterprise application development.",
    keywords: "Java Developer, Spring Boot, Microservices, Backend Developer, BFF, REST API, PostgreSQL, Docker",
    author: "Raihan Uddin",
    url: "https://raihanuddin.dev", // Update with your actual website URL
    image: "/images/raihan-uddin.jpeg" // Your profile image
  }
};

// Helper functions to get specific data
export const getContactInfo = () => personalConfig.contact;
export const getSocialProfiles = () => personalConfig.social;
export const getExperience = () => personalConfig.experience;
export const getSkills = () => personalConfig.skills;
export const getProjects = () => personalConfig.projects;
export const getExpertise = () => personalConfig.expertise;
export const getAnimatedRoles = () => personalConfig.animatedRoles;
export const getTechBadges = () => personalConfig.techBadges;
export const getMetaInfo = () => personalConfig.meta;
