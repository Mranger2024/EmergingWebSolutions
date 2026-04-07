"use client"

import * as React from "react"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Shield, Sparkles } from "lucide-react"
import InteractiveGrid from "@/components/ui/InteractiveGrid"

export default function PrivacyPage() {
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
                            <Shield className="w-3.5 h-3.5 mr-2" />
                            Data Fortress
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
                            Privacy <span className="text-primary italic">Policy.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground/80 font-semibold mb-12 max-w-3xl mx-auto leading-relaxed">
                            Your security is our <span className="text-foreground">highest priority</span>. This mandate outlines our elite protocols for data protection and transparency.
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
                                    <p className="text-2xl font-black text-foreground italic mb-16 border-l-4 border-primary pl-8 py-2">
                                        At Emerging Web Solutions, the protection of our partners' digital footprint is woven into our DNA. This mandate details the exact nature of the information we secure.
                                    </p>

                                    <h3>1. Information Protocols</h3>
                                    <p>
                                        The personal data you are invited to provide—and the strategic necessity for its collection—is clarified with absolute transparency at every point of interaction.
                                    </p>
                                    <p>
                                        Direct correspondence with our creative nucleus may result in the secure acquisition of your name, contact vectors, and the strategic content of your message.
                                    </p>

                                    <h3>2. Strategic Utilization</h3>
                                    <p>We harness the secured data through elite protocols to:</p>
                                    <ul>
                                        <li>Maintain and evolve our digital ecosystem</li>
                                        <li>Personalized expansion of your experience</li>
                                        <li>Analyze interaction patterns for growth</li>
                                        <li>Architect new features and high-performance functionality</li>
                                        <li>Secure communication for updates and strategic marketing</li>
                                        <li>Mitigate security risks and prevent digital fraud</li>
                                    </ul>

                                    <h3>3. Surveillance Logistics</h3>
                                    <p>
                                        Emerging Web Solutions utilizes industry-standard log files to monitor anonymous traffic patterns. Captured data points include IP configurations, browser dynamics, and interaction timestamps. This data remains strictly non-identifiable.
                                    </p>

                                    <h3>4. Cookie Technology</h3>
                                    <p>
                                        Our platform utilizes 'cookies' to store preferences and optimize page content based on your browser's unique profile. This ensures a fluid, high-performance experience on every visit.
                                    </p>

                                    <h3>5. Global Data Rights</h3>
                                    <p>
                                        We ensure absolute awareness of your global data protection rights. Every user maintains the elite privilege to:
                                    </p>
                                    <ul>
                                        <li>Request full access to their personal data fortress</li>
                                        <li>Mandate rectification of inaccurate records</li>
                                        <li>Command complete erasure under qualified conditions</li>
                                    </ul>

                                    <div className="my-16 w-32 h-1 bg-primary/10 rounded-full mx-auto" />

                                    <h3>Contact Our Security Hub</h3>
                                    <p>
                                        For inquiries regarding our privacy mandate, contact our security nucleus at:<br />
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

