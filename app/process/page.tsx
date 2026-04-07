"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle2, MessageSquare, MonitorPlay, PenTool, Rocket, ShieldCheck, Sparkles, ArrowRight, Zap } from "lucide-react"
import InteractiveGrid from "@/components/ui/InteractiveGrid"
import { FAQSchema } from "@/components/seo/faq-schema"

const steps = [
    {
        id: 1,
        title: "Free Consultation",
        description: "We start with a quick call or chat to understand your business goals, target audience, and design preferences. We'll discuss features, pages, and any specific requirements you have. No commitment is required at this stage.",
        icon: MessageSquare,
    },
    {
        id: 2,
        title: "Strategy & Wireframe",
        description: "Based on our discussion, we create a strategic plan for your website. We outline the site structure, content flow, and key functionalities to ensure everything aligns with your business objectives.",
        icon: PenTool,
    },
    {
        id: 3,
        title: "We Build (Risk-Free)",
        description: "This is where the magic happens. We design and develop your complete website on our staging server. You get to see the progress and experience the site as it comes to life, without paying a single rupee upfront.",
        icon: MonitorPlay,
    },
    {
        id: 4,
        title: "Review & Refine",
        description: "We work with you to fine-tune the details. You get 2 rounds of revisions to adjust colors, text, images, or layout. We ensure every pixel is perfect and that the site works flawlessly on mobile and desktop.",
        icon: CheckCircle2,
    },
    {
        id: 5,
        title: "Payment & Launch",
        description: "Once you are 100% satisfied with the result, you make the payment. We then connect your custom domain, set up your professional email, configure SSL security, and launch your business to the world!",
        icon: Rocket,
    },
]

const faqs = [
    {
        question: "Is it really 'pay after delivery'?",
        answer: "Yes! We build the website on our server first. You can see it, click around, and verify everything. You only pay when you want to take it live on your domain. This eliminates all risk for you.",
    },
    {
        question: "What platforms do you use?",
        answer: "We primarily build on WordPress using premium page builders like Elementor. This ensures your site is easy to manage, SEO-friendly, and scalable. For custom requirements, we can also discuss other technologies.",
    },
    {
        question: "Do I own the website?",
        answer: "Absolutely. Once you pay, you have 100% ownership of the website, domain, and content. We provide you with all admin login credentials. We don't lock you in.",
    },
    {
        question: "What about Hosting and Domain?",
        answer: "Our package includes Free Domain (.com/.in) and Premium SSD Hosting for the first year. From the second year onwards, you'll need to pay a standard renewal fee to keep them active.",
    },
    {
        question: "What if I don't like the website?",
        answer: "If you're not happy after our revision rounds, you can choose not to proceed. You don't owe us any money. We take the risk so you don't have to.",
    },
    {
        question: "How long does it take?",
        answer: "Typically 7-10 days from the start of the project to launch, depending on how quickly we receive your content and feedback.",
    },
    {
        question: "Is the website mobile-friendly?",
        answer: "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop devices. This is crucial for SEO and user experience.",
    },
    {
        question: "Will my website appear on Google?",
        answer: "We set up basic on-page SEO, Google Search Console, and Google Analytics. This gives your site the best chance to rank, but competitive ranking depends on ongoing SEO efforts.",
    },
    {
        question: "Can I update the website myself?",
        answer: "Yes! Since we use WordPress, you'll have an easy-to-use dashboard where you can edit text, change images, and add blog posts without needing to code.",
    },
]

export default function ProcessPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <FAQSchema faqs={faqs} />
            
            {/* Hero Section */}
            <Section className="relative pt-32 pb-20 overflow-hidden border-b border-border/40">
                <div className="absolute inset-0 z-0">
                    <InteractiveGrid />
                </div>
                
                <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge variant="outline" className="mb-8 py-1.5 px-6 border-primary/20 text-primary bg-primary/5 rounded-full font-black uppercase tracking-[0.3em] text-[10px]">
                            <Zap className="w-3.5 h-3.5 mr-2" />
                            Success Roadmap
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
                            How It <span className="text-primary italic">Works.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground/80 font-semibold mb-12 max-w-3xl mx-auto leading-relaxed">
                            We've flipped the traditional agency model. We take <span className="text-foreground">all the risk</span>—so you can focus on building your empire.
                        </p>
                    </motion.div>
                </div>
            </Section>

            {/* Process Grid (Detailed) */}
            <Section className="py-32">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
                        {steps.map((step, index) => (
                            <motion.div 
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="relative group"
                            >
                                {/* Step Backdrop Number */}
                                <div className="absolute -top-12 -left-6 text-[11rem] font-black text-muted-foreground/5 dark:text-muted-foreground/[0.03] select-none group-hover:text-primary transition-colors duration-700 leading-none">
                                    0{step.id}
                                </div>
                                
                                <div className="relative z-10 bg-background/50 backdrop-blur-xl border border-border/40 p-10 rounded-[3rem] shadow-xl hover:shadow-primary/5 transition-all h-full">
                                    <div className="h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                        <step.icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tighter mb-4">{step.title}</h3>
                                    <p className="text-muted-foreground/80 font-semibold leading-relaxed text-base">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* FAQ Knowledge Matrix */}
            <Section className="bg-[var(--background-alt)] py-32 border-y border-border/40">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Common <span className="text-primary italic">Questions.</span></h2>
                        <p className="text-xl text-muted-foreground/80 font-bold max-w-2xl mx-auto">Everything you need to know about our risk-free partnership.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <Card className="bg-background border-border/60 p-8 rounded-[2.5rem] h-full shadow-sm hover:shadow-md transition-all group">
                                    <h3 className="text-lg font-black tracking-tight mb-4 text-foreground group-hover:text-primary transition-colors">{faq.question}</h3>
                                    <p className="text-muted-foreground font-semibold leading-relaxed text-sm">{faq.answer}</p>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA Overhaul */}
            <Section className="py-32">
                <div className="max-w-5xl mx-auto text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-slate-950 rounded-[4rem] p-16 md:p-24 relative overflow-hidden shadow-2xl shadow-primary/20"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        
                        <div className="relative z-10 space-y-10">
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-tight">
                                Ready for a <br />
                                <span className="bg-gradient-to-r from-amber-200 via-primary to-indigo-300 text-transparent bg-clip-text italic">Digital Start?</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
                                Join hundreds of businesses worldwide that trust Emerging Web Solutions for their <span className="text-white underline decoration-primary decoration-2 underline-offset-8">high-performance journey</span>. Pay only after you are 100% happy.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                                <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-primary text-white font-black hover:scale-[1.03] shadow-2xl transition-all" asChild>
                                    <Link href="/contact">Start Your Free Project</Link>
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

