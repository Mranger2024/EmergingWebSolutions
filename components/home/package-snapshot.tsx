"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger)
}

const basicPackageFeatures = [
    "Custom WordPress Website (10 Pages)",
    "1 Year Domain & Premium Hosting",
    "Free SSL Certificate",
    "Mobile Responsive Design",
    "Blog Setup + 3 Bonus Posts",
    "Google Search Console & Analytics",
    "Contact Form & Map Integration",
    "Social Media Integration",
]

const premiumPackageFeatures = [
    "Custom WordPress Website (10 Pages)",
    "1 Year Domain & Premium Hosting",
    "Free SSL Certificate",
    "Mobile Responsive Design",
    "Blog Setup + 3 Bonus Posts",
    "Google Search Console & Analytics",
    "Contact Form & Map Integration",
    "Social Media Integration",
    "Advanced Business Management System",
    "Appointment Booking System",
]

export function PackageSnapshot() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const basicCardRef = useRef<HTMLDivElement>(null)
    const premiumCardRef = useRef<HTMLDivElement>(null)
    const basicFeaturesRef = useRef<(HTMLLIElement | null)[]>([])
    const premiumFeaturesRef = useRef<(HTMLLIElement | null)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Basic package card animation
            gsap.from(basicCardRef.current, {
                scrollTrigger: {
                    trigger: basicCardRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                scale: 0.8,
                y: 100,
                duration: 1,
                ease: "power3.out",
            })

            // Premium package card animation
            gsap.from(premiumCardRef.current, {
                scrollTrigger: {
                    trigger: premiumCardRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                scale: 0.8,
                y: 100,
                duration: 1,
                ease: "power3.out",
                delay: 0.2,
            })

            // Basic features stagger
            gsap.from(basicFeaturesRef.current, {
                scrollTrigger: {
                    trigger: basicCardRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                x: -30,
                stagger: 0.08,
                duration: 0.6,
                ease: "power2.out",
                delay: 0.3,
            })

            // Premium features stagger
            gsap.from(premiumFeaturesRef.current, {
                scrollTrigger: {
                    trigger: premiumCardRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                },
                opacity: 0,
                x: -30,
                stagger: 0.08,
                duration: 0.6,
                ease: "power2.out",
                delay: 0.5,
            })

            // Pulse animation for "Most Popular" badge
            const badge = premiumCardRef.current?.querySelector(".most-popular-badge")
            if (badge) {
                gsap.to(badge, {
                    scale: 1.1,
                    duration: 0.8,
                    repeat: -1,
                    yoyo: true,
                    ease: "power1.inOut",
                })
            }
        })

        return () => ctx.revert()
    }, [])

    return (
        <Section ref={sectionRef}>
            <div className="mx-auto max-w-2xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Choose Your Perfect Package
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    A complete digital presence for your business, handled by experts.
                </p>
            </div>

            <div className="mx-auto max-w-4xl space-y-8">
                {/* Essential Package - ₹9,999 */}
                <Card ref={basicCardRef} className="border-slate-700/50 shadow-lg relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="p-6 lg:p-8 flex flex-col justify-center bg-muted/30 lg:border-r">
                            <h3 className="text-2xl font-bold text-foreground">Essential Package</h3>
                            <div className="mt-4 flex items-baseline text-foreground">
                                <span className="text-5xl font-extrabold tracking-tight">₹9,999</span>
                                <span className="ml-1 text-xl font-semibold text-muted-foreground">/one-time</span>
                            </div>
                            <p className="mt-4 text-muted-foreground">
                                Perfect for small businesses and startups looking to establish their online presence affordably.
                            </p>
                            <Button size="lg" className="mt-8 w-full group relative overflow-hidden" variant="outline" asChild>
                                <Link href="/contact">
                                    <span className="relative z-10">Get Started Now</span>
                                </Link>
                            </Button>
                            <p className="mt-4 text-xs text-center text-muted-foreground">
                                Pay only after you are satisfied with the design.
                            </p>
                        </div>

                        <div className="p-6 lg:p-8">
                            <h4 className="text-sm font-semibold leading-6 text-foreground mb-4">What's included:</h4>
                            <ul className="grid grid-cols-1 gap-4 text-sm leading-6 text-muted-foreground">
                                {basicPackageFeatures.map((feature, index) => (
                                    <li
                                        key={feature}
                                        ref={(el) => { basicFeaturesRef.current[index] = el }}
                                        className="flex gap-x-3 items-start group"
                                    >
                                        <Check className="h-6 w-5 flex-none text-[var(--theme-text)] dark:text-[var(--theme-text-dark)] group-hover:scale-125 transition-transform duration-300" aria-hidden="true" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t">
                                <Link href="/services" className="text-[var(--theme-text)] dark:text-[var(--theme-text-dark)] text-sm font-medium hover:underline group">
                                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                                        View full package details →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Starter Growth Package - ₹14,999 */}
                <Card ref={premiumCardRef} className="border-primary/20 shadow-lg relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                    <div className="most-popular-badge absolute top-0 right-0 bg-gradient-to-r from-[var(--theme-gradient-start)] to-[var(--theme-gradient-end)] text-slate-900 px-4 py-1 rounded-bl-lg text-sm font-semibold">
                        Most Popular
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="p-6 lg:p-8 flex flex-col justify-center bg-muted/30 lg:border-r">
                            <h3 className="text-2xl font-bold text-foreground">Starter Growth Package</h3>
                            <div className="mt-4 flex items-baseline text-foreground">
                                <span className="text-5xl font-extrabold tracking-tight">₹14,999</span>
                                <span className="ml-1 text-xl font-semibold text-muted-foreground">/one-time</span>
                            </div>
                            <p className="mt-4 text-muted-foreground">
                                Perfect for businesses that need advanced features like appointment booking and business management.
                            </p>
                            <Button size="lg" className="mt-8 w-full group relative overflow-hidden" asChild>
                                <Link href="/contact">
                                    <span className="relative z-10">Get Started Now</span>
                                    <span className="absolute inset-0 bg-gradient-to-r from-[var(--theme-gradient-start)] to-[var(--theme-gradient-end)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                </Link>
                            </Button>
                            <p className="mt-4 text-xs text-center text-muted-foreground">
                                Pay only after you are satisfied with the design.
                            </p>
                        </div>

                        <div className="p-6 lg:p-8">
                            <h4 className="text-sm font-semibold leading-6 text-foreground mb-4">What's included:</h4>
                            <ul className="grid grid-cols-1 gap-4 text-sm leading-6 text-muted-foreground">
                                {premiumPackageFeatures.map((feature, index) => (
                                    <li
                                        key={feature}
                                        ref={(el) => { premiumFeaturesRef.current[index] = el }}
                                        className="flex gap-x-3 items-start group"
                                    >
                                        <Check className={`h-6 w-5 flex-none ${index >= 8 ? 'text-blue-500' : 'text-[var(--theme-text)] dark:text-[var(--theme-text-dark)]'} group-hover:scale-125 transition-transform duration-300`} aria-hidden="true" />
                                        <span className={`group-hover:translate-x-1 transition-transform duration-300 ${index >= 8 ? 'font-semibold text-foreground' : ''}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t">
                                <Link href="/services" className="text-[var(--theme-text)] dark:text-[var(--theme-text-dark)] text-sm font-medium hover:underline group">
                                    <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">
                                        View full package details →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </Section>
    )
}
