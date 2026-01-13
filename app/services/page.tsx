import { Check, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Web Design Services & Pricing | Emerging Web Solutions",
    description: "Affordable web design packages starting at ₹14,999. Includes domain, hosting, SEO, and professional design. Transparency guaranteed.",
    openGraph: {
        title: "Web Design Services & Pricing | Emerging Web Solutions",
        description: "Affordable web design packages starting at ₹14,999. Includes domain, hosting, SEO, and professional design. Transparency guaranteed.",
    }
}

const mainPackageFeatures = [
    "Custom WordPress Website (Up to 10 Pages)",
    "1 Year Domain Name (.com / .in) included",
    "1 Year Premium SSD Hosting included",
    "Free SSL Certificate (HTTPS) for security",
    "Mobile Responsive Design (Works on all devices)",
    "Blog Setup + 3 SEO-Friendly Posts",
    "Google Search Console & Analytics Setup",
    "Google Business Profile Creation/Optimization",
    "Contact Form & WhatsApp Chat Integration",
    "Social Media Profile Integration",
    "Basic On-Page SEO (Meta tags, Titles, Descriptions)",
    "Image Optimization for Fast Loading",
    "Speed Optimization (Caching & Minification)",
    "User-Friendly Admin Dashboard",
    "2 Rounds of Design Revisions",
    "14 Days Free Post-Launch Support",
    "Premium Security Plugin Setup",
    "XML Sitemap Generation",
]

const addOns = [
    {
        name: "Additional Pages",
        price: "₹800 - ₹1,000",
        unit: "per page",
        description: "Need more than 10 pages? We can add as many as you need.",
    },
    {
        name: "WooCommerce Setup",
        price: "₹4,000 - ₹6,000",
        unit: "one-time",
        description: "Turn your site into an online store with product listings and cart.",
    },
    {
        name: "Logo Design",
        price: "₹1,500",
        unit: "one-time",
        description: "Professional logo design if you don't have one yet.",
    },
]



export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="bg-muted/30 pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        No hidden fees. No surprises. Just a professional website that grows your business.
                    </p>
                </div>
            </Section>

            {/* Value Proposition Detail */}
            <Section className="pb-12">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why this package is perfect for <span className="text-blue-500">Growth</span></h2>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">1. Professional Design, Not Templates</h3>
                                    <p className="text-muted-foreground">We don't just copy-paste. We design a unique website that matches your brand identity and appeals to your specific target audience.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">2. Built for Google (SEO Ready)</h3>
                                    <p className="text-muted-foreground">A pretty website is useless if no one finds it. We structure your site with proper H1 tags, meta descriptions, and clean code so Google loves it.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">3. Speed & Security Included</h3>
                                    <p className="text-muted-foreground">Slow sites lose customers. We host your site on premium SSD servers and secure it with SSL to ensure it loads fast and stays safe.</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">4. You Own Everything</h3>
                                    <p className="text-muted-foreground">Unlike Wix or Shopify where you rent your site, with us, you own your domain, hosting account, and all website files. You have full control.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
                            <h3 className="text-xl font-bold mb-4 text-white">What happens after 1 year?</h3>
                            <p className="text-slate-400 mb-6">
                                Transparency is our core value. The ₹14,999 price covers everything for the first 12 months.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex gap-3 text-slate-300">
                                    <div className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">1</div>
                                    <span><strong>Domain Renewal:</strong> Approx. ₹1,000 / year (paid to provider)</span>
                                </li>
                                <li className="flex gap-3 text-slate-300">
                                    <div className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">2</div>
                                    <span><strong>Hosting Renewal:</strong> Approx. ₹3,000 - ₹4,000 / year (paid to provider)</span>
                                </li>
                                <li className="flex gap-3 text-slate-300">
                                    <div className="h-6 w-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">3</div>
                                    <span><strong>Our Support:</strong> Optional. You can manage it yourself or hire us for maintenance.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Main Package */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <Card className="border-primary shadow-xl overflow-hidden">
                        <div className="bg-gradient-to-r from-[var(--theme-gradient-start)] to-[var(--theme-gradient-end)] p-6 text-center text-slate-900">
                            <h2 className="text-2xl font-bold">Starter Growth Package</h2>
                            <p className="opacity-90 mt-2">Everything you need to get online professionally</p>
                        </div>
                        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <h3 className="font-semibold text-lg mb-4">What's Included:</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {mainPackageFeatures.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                                            <Check className="h-5 w-5 text-[var(--theme-text)] dark:text-[var(--theme-text-dark)] shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center lg:border-l lg:pl-8">
                                <div className="text-4xl font-bold text-foreground">₹14,999</div>
                                <div className="text-muted-foreground text-sm mb-6">All-inclusive for 1st year</div>
                                <Button size="lg" className="w-full" asChild>
                                    <Link href="/contact">Get Started</Link>
                                </Button>
                                <p className="text-xs text-muted-foreground mt-4">
                                    Pay only after you approve the design.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </Section>

            {/* Add-ons */}
            <Section className="bg-muted/20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Optional Add-Ons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {addOns.map((addon) => (
                            <Card key={addon.name} className="flex flex-col">
                                <CardHeader>
                                    <CardTitle>{addon.name}</CardTitle>
                                    <CardDescription>{addon.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <div className="text-2xl font-bold">
                                        {addon.price} <span className="text-sm font-normal text-muted-foreground">{addon.unit}</span>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="outline" className="w-full" asChild>
                                        <Link href="/contact">Inquire</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Maintenance Plans Removed as per request */}
        </div>
    )
}
