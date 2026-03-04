import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { PORTFOLIO_DATA } from "@/constants/data";
import { ToastContainer } from "@/components/ui/Toast";

import { MouseSpotlight } from "@/components/ui/MouseSpotlight";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.hero.name} | ${PORTFOLIO_DATA.hero.title}`,
  description: PORTFOLIO_DATA.hero.tagline,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: `${PORTFOLIO_DATA.hero.name} | ${PORTFOLIO_DATA.hero.title}`,
    description: PORTFOLIO_DATA.hero.tagline,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth overflow-x-hidden">
      <body className={`${inter.variable} font-sans text-white antialiased selection:bg-emerald-500/30 selection:text-white relative overflow-x-hidden`}>
        <MouseSpotlight />
        <AnimatedBackground />
        <Navbar />
        <ToastContainer />
        {children}
        <Footer />
        
        {/* Basic JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: PORTFOLIO_DATA.hero.name,
              jobTitle: PORTFOLIO_DATA.hero.title,
              address: {
                "@type": "PostalAddress",
                addressLocality: PORTFOLIO_DATA.hero.location,
              },
              description: PORTFOLIO_DATA.about.summary,
              url: "https://yourportfolio.com", // Replace with real URL later
            }),
          }}
        />
      </body>
    </html>
  );
}
