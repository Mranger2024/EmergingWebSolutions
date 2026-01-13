import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { CheckCircle2, MessageSquare, MonitorPlay, PenTool, Rocket, ShieldCheck } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Process | How We Build Your Website Risk-Free",
    description: "Understand our unique 'Pay After Delivery' process. We build your website on our server first, so you can see it before you pay.",
    openGraph: {
        title: "Our Process | How We Build Your Website Risk-Free",
        description: "Understand our unique 'Pay After Delivery' process. We build your website on our server first, so you can see it before you pay.",
    }
}

const steps = [
    {
        id: 1,
        title: "Free Consultation",
        description: "We start with a quick call or chat to understand your business goals, target audience, and design preferences. We'll discuss features, pages, and any specific requirements you have. No commitment is required at this stage.",
        icon: MessageSquare,
    },
    {
        id: 2,
        title: "Strategy & Wireframe",
        description: "Based on our discussion, we create a strategic plan for your website. We outline the site structure, content flow, and key functionalities to ensure everything aligns with your business objectives.",
        icon: PenTool,
    },
    {
        id: 3,
        title: "We Build (Risk-Free)",
        description: "This is where the magic happens. We design and develop your complete website on our staging server. You get to see the progress and experience the site as it comes to life, without paying a single rupee upfront.",
        icon: MonitorPlay,
    },
    {
        id: 4,
        title: "Review & Refine",
        description: "We work with you to fine-tune the details. You get 2 rounds of revisions to adjust colors, text, images, or layout. We ensure every pixel is perfect and that the site works flawlessly on mobile and desktop.",
        icon: CheckCircle2,
    },
    {
        id: 5,
        title: "Payment & Launch",
        description: "Once you are 100% satisfied with the result, you make the payment. We then connect your custom domain, set up your professional email, configure SSL security, and launch your business to the world!",
        icon: Rocket,
    },
]

const faqs = [
    {
        question: "Is it really 'pay after delivery'?",
        answer: "Yes! We build the website on our server first. You can see it, click around, and verify everything. You only pay when you want to take it live on your domain. This eliminates all risk for you.",
    },
    {
        question: "What platforms do you use?",
        answer: "We primarily build on WordPress using premium page builders like Elementor. This ensures your site is easy to manage, SEO-friendly, and scalable. For custom requirements, we can also discuss other technologies.",
    },
    {
        question: "Do I own the website?",
        answer: "Absolutely. Once you pay, you have 100% ownership of the website, domain, and content. We provide you with all admin login credentials. We don't lock you in.",
    },
    {
        question: "What about Hosting and Domain?",
        answer: "Our package includes Free Domain (.com/.in) and Premium SSD Hosting for the first year. From the second year onwards, you'll need to pay a standard renewal fee to keep them active.",
    },
    {
        question: "What if I don't like the website?",
        answer: "If you're not happy after our revision rounds, you can choose not to proceed. You don't owe us any money. We take the risk so you don't have to.",
    },
    {
        question: "How long does it take?",
        answer: "Typically 7-10 days from the start of the project to launch, depending on how quickly we receive your content and feedback.",
    },
    {
        question: "Is the website mobile-friendly?",
        answer: "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop devices. This is crucial for SEO and user experience.",
    },
    {
        question: "Will my website appear on Google?",
        answer: "We set up basic on-page SEO, Google Search Console, and Google Analytics. This gives your site the best chance to rank, but competitive ranking depends on ongoing SEO efforts.",
    },
    {
        question: "Can I update the website myself?",
        answer: "Yes! Since we use WordPress, you'll have an easy-to-use dashboard where you can edit text, change images, and add blog posts without needing to code.",
    },
]

import { FAQSchema } from "@/components/seo/faq-schema"

export default function ProcessPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <FAQSchema faqs={faqs} />
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
