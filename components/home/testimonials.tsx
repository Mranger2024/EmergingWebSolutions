"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Star, Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
    {
        body: "I was skeptical about the 'pay after' model, but it was absolutely genuine. The team built a fantastic high-performance site for my dental clinic. Highly recommended for any professional business!",
        author: {
            name: "Dr. Suresh Reddy",
            handle: "CEO, Sparkle Dental",
            imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        body: "The premium package is a game-changer. We got a custom e-commerce solution that doubled our conversion rate within 3 months. The zero upfront risk made it an easy decision.",
        author: {
            name: "Anjali Mehta",
            handle: "Founder, Bloom Fashion",
            imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        body: "Extremely professional. They handled everything from cloud hosting to SEO strategy. Our site is now ranking locally for all our key terms. Best investment we've made this year.",
        author: {
            name: "Vikram Singh",
            handle: "Managing Director, Spice Route ",
            imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
]

export function Testimonials() {
    return (
        <Section className="bg-[var(--background-alt)] border-y border-border/50 py-24 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col items-center text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-6 border border-amber-500/20"
                    >
                        <Star className="w-3 h-3 fill-current" />
                        Client Success Stories
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-6">
                        Loved by Businesses <br /> <span className="text-primary italic italic">Worldwide.</span>
                    </h2>
                    <p className="text-muted-foreground text-xl max-w-2xl font-medium leading-relaxed">
                        Join 50+ global partners who trust Emerging Web Solutions for high-conversion digital experiences.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.author.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group h-full"
                        >
                            <Card className="bg-card border border-border/60 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 rounded-[2.5rem] p-4 flex flex-col h-full overflow-hidden relative">
                                <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                    <Quote className="w-12 h-12 rotate-180" />
                                </div>
                                <CardHeader className="pb-4">
                                    <div className="flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow flex flex-col pt-0">
                                    <p className="text-foreground/90 mb-10 text-lg font-medium leading-relaxed italic flex-grow">
                                        "{testimonial.body}"
                                    </p>
                                    <div className="flex items-center gap-x-5 border-t border-border/50 pt-8 mt-auto">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur group-hover:blur-md transition-all" />
                                            <img
                                                className="relative h-16 w-16 rounded-2xl bg-muted border-2 border-background object-cover shadow-lg transform group-hover:scale-105 transition-transform"
                                                src={testimonial.author.imageUrl}
                                                alt={testimonial.author.name}
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold text-foreground text-lg group-hover:text-primary transition-colors">{testimonial.author.name}</div>
                                            <div className="text-sm text-muted-foreground font-semibold tracking-wide">{testimonial.author.handle}</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

