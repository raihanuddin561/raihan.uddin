import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HydrationErrorBoundary from "@/components/HydrationErrorBoundary";
import { personalConfig } from "@/config/personal";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080c14",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(personalConfig.seo.canonicalUrl),
  title: personalConfig.seo.title,
  description: personalConfig.seo.description,
  keywords: [
    "Raihan Uddin",
    "Raihan Uddin Software Engineer",
    "Raihan Uddin BJIT",
    "Raihan Uddin Java",
    "Raihan Uddin Backend Engineer",
    "Senior Backend Engineer",
    "Java",
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "Backend Architecture",
    "PostgreSQL",
    "Spring Data JPA",
    "Principal Software Engineer",
    "BJIT Ltd",
    "Dhaka Bangladesh",
    "AI-Assisted Software Development",
  ],
  authors: [{ name: personalConfig.name, url: personalConfig.social.linkedin.url }],
  creator: personalConfig.name,
  publisher: personalConfig.name,
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/icon.svg" },
    ],
  },
  openGraph: {
    title: personalConfig.seo.title,
    description: personalConfig.seo.description,
    url: personalConfig.seo.canonicalUrl,
    siteName: personalConfig.name,
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: personalConfig.seo.ogImage,
        width: 1792,
        height: 2400,
        alt: `Portrait of ${personalConfig.name} — Senior Backend Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: personalConfig.seo.title,
    description: personalConfig.seo.description,
    images: [personalConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "profile:first_name": "Raihan",
    "profile:last_name": "Uddin",
    "profile:username": personalConfig.social.github.username,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${personalConfig.seo.canonicalUrl}/#person`,
      name: personalConfig.name,
      givenName: "Raihan",
      familyName: "Uddin",
      alternateName: ["Raihan Uddin", "Md. Raihan Uddin", "raihanuddin561", "Raihan Uddin BJIT"],
      gender: "https://schema.org/Male",
      jobTitle: "Senior Backend Engineer",
      description: personalConfig.summary.short,
      email: `mailto:${personalConfig.contact.email}`,
      telephone: "+8801749948344",
      url: personalConfig.seo.canonicalUrl,
      image: `${personalConfig.seo.canonicalUrl}${personalConfig.seo.ogImage}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "Bangladesh",
      },
      worksFor: {
        "@type": "Organization",
        name: personalConfig.company,
        url: personalConfig.companyUrl,
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: personalConfig.education[0].institution,
        url: "https://daffodilvarsity.edu.bd",
      },
      sameAs: [
        personalConfig.social.linkedin.url,
        personalConfig.social.github.url,
        "https://kuttush.shop",
        "https://skyzonebd.shop",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Senior Backend Engineer",
        occupationalCategory: "15-1252.00",
        description: "Designing and developing enterprise Java, Spring Boot, microservices, REST APIs, and database persistence architectures.",
        skills: "Java, Spring Boot, Microservices, REST APIs, PostgreSQL, MySQL, Spring Data JPA, Hibernate, Docker",
      },
      knowsAbout: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST APIs",
        "Backend-for-Frontend (BFF)",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Spring Data JPA",
        "Hibernate",
        "Docker",
        "JUnit 5",
        "Mockito",
        "System Design",
        "AI-Assisted Software Development",
      ],
      mainEntityOfPage: personalConfig.seo.canonicalUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${personalConfig.seo.canonicalUrl}/#website`,
      url: personalConfig.seo.canonicalUrl,
      name: "Raihan Uddin",
      alternateName: "Raihan Uddin Portfolio",
      description: personalConfig.seo.description,
      publisher: {
        "@id": `${personalConfig.seo.canonicalUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${personalConfig.seo.canonicalUrl}/#webpage`,
      url: personalConfig.seo.canonicalUrl,
      name: personalConfig.seo.title,
      isPartOf: {
        "@id": `${personalConfig.seo.canonicalUrl}/#website`,
      },
      about: {
        "@id": `${personalConfig.seo.canonicalUrl}/#person`,
      },
      mainEntity: {
        "@id": `${personalConfig.seo.canonicalUrl}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio_theme');
                  if (saved === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080c14] text-slate-100 transition-colors duration-200 selection:bg-sky-500/30 selection:text-white`}
        suppressHydrationWarning
      >
        <HydrationErrorBoundary>{children}</HydrationErrorBoundary>
      </body>
    </html>
  );
}
