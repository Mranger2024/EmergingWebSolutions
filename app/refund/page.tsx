import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Refund & Cancellation Policy | Emerging Web Solutions",
    description: "Our 'Pay After Delivery' model ensures zero risk. Read our transparent Refund and Cancellation policy.",
}

export default function RefundPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Section className="pt-32 pb-12 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-green-500/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="text-center max-w-3xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500">
                        Refund & Cancellation Policy
                    </h1>
                    <p className="text-lg text-slate-400">
                        Our goal is your complete satisfaction. Here's how our "No Risk" policy works.
                    </p>
                </div>
            </Section>

            <Section className="pb-24">
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
                        <CardContent className="p-8 md:p-12">
                            <div className="prose prose-invert max-w-none text-center prose-headings:text-slate-200 prose-p:text-slate-400 prose-li:text-slate-400 prose-strong:text-slate-200">

                                <h3>1. No Upfront Payment Risk</h3>
                                <p>
                                    Unlike traditional agencies, <strong className="text-blue-400">Emerging Web Solutions</strong> does not ask for huge upfront deposits. We build your website on our staging server first. You can review the design, functionality, and content before paying a single rupee.
                                </p>

                                <h3>2. Cancellation Before Payment</h3>
                                <p>
                                    If you are not satisfied with the work we have produced on the staging server, you have the right to cancel the project at any time before the final payment is made. In this case:
                                </p>
                                <ul className="list-none space-y-2 pl-0">
                                    <li>You do not owe us any money.</li>
                                    <li>We retain ownership of all code, designs, and content created by us.</li>
                                    <li>You cannot use any part of the rejected work on your own.</li>
                                </ul>

                                <h3>3. Refunds After Payment</h3>
                                <p>
                                    Once you have approved the website, made the payment, and the site has been transferred to your domain:
                                </p>
                                <ul className="list-none space-y-2 pl-0">
                                    <li><strong>No defaults refunds are issued</strong> as the service is considered fully delivered and accepted by you.</li>
                                    <li>However, if there is a critical technical error on our part that we cannot fix within 7 days of launch, we may issue a partial or full refund at our discretion.</li>
                                </ul>

                                <h3>4. Third-Party Costs</h3>
                                <p>
                                    Any costs paid directly to third parties (such as Domain Registrars, Hosting Providers, or Premium Plugin vendors) are subject to that third party's refund policy and are generally non-refundable by Emerging Web Solutions.
                                </p>

                                <h3>5. Maintenance & Support</h3>
                                <p>
                                    Our 14-day post-launch support is a free service provided to ensure smooth operation. It is not a paid subscription and therefore has no cash value for refund.
                                </p>

                                <div className="my-12 w-24 h-1 bg-green-500/20 mx-auto rounded-full" />

                                <h3>6. Contact Us</h3>
                                <p>
                                    If you have any questions about our Refund & Cancellation Policy, please contact us at <br />
                                    <strong className="text-blue-400">emergingwebsolutions@gmail.com</strong>.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Section>
        </div>
    )
}
