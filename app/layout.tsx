import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://emergingwebsolutions.in'),
  title: "Emerging Web Solutions | Global Web Agency | Websites for ₹14,999 / $199",
  description: "Get a custom WordPress website with domain, hosting, and SSL. Worldwide service with flat pricing. Pay only after you are 100% happy. Ideal for businesses globally.",
  keywords: ["web design", "wordpress agency", "website development", "small business website", "pay after delivery", "global web development", "affordable websites"],
  openGraph: {
    title: "Emerging Web Solutions | Global Web Development Partners",
    description: "Risk-free website development. We build your completo demo first, you pay later. Serving clients worldwide.",
    type: "website",
    locale: "en_US",
    siteName: "Emerging Web Solutions",
    images: [
      {
        url: "/og/home-og.png",
        width: 1200,
        height: 630,
        alt: "Emerging Web Solutions - Global Web Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Emerging Web Solutions | Global Web Agency",
    description: "Premium websites with no upfront cost. We build it, you approve it, then you pay.",
    images: ["/og/home-og.png"],
    creator: "@EmergingWebSol",
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { MadeInIndiaBadge } from "@/components/ui/made-in-india-badge";
import { StructuredData } from "@/components/seo/structured-data";
import { PostHogProvider } from "@/components/providers/posthog-provider";
import { PricingProvider } from "@/contexts/pricing-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <PostHogProvider>
          <PricingProvider>
            <ThemeProvider defaultTheme="blue" defaultMode="light" storageKey="webdevagency-theme">
              <StructuredData />
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <MadeInIndiaBadge />
            </ThemeProvider>
          </PricingProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
