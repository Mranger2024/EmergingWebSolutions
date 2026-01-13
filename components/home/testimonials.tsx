import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Star } from "lucide-react"

const testimonials = [
    {
        body: "I was skeptical about the 'pay later' model, but it was genuine. The team built a fantastic site for my clinic.",
        author: {
            name: "Dr. Rajesh Kumar",
            handle: "Dental Clinic Owner",
            imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        body: "The ₹12k package is a steal. I got everything I needed to start my consulting business online.",
        author: {
            name: "Sarah Jenkins",
            handle: "Business Consultant",
            imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    },
    {
        body: "Professional, fast, and very responsive. They handled the domain and hosting setup perfectly.",
        author: {
            name: "Amit Patel",
            handle: "Retail Store Owner",
            imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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
                                    alt=""
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
