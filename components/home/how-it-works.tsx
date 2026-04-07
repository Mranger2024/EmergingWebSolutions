"use client"

import { Section } from "@/components/ui/section"
import { CheckCircle2, FileText, Palette, Rocket, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
    {
        number: "01",
        name: "Share Your Vision",
        description: "Talk to our global experts about your business goals and design aesthetics.",
        icon: FileText,
        color: "amber"
    },
    {
        number: "02",
        name: "Rapid Development",
        description: "Our world-class team builds your complete demo from scratch using premium tech.",
        icon: Palette,
        color: "primary"
    },
    {
        number: "03",
        name: "Review & Refine",
        description: "You review the full site and request any changes. Zero strings attached.",
        icon: CheckCircle2,
        color: "indigo"
    },
    {
        number: "04",
        name: "Launch & Scale",
        description: "Once you're 100% happy, we launch your site and you pay. No upfront risk.",
        icon: Rocket,
        color: "amber"
    },
]

export function HowItWorks() {
    return (
        <Section className="bg-background py-32 relative overflow-hidden">
            {/* Background Texture & Depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:6rem_6rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_100%)] opacity-[0.05] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-6 border border-primary/20 shadow-sm"
                    >
                        Success Roadmap
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground mb-6 leading-tight">
                        Our world-class <span className="text-primary italic">Process.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl font-semibold leading-relaxed">
                        A risk-free, transparent experience built for businesses that value speed and professional precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Arrows Overlay - Desktop only */}
                    <div className="hidden lg:block absolute top-[25%] left-0 w-full pointer-events-none z-0">
                        <div className="flex w-full justify-evenly items-center px-24 opacity-20">
                            {[1, 2, 3].map((i) => (
                                <ArrowRight key={i} className="w-12 h-12 text-primary" strokeWidth={1} />
                            ))}
                        </div>
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.6 }}
                            className="group relative h-full"
                        >
                            <div className="bg-card border border-border/60 rounded-[2.5rem] p-8 h-full flex flex-col relative z-10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 group-hover:border-primary/20">
                                {/* Large Backdrop Number */}
                                <span className="absolute -top-2 -right-0 text-8xl font-black text-foreground/5 pointer-events-none group-hover:text-primary/10 transition-colors duration-500">
                                    {step.number}
                                </span>

                                <div className="flex flex-col items-start flex-grow">
                                    <div className="h-16 w-16 mb-8 rounded-2xl bg-muted/50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-700 shadow-inner group-hover:rotate-12 group-hover:scale-110">
                                        <step.icon className="h-8 w-8 stroke-[2.5px]" />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-black text-foreground tracking-tight uppercase group-hover:text-primary transition-colors">
                                            {step.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground font-semibold leading-relaxed group-hover:text-foreground/80 transition-colors">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                <motion.div 
                                    className="pt-10 flex items-center gap-2 group-hover:gap-4 transition-all opacity-0 group-hover:opacity-100"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 0, transition: { duration: 0 } }}
                                    whileHover={{ opacity: 1, x: 0 }}
                                >
                                    <div className="h-1 w-8 bg-primary rounded-full group-hover:w-12 transition-all duration-500" />
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">NEXT PHASE</span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
