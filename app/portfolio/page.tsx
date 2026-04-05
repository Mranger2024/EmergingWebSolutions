import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Portfolio | Web Design Examples",
    description: "See examples of our work. Professional, responsive, and high-converting websites built for Indian businesses.",
    openGraph: {
        title: "Our Portfolio | Web Design Examples",
        description: "See examples of our work. Professional, responsive, and high-converting websites built for Indian businesses.",
    }
}

const projects = [
    {
        title: "Smile Dental Clinic",
        category: "Healthcare",
        description: "A professional presence for a modern dental practice. Features online appointment booking, service catalog, and doctor profiles.",
        image: "/projects/clinic_screenshot.png",
        tags: ["Healthcare", "Appointment Booking", "Responsive Design"],
        link: "https://clinictemp.vercel.app/"
    },
    {
        title: "Roundkart",
        category: "E-commerce & B2B",
        description: "Supply Chain Solutions for Modern Enterprise. A comprehensive B2B procurement platform for hotels, hospitals, and developers.",
        image: "/projects/roundkart_screenshot.png",
        tags: ["B2B E-commerce", "Supply Chain", "Enterprise"],
        link: "https://roundkart.com/"
    }
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
                        Check out our latest work. We build websites that look great and convert visitors into customers.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {projects.map((project) => (
                        <Link key={project.title} href={project.link} target="_blank" className="block group">
                            <Card className="overflow-hidden flex flex-col h-full hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30">
                                <div className="aspect-video w-full overflow-hidden bg-muted relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="flex items-center gap-2 bg-white/90 text-black px-4 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                            <ExternalLink className="h-4 w-4" />
                                            Visit Site
                                        </div>
                                    </div>
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-start mb-2">
                                        <Badge variant="secondary" className="bg-primary/5 text-primary border-primary/10 hover:bg-primary/10">
                                            {project.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold bg-muted/50 px-2 py-0.5 rounded text-muted-foreground/80">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
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
