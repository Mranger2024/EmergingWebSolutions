"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Sparkles, Zap, MessageSquare, ShieldCheck, Globe, ArrowRight } from "lucide-react"
import InteractiveGrid from "@/components/ui/InteractiveGrid"

export default function ContactPage() {
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
                            <MessageSquare className="w-3.5 h-3.5 mr-2" />
                            Direct Channel
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
                            Let's Build Your <br />
                            <span className="text-primary italic">Empire.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground/80 font-semibold mb-12 max-w-3xl mx-auto leading-relaxed">
                            Start your digital journey with <span className="text-foreground">zero upfront risk</span>. Every project begins with a conversation and a personalized strategy session.
                        </p>
                    </motion.div>
                </div>
            </Section>

            <Section className="py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-7xl mx-auto container">
                    
                    {/* Elite Glass Form */}
                    <motion.div 
                        className="lg:col-span-7"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="border-border/40 bg-background/50 backdrop-blur-3xl rounded-[3rem] overflow-hidden shadow-2xl relative group">
                            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                                <Zap className="w-32 h-32 text-primary" />
                            </div>
                            <CardContent className="p-10 md:p-14">
                                <form className="space-y-8 relative z-10">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Full Name</Label>
                                            <Input id="name" placeholder="John Doe" required className="h-14 rounded-2xl bg-muted/20 border-border/40 focus:ring-primary/20 font-semibold text-base px-6" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">WhatsApp Number</Label>
                                            <Input id="phone" placeholder="+91..." required className="h-14 rounded-2xl bg-muted/20 border-border/40 focus:ring-primary/20 font-semibold text-base px-6" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Business Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" required className="h-14 rounded-2xl bg-muted/20 border-border/40 focus:ring-primary/20 font-semibold text-base px-6" />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <Label htmlFor="business" className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Business Name</Label>
                                            <Input id="business" placeholder="Company Ltd" className="h-14 rounded-2xl bg-muted/20 border-border/40 focus:ring-primary/20 font-semibold text-base px-6" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label htmlFor="type" className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Business Type</Label>
                                            <Input id="type" placeholder="e.g. Clinic, E-com..." className="h-14 rounded-2xl bg-muted/20 border-border/40 focus:ring-primary/20 font-semibold text-base px-6" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <Label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-primary ml-1">Project Ambition</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Tell us about the digital solution you're dreaming of..."
                                            className="min-h-[160px] rounded-[2rem] bg-muted/20 border-border/40 focus:ring-primary/20 font-semibold text-base p-6 leading-relaxed"
                                        />
                                    </div>

                                    <Button type="submit" className="w-full h-16 text-lg font-black rounded-full bg-primary text-white shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all group" size="lg">
                                        Request Elite Strategy Session <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <p className="text-[10px] text-center text-muted-foreground font-black uppercase tracking-[0.2em]">
                                        Strategy session delivered within 24 business hours.
                                    </p>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Global HQ Identity Module */}
                    <motion.div 
                        className="lg:col-span-5 space-y-12"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div>
                            <h2 className="text-4xl font-black tracking-tighter mb-8 text-foreground leading-[1.2]">
                                Global Reach. <br />
                                <span className="text-primary italic">Direct Access.</span>
                            </h2>
                            <p className="text-lg text-muted-foreground font-semibold mb-12 leading-relaxed">
                                Our creative nucleus operates globally to deliver peak digital performance. For high-priority launches, use our WhatsApp pulse channel.
                            </p>

                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    { icon: Phone, label: "Phone / WhatsApp", value: "+91 8688440114", color: "green" },
                                    { icon: Mail, label: "Direct Inquiry", value: "emergingwebsolutions@gmail.com", color: "blue" },
                                    { icon: MapPin, label: "Operations Hub", value: "G D complex, Kavali, AP, India 524201", color: "indigo" }
                                ].map((item) => (
                                    <div key={item.label} className="flex items-center gap-6 p-6 rounded-[2rem] border border-border/40 bg-white/5 backdrop-blur-md group hover:bg-white/10 transition-all">
                                        <div className={`h-14 w-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center shrink-0 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all shadow-inner`}>
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <div className="space-y-1">
                                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{item.label}</div>
                                            <div className="text-base font-black text-foreground">{item.value}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Trust Seal Module */}
                        <div className="p-10 rounded-[3rem] border border-primary/10 bg-primary/[0.03] relative overflow-hidden group">
                           <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-700">
                               <ShieldCheck className="w-32 h-32" />
                           </div>
                           <div className="relative z-10">
                               <h3 className="text-xl font-black text-foreground mb-4 flex items-center gap-3">
                                   <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
                                   Elite Commitment
                               </h3>
                               <p className="text-sm text-muted-foreground font-semibold leading-relaxed">
                                   We believe in evidence over promises. By initiating this session, you aren't committing to a fee—you're commissioning a visionary preview of your business's global potential.
                               </p>
                           </div>
                        </div>
                        
                        {/* Global Map Abstract Placeholder/Generated */}
                        <div className="relative aspect-video rounded-[3rem] overflow-hidden border border-border/40 bg-muted/20">
                            <div className="absolute inset-0 z-0 opacity-40">
                                <InteractiveGrid />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <Globe className="w-24 h-24 text-primary/10 animate-pulse" />
                            </div>
                            <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
                                <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">Systems Active Globally</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* Branded Strategic CTA removed as there's already a form here */}
        </div>
    )
}

