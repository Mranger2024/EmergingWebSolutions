import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

const projects = [
    {
        title: "Smile Dental Clinic",
        category: "Healthcare",
        description: "A clean, trustworthy website for a local dental clinic with appointment booking integration and service showcase.",
        image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop",
        tags: ["Appointment Booking", "Service Catalog", "Local SEO"],
    },
    {
        title: "Urban Bites Restaurant",
        category: "Food & Dining",
        description: "Mouth-watering design for a modern restaurant featuring a digital menu, gallery, and table reservation form.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
        tags: ["Digital Menu", "Gallery", "Reservations"],
    },
    {
        title: "FitLife Gym",
        category: "Fitness",
        description: "High-energy website for a local gym with class schedules, trainer profiles, and membership inquiry forms.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop",
        tags: ["Class Schedule", "Membership Form", "Blog"],
    },
    {
        title: "Elite Coaching Institute",
        category: "Education",
        description: "Professional site for a coaching center with course details, student success stories, and downloadables.",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
        tags: ["Course Listing", "Student Portal", "Downloads"],
    },
    {
        title: "Green Homes Real Estate",
        category: "Real Estate",
        description: "Property listing website with search filters, property details, and agent contact forms.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
        tags: ["Property Search", "Image Slider", "Lead Gen"],
    },
]

export default function PortfolioPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="bg-muted/30 pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        Our Work
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Check out some of our recent projects and demo sites. We build websites that look great and convert visitors into customers.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <Card key={project.title} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                            <div className="aspect-video w-full overflow-hidden bg-muted relative group">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Button variant="secondary" className="gap-2">
                                        <ExternalLink className="h-4 w-4" />
                                        View Demo
                                    </Button>
                                </div>
                            </div>
                            <CardHeader>
                                <div className="flex justify-between items-start mb-2">
                                    <Badge variant="secondary">{project.category}</Badge>
                                </div>
                                <CardTitle className="text-xl">{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs bg-muted px-2 py-1 rounded-md text-muted-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            <Section className="bg-primary text-primary-foreground text-center">
                <h2 className="text-3xl font-bold mb-6">Like what you see?</h2>
                <p className="text-lg opacity-90 mb-8">
                    Let's build something amazing for your business.
                </p>
                <Button size="lg" variant="secondary" asChild className="text-base text-[var(--theme-text-dark)] px-8">
                    <Link href="/contact">Get Your Website</Link>
                </Button>
            </Section>

        </div>
    )
}
