"use client"

import * as React from "react"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Gavel, Sparkles } from "lucide-react"
import InteractiveGrid from "@/components/ui/InteractiveGrid"

export default function TermsPage() {
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
                            <Gavel className="w-3.5 h-3.5 mr-2" />
                            Terms of Engagement
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
                            Terms of <span className="text-primary italic">Service.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground/80 font-semibold mb-12 max-w-3xl mx-auto leading-relaxed">
                            Please review these elite protocols carefully. By engaging with our ecosystem, you agree to uphold our <span className="text-foreground">standards of partnership</span>.
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
                                    <h3>1. Agreement Protocol</h3>
                                    <p>
                                        By accessing the digital presence of <strong className="text-foreground">Emerging Web Solutions</strong>, you agree to be mandate-bound by these terms of engagement, all applicable global laws, and acknowledge your responsibility for compliance with all localized jurisdictions.
                                    </p>

                                    <h3>2. Intellectual Usage</h3>
                                    <p>
                                        Permission is granted to interact with the materials on our platform for strategic, non-commercial transitory viewing. This is a license grant, not a transfer of asset title. Under this license mandate, you shall not:
                                    </p>
                                    <ul>
                                        <li>Architect copies or modifications of our materials</li>
                                        <li>Utilize our assets for unauthorized commercial display</li>
                                        <li>Attempt to deconstruct or reverse-engineer our proprietary code base</li>
                                        <li>Remove elite proprietary notations or copyright markers</li>
                                        <li>Mirror our assets on unauthorized server infrastructures</li>
                                    </ul>

                                    <h3>3. Technical Disclaimer</h3>
                                    <p>
                                        The materials on Emerging Web Solutions' platform are provided on a high-performance 'as is' basis. We disclaim all other warranties, including implied conditions of merchantability or non-infringement of intellectual assets.
                                    </p>

                                    <h3>4. Liability Limitations</h3>
                                    <p>
                                        In no event shall Emerging Web Solutions or its elite partners be liable for damages (including loss of data or profit interruption) arising from the utilization or inability to utilize our digital materials.
                                    </p>

                                    <h3>5. Asset Accuracy</h3>
                                    <p>
                                        While we strive for precision, materials appearing on our platform may include technical or typographical variances. We do not warrant the absolute currency of all materials but commit to ongoing evolution of our digital assets.
                                    </p>

                                    <h3>6. Delivery & Financial Flows</h3>
                                    <p>
                                        Emerging Web Solutions operates on a 'Pay After Delivery' model for standard website packages. Partners are obligated to fulfill financial commitments once the strategic asset is completed and approved on our staging environment, prior to global launch.
                                    </p>

                                    <h3>7. Jurisdictional Governance</h3>
                                    <p>
                                        These terms are governed by the laws of India. You irrevocably submit to the exclusive jurisdiction of the elite courts in that location.
                                    </p>

                                    <div className="my-16 w-32 h-1 bg-primary/10 rounded-full mx-auto" />
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </Section>
        </div>
    )
}

