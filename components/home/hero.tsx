"use client"

import Link from "next/link"
import Image from "next/image"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { useRef, useState } from "react"
import { ParticlesCursor } from "@/components/ui/particles-cursor"
import { ArrowRight, Twitter, Linkedin, Github } from "lucide-react"

import { CloudflareIcon, ElementorIcon, GoogleAnalyticsIcon, GoogleSitesIcon, WordPressIcon, YoastSEOIcon } from "./brand-icons"
import InteractiveGrid from "@/components/ui/InteractiveGrid"

const brands = [
    { name: "WordPress", icon: WordPressIcon },
    { name: "Elementor", icon: ElementorIcon },
    { name: "Google Sites", icon: GoogleSitesIcon },
    { name: "Cloudflare", icon: CloudflareIcon },
    { name: "Google Analytics", icon: GoogleAnalyticsIcon },
    { name: "Yoast SEO", icon: YoastSEOIcon },
]

export function Hero() {
    const heroRef = useRef<HTMLDivElement>(null)

    // Mouse position for spotlight
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <Section
            className="relative flex flex-col items-center justify-center overflow-hidden bg-background text-foreground pt-20  min-h-[70vh] md:min-h-0"
            ref={heroRef}
            onMouseMove={handleMouseMove}
        >
            {/* Layer 0: Interactive Grid Energy */}
            <div className="absolute inset-0 z-0">
                <InteractiveGrid />
            </div>

            {/* Layer 1: Background Static Grid Overlay */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.03] dark:opacity-20" />

            {/* Layer 2: Semi-Circular Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-200/20 dark:bg-primary/10 blur-[120px] rounded-full opacity-40 pointer-events-none" />

            {/* Layer 3: Particle Network */}
            <ParticlesCursor />

            {/* Layer 4: Spotlight Cursor */}
            <motion.div
                className="pointer-events-none absolute -inset-px z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            500px circle at ${mouseX}px ${mouseY}px,
                            var(--glow-warm, rgba(251, 191, 36, 0.05)),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Social Sidebar */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-40">
                <SocialLink icon={Twitter} href="https://x.com/EmergingWebSol" />
                <SocialLink icon={Linkedin} href="https://linkedin.com" />
                <SocialLink icon={Github} href="https://github.com" />
            </div>

            {/* Content */}
            <div className="container relative z-30 px-4 md:px-6 mx-auto text-center flex flex-col items-center">
                {/* Social Proof Pill - Condensed */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="relative z-30 mb-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-background/50 backdrop-blur-md border border-amber-500/15 shadow-sm hover:border-amber-500/30 transition-all cursor-default scale-90 md:scale-100"
                >
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden relative">
                                <Image
                                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 15}`} 
                                    alt="Client Avatar"
                                    fill
                                    unoptimized={true}
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all"
                                />
                            </div>
                        ))}
                   </div>
                   
                    <div className="flex flex-col items-start leading-none pr-2 border-r border-border/50">
                        <span className="text-[10px] font-black text-foreground tracking-tight">50+ PROJECTS DELIVERED</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-2.5 h-2.5 text-amber-500 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-4"
                >
                    {/* Unified Premium Headline */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground relative z-10 leading-[1.1]">
                        Modern Digital Experiences. <br />
                        <span className="bg-gradient-to-r from-amber-500 via-primary to-indigo-500 text-transparent bg-clip-text italic">
                            Built First. Paid After.
                        </span>
                    </h1>

                    <p className="text-sm md:text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed relative z-10">
                        We architect high-performance websites for businesses worldwide. No upfront risk. Pay only when you are <span className="text-foreground font-black underline decoration-amber-500/30 decoration-2 underline-offset-4">100% happy</span>.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 relative z-10">
                        <MagneticButton>
                            <Button
                                size="lg"
                                className="h-12 md:h-14 px-8 text-base md:text-lg rounded-full bg-primary hover:bg-primary/95 shadow-xl shadow-primary/20 border-0 transition-all duration-300 hover:scale-105 text-primary-foreground font-black group w-full sm:w-auto"
                                asChild
                            >
                                <Link href="/contact" className="flex items-center gap-2 tracking-tight">
                                    Start Your Project
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </MagneticButton>

                        <MagneticButton>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-12 md:h-14 px-8 text-base md:text-lg rounded-full border-border bg-background/30 backdrop-blur-md hover:bg-muted text-foreground transition-all duration-300 font-black tracking-tight w-full sm:w-auto"
                                asChild
                            >
                                <Link href="/portfolio">Explore Demos</Link>
                            </Button>
                        </MagneticButton>
                    </div>
                </motion.div>
            </div>

            {/* Trusted Tech Stack - Condensed & Motion Driven */}
            <div className="w-full mt-10 md:mt-16 bg-[var(--background-alt)]/50 backdrop-blur-sm py-6 relative z-10 border-y border-border/40 overflow-hidden">
                <div className="container mx-auto px-4 mb-4">
                    <p className="text-center text-[9px] tracking-[0.5em] uppercase font-black text-muted-foreground/40">WORLD-CLASS TECH STACK</p>
                </div>
                <div className="flex w-full overflow-hidden mask-linear-gradient">
                    <motion.div
                        animate={{ x: [0, -1000] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex items-center whitespace-nowrap gap-12 md:gap-24 px-8"
                    >
                        {[...brands, ...brands, ...brands].map((brand, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center text-muted-foreground/30 hover:text-primary transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100"
                            >
                                <brand.icon className="h-8 md:h-10 w-auto fill-current" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </Section>
    )
}

function SocialLink({ icon: Icon, href }: { icon: any, href: string }) {
    return (
        <Link href={href} aria-label="Social Link" className="p-2.5 rounded-full bg-muted/30 hover:bg-primary/10 text-muted-foreground/60 hover:text-primary transition-all duration-300 border border-transparent hover:border-primary/20">
            <Icon className="w-4 h-4" />
        </Link>
    )
}

function MagneticButton({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const { height, width, left, top } = ref.current!.getBoundingClientRect()
        const middleX = clientX - (left + width / 2)
        const middleY = clientY - (top + height / 2)
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 })
    }

    const reset = () => {
        setPosition({ x: 0, y: 0 })
    }

    const { x, y } = position
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        >
            {children}
        </motion.div>
    )
}
