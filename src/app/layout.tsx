import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HydrationErrorBoundary from "@/components/HydrationErrorBoundary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raihan Uddin - Senior Java Backend Developer",
  description: "Experienced Java Backend Developer with 5+ years of expertise in Spring Boot, microservices, and BFF architecture. Seeking remote backend roles with UK/EU companies.",
  keywords: "Java Developer, Spring Boot, Microservices, Backend Developer, BFF Architecture, PostgreSQL, Remote Developer",
  authors: [{ name: "Raihan Uddin" }],
  creator: "Raihan Uddin",
  openGraph: {
    title: "Raihan Uddin - Senior Java Backend Developer",
    description: "Experienced Java Backend Developer specializing in Spring Boot, microservices, and Backend for Frontend (BFF) architecture.",
    url: "https://raihan-portfolio.vercel.app",
    siteName: "Raihan Uddin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan Uddin - Senior Java Backend Developer",
    description: "Experienced Java Backend Developer specializing in Spring Boot, microservices, and Backend for Frontend (BFF) architecture.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <HydrationErrorBoundary>
          {children}
        </HydrationErrorBoundary>
      </body>
    </html>
  );
}
