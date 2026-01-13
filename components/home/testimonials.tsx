import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Star } from "lucide-react"

const testimonials = [
    {
        body: "I was skeptical about the 'pay later' model, but it was genuine. The team built a fantastic site for my dental clinic in Hyderabad. Highly recommended!",
        author: {
            name: "Dr. Suresh Reddy",
            handle: "Dental Clinic Owner",
            imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        body: "The ₹14,999 package is perfect for startups. I got a professional website for my boutique without burning a hole in my pocket. Great support too.",
        author: {
            name: "Anjali Mehta",
            handle: "Fashion Boutique Owner",
            imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        body: "Very professional and responsive. They handled everything from domain registration to hosting for my restaurant. I didn't have to worry about a thing.",
        author: {
            name: "Vikram Singh",
            handle: "Restaurant Owner",
            imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
]

export function Testimonials() {
    return (
        <Section>
            <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Trusted by Business Owners
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    See what our clients say about our transparent process.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimonial) => (
                    <Card key={testimonial.author.name} className="bg-muted/20 border-none shadow-none">
                        <CardHeader className="pb-4">
                            <div className="flex gap-1 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-6">"{testimonial.body}"</p>
                            <div className="flex items-center gap-x-4">
                                <img
                                    className="h-10 w-10 rounded-full bg-muted"
                                    src={testimonial.author.imageUrl}
                                    alt={`Photo of ${testimonial.author.name}, ${testimonial.author.handle}`}
                                />
                                <div>
                                    <div className="font-semibold text-foreground">{testimonial.author.name}</div>
                                    <div className="text-xs text-muted-foreground">{testimonial.author.handle}</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
