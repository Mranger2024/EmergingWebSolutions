import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emerging Web Solutions | Professional Web Development Worldwide",
  description: "Get a high-performance website for your business. We build the complete demo first, you pay only after project approval. Serving clients globally with transparent pricing.",
  openGraph: {
    title: "Modern Websites. Worldwide Reach. | Emerging Web Solutions",
    description: "Risk-free website development for businesses worldwide. No upfront payment.",
    images: ["/og/home-og.png"],
  }
};

// Lazy load below-the-fold components for better performance
const PackageSnapshot = dynamic(() => import("@/components/home/package-snapshot").then(mod => ({ default: mod.PackageSnapshot })), {
  loading: () => <div className="min-h-[400px]" />,
});

const HowItWorks = dynamic(() => import("@/components/home/how-it-works").then(mod => ({ default: mod.HowItWorks })), {
  loading: () => <div className="min-h-[400px]" />,
});

const Testimonials = dynamic(() => import("@/components/home/testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="min-h-[300px]" />,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustBar />
      <PackageSnapshot />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}
