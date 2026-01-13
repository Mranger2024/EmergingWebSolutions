import { Check, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const mainPackageFeatures = [
    "Custom WordPress Website (Up to 10 Pages)",
    "1 Year Domain Name (.com / .in)",
    "1 Year Premium Hosting (SSD, Fast Loading)",
    "Free SSL Certificate (HTTPS)",
    "Mobile Responsive Design",
    "Blog Setup + 3 SEO-Friendly Posts",
    "Google Search Console & Analytics Setup",
    "Google Business Profile Setup",
    "Contact Form & WhatsApp Integration",
    "Social Media Links",
    "Basic On-Page SEO",
    "2 Rounds of Revisions",
    "14 Days Post-Launch Support",
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

const maintenancePlans = [
    {
        name: "Basic Maintenance",
        price: "₹499",
        unit: "/month",
        features: [
            "Monthly Full Site Backup",
            "Plugin & Theme Updates",
            "Security Monitoring",
            "Uptime Monitoring",
        ],
    },
    {
        name: "Pro Maintenance",
        price: "₹999",
        unit: "/month",
        features: [
            "Everything in Basic",
            "Weekly Backups",
            "Small Text/Image Edits (up to 2 hrs)",
            "Priority Support",
            "Monthly Performance Report",
        ],
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

            {/* Maintenance Plans */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Peace of Mind Maintenance</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        You don't *have* to pay us monthly. But if you want us to handle updates and security, we've got you covered.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {maintenancePlans.map((plan) => (
                            <Card key={plan.name} className={plan.name.includes("Pro") ? "border-primary shadow-md" : ""}>
                                <CardHeader>
                                    <div className="flex justify-between items-center">
                                        <CardTitle>{plan.name}</CardTitle>
                                        {plan.name.includes("Pro") && <Badge>Recommended</Badge>}
                                    </div>
                                    <div className="text-3xl font-bold mt-2">
                                        {plan.price} <span className="text-sm font-normal text-muted-foreground">{plan.unit}</span>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <Check className="h-4 w-4 text-[var(--theme-text)] dark:text-[var(--theme-text-dark)]" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button variant={plan.name.includes("Pro") ? "default" : "outline"} className="w-full" asChild>
                                        <Link href="/contact">Choose Plan</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    )
}
