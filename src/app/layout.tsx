import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { PORTFOLIO_DATA } from "@/constants/data";
import { ToastContainer } from "@/components/ui/Toast";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

import { MouseSpotlight } from "@/components/ui/MouseSpotlight";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  // Required for Next to emit absolute og:image / twitter:image URLs.
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://sinanpmk.vercel.app"),
  title: `${PORTFOLIO_DATA.hero.name} | ${PORTFOLIO_DATA.hero.title}`,
  description: PORTFOLIO_DATA.hero.tagline,
  openGraph: {
    title: `${PORTFOLIO_DATA.hero.name} | ${PORTFOLIO_DATA.hero.title}`,
    description: PORTFOLIO_DATA.hero.tagline,
    type: "website",
    siteName: PORTFOLIO_DATA.hero.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.hero.name} | ${PORTFOLIO_DATA.hero.title}`,
    description: PORTFOLIO_DATA.hero.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} dark scroll-smooth overflow-x-hidden`}
    >
      <body className="font-sans text-white antialiased selection:bg-primary/30 selection:text-white relative overflow-x-hidden">
        <MotionProvider>
          <ScrollProgress />
          <MouseSpotlight />
          <AnimatedBackground />
          <Navbar />
          <ToastContainer />
          {children}
          <Footer />
        </MotionProvider>

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
              description: PORTFOLIO_DATA.about.summary.join(" "),
              sameAs: PORTFOLIO_DATA.socialLinks
                .filter((s) => s.name !== "WhatsApp")
                .map((s) => s.url),
            }),
          }}
        />
      </body>
    </html>
  );
}
