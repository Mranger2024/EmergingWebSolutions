"use client"

import { CheckCircle2, ShieldCheck, Wallet, Zap, Star } from "lucide-react"
import { Section } from "@/components/ui/section"
import { motion } from "framer-motion"

const features = [
    {
        name: "Pay After Approval",
        description: "Zero risk. You see the site first.",
        icon: Wallet,
        tag: "Risk-Free"
    },
    {
        name: "All-Inclusive Pricing",
        description: "₹14,999 flat. No hidden fees.",
        icon: CheckCircle2,
        tag: "Transparent"
    },
    {
        name: "Secure & Fast",
        description: "SSL & Premium Hosting included.",
        icon: ShieldCheck,
        tag: "Enterprise"
    },
    {
        name: "7-Day Delivery",
        description: "Get your business online fast.",
        icon: Zap,
        tag: "Rapid"
    },
]

export function TrustBar() {
    return (
        <Section className="bg-[var(--background-alt)] py-12 relative overflow-hidden border-y border-border/40">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-background/40 backdrop-blur-md border border-border/60 rounded-[2rem] p-6 hover:bg-background/60 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="flex flex-col items-start gap-4">
                                <div className="flex w-full items-center justify-between">
                                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                        <feature.icon className="h-6 w-6 stroke-[2.5px]" />
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/40 group-hover:text-primary transition-colors">{feature.tag}</span>
                                </div>
                                <div className="space-y-1.5">
                                    <div className="flex items-center gap-1.5">
                                        <h3 className="text-sm font-black text-foreground uppercase tracking-tight">{feature.name}</h3>
                                        <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <p className="text-xs text-muted-foreground font-semibold leading-relaxed group-hover:text-foreground/80 transition-colors">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
