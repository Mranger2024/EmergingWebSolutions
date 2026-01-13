import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Section className="bg-muted/30 pt-24 pb-12">
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                        Get Your Website Today
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Fill out the form below to start your free project. No payment required upfront.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <Card>
                        <CardContent className="p-6 sm:p-8">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Your name" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">WhatsApp Number</Label>
                                        <Input id="phone" placeholder="+91 98765 43210" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="you@example.com" required />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="business">Business Name</Label>
                                    <Input id="business" placeholder="e.g. Sharma Dental Clinic" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="type">Business Type</Label>
                                    <Input id="type" placeholder="e.g. Clinic, Restaurant, Shop..." />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message">What do you need?</Label>
                                    <Textarea
                                        id="message"
                                        placeholder="Tell us a bit about what you want your website to do..."
                                        className="min-h-[120px]"
                                    />
                                </div>

                                <Button type="submit" className="w-full" size="lg">
                                    Request Free Consultation
                                </Button>
                                <p className="text-xs text-center text-muted-foreground">
                                    We'll contact you within 24 hours.
                                </p>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <p className="text-muted-foreground mb-8">
                                Prefer to talk directly? Reach out to us via phone or email. We are available Mon-Sat, 10 AM - 7 PM.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-[var(--theme-icon-bg)] p-3 rounded-lg text-[var(--theme-text)] dark:text-[var(--theme-text-dark)]">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Phone / WhatsApp</h3>
                                        <p className="text-muted-foreground">+91 98765 43210</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[var(--theme-icon-bg)] p-3 rounded-lg text-[var(--theme-text)] dark:text-[var(--theme-text-dark)]">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-muted-foreground">hello@webdevagency.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-[var(--theme-icon-bg)] p-3 rounded-lg text-[var(--theme-text)] dark:text-[var(--theme-text-dark)]">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">Office</h3>
                                        <p className="text-muted-foreground">
                                            123, Tech Park, Sector 5<br />
                                            Bangalore, Karnataka 560001
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-muted p-6 rounded-lg">
                            <h3 className="font-semibold mb-2">Why no payment now?</h3>
                            <p className="text-sm text-muted-foreground">
                                We want you to be confident in our service. By filling this form, you are just starting a conversation. We will build a demo for you first.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    )
}
