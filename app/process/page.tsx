import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { CheckCircle2, MessageSquare, MonitorPlay, PenTool, Rocket, ShieldCheck } from "lucide-react"

const steps = [
    {
        id: 1,
        title: "Free Consultation",
        description: "We start with a quick call or chat to understand your business needs. No commitment required.",
        icon: MessageSquare,
    },
    {
        id: 2,
        title: "Plan & Wireframe",
        description: "We propose a structure and design direction based on your industry and goals.",
        icon: PenTool,
    },
    {
        id: 3,
        title: "We Build (Risk-Free)",
        description: "We build your complete website on our staging server. You don't pay a single rupee yet.",
        icon: MonitorPlay,
    },
    {
        id: 4,
        title: "Review & Refine",
        description: "You get 2 rounds of revisions to make sure everything is perfect.",
        icon: CheckCircle2,
    },
    {
        id: 5,
        title: "Payment & Launch",
        description: "Once you are 100% happy, you make the payment. We then connect your domain and go live!",
        icon: Rocket,
    },
]

const faqs = [
    {
        question: "Is it really 'pay after delivery'?",
        answer: "Yes! We build the website on our server first. You can see it, click around, and verify everything. You only pay when you want to take it live on your domain.",
    },
    {
        question: "What if I don't like the website?",
        answer: "If you're not happy after revisions, you can walk away. You don't owe us anything. We take the risk so you don't have to.",
    },
    {
        question: "Do I own the website?",
        answer: "Absolutely. Once you pay, you have 100% ownership of the website, domain, and content. We don't lock you in.",
    },
    {
        question: "How long does it take?",
        answer: "Typically 7-10 days from the start of the project to launch, depending on how fast we receive your content.",
    },
]

export default function ProcessPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="bg-muted/30 pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        How It Works
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        We've flipped the traditional agency model. We take the risk, you get the peace of mind.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                                <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-[var(--theme-icon-bg)] text-[var(--theme-text)] dark:text-[var(--theme-text-dark)] font-bold text-2xl border-4 border-background shadow-sm z-10">
                                    {step.id}
                                </div>
                                <div className="flex-grow pt-2">
                                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
                                        {step.title}
                                        <step.icon className="h-6 w-6 text-muted-foreground" />
                                    </h3>
                                    <p className="text-lg text-muted-foreground">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="bg-muted/20">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-10">Common Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="text-center">
                <h2 className="text-3xl  font-bold mb-6">Ready to start?</h2>
                <Button size="lg" asChild className="text-base text-[var(--theme-text-dark)] px-8">
                    <Link href="/contact">Start Your Free Project</Link>
                </Button>
            </Section>
        </div>
    )
}
