import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

      {/* Final CTA */}
      <Section className="bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
          Ready to see your website before you pay?
        </h2>
        <p className="text-lg mb-10 max-w-2xl mx-auto">
          Get a free consultation and let us build a demo for you. No commitment required.
        </p>
        <Button size="lg" variant="secondary" asChild className="text-base text-[var(--theme-text-dark)] px-8">
          <Link href="/contact">Get a Free Website Plan</Link>
        </Button>
      </Section>
    </div>
  );
}
