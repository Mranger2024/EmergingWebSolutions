"use client"

import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { ShieldCheck, Zap, Heart, MessageSquare, ArrowRight, Sparkles } from "lucide-react"
import { Metadata } from "next"
import { motion } from "framer-motion"
import Image from "next/image"
import InteractiveGrid from "@/components/ui/InteractiveGrid"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const values = [
    {
        name: "Building Trust",
        description: "We don't ask for money until you see a website you love. We take the risk so you don't have to.",
        icon: ShieldCheck,
        color: "text-blue-500",
        bg: "bg-blue-500/5"
    },
    {
        name: "Fast Delivery",
        description: "Your business shouldn't wait. We build sites quickly without cutting corners on quality.",
        icon: Zap,
        color: "text-amber-500",
        bg: "bg-amber-500/5"
    },
    {
        name: "Simple Talk",
        description: "No confusing tech jargon. We explain everything in plain English so you're always in control.",
        icon: MessageSquare,
        color: "text-emerald-500",
        bg: "bg-emerald-500/5"
    },
    {
        name: "Real Results",
        description: "A website should make you money, not just look pretty. We build tools that help you grow.",
        icon: Heart,
        color: "text-rose-500",
        bg: "bg-rose-500/5"
    },
]

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            {/* Cinematic Hero */}
            <Section className="relative pt-32 pb-24 overflow-hidden border-b border-border/40 min-h-[60vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <InteractiveGrid />
                </div>
                
                <div className="container relative z-10 mx-auto px-4">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Badge variant="outline" className="mb-8 py-1.5 px-6 border-primary/20 text-primary bg-primary/5 rounded-full font-black uppercase tracking-[0.3em] text-[10px]">
                                <Sparkles className="w-3.5 h-3.5 mr-2" />
                                Our Mission
                            </Badge>
                            <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
                                We Build IT. <br />
                                <span className="text-primary italic">You Approve IT.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground/80 font-semibold max-w-2xl leading-relaxed">
                                We're a team that believes in <span className="text-foreground">honest work</span>. We build your website first, and you only pay after you're 100% happy with it. It's that simple.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Our Story Section - Cinematic Split */}
            <Section className="py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
                            Why we started <br />
                            <span className="text-muted-foreground/40 italic">this journey.</span>
                        </h2>
                        <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                            <p>
                                We saw a big problem in the web industry. Business owners were paying thousands of dollars upfront for websites they never liked, or worse, never received.
                            </p>
                            <p>
                                We decided to change the rules. We asked: <span className="text-foreground font-black italic">"What if we take all the risk?"</span>
                            </p>
                            <p>
                                That's why we created this agency. We don't hide behind contracts or jargon. We focus on one thing: building a website that actually helps your business grow.
                            </p>
                        </div>
                        <div className="pt-4">
                            <Button size="lg" className="h-16 px-10 rounded-full font-black text-lg gap-2 group" asChild>
                                <Link href="/contact">
                                    Start Your Story <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] md:aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative group">
                            <Image
                                src="/agency_growth_abstract_split_hero_1775552056865.png"
                                alt="Our Digital DNA"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                        </div>
                        {/* Floating DNA Card */}
                        
                    </motion.div>
                </div>
            </Section>

            {/* Core Values - Bento Style */}
            <Section className="py-24 bg-muted/30">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter">Small values. Big impact.</h2>
                        <p className="text-muted-foreground font-semibold text-lg">We keep things simple so you can focus on your business.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, i) => (
                            <motion.div
                                key={value.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="h-full border-border/40 bg-background/50 backdrop-blur-xl hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 rounded-[2rem] group">
                                    <CardContent className="p-10 flex flex-col items-start gap-6">
                                        <div className={`p-4 rounded-2xl ${value.bg} ${value.color} group-hover:scale-110 transition-transform duration-500`}>
                                            <value.icon className="h-8 w-8" />
                                        </div>
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-black tracking-tight">{value.name}</h3>
                                            <p className="text-muted-foreground font-medium leading-relaxed">{value.description}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final CTA */}
            <Section className="py-32">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="bg-primary/5 p-4 rounded-full w-fit mx-auto animate-pulse">
                        <ShieldCheck className="w-12 h-12 text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight">
                        Ready to join the <br />
                        <span className="italic underline decoration-amber-500/20 underline-offset-8">No-Risk Revolution?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-muted-foreground font-semibold max-w-2xl mx-auto">
                        Your business deserves a professional website without the stress. Let's talk today.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
                        <Button size="lg" className="h-16 px-12 rounded-full font-black text-xl shadow-2xl shadow-primary/20" asChild>
                            <Link href="/contact">Get My Design Now</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="h-16 px-12 rounded-full font-black text-xl" asChild>
                            <Link href="/portfolio">See Our Work</Link>
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    )
}
