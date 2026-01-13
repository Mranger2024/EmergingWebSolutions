import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import Link from "next/link"

const comparisonData = [
    {
        feature: "Payment Model",
        us: "Pay AFTER website is ready",
        freelancer: "50-100% Advance",
        agency: "50-70% Advance",
    },
    {
        feature: "Price (10-Page Site)",
        us: "₹14,999 (All-inclusive)",
        freelancer: "₹15k - ₹25k (+ extras)",
        agency: "₹40k+",
    },
    {
        feature: "Domain & Hosting",
        us: "Included (1 Year)",
        freelancer: "Usually Extra",
        agency: "Sometimes Included",
    },
    {
        feature: "SSL & Security",
        us: "Included",
        freelancer: "Depends",
        agency: "Included",
    },
    {
        feature: "Blog + 3 Posts",
        us: "Included",
        freelancer: "Rarely Included",
        agency: "Extra Cost",
    },
    {
        feature: "Revisions",
        us: "2 Rounds Included",
        freelancer: "Varies",
        agency: "Limited",
    },
    {
        feature: "Support",
        us: "14 Days Free Support",
        freelancer: "Varies",
        agency: "Expensive Plans",
    },
]

export default function WhyUsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="bg-muted/30 pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        Why Choose Us?
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        We built our agency to solve the biggest problems small businesses face: high costs, hidden fees, and untrustworthy providers.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="max-w-5xl mx-auto overflow-x-auto">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr>
                                <th className="p-4 border-b-2 border-muted bg-muted/10 w-1/4">Feature</th>
                                <th className="p-4 border-b-2 border-[var(--theme-primary)] bg-[var(--theme-icon-bg)] w-1/4 text-[var(--theme-text)] dark:text-[var(--theme-text-dark)] font-bold text-lg">
                                    Emerging Web Solutions
                                </th>
                                <th className="p-4 border-b-2 border-muted w-1/4 text-muted-foreground">Typical Freelancer</th>
                                <th className="p-4 border-b-2 border-muted w-1/4 text-muted-foreground">Big Agency</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, index) => (
                                <tr key={row.feature} className={index % 2 === 0 ? "bg-muted/5" : ""}>
                                    <td className="p-4 border-b border-muted font-medium">{row.feature}</td>
                                    <td className="p-4 border-b border-muted bg-[var(--theme-icon-bg)] font-semibold text-foreground">
                                        {row.us}
                                    </td>
                                    <td className="p-4 border-b border-muted text-muted-foreground">{row.freelancer}</td>
                                    <td className="p-4 border-b border-muted text-muted-foreground">{row.agency}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            <Section className="bg-muted/20">
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
                        <p className="text-muted-foreground">What you see is what you pay. No surprise bills for "extra plugins" or "setup fees".</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">No Tech Jargon</h3>
                        <p className="text-muted-foreground">We speak your language. We explain everything in simple terms so you know exactly what you're getting.</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-3">Built for India</h3>
                        <p className="text-muted-foreground">We understand the needs of local Indian businesses. Fast loading, mobile-first, and WhatsApp integrated.</p>
                    </div>
                </div>
            </Section>

            <Section className="text-center">
                <h2 className="text-3xl font-bold mb-6">Experience the difference.</h2>
                <Button size="lg" asChild className="text-base text-[var(--theme-text-dark)] px-8">
                    <Link href="/contact">Get Started Today</Link>
                </Button>
            </Section>
        </div>
    )
}
