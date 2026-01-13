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
  title: "Emerging Web Solutions | Professional Websites for ₹14,999",
  description: "Get a custom WordPress website with domain, hosting, and SSL for just ₹14,999. Pay only after you are 100% happy. Ideal for small businesses in India.",
  keywords: ["web design", "wordpress agency", "website development", "small business website", "pay after delivery"],
  openGraph: {
    title: "Emerging Web Solutions | Professional Websites for ₹14,999",
    description: "Risk-free website development. We build first, you pay later.",
    type: "website",
    locale: "en_IN",
  },
};

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

import { ThemeProvider } from "@/components/theme-provider";
import { MadeInIndiaBadge } from "@/components/ui/made-in-india-badge";

import { StructuredData } from "@/components/seo/structured-data";

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
        <ThemeProvider defaultTheme="blue" defaultMode="dark" storageKey="webdevagency-theme">
          <StructuredData />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MadeInIndiaBadge />
        </ThemeProvider>
      </body>
    </html>
  );
}
