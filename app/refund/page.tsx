"use client"

import * as React from "react"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ShieldCheck, Sparkles, RefreshCcw } from "lucide-react"
import InteractiveGrid from "@/components/ui/InteractiveGrid"

export default function RefundPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
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
                            <RefreshCcw className="w-3.5 h-3.5 mr-2" />
                            Risk-Free Shield
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
                            Fair <span className="text-primary italic">Exchange.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground/80 font-semibold mb-12 max-w-3xl mx-auto leading-relaxed">
                            Our goal is your <span className="text-foreground">complete digital dominance</span>. This mandate outlines our transparent, zero-risk partnership protocols.
                        </p>
                    </motion.div>
                </div>
            </Section>

            <Section className="py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-border/40 bg-background/50 backdrop-blur-3xl rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/5">
                            <CardContent className="p-10 md:p-20">
                                <div className="prose prose-slate dark:prose-invert max-w-none 
                                    prose-h3:text-4xl prose-h3:font-black prose-h3:tracking-tighter prose-h3:mb-8 prose-h3:mt-16 prose-h3:text-foreground
                                    prose-p:text-lg prose-p:text-muted-foreground/90 prose-p:font-medium prose-p:leading-relaxed prose-p:mb-8
                                    prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-4
                                    prose-li:text-lg prose-li:text-muted-foreground/80 prose-li:font-medium prose-li:flex prose-li:items-start prose-li:gap-3
                                    prose-li:before:content-[''] prose-li:before:h-2 prose-li:before:w-2 prose-li:before:rounded-full prose-li:before:bg-primary prose-li:before:mt-3 prose-li:before:shrink-0
                                ">
                                    <h3>1. The Zero-Deposit Mandate</h3>
                                    <p>
                                        Unlike traditional agencies, <strong className="text-foreground">Emerging Web Solutions</strong> eliminates financial barriers. We architect your complete digital asset on our staging environment first. You review, refine, and approve the result before any financial flow is initiated.
                                    </p>

                                    <h3>2. Pre-Payment Rescission</h3>
                                    <p>
                                        If the visionary result on our staging server does not meet your elite standards, you maintain the absolute right to rescind the project prior to final payment. In this instance:
                                    </p>
                                    <ul>
                                        <li>No financial obligation is incurred</li>
                                        <li>Emerging Web Solutions retains full ownership of all code, designs, and strategic content</li>
                                        <li>The utilization of any rejected materials is strictly prohibited</li>
                                    </ul>

                                    <h3>3. Post-Delivery Protocols</h3>
                                    <p>
                                        Once the asset has been approved, payment fulfilled, and the global launch executed on your domain:
                                    </p>
                                    <ul>
                                        <li>No default refunds are issued as the service is considered fully delivered and accepted</li>
                                        <li>Critical technical anomalies unaddressed within 7 days of launch may qualify for discretionary partial or full refunds</li>
                                    </ul>

                                    <h3>4. External Cost Factors</h3>
                                    <p>
                                        Fees paid to third-party providers (Registrars, Cloud Hosting, Premium API licenses) are subject to external policies and are non-refundable by Emerging Web Solutions.
                                    </p>

                                    <h3>5. Support Continuity</h3>
                                    <p>
                                        Our 14-day post-launch elite support is a complimentary service to ensure peak operational performance. It carries no independent financial value and is non-redeemable.
                                    </p>

                                    <div className="my-16 w-32 h-1 bg-primary/10 rounded-full mx-auto" />

                                    <h3>Strategic Inquiry Hub</h3>
                                    <p>
                                        For clarifications regarding our exchange mandate, contact our administrative nucleus at:<br />
                                        <strong className="text-primary font-black text-xl hover:underline cursor-pointer transition-all">emergingwebsolutions@gmail.com</strong>
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </Section>
        </div>
    )
}

