"use client"

import * as React from "react"
import { Check, X, Sparkles, Shield, UserCheck, Globe, Zap, ArrowRight, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import Link from "next/link"
import InteractiveGrid from "@/components/ui/InteractiveGrid"

const comparisonData = [
    {
        feature: "Payment Model",
        us: "Pay AFTER website is ready",
        freelancer: "50-100% Advance",
        agency: "50-70% Advance",
    },
    {
        feature: "Price (10-Page Site)",
        us: "₹14,999 (All-inclusive)",
        freelancer: "₹15k - ₹25k (+ extras)",
        agency: "₹40k+",
    },
    {
        feature: "Domain & Hosting",
        us: "Included (1 Year)",
        freelancer: "Usually Extra",
        agency: "Sometimes Included",
    },
    {
        feature: "SSL & Security",
        us: "Included",
        freelancer: "Depends",
        agency: "Included",
    },
    {
        feature: "Blog + 3 Posts",
        us: "Included",
        freelancer: "Rarely Included",
        agency: "Extra Cost",
    },
    {
        feature: "Revisions",
        us: "2 Rounds Included",
        freelancer: "Varies",
        agency: "Limited",
    },
    {
        feature: "Support",
        us: "14 Days Free Support",
        freelancer: "Varies",
        agency: "Expensive Plans",
    },
]

export default function WhyUsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Split Hero Section */}
            <Section className="relative pt-32 pb-24 overflow-hidden border-b border-border/40 min-h-[85vh] flex items-center">
                <div className="absolute inset-0 z-0 opacity-40">
                    <InteractiveGrid />
                </div>
                
                <div className="container relative z-10 mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        <motion.div 
                            className="lg:col-span-12 xl:col-span-7 text-left space-y-8"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Badge variant="outline" className="py-1.5 px-6 border-primary/20 text-primary bg-primary/5 rounded-full font-black uppercase tracking-[0.3em] text-[10px]">
                                <TrendingUp className="w-3.5 h-3.5 mr-2" />
                                The EWS Edge
                            </Badge>
                            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05]">
                                We Fixed the <br />
                                <span className="text-primary italic italic">Agency Model.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground/80 font-semibold max-w-2xl leading-relaxed">
                                We built this for businesses that are tired of high costs, hidden fees, and providers that disappear. We deliver <span className="text-foreground underline decoration-primary/30 underline-offset-8">world-class results</span> with zero upfront risk.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button size="lg" className="h-16 px-10 rounded-full font-black text-lg bg-primary hover:scale-[1.03] transition-all" asChild>
                                    <Link href="/contact">Start Risk-Free Now</Link>
                                </Button>
                                <div className="flex items-center gap-4 bg-muted/20 backdrop-blur-md px-6 py-4 rounded-2xl border border-border/40">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="h-10 w-10 rounded-full bg-slate-200 border-2 border-background" />
                                        ))}
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                                        500+ Global <br /> Success Stories
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="lg:col-span-12 xl:col-span-5 relative"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 1 }}
                        >
                            <div className="relative aspect-square max-w-[500px] mx-auto group">
                                <div className="absolute inset-0 bg-primary/20 rounded-[4rem] blur-[80px] animate-pulse" />
                                <img 
                                    src="/agency_growth_abstract_split_hero_1775552056865.png" 
                                    alt="Growth Abstract" 
                                    className="relative z-10 w-full h-full object-cover rounded-[5rem] shadow-2xl border border-white/10 group-hover:rotate-1 transition-transform duration-700" 
                                />
                                {/* Glass Tag floating over image */}
                                <div className="absolute bottom-12 -left-12 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[3rem] shadow-2xl transform hover:scale-105 transition-all">
                                    <h4 className="text-3xl font-black text-white italic">Zero.</h4>
                                    <p className="text-[10px] text-white/70 font-black uppercase tracking-widest mt-1">Upfront Risk.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Comparison Matrix */}
            <Section className="py-32">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-6">Market <span className="text-primary italic">Positioning.</span></h2>
                        <p className="text-xl text-muted-foreground/80 font-bold">Why settling for less is costing you more.</p>
                    </div>

                    <div className="bg-background/20 backdrop-blur-3xl border border-border/40 rounded-[4rem] overflow-hidden shadow-2xl relative">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse text-left">
                                <thead>
                                    <tr className="border-b border-border/40">
                                        <th className="p-10 font-black text-xs uppercase tracking-[0.3em] text-muted-foreground/60 w-1/4">Capability</th>
                                        <th className="p-10 bg-primary/5 border-x border-border/40 w-1/4 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 p-2">
                                                <Badge className="bg-primary text-primary-foreground font-black px-4 text-[9px] tracking-widest uppercase">Elite</Badge>
                                            </div>
                                            <div className="text-xl font-black text-primary tracking-tighter">Emerging Web</div>
                                        </th>
                                        <th className="p-10 font-black text-xs uppercase tracking-[0.3em] text-muted-foreground/60 w-1/4 text-center">Freelancers</th>
                                        <th className="p-10 font-black text-xs uppercase tracking-[0.3em] text-muted-foreground/60 w-1/4 text-center">Traditional Agency</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, index) => (
                                        <tr key={row.feature} className="border-b border-border/20 group hover:bg-muted/5 transition-colors">
                                            <td className="p-10 font-bold text-lg text-foreground/80">{row.feature}</td>
                                            <td className="p-10 bg-primary/[0.03] border-x border-border/40 font-black text-foreground relative">
                                                <div className="flex items-center gap-3">
                                                    <Check className="w-5 h-5 text-primary" />
                                                    {row.us}
                                                </div>
                                            </td>
                                            <td className="p-10 text-muted-foreground/60 font-semibold text-center italic">{row.freelancer}</td>
                                            <td className="p-10 text-muted-foreground/60 font-semibold text-center italic">{row.agency}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Strategic Pillars Bento Grid */}
            <Section className="py-24 bg-[var(--background-alt)]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Transparent Pricing", desc: "No hidden fees, no'plugin costs'. What you see is what you pay. Fixed, predictable growth.", icon: Shield },
                            { title: "No Tech Jargon", desc: "We speak the language of business, not syntax. We explain the 'Why' and 'How' in simple English.", icon: Globe },
                            { title: "Built for Dominance", desc: "Local Indian businesses or Global Enterprises—we build for speed, conversion, and global reach.", icon: Zap }
                        ].map((pillar, i) => (
                            <motion.div
                                key={pillar.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <Card className="p-12 h-full rounded-[3rem] border border-border/40 bg-background/50 backdrop-blur-xl hover:shadow-2xl transition-all group-hover:border-primary/20">
                                    <div className="h-16 w-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                        <pillar.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-3xl font-black mb-4 tracking-tighter">{pillar.title}</h3>
                                    <p className="text-muted-foreground font-semibold leading-relaxed text-lg">{pillar.desc}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final Branded CTA */}
            <Section className="py-32">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-950 rounded-[4rem] p-16 md:p-24 relative overflow-hidden shadow-2xl shadow-primary/20 group"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 scale-150 transition-transform group-hover:scale-[1.7]" />
                        
                        <div className="relative z-10 space-y-10">
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-tight">
                                Ready to Experience the <br />
                                <span className="bg-gradient-to-r from-amber-200 via-primary to-indigo-300 text-transparent bg-clip-text italic italic">EWS Difference?</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
                                Join the elite circle of businesses that choose strategy over chance. Pay only after you are 100% satisfied with your <span className="text-white underline decoration-primary decoration-2 underline-offset-8">new digital weapon</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                                <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-primary text-white font-black hover:scale-[1.03] shadow-2xl transition-all" asChild>
                                    <Link href="/contact">Upgrade My Business Today</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-16 px-12 text-xl rounded-full border-white/10 bg-white/5 text-white font-black hover:bg-white/10 transition-all group" asChild>
                                    <Link href="https://wa.me/918688440114" className="flex items-center gap-2">
                                        Chat Experts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
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

