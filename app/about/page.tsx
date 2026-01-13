import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Lightbulb, Shield, Users } from "lucide-react"

const values = [
    {
        name: "Trust First",
        description: "We believe trust is earned, not bought. That's why we don't ask for money until you see the result.",
        icon: Shield,
    },
    {
        name: "Simplicity",
        description: "We hate jargon. We explain everything in plain English (or Hindi/local language if you prefer).",
        icon: Lightbulb,
    },
    {
        name: "Client Success",
        description: "Your website isn't just a digital card; it's a tool to grow your business. We build with that goal in mind.",
        icon: Users,
    },
    {
        name: "Transparency",
        description: "No hidden fees, no surprise charges. You know exactly what you're paying for.",
        icon: Heart,
    },
]

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="bg-muted/30 pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        About WebDevAgency
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        We are a team of passionate developers and designers on a mission to help Indian small businesses go online without the risk.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                        <div className="space-y-4 text-muted-foreground text-lg">
                            <p>
                                We started WebDevAgency because we saw a problem. Small business owners were getting burned by freelancers who took advance payments and disappeared, or agencies that charged exorbitant fees for simple websites.
                            </p>
                            <p>
                                We wanted to change that. We asked ourselves: "What if we took all the risk?"
                            </p>
                            <p>
                                That's how our "Website First, Pay Next" model was born. It forces us to deliver high-quality work every single time, because if you don't like it, we don't get paid. It's that simple.
                            </p>
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-lg overflow-hidden bg-muted">
                        {/* Placeholder for team or office image */}
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                                alt="Team working together"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-muted/20">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value) => (
                            <Card key={value.name} className="text-center border-none shadow-none bg-transparent">
                                <CardContent className="pt-6">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--theme-icon-bg)] text-[var(--theme-text)] dark:text-[var(--theme-text-dark)] mb-4">
                                        <value.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="text-lg font-bold mb-2">{value.name}</h3>
                                    <p className="text-sm text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    )
}
