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
  title: "Raihan Uddin | Principal Software Engineer",
  description: "Principal Software Engineer specializing in Java, Spring Boot, REST APIs, BFF architecture, and enterprise backend systems.",
  keywords: "Principal Software Engineer, Java, Spring Boot, Backend Architecture, BFF, REST API, PostgreSQL",
  authors: [{ name: "Raihan Uddin" }],
  creator: "Raihan Uddin",
  openGraph: {
    title: "Raihan Uddin | Principal Software Engineer",
    description: "Principal Software Engineer specializing in Java, Spring Boot, REST APIs, and BFF architecture.",
    url: "https://raihan-portfolio.vercel.app",
    siteName: "Raihan Uddin Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raihan Uddin | Principal Software Engineer",
    description: "Principal Software Engineer specializing in Java, Spring Boot, REST APIs, and BFF architecture.",
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
