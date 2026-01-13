"use client"

import Link from "next/link"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ParticlesCursor } from "@/components/ui/particles-cursor"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"

import { CloudflareIcon, ElementorIcon, GoogleAnalyticsIcon, GoogleSitesIcon, WordPressIcon, YoastSEOIcon } from "./brand-icons"

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

    // Handle mouse move for spotlight
    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }




    const marqueeRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Smooth infinite scroll with optimized settings
            if (marqueeRef.current) {
                const marqueeWidth = marqueeRef.current.offsetWidth

                gsap.to(marqueeRef.current, {
                    x: -marqueeWidth / 3,
                    duration: 30,
                    ease: "none",
                    repeat: -1,
                })
            }
        })

        return () => ctx.revert()
    }, [])


    return (
        <Section
            className="relative  flex items-center justify-center overflow-hidden bg-[#020617] text-white pt-10 "
            ref={heroRef}
            onMouseMove={handleMouseMove}
        >
            {/* Layer 1: Background Grid */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_50%,transparent_100%)] opacity-40" />

            {/* Layer 2: Semi-Circular Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[100px] rounded-full opacity-50 pointer-events-none" />

            {/* Layer 3: Particle Network */}
            <ParticlesCursor />

            {/* Layer 4: Spotlight Cursor */}
            <motion.div
                className="pointer-events-none absolute -inset-px z-20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(79, 70, 229, 0.1),
                            transparent 80%
                        )
                    `,
                }}
            />

            {/* Social Sidebar */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-40">
                <SocialLink icon={WhatsappIcon} href="https://wa.me/918688440114" />
                <SocialLink icon={Twitter} href="https://x.com/EmergingWebSol" />
                <SocialLink icon={Instagram} href="https://www.instagram.com/emergingwebsolutions.in/" />
            </div>

            {/* Content */}
            <div className="container relative z-30 px-4 md:px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-2"
                >
                    {/* Semi-circle graphic behind text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] border-t-[1px] border-primary/40 rounded-t-full opacity-100 pointer-events-none shadow-[0_-40px_80px_-40px_rgba(79,70,229,0.5)]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] border-t-[1px] border-primary/20 rounded-t-full opacity-60 pointer-events-none" />

                    {/* Glowing Arc */}
                    <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/10 to-transparent rounded-t-full blur-3xl opacity-40 pointer-events-none" />

                    <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white relative z-10">
                        Professional WordPress Websites. <br />

                    </h1>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-[var(--theme-gradient-start)] via-[var(--theme-primary)] to-[var(--theme-gradient-end)] text-transparent bg-clip-text pb-6 relative z-10">
                        Built First. Paid After.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 max-w-5xl mx-auto font-light leading-relaxed relative z-10">
                        Get a complete website with domain, hosting, SSL, and Appointment Booking System for just ₹14,999.
                        <br className="hidden sm:inline" /> No advance payment. You pay only when you are 100% happy.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4 relative z-10">
                        <MagneticButton>
                            <Button
                                size="lg"
                                className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(79,70,229,0.5)] border-0 transition-all duration-300 hover:scale-105 text-white font-semibold"
                                asChild
                            >
                                <Link href="/contact">Get My Website</Link>
                            </Button>
                        </MagneticButton>

                        <MagneticButton>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-14 px-8 text-lg rounded-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white hover:text-white transition-all duration-300"
                                asChild
                            >
                                <Link href="/portfolio">View Demos</Link>
                            </Button>
                        </MagneticButton>
                    </div>


                </motion.div>
            </div>
            <div className="w-full mt-25 bg-background overflow-hidden">
                <div className="relative flex w-full overflow-hidden mask-linear-gradient">
                    <div ref={marqueeRef} className="flex whitespace-nowrap">
                        {[...Array(3)].map((_, groupIndex) => (
                            <div key={groupIndex} className="flex">
                                {brands.map((brand, index) => (
                                    <div
                                        key={`${groupIndex}-${index}`}
                                        className="mx-8 flex items-center justify-center cursor-pointer text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
                                        style={{ willChange: "transform" }}
                                    >
                                        <brand.icon className="h-8 w-auto md:h-10" />
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    )
}

function WhatsappIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    )
}

function SocialLink({ icon: Icon, href }: { icon: any, href: string }) {
    return (
        <Link href={href} className="p-3 rounded-full bg-white/5 hover:bg-primary/20 text-slate-400 hover:text-primary transition-all duration-300 border border-transparent hover:border-primary/50">
            <Icon className="w-5 h-5" />
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
