"use client"

import * as React from "react"
import { Check, Plus, Sparkles, Zap, Shield, Globe, Award, MousePointer2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePricing } from "@/contexts/pricing-context"
import InteractiveGrid from "@/components/ui/InteractiveGrid"

const basicPackageFeatures = [
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
    "2 Rounds of Design Revisions",
    "14 Days Free Post-Launch Support",
    "Premium Security Plugin Setup",
    "XML Sitemap Generation",
]

const mainPackageStandardFeatures = [
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
    "2 Rounds of Design Revisions",
    "14 Days Free Post-Launch Support",
    "Premium Security Plugin Setup",
    "XML Sitemap Generation",
]

const mainPackagePremiumFeatures = [
    {
        name: "Advanced Business Management System",
        description: "Complete admin dashboard to manage your business operations, track inquiries, and monitor performance",
        isPremium: true
    },
    {
        name: "Appointment Booking System",
        description: "Automated online booking system with calendar integration, email notifications, and customer management",
        isPremium: true
    },
]

const addOns = [
    {
        name: "Additional Pages",
        price: "₹800 - ₹1,000",
        unit: "per page",
        description: "Need more than 10 pages? We can add as many as you need.",
        icon: Plus
    },
    {
        name: "WooCommerce Setup",
        price: "₹4,000 - ₹6,000",
        unit: "one-time",
        description: "Turn your site into an online store with product listings and cart.",
        icon: Zap
    },
    {
        name: "Logo Design",
        price: "₹1,500",
        unit: "one-time",
        description: "Professional logo design if you don't have one yet.",
        icon: Award
    },
]

const valueBlock = [
    {
        title: "Professional Design",
        desc: "Custom-crafted digital experiences that align with your brand identity and resonate with global audiences.",
        icon: MousePointer2,
        color: "blue"
    },
    {
        title: "AI & SEO Ready",
        desc: "Optimized for machines and humans. From Google semantic code to AI agent structured data.",
        icon: Sparkles,
        color: "amber"
    },
    {
        title: "Global Performance",
        desc: "SSD infrastructure and localized CDNs ensure lightning-fast speeds and security worldwide.",
        icon: Globe,
        color: "indigo"
    },
    {
        title: "Complete Ownership",
        desc: "100% asset ownership. No vendor lock-in. Domain, hosting, and code are yours from day one.",
        icon: Shield,
        color: "green"
    }
]

export default function ServicesPage() {
    const { formatPrice } = usePricing()

    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Hero Section */}
            <Section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
                <div className="absolute inset-0 z-0">
                    <InteractiveGrid />
                </div>
                
                <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge variant="outline" className="mb-8 py-1.5 px-6 border-primary/20 text-primary bg-primary/5 rounded-full font-black uppercase tracking-[0.3em] text-[10px]">
                            <Sparkles className="w-3.5 h-3.5 mr-2" />
                            Premium Solutions
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
                            Simple, Transparent <br />
                            <span className="text-primary italic">Pricing.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground/80 font-semibold mb-12 max-w-3xl mx-auto leading-relaxed">
                            No hidden fees. No surprises. Just a world-class website that <span className="text-foreground">scales your brand</span> globally.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Value Bento Grid */}
            <Section className="py-24 bg-[var(--background-alt)]">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="md:col-span-2 space-y-6">
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-8">
                                Why Our Packages <br />
                                Deliver <span className="text-primary italic">Growth.</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {valueBlock.slice(0, 2).map((item, i) => (
                                    <Card key={item.title} className="bg-background/40 backdrop-blur-md border-border/40 p-8 rounded-[2rem] hover:shadow-xl hover:border-primary/20 transition-all group">
                                        <div className={`h-12 w-12 rounded-xl bg-${item.color}-500/10 flex items-center justify-center mb-6 text-${item.color}-600 group-hover:scale-110 transition-transform`}>
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <h3 className="text-xl font-black mb-3">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm font-semibold leading-relaxed">{item.desc}</p>
                                    </Card>
                                ))}
                            </div>
                        </div>
                        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {valueBlock.slice(2, 4).map((item, i) => (
                                <Card key={item.title} className="bg-background/40 backdrop-blur-md border-border/40 p-8 rounded-[2rem] hover:shadow-xl hover:border-primary/20 transition-all group">
                                    <div className={`h-12 w-12 rounded-xl bg-${item.color}-500/10 flex items-center justify-center mb-6 text-${item.color}-600 group-hover:scale-110 transition-transform`}>
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-xl font-black mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground text-sm font-semibold leading-relaxed">{item.desc}</p>
                                </Card>
                            ))}
                            <Card className="md:col-span-2 bg-slate-950 p-8 rounded-[2.5rem] border-none shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
                                <div className="relative z-10">
                                    <h3 className="text-xl font-black text-white mb-6">What happens after 1 year?</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        {[
                                            { label: "Domain Renewal", price: "± ₹1,000 /yr" },
                                            { label: "Hosting Renewal", price: "± ₹3k - ₹4k /yr" },
                                            { label: "Maintenance", price: "Optional Support" }
                                        ].map((item, i) => (
                                            <div key={item.label} className="space-y-1">
                                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/80">{item.label}</div>
                                                <div className="text-slate-200 font-bold">{item.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Pricing Elite Cards */}
            <Section className="py-32">
                <div className="container mx-auto px-4 max-w-7xl">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-center mb-24">Compare Our <span className="text-primary italic">Solutions.</span></h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Essential Package */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-border/60 bg-background/50 backdrop-blur-xl rounded-[3rem] overflow-hidden hover:shadow-2xl transition-all duration-700">
                                <div className="p-12 pb-0">
                                    <Badge variant="secondary" className="mb-6 bg-muted/50 text-muted-foreground/80 px-4 py-1 rounded-full font-black text-[10px] tracking-[0.2em] uppercase">Startups & Personal</Badge>
                                    <h3 className="text-4xl font-black tracking-tighter mb-4 text-foreground">Essential Package</h3>
                                    <div className="flex items-baseline gap-2 mb-8">
                                        <span className="text-6xl font-black text-foreground tracking-tighter">{formatPrice(9999)}</span>
                                        <span className="text-muted-foreground font-semibold text-sm uppercase tracking-widest">/ 1st Year</span>
                                    </div>
                                    <Button size="lg" className="w-full h-16 rounded-full bg-foreground text-background font-black text-lg hover:bg-slate-800 transition-all mb-4" asChild>
                                        <Link href="/contact">Get Started Now</Link>
                                    </Button>
                                    <p className="text-[10px] text-center text-muted-foreground font-black uppercase tracking-widest mb-12">No Risk. High Reward.</p>
                                </div>
                                <div className="p-12 pt-0 bg-muted/20 border-t border-border/40">
                                    <div className="text-[11px] font-black uppercase tracking-[0.3em] text-primary mb-8">Detailed Blueprint:</div>
                                    <ul className="grid grid-cols-1 gap-y-4">
                                        {basicPackageFeatures.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 group">
                                                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all">
                                                    <Check className="h-3 w-3" />
                                                </div>
                                                <span className="text-sm font-semibold text-muted-foreground/90 group-hover:text-foreground transition-colors leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </motion.div>

                        {/* Starter Growth Package */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="h-full border-primary/20 bg-background/50 backdrop-blur-xl rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/10 relative group">
                                <div className="absolute top-8 right-8 z-20">
                                    <Badge className="bg-primary text-primary-foreground font-black px-6 py-2 rounded-full shadow-lg text-[10px] tracking-widest uppercase">Elite Growth</Badge>
                                </div>
                                
                                <div className="p-12 pb-0">
                                    <Badge variant="secondary" className="mb-6 bg-primary/10 text-primary px-4 py-1 rounded-full font-black text-[10px] tracking-[0.2em] uppercase">Growing Brands</Badge>
                                    <h3 className="text-4xl font-black tracking-tighter mb-4 text-foreground">Growth Package</h3>
                                    <div className="flex items-baseline gap-2 mb-8">
                                        <span className="text-6xl font-black text-foreground tracking-tighter">{formatPrice(14999)}</span>
                                        <span className="text-muted-foreground font-semibold text-sm uppercase tracking-widest">/ 1st Year</span>
                                    </div>
                                    <Button size="lg" className="w-full h-16 rounded-full bg-primary text-primary-foreground font-black text-lg hover:scale-[1.02] shadow-xl shadow-primary/20 transition-all mb-4" asChild>
                                        <Link href="/contact">Scale My Business</Link>
                                    </Button>
                                    <p className="text-[10px] text-center text-primary font-black uppercase tracking-widest mb-12 animate-pulse">Most Preferred Solution</p>
                                </div>
                                
                                <div className="p-12 pt-0 bg-primary/[0.03] border-t border-primary/10">
                                    {/* Premium Power Grid */}
                                    <div className="mb-12 p-6 bg-primary/5 rounded-[2rem] border border-primary/10 shadow-inner">
                                        <div className="text-[11px] font-black uppercase tracking-[0.3em] text-primary mb-6">Power Injected:</div>
                                        <div className="space-y-6">
                                            {mainPackagePremiumFeatures.map((f) => (
                                                <div key={f.name} className="flex gap-4">
                                                    <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/10">
                                                        <Zap className="w-5 h-5" />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-black text-foreground">{f.name}</div>
                                                        <div className="text-[11px] text-muted-foreground font-semibold leading-relaxed mt-1">{f.description}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground/60 mb-8">Standard Fundamentals:</div>
                                    <ul className="grid grid-cols-1 gap-y-4">
                                        {mainPackageStandardFeatures.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 group">
                                                <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary group-hover:text-white transition-all">
                                                    <Check className="h-3 w-3" />
                                                </div>
                                                <span className="text-sm font-semibold text-muted-foreground/90 group-hover:text-foreground transition-colors leading-tight">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Strategic Add-ons */}
            <Section className="py-32 bg-[var(--background-alt)]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Strategic <span className="text-primary italic">Add-ons.</span></h2>
                        <p className="text-xl text-muted-foreground/80 font-bold">Custom power-ups to perfectly tailor your new identity.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {addOns.map((addon, i) => (
                            <motion.div
                                key={addon.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="p-10 rounded-[2.5rem] border-border/40 bg-background/50 backdrop-blur-xl h-full flex flex-col hover:shadow-2xl transition-all group">
                                    <div className="h-14 w-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                                        <addon.icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-2xl font-black mb-3">{addon.name}</h3>
                                    <p className="text-muted-foreground font-semibold text-sm leading-relaxed mb-8">{addon.description}</p>
                                    <div className="mt-auto space-y-6">
                                        <div className="text-3xl font-black text-foreground">
                                            {addon.price} <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">/ {addon.unit}</span>
                                        </div>
                                        <Button variant="outline" className="w-full h-12 rounded-full border-primary/20 hover:bg-primary hover:text-white transition-all font-black text-xs uppercase tracking-widest" asChild>
                                            <Link href="/contact">Add to Identity</Link>
                                        </Button>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Content Injection: Detailed Final CTA */}
            <Section className="py-32">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-950 rounded-[4rem] p-16 md:p-24 relative overflow-hidden shadow-2xl shadow-primary/20"
                    >
                        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                        
                        <div className="relative z-10 space-y-10">
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-tight">
                                Ready for a Clean <br />
                                <span className="bg-gradient-to-r from-amber-200 via-primary to-indigo-300 text-transparent bg-clip-text italic">Digital Start?</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
                                Join hundreds of businesses worldwide that trust Emerging Web Solutions for their <span className="text-white underline decoration-primary decoration-2 underline-offset-8">high-performance journey</span>. Pay only after you are 100% happy.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                                <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-primary text-white font-black hover:scale-[1.03] shadow-2xl transition-all" asChild>
                                    <Link href="/contact">Claim My Website Package</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-16 px-12 text-xl rounded-full border-white/10 bg-white/5 text-white font-black hover:bg-white/10 transition-all group" asChild>
                                    <Link href="https://wa.me/918688440114" className="flex items-center gap-2">
                                        Chat with Founders <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </div>
    )
}

