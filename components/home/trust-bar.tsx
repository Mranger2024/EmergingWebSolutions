"use client"

import { CheckCircle2, ShieldCheck, Wallet, Zap } from "lucide-react"
import { Section } from "@/components/ui/section"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const features = [
    {
        name: "Pay After Approval",
        description: "Zero risk. You see the site first.",
        icon: Wallet,
    },
    {
        name: "All-Inclusive Pricing",
        description: "₹14,999 flat. No hidden fees.",
        icon: CheckCircle2,
    },
    {
        name: "Secure & Fast",
        description: "SSL & Premium Hosting included.",
        icon: ShieldCheck,
    },
    {
        name: "7-Day Delivery",
        description: "Get your business online fast.",
        icon: Zap,
    },
]

export function TrustBar() {
    const containerRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Stagger animation on scroll with optimized settings
            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                y: 30, // Reduced distance
                scale: 0.95, // Subtle scale
                stagger: 0.1, // Faster stagger
                duration: 0.6, // Shorter duration
                ease: "power2.out", // Simpler easing
            })

            // Simplified hover animations
            cardsRef.current.forEach((card) => {
                if (!card) return

                card.addEventListener("mouseenter", () => {
                    gsap.to(card, {
                        scale: 1.03, // Subtle scale
                        y: -5, // Reduced movement
                        duration: 0.3,
                        ease: "power2.out",
                    })
                })

                card.addEventListener("mouseleave", () => {
                    gsap.to(card, {
                        scale: 1,
                        y: 0,
                        duration: 0.3,
                        ease: "power2.out",
                    })
                })
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <Section className="bg-muted/50 ">
            <div ref={containerRef} className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                    <div
                        key={feature.name}
                        ref={(el) => { cardsRef.current[index] = el }}
                        className="flex flex-col items-center text-center sm:items-start sm:text-left cursor-pointer transition-shadow hover:shadow-lg rounded-lg p-4"
                        style={{ willChange: "transform" }}
                    >
                        <div className="icon-wrapper mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--theme-icon-bg)] text-[var(--theme-text)] dark:text-[var(--theme-text-dark)]">
                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{feature.name}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}
