// Personal Configuration - Single source of truth for Raihan Uddin's portfolio
export const personalConfig = {
  // Identity & Positioning
  name: "Raihan Uddin",
  headline: "Senior Backend Engineer",
  designation: "Principal Software Engineer",
  company: "BJIT Ltd.",
  companyUrl: "https://bjitgroup.com",
  location: "Dhaka, Bangladesh",
  experienceYears: "7+ years",
  tagline: "Building reliable backend systems, scalable APIs, and maintainable software with Java and Spring Boot.",

  // Contact Information
  contact: {
    email: "raihanuddin561@gmail.com",
    location: "Dhaka, Bangladesh",
    availability: "Open to high-impact engineering opportunities",
  },

  // Verified Social Profiles
  social: {
    github: {
      url: "https://github.com/raihanuddin561",
      username: "raihanuddin561",
    },
    linkedin: {
      url: "https://linkedin.com/in/raihanuddin561",
      username: "raihanuddin561",
    },
  },

  // Professional Summary
  summary: {
    short:
      "Backend-focused software engineer with 7+ years of experience building and maintaining enterprise applications using Java, Spring Boot, REST APIs, and microservices.",
    long:
      "I am a backend-focused software engineer with 7+ years of experience building and maintaining enterprise applications using Java, Spring Boot, REST APIs, and microservices. My engineering experience includes backend service development, API design, relational database development, query optimization, application troubleshooting, automated testing, legacy system improvement, and production support. I also contribute to technical design discussions, code reviews, engineering standards, mentoring, and collaborative problem-solving. My primary professional focus is building maintainable, reliable, scalable, and well-structured backend systems.",
  },

  // Professional Overview Pillars
  overviewPillars: [
    {
      title: "Backend System Development",
      description:
        "Designing robust, modular server-side architectures using Java 11–21 and Spring Boot. Building domain-rich service layers with clean separation of concerns.",
      badge: "Core Architecture",
    },
    {
      title: "Microservices & API Engineering",
      description:
        "Building reliable RESTful services and Backend-for-Frontend (BFF) layers with well-defined contracts, consistent error handling, validation, and documentation.",
      badge: "API Design",
    },
    {
      title: "Database Design & Performance",
      description:
        "Relational data modeling, schema design, transaction boundaries, and query tuning across PostgreSQL and MySQL using Spring Data JPA and Hibernate.",
      badge: "Data Layer",
    },
    {
      title: "Reliability & Maintainability",
      description:
        "Production troubleshooting, systematic root-cause analysis, proactive refactoring, and comprehensive automated test suites using JUnit 5 and Mockito.",
      badge: "Resilience",
    },
    {
      title: "Technical Collaboration & Mentoring",
      description:
        "Leading technical design reviews, establishing engineering standards, conducting thorough code reviews, and fostering engineering excellence across cross-functional teams.",
      badge: "Leadership",
    },
  ],

  // Career Experience History (Strictly accurate)
  experience: [
    {
      company: "BJIT Ltd.",
      period: "August 2021 – Present",
      location: "Dhaka, Bangladesh",
      isCurrent: true,
      roles: [
        {
          title: "Principal Software Engineer",
          period: "July 2026 – Present",
          current: true,
          points: [
            "Contribute to technical direction and engineering standards.",
            "Participate in technical design discussions and design reviews.",
            "Support engineers through code reviews and knowledge sharing.",
            "Currently developing ServiceNow platform knowledge as part of an assigned skill-development track.",
          ],
          technologies: ["Java", "Spring Boot", "Architecture Review", "Technical Standards", "Mentoring"],
        },
        {
          title: "Senior Software Engineer",
          period: "August 2023 – June 2026",
          current: false,
          points: [
            "Developed Java and Spring Boot backend services and BFF APIs.",
            "Worked on API contracts, business logic, validation, and error handling.",
            "Implemented backend functionality using Spring Data JPA and Hibernate.",
            "Worked with relational databases and application data integration.",
            "Investigated application issues and performed root-cause analysis.",
            "Improved code maintainability through refactoring, automated testing, and code reviews.",
            "Collaborated with stakeholders and cross-functional engineering teams.",
          ],
          technologies: ["Java 21", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "BFF APIs", "JUnit 5"],
        },
        {
          title: "Software Engineer",
          period: "August 2021 – July 2023",
          current: false,
          points: [
            "Developed Java/Spring Boot application features.",
            "Built REST endpoints, business logic, and database integrations.",
            "Contributed to automated testing, debugging, and application maintenance.",
          ],
          technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "Automated Testing"],
        },
      ],
    },
    {
      company: "ServicEngine Ltd.",
      period: "February 2020 – August 2021",
      location: "Dhaka, Bangladesh",
      isCurrent: false,
      roles: [
        {
          title: "Software Engineer — Java",
          period: "February 2020 – August 2021",
          current: false,
          points: [
            "Developed and maintained enterprise HR and payroll application functionality.",
            "Worked with Java, backend technologies, MySQL, and React-based interfaces.",
            "Worked on database queries, application logic, and debugging.",
            "Developed PDF/XML-related data-processing utilities.",
          ],
          technologies: ["Java", "MySQL", "Database Queries", "XML/PDF Processing", "React"],
        },
      ],
    },
    {
      company: "Merinasoft Ltd.",
      period: "May 2019 – January 2020",
      location: "Dhaka, Bangladesh",
      isCurrent: false,
      roles: [
        {
          title: "Software Developer — Java",
          period: "May 2019 – January 2020",
          current: false,
          points: [
            "Developed and maintained Java-based POS and billing applications.",
            "Worked with MySQL databases.",
            "Implemented application enhancements and resolved defects.",
          ],
          technologies: ["Java", "MySQL", "POS Architecture", "Defect Resolution"],
        },
      ],
    },
  ],

  // Technical Skills Categorization (Strictly accurate)
  skills: [
    {
      category: "Programming Languages",
      description: "Languages for enterprise backend applications and scripts",
      skills: ["Java 11–21", "SQL", "JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Backend Engineering",
      description: "Service frameworks, data mapping, and API design",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Hibernate",
        "REST APIs",
        "Microservices",
        "Backend-for-Frontend (BFF)",
      ],
    },
    {
      category: "Databases",
      description: "Relational modeling, storage, and caching engines",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis (learning)"],
    },
    {
      category: "Engineering Concepts",
      description: "Principles, patterns, and architectural discipline",
      skills: [
        "Object-Oriented Programming",
        "SOLID Principles",
        "Design Patterns",
        "API Design",
        "Database Modeling",
        "Transaction Management",
        "Query Optimization",
        "Error Handling",
        "Root-Cause Analysis",
      ],
    },
    {
      category: "Testing",
      description: "Automated verification and test suites",
      skills: ["JUnit 5", "Mockito", "Unit Testing", "Integration Testing", "API Testing"],
    },
    {
      category: "Tools & Platforms",
      description: "Build automation, version control, and developer tools",
      skills: ["Docker", "Git", "GitHub Actions", "Maven", "Gradle", "Postman", "Jira", "Linux"],
    },
  ],

  // Selected Verified Projects
  projects: [
    {
      id: "b2b-ecommerce",
      title: "B2B E-Commerce Backend",
      badge: "Backend Architecture",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Data JPA", "REST APIs", "Docker"],
      description:
        "A backend-focused e-commerce project involving REST APIs, business logic, service-layer architecture, data persistence, validation, and domain workflows.",
      highlights: [
        { label: "Backend Architecture", value: "Layered architecture separating REST controllers, service contracts, domain entities, and data repositories." },
        { label: "REST API Design", value: "Explicit contract definitions, structured error responses, input validation, and clean RESTful endpoint modeling." },
        { label: "Service Layer", value: "Domain business workflows, transaction boundaries, and validation logic." },
        { label: "Database Integration", value: "Relational persistence with PostgreSQL and Spring Data JPA, schema design, and query optimization." },
      ],
      image: "/images/b2b-ecommerce.png",
      githubUrl: "https://github.com/raihanuddin561/b2b-ecommerce",
      liveUrl: null,
    },
    {
      id: "skyzonebd",
      title: "SkyZoneBD — B2B Wholesale Platform",
      badge: "B2B Wholesale Platform",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "REST APIs"],
      description:
        "A B2B wholesale platform focused on business buyers and suppliers with end-to-end commerce and negotiation workflows.",
      highlights: [
        { label: "Buyer Verification", value: "Verification pipelines ensuring legitimate commercial buyers before bulk order access." },
        { label: "Tiered Pricing & MOQs", value: "Volume-based tiered pricing algorithms and Minimum Order Quantity (MOQ) enforcement." },
        { label: "RFQ & Negotiation", value: "Request for Quotation (RFQ) workflows enabling structured supplier-buyer negotiation." },
        { label: "Inventory & Settlement", value: "Real-time stock tracking and partner profit-sharing calculation logic." },
      ],
      image: null,
      githubUrl: "https://github.com/raihanuddin561",
      liveUrl: null,
    },
  ],

  // Engineering Philosophy (The 6 core tenets)
  philosophy: [
    {
      number: "01",
      title: "Understand the problem before selecting a solution",
      description:
        "Thoroughly analyze domain rules, data requirements, and operational constraints before introducing abstractions or adopting new frameworks.",
    },
    {
      number: "02",
      title: "Prefer maintainable and understandable architecture",
      description:
        "Design systems that are straightforward for teams to reason about, modify, and safely maintain over long production lifecycles.",
    },
    {
      number: "03",
      title: "Design APIs with clear contracts",
      description:
        "Treat APIs as published contracts with explicit validation, consistent status codes, transparent error payloads, and backward compatibility.",
    },
    {
      number: "04",
      title: "Consider data consistency and failure handling",
      description:
        "Explicitly manage transaction boundaries, anticipate intermittent failures, and design data access to prevent integrity issues.",
    },
    {
      number: "05",
      title: "Value automated testing and code quality",
      description:
        "Rely on comprehensive unit and integration testing with JUnit and Mockito to catch regressions early and facilitate confident refactoring.",
    },
    {
      number: "06",
      title: "Investigate root causes rather than repeatedly fixing symptoms",
      description:
        "Approach bugs and production anomalies with rigorous root-cause analysis to permanently eliminate failure vectors rather than applying superficial patches.",
    },
  ],

  // Education (Strictly accurate)
  education: [
    {
      degree: "B.Sc. in Software Engineering",
      institution: "Daffodil International University",
      period: "September 2015 – December 2019",
      location: "Dhaka, Bangladesh",
    },
  ],

  // SEO & Metadata
  seo: {
    title: "Raihan Uddin | Senior Backend Engineer — Java & Spring Boot",
    description:
      "Raihan Uddin is a backend software engineer specializing in Java, Spring Boot, microservices, REST APIs, and reliable enterprise application development.",
    canonicalUrl: "https://raihanuddin.dev",
    ogImage: "/images/raihan-uddin.jpeg",
  },
};
