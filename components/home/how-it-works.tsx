"use client"

import { Section } from "@/components/ui/section"
import { CheckCircle2, FileText, Palette, Rocket } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const steps = [
    {
        name: "1. Share Your Vision",
        description: "Tell us about your business, goals, and design preferences.",
        icon: FileText,
    },
    {
        name: "2. We Build Your Site",
        description: "Our team creates your custom WordPress website from scratch.",
        icon: Palette,
    },
    {
        name: "3. Review & Approve",
        description: "You review the site and request any changes. No payment yet!",
        icon: CheckCircle2,
    },
    {
        name: "4. Launch & Pay",
        description: "Once you're 100% happy, we launch your site and you pay.",
        icon: Rocket,
    },
]

export function HowItWorks() {
    const containerRef = useRef<HTMLDivElement>(null)
    const stepsRef = useRef<(HTMLDivElement | null)[]>([])
    const lineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the connecting line
            gsap.from(lineRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
                scaleY: 0,
                transformOrigin: "top",
                duration: 1.5,
                ease: "power2.out",
            })

            // Stagger animate each step
            stepsRef.current.forEach((step, index) => {
                if (!step) return

                gsap.from(step, {
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    opacity: 0,
                    x: index % 2 === 0 ? -100 : 100,
                    duration: 0.8,
                    ease: "back.out(1.7)",
                })

                // Icon rotation on scroll
                const icon = step.querySelector(".step-icon")
                gsap.from(icon, {
                    scrollTrigger: {
                        trigger: step,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                    rotation: -180,
                    scale: 0,
                    duration: 0.6,
                    delay: 0.2,
                    ease: "back.out(2)",
                })

                // Hover effect
                step.addEventListener("mouseenter", () => {
                    gsap.to(step, {
                        scale: 1.05,
                        duration: 0.3,
                        ease: "power2.out",
                    })
                    gsap.to(icon, {
                        rotation: 360,
                        scale: 1.2,
                        duration: 0.5,
                        ease: "back.out(1.7)",
                    })
                })

                step.addEventListener("mouseleave", () => {
                    gsap.to(step, {
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out",
                    })
                    gsap.to(icon, {
                        rotation: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out",
                    })
                })
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <Section className="bg-muted/30">
            <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    How It Works
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    A simple, transparent process that puts you in control.
                </p>
            </div>

            <div ref={containerRef} className="mx-auto max-w-3xl relative">
                {/* Connecting Line */}
                <div
                    ref={lineRef}
                    className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 transform bg-gradient-to-b from-[var(--theme-gradient-start)] to-[var(--theme-gradient-end)]"
                />
                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <div
                            key={step.name}
                            ref={(el) => { stepsRef.current[index] = el }}
                            className={`flex items-center gap-8 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                } flex-col cursor-pointer`}
                        >
                            <div className="flex-1 text-center lg:text-left">
                                <h3 className="text-xl font-bold text-foreground">{step.name}</h3>
                                <p className="mt-2 text-muted-foreground">{step.description}</p>
                            </div>
                            <div className="step-icon flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[var(--theme-gradient-start)] to-[var(--theme-gradient-end)] text-slate-900 shadow-lg">
                                <step.icon className="h-8 w-8" />
                            </div>
                            <div className="flex-1 hidden lg:block" />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    )
}
