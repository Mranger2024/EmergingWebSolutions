'use client'

import { Check, ArrowRight, Zap, Globe, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { usePricing } from "@/contexts/pricing-context"
import { trackPricingView } from "@/components/providers/posthog-provider"

const basicPackageFeatures = [
    "Custom WordPress Website (10 Pages)",
    "1 Year Domain & Premium Hosting",
    "Free SSL Certificate",
    "Mobile Responsive Design",
    "Blog Setup + 3 Bonus Posts",
    "Google Search Console & Analytics",
    "Contact Form & Map Integration",
    "Social Media Integration",
]

const premiumPackageFeatures = [
    "Custom WordPress Website (10 Pages)",
    "1 Year Domain & Premium Hosting",
    "Free SSL Certificate",
    "Mobile Responsive Design",
    "Blog Setup + 3 Bonus Posts",
    "Google Search Console & Analytics",
    "Contact Form & Map Integration",
    "Social Media Integration",
    "Advanced Business Management System",
    "Appointment Booking System",
]

export function PackageSnapshot() {
    const { formatPrice, isLoading, currency } = usePricing()
    const sectionRef = useRef<HTMLDivElement>(null)

    // Fire pricing analytics once currency is known
    useEffect(() => {
        if (isLoading) return
        trackPricingView('Essential Package', 9999, currency)
        trackPricingView('Starter Growth Package', 14999, currency)
    }, [isLoading, currency])

    return (
        <Section ref={sectionRef} className="relative overflow-hidden py-32">
            {/* Decorative background elements for depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-muted/30 opacity-30 pointer-events-none" />
            <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] opacity-50 pointer-events-none" />
            <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] opacity-50 pointer-events-none" />
            
            <div className="container px-1 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-primary/20 shadow-sm"
                    >
                        Pricing & Packages
                    </motion.div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tight text-foreground mb-6 leading-tight">
                        Built First. <span className="text-primary italic">Paid After.</span>
                    </h2>
                    <p className="text-muted-foreground text-xl max-w-2xl font-medium leading-relaxed">
                        Risk-free development for businesses worldwide. No upfront payments. No hidden fees. Pay only when you love the results.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {/* Essential Package */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group flex flex-col h-full"
                    >
                        <div className="bg-card border border-border/60 rounded-[3rem] p-2 h-full flex flex-col hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                            <div className="relative h-56 w-full rounded-[2.5rem] overflow-hidden mb-8 bg-muted shadow-inner">
                                <img
                                    src="/essential-abstract.png"
                                    alt="Essential Package Illustration"
                                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"; }}
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-white/95 backdrop-blur-sm text-foreground hover:bg-white font-black border-0 shadow-sm px-4 py-2 rounded-2xl uppercase tracking-widest text-[9px] flex items-center gap-2">
                                        <Zap className="w-3 h-3 fill-amber-500 text-amber-500" />
                                        Foundational
                                    </Badge>
                                </div>
                            </div>
                            <div className="px-6 flex-grow flex flex-col">
                                <div className="mb-6">
                                    <h3 className="text-3xl font-black text-foreground mb-2">Essential</h3>
                                    <p className="text-sm text-muted-foreground font-semibold leading-relaxed">Perfect for startups and small local businesses establishing presence.</p>
                                </div>
                                <div className="mb-10 p-6 rounded-3xl bg-[var(--background-alt)] border border-border/40">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-black text-foreground tracking-tighter">{formatPrice(9999)}</span>
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">/ flat</span>
                                    </div>
                                    <p className="mt-3 text-[10px] font-black text-primary flex items-center gap-2 uppercase tracking-[0.2em]">
                                        <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                                        Pay After Happy
                                    </p>
                                </div>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {basicPackageFeatures.slice(0, 6).map((feature, i) => (
                                        <li key={i} className="flex items-center gap-4 group/item">
                                            <div className="h-6 w-6 rounded-xl bg-primary/10 flex items-center justify-center text-primary transition-all group-hover/item:bg-primary group-hover/item:text-white group-hover/item:rotate-12">
                                                <Check className="h-3.5 w-3.5 stroke-[3px]" />
                                            </div>
                                            <span className="text-sm font-bold text-muted-foreground/90 group-hover/item:text-foreground transition-colors">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="px-6 pb-6 mt-auto">
                                <Button asChild className="w-full h-16 rounded-[2rem] bg-muted/50 hover:bg-primary hover:text-primary-foreground text-foreground border border-border/50 hover:border-primary font-black text-lg shadow-none transition-all active:scale-95">
                                    <Link href="/contact" className="flex items-center justify-center gap-2">
                                        Select Essential
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </Button>
                                <p className="text-center text-[9px] text-muted-foreground font-black uppercase tracking-[0.3em] mt-6 opacity-40">No Upfront Commitment</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Starter Growth Package - Featured */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group flex flex-col h-full lg:-translate-y-8 z-20"
                    >
                        <div className="bg-card border-2 border-primary rounded-[3.5rem] p-5 h-full flex flex-col shadow-2xl shadow-primary/20 relative overflow-hidden group/card transition-all duration-500">
                            <div className="bg-gradient-to-r from-primary via-indigo-600 to-amber-500 text-white text-[11px] font-black uppercase tracking-[0.4em] py-3 px-8 text-center rounded-[2rem] mb-6 shadow-xl shadow-primary/30 most-popular-badge transform -translate-y-12 mx-4 absolute top-0 left-0 right-0">
                                Global Bestseller
                            </div>
                            <div className="relative h-64 w-full rounded-[2.5rem] overflow-hidden mb-8 mt-4 bg-primary/5 shadow-inner">
                                <img
                                    src="/agency_growth_abstract_split_hero_1775552056865.png"
                                    alt="Growth Package Illustration"
                                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:rotate-1"
                                    onError={(e) => { (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800"; }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <Globe className="w-5 h-5 text-white animate-spin-slow" />
                                    </div>
                                    <span className="text-white font-black text-xs uppercase tracking-widest">Global Ready</span>
                                </div>
                            </div>
                            <div className="px-6 flex-grow flex flex-col">
                                <div className="mb-6">
                                    <h3 className="text-4xl font-black text-foreground mb-2">Growth</h3>
                                    <p className="text-sm text-muted-foreground font-bold leading-relaxed italic">The unfair advantage for high-converting brands.</p>
                                </div>
                                <div className="mb-10 p-8 rounded-[2.5rem] bg-primary/[0.03] border-2 border-primary/10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-4">
                                        <Zap className="w-6 h-6 text-primary animate-pulse opacity-20" />
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl md:text-6xl font-black text-foreground tracking-tighter">{formatPrice(14999)}</span>
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">/ flat</span>
                                    </div>
                                    <p className="mt-3 text-[10px] font-black text-primary flex items-center gap-2 uppercase tracking-[0.2em]">
                                        <Shield className="w-3.5 h-3.5" />
                                        Advanced Business Logic
                                    </p>
                                </div>
                                <ul className="space-y-6 mb-12 flex-grow">
                                    {premiumPackageFeatures.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-4 group/item">
                                            <div className="h-7 w-7 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                                <Check className="h-4 w-4 stroke-[4px]" />
                                            </div>
                                            <span className={`text-[15px] font-bold ${i >= 8 ? 'text-foreground underline decoration-primary/30 underline-offset-4' : 'text-foreground/90'}`}>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="px-6 pb-6 mt-auto">
                                <Button asChild size="lg" className="w-full h-16 rounded-[2rem] bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg shadow-xl shadow-primary/20 transition-all active:scale-95 border-0">
                                    <Link href="/contact" className="flex items-center justify-center gap-3">
                                        Select Growth
                                        <ArrowRight className="w-7 h-7 group-hover/card:translate-x-2 transition-transform" />
                                    </Link>
                                </Button>
                                <p className="text-center text-[10px] text-muted-foreground font-black uppercase tracking-[0.3em] mt-6 opacity-60">Risk-Free • Localized Support</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Enterprise Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group flex flex-col h-full"
                    >
                        <div className="bg-card border border-border/60 rounded-[3rem] p-4 h-full flex flex-col hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 bg-[var(--background-alt)]/50 backdrop-blur-sm">
                            <div className="relative h-56 w-full rounded-[2.5rem] overflow-hidden mb-8 bg-muted/50 border border-border/40 shadow-inner">
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-amber-500/10 animate-pulse" />
                                <div className="h-full w-full flex items-center justify-center">
                                    <div className="flex flex-col items-center">
                                        <div className="h-24 w-24 bg-primary/20 rounded-full flex items-center justify-center blur-3xl absolute" />
                                        <h4 className="text-5xl font-black text-foreground relative z-10 opacity-30 tracking-tighter">CUSTOM</h4>
                                        <div className="mt-4 flex gap-2">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className="h-1.5 w-8 rounded-full bg-primary/20" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 flex-grow flex flex-col">
                                <div className="mb-6">
                                    <h3 className="text-3xl font-black text-foreground mb-2">Enterprise</h3>
                                    <p className="text-sm text-muted-foreground font-semibold leading-relaxed">Tailored digital ecosystems for global operations.</p>
                                </div>
                                <div className="mb-10 p-6 rounded-3xl bg-background/50 border border-border/40">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black text-foreground tracking-tighter">CUSTOM</span>
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">/ Quote</span>
                                    </div>
                                    <p className="mt-3 text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                        <Shield className="w-3 h-3" />
                                        Dedicated Lead
                                    </p>
                                </div>
                                <ul className="space-y-4 mb-10 flex-grow">
                                    {["Multi-region Infrastructure", "Complex Custom Logic", "Enterprise Grade Security", "Global CDN Setup", "High Volume Traffic Ready", "Long-term Maintenance"].map((feature, i) => (
                                        <li key={i} className="flex items-center gap-4 group/item">
                                            <div className="h-6 w-6 rounded-xl border-2 border-primary/20 flex items-center justify-center text-primary group-hover/item:border-primary group-hover/item:bg-primary group-hover/item:text-white transition-all">
                                                <Check className="h-3.5 w-3.5 stroke-[3px]" />
                                            </div>
                                            <span className="text-sm font-bold text-muted-foreground/80 group-hover/item:text-foreground transition-colors">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="px-6 pb-6 mt-auto">
                                <Button asChild variant="outline" className="w-full h-16 rounded-[2rem] border-2 border-border hover:border-primary text-foreground font-black text-lg transition-all active:scale-95 shadow-none">
                                    <Link href="/contact" className="flex items-center justify-center gap-2">
                                        Talk to Experts
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    )
}
