"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Sparkles, ArrowRight } from "lucide-react"
import InteractiveGrid from "@/components/ui/InteractiveGrid"

const projects = [
    {
        title: "Smile Dental Clinic",
        category: "Healthcare",
        description: "A professional presence for a modern dental practice. Features online appointment booking, service catalog, and doctor profiles.",
        image: "/projects/clinic_screenshot.png",
        tags: ["Healthcare", "Appointment Booking", "Responsive Design"],
        link: "https://clinictemp.vercel.app/"
    },
    {
        title: "Roundkart",
        category: "E-commerce & B2B",
        description: "Supply Chain Solutions for Modern Enterprise. A comprehensive B2B procurement platform for hotels, hospitals, and developers.",
        image: "/projects/roundkart_screenshot.png",
        tags: ["B2B E-commerce", "Supply Chain", "Enterprise"],
        link: "https://roundkart.com/"
    }
]

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
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
                            <Sparkles className="w-3.5 h-3.5 mr-2" />
                            Success Stories
                        </Badge>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
                            Our <span className="text-primary italic">Work.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground/80 font-semibold mb-12 max-w-3xl mx-auto leading-relaxed">
                            Explore our latest digital solutions. We combine <span className="text-foreground">cinematic design</span> with technical excellence to build websites that convert visitors into loyal customers.
                        </p>
                    </motion.div>
                </div>
            </Section>

            <Section className="py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            <Link href={project.link} target="_blank" className="block group">
                                <Card className="overflow-hidden flex flex-col h-full border-border/40 bg-background/50 backdrop-blur-xl hover:shadow-2xl hover:shadow-primary/10 transition-all duration-700 rounded-[2.5rem]">
                                    <div className="aspect-video w-full overflow-hidden bg-muted relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        {/* Cinematic Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
                                        
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[4px]">
                                            <div className="flex items-center gap-3 bg-white text-slate-950 px-8 py-4 rounded-full font-black text-sm shadow-2xl transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                                <ExternalLink className="h-5 w-5" />
                                                View Live Project
                                            </div>
                                        </div>
                                        
                                        {/* Category Badge floating over image */}
                                        <div className="absolute top-6 left-6">
                                            <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                                                {project.category}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <CardHeader className="p-10 pb-4">
                                        <CardTitle className="text-3xl font-black tracking-tighter group-hover:text-primary transition-colors duration-500">
                                            {project.title}
                                        </CardTitle>
                                    </CardHeader>
                                    
                                    <CardContent className="px-10 pb-10 flex-grow">
                                        <p className="text-muted-foreground font-semibold leading-relaxed mb-8 text-lg">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2.5">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="text-[10px] uppercase tracking-[0.15em] font-black bg-primary/5 px-4 py-2 border border-primary/10 rounded-full text-primary/80 transition-all group-hover:bg-primary group-hover:text-white">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Branded High-Impact CTA */}
            <Section className="py-32">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-950 rounded-[4rem] p-16 md:p-24 relative overflow-hidden shadow-2xl shadow-primary/20"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        
                        <div className="relative z-10 space-y-10">
                            <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white leading-tight">
                                Ready to Tell Your <br />
                                <span className="bg-gradient-to-r from-amber-200 via-primary to-indigo-300 text-transparent bg-clip-text italic">
                                    Success Story?
                                </span>
                            </h2>
                            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
                                Every project we deliver is a fusion of strategy, aesthetics, and high-conversion logic. Reach out today for a <span className="text-white underline decoration-primary decoration-2 underline-offset-8">zero-risk consultation</span>.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                                <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-slate-950 font-black hover:bg-white/90 hover:scale-[1.03] shadow-2xl transition-all" asChild>
                                    <Link href="/contact">Get My Website Today</Link>
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

