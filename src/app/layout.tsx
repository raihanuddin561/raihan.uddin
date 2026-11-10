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
  metadataBase: new URL("https://raihanuddin.me"),
  title: personalConfig.seo.title,
  description: personalConfig.seo.description,
  keywords: [
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
    "Raihan Uddin",
  ],
  authors: [{ name: personalConfig.name, url: personalConfig.social.linkedin.url }],
  creator: personalConfig.name,
  publisher: personalConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: personalConfig.seo.title,
    description: personalConfig.seo.description,
    url: "https://raihanuddin.me",
    siteName: `${personalConfig.name} — Portfolio`,
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: personalConfig.seo.ogImage,
        width: 1792,
        height: 2400,
        alt: `${personalConfig.name} — Senior Backend Engineer`,
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
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personalConfig.name,
  jobTitle: personalConfig.headline,
  description: personalConfig.summary.short,
  email: `mailto:${personalConfig.contact.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
  worksFor: {
    "@type": "Organization",
    name: personalConfig.company,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: personalConfig.education[0].institution,
  },
  sameAs: [personalConfig.social.linkedin.url, personalConfig.social.github.url],
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Microservices",
    "REST APIs",
    "PostgreSQL",
    "Backend Architecture",
    "Spring Data JPA",
    "Hibernate",
    "Docker",
    "System Design",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
