"use client"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, Wallet, Users, ArrowRight, Zap, PiggyBank, History, Sparkles } from "lucide-react"
import InteractiveGrid from "@/components/ui/InteractiveGrid"

const steps = [
    {
        title: "Refer a Client",
        description: "Connect us with a business owner (friend, family, or client) who needs a professional website.",
        icon: Users,
    },
    {
        title: "Deal Closure",
        description: "Our experts handle the consultation and close the deal. We respect your trust and provide top-notch service.",
        icon: Zap,
    },
    {
        title: "Instant Payout",
        description: "Once the first payment is received from the client, your 10% commission is sent directly to your Bank or UPI.",
        icon: Wallet,
    }
]

const faqs = [
    {
        question: "How much can I earn?",
        answer: "You earn a flat 10% of the project value. For example, if you refer a client for our ₹14,999 package, you earn ₹1,500. There's no limit on how many clients you can refer."
    },
    {
        question: "Is there a minimum payout threshold?",
        answer: "No. Unlike other programs, we have zero threshold. Whether it's ₹500 or ₹10,000, we pay you as soon as the project is confirmed."
    },
    {
        question: "How do I get paid?",
        answer: "We support direct Bank Transfers and all UPI apps (GPay, PhonePe, Paytm). Just share your details with us upon referral."
    },
    {
        question: "Who can join the program?",
        answer: "Anyone! Whether you're a freelancer, a student, or a business owner yourself, anyone who refers a quality lead is eligible for the commission."
    }
]

export default function AffiliatePage() {
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
                            Elite Partnership Program
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
                            Turn Your Network <br />
                            Into <span className="text-primary italic">Net Worth.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground/80 font-semibold mb-12 max-w-3xl mx-auto leading-relaxed">
                            Earn a flat <span className="text-foreground font-black underline decoration-primary decoration-4 underline-offset-4">10% commission</span> for every successful referral. Direct Bank or UPI payouts. No targets. Zero threshold.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-primary hover:bg-primary/95 text-primary-foreground font-black shadow-lg shadow-primary/20 hover:scale-[1.03] transition-all group" asChild>
                                <Link href="/contact" className="flex items-center gap-2">
                                    Join Program Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="h-16 px-10 text-xl rounded-full border-border/60 bg-background/50 backdrop-blur-md text-foreground font-black hover:bg-muted/80 transition-all" asChild>
                                <Link href="https://wa.me/918688440114">Chat on WhatsApp</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Core Benefits */}
            <Section className="bg-[var(--background-alt)] py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Highest Commission", desc: "Flat 10% on every project value. No hidden tiers or 'up to' traps.", icon: PiggyBank, color: "blue" },
                        { title: "Zero Threshold", desc: "We pay out as soon as the client confirms. No minimum balance required.", icon: History, color: "green" },
                        { title: "Direct Payouts", desc: "Fast and secure payments via your preferred UPI app or Bank account.", icon: Wallet, color: "purple" }
                    ].map((benefit, i) => (
                        <motion.div
                            key={benefit.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Card className="h-full border-border/40 bg-background/40 backdrop-blur-md hover:shadow-xl hover:border-primary/20 transition-all rounded-[2rem] p-4 group">
                                <CardHeader>
                                    <div className={`h-16 w-16 rounded-2xl bg-${benefit.color}-500/10 flex items-center justify-center mb-6 text-${benefit.color}-600 group-hover:scale-110 transition-transform`}>
                                        <benefit.icon className="h-8 w-8" />
                                    </div>
                                    <CardTitle className="text-2xl font-black tracking-tight mb-2">{benefit.title}</CardTitle>
                                    <CardDescription className="text-base font-semibold leading-relaxed">{benefit.desc}</CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* How it Works - Unified Step Grid */}
            <Section className="py-32 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-24">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 border border-primary/10">
                            Process
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-6">
                            How It <span className="text-primary italic">Works.</span>
                        </h2>
                        <p className="text-xl text-muted-foreground/80 font-semibold max-w-2xl mx-auto">Three simple steps to start earning high-scale commissions today.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={step.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative group"
                            >
                                {/* Step Backdrop Number */}
                                <div className="absolute -top-12 -left-6 text-[10rem] font-black text-muted-foreground/5 dark:text-muted-foreground/[0.03] select-none group-hover:text-primary transition-colors duration-700 leading-none">
                                    0{index + 1}
                                </div>
                                
                                <div className="relative z-10 bg-background/50 backdrop-blur-xl border border-border/40 p-10 rounded-[2.5rem] shadow-xl hover:shadow-primary/5 transition-all h-full">
                                    <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight mb-4">{step.title}</h3>
                                    <p className="text-muted-foreground/80 font-semibold leading-relaxed">{step.description}</p>
                                    
                                    {index < steps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-6 translate-y-[-50%] z-20">
                                            <ArrowRight className="w-8 h-8 text-primary/20 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FAQ */}
            <Section className="bg-[var(--background-alt)] py-32">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-black tracking-tighter text-center mb-16">Common <span className="text-primary italic">Questions.</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="bg-background border border-border/60 p-8 rounded-[2rem] h-full shadow-sm">
                                    <h3 className="text-lg font-black tracking-tight mb-3 text-foreground">{faq.question}</h3>
                                    <p className="text-muted-foreground font-semibold leading-relaxed text-sm">{faq.answer}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Final CTA Injection */}
            <Section className="py-24">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="bg-slate-950 rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden shadow-2xl shadow-primary/20">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
                        
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white leading-tight">
                                Ready to Start <br />
                                <span className="bg-gradient-to-r from-amber-200 via-primary to-indigo-300 text-transparent bg-clip-text italic">
                                    Earning?
                                </span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto">
                                Join the Elite Partnership of Emerging Web Solutions and grow with us. Zero upfront fees. Minimal effort. Max rewards.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
                                <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-white text-slate-950 font-black hover:bg-white/90 hover:scale-[1.02] shadow-xl transition-all" asChild>
                                    <Link href="/contact">Register Interest Now</Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-16 px-10 text-xl rounded-full border-white/10 bg-white/5 text-white font-black hover:bg-white/10 transition-all" asChild>
                                    <Link href="https://wa.me/918688440114" className="flex items-center gap-2">
                                        Message on WhatsApp <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}

