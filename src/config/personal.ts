// Personal Configuration - Single source of truth for Raihan Uddin's portfolio
export const personalConfig = {
  // Identity & Positioning
  name: "Raihan Uddin",
  headline: "Senior Backend Engineer | Java | Spring Boot | Microservices",
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
      "Senior Backend Engineer with 7+ years of experience in Java, Spring Boot, Microservices, REST APIs, and backend application development.",
    long:
      "I am Raihan Uddin, a Senior Backend Engineer with 7+ years of hands-on experience building and maintaining enterprise applications using Java, Spring Boot, REST APIs, and microservices. My engineering background spans backend service development, API contract design, relational database modeling and query optimization, automated testing, production troubleshooting, and system maintainability. I actively contribute to technical design discussions, code reviews, engineering standards, and mentoring, complemented by practical AI-assisted development practices. My primary professional focus is building maintainable, reliable, scalable, and well-structured backend systems.",
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
      title: "Database Design & Optimization",
      description:
        "Relational data modeling, schema design, transaction boundaries, and query tuning across PostgreSQL and MySQL using Spring Data JPA and Hibernate.",
      badge: "Data Layer",
    },
    {
      title: "Reliability & Automated Testing",
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
            "Contribute to technical direction, architectural guidelines, and engineering standards.",
            "Participate in technical design discussions and peer code reviews.",
            "Support and mentor engineers through knowledge sharing and code quality reviews.",
            "Currently assigned to a ServiceNow platform skill-development and capability-building initiative.",
          ],
          technologies: ["ServiceNow Platform", "Technical Direction", "Design Reviews", "Mentoring", "Engineering Standards"],
        },
        {
          title: "Senior Software Engineer",
          period: "August 2023 – June 2026",
          current: false,
          points: [
            "Engineered Java and Spring Boot backend services and Backend-for-Frontend (BFF) APIs.",
            "Designed API contracts, business logic, input validation, and structured error handling.",
            "Implemented backend functionality using Spring Data JPA, Hibernate, and PostgreSQL.",
            "Utilized modern Java features to improve service communication, code maintainability, and resilience.",
            "Investigated application issues, performed root-cause analysis, and wrote automated tests with JUnit 5 and Mockito.",
            "Collaborated with cross-functional teams and participated in peer code reviews.",
          ],
          technologies: ["Java 21", "Spring Boot", "Spring Data JPA", "Hibernate", "PostgreSQL", "BFF APIs", "JUnit 5", "Mockito"],
        },
        {
          title: "Software Engineer",
          period: "August 2021 – July 2023",
          current: false,
          points: [
            "Developed Java and Spring Boot application features and service endpoints.",
            "Built REST endpoints, transactional business logic, and MySQL database integrations.",
            "Contributed to debugging, automated testing, defect analysis, and ongoing application maintenance.",
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
            "Formulated database queries, application logic, and defect resolutions.",
            "Developed PDF and XML data-processing utilities for enterprise reporting.",
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
            "Worked with MySQL databases, schema adjustments, and transaction queries.",
            "Implemented application enhancements and resolved production defects.",
          ],
          technologies: ["Java", "MySQL", "POS Architecture", "Defect Resolution"],
        },
      ],
    },
  ],

  // Technical Skills Categorization (Strictly aligned with actual experience)
  skills: [
    {
      category: "Languages",
      description: "Core programming and querying languages for enterprise systems",
      skills: ["Java", "SQL", "JavaScript", "TypeScript"],
    },
    {
      category: "Backend",
      description: "Frameworks, ORMs, and architectural patterns for services and APIs",
      skills: [
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Hibernate",
        "REST APIs",
        "Microservices",
        "BFF Architecture",
      ],
    },
    {
      category: "Databases",
      description: "Relational and document storage engines for production persistence",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Testing",
      description: "Automated verification, mock frameworks, and regression suites",
      skills: ["JUnit 5", "Mockito"],
    },
    {
      category: "Tools & DevOps",
      description: "Build tooling, containerization, version control, and collaboration",
      skills: [
        "Docker",
        "Kubernetes (Basic Knowledge)",
        "Git",
        "GitHub Actions",
        "Maven",
        "Gradle",
        "Linux",
        "Postman",
        "Jira",
      ],
    },
    {
      category: "AI-Assisted Development",
      description: "Modern AI tooling leveraged for coding, debugging, and system planning",
      skills: [
        "Claude",
        "Gemini",
        "ChatGPT",
        "AI-assisted coding",
        "AI-assisted debugging",
        "Technical planning and problem-solving",
      ],
    },
  ],

  // Selected Verified Personal Projects (Clearly distinguished from professional employment)
  projects: [
    {
      id: "kuttush",
      title: "Kuttush — Baby E-Commerce Platform",
      badge: "Personal Project · E-Commerce",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI-Assisted Development"],
      description:
        "A modern baby-products e-commerce application designed for frictionless product discovery, responsive customer shopping workflows, and high search engine visibility. Leveraged Claude, Gemini, and ChatGPT as engineering assistants for architecture planning, debugging, and iterative code refinement.",
      highlights: [
        { label: "Product Discovery & Shopping", value: "Smooth category browsing, real-time search, and mobile-first shopping workflows." },
        { label: "Customer Workflows", value: "Customer account interaction, responsive cart state, and streamlined checkout experience." },
        { label: "SEO & Web Performance", value: "Structured metadata, optimized Core Web Vitals, and responsive image loading." },
        { label: "AI-Assisted Engineering", value: "Utilized Claude, Gemini, and ChatGPT for rapid debugging, planning, and code refinement." },
      ],
      image: null,
      githubUrl: "https://github.com/raihanuddin561/kuttushland",
      liveUrl: "https://kuttush.shop",
    },
    {
      id: "skyzonebd",
      title: "SkyZoneBD — B2B Wholesale Platform",
      badge: "Personal Project · B2B Wholesale & AI",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "AI Assistant", "AI-Assisted Development"],
      description:
        "A comprehensive B2B wholesale platform built with Next.js, PostgreSQL, and Prisma. Features commercial buyer verification, tiered volume pricing, MOQ controls, RFQ negotiations, and an integrated customer-facing AI Assistant that assists buyers with wholesale product queries, pricing brackets, and RFQ generation.",
      highlights: [
        { label: "Buyer Verification", value: "Multi-step commercial buyer vetting pipeline ensuring authenticated wholesale transactions." },
        { label: "Tiered Pricing & MOQs", value: "Volume-based tiered discount algorithms and Minimum Order Quantity (MOQ) enforcement." },
        { label: "RFQ & Negotiation", value: "Request for Quotation (RFQ) workflows allowing buyers to submit and negotiate custom bulk orders." },
        { label: "Integrated AI Assistant", value: "Customer-facing intelligent assistant helping buyers query wholesale catalog specifications, volume tiers, and draft RFQ proposals." },
      ],
      image: null,
      githubUrl: "https://github.com/raihanuddin561/skyzonebd",
      liveUrl: "https://skyzonebd.shop",
    },
    {
      id: "b2b-ecommerce",
      title: "Java Spring Boot B2B E-Commerce Backend",
      badge: "Personal Project · Backend Architecture",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Data JPA", "Hibernate", "Docker", "JUnit 5"],
      description:
        "A dedicated backend service architecture engineered with Java and Spring Boot. Implements RESTful API contracts, domain service layers, relational data persistence, transaction management, and automated test coverage with JUnit 5.",
      highlights: [
        { label: "Backend Architecture", value: "Layered architecture separating REST controllers, service contracts, domain entities, and data repositories." },
        { label: "REST API Contracts", value: "Explicit contract definitions, structured error payloads, input validation, and HTTP status code discipline." },
        { label: "Relational Persistence", value: "PostgreSQL schema design with Spring Data JPA and Hibernate, transaction management, and query tuning." },
        { label: "Test Automation", value: "Comprehensive automated unit and integration tests using JUnit 5 and Mockito ensuring service reliability." },
      ],
      image: "/images/b2b-ecommerce.png",
      githubUrl: "https://github.com/raihanuddin561/b2b-ecommerce",
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
      "Raihan Uddin is a Senior Backend Engineer with 7+ years of experience in Java, Spring Boot, Microservices, REST APIs, and backend application development.",
    canonicalUrl: "https://raihanuddin.me",
    ogImage: "/images/raihan-uddin.jpg",
  },
};
