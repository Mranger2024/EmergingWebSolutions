import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service | Emerging Web Solutions",
    description: "Read our Terms of Service. Understand the rules, regulations, and usage rights for Emerging Web Solutions' services.",
}

export default function TermsPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Section className="pt-32 pb-12 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="text-center max-w-3xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-slate-400">
                        Please read these terms and conditions carefully before using our service.
                    </p>
                </div>
            </Section>

            <Section className="pb-24">
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
                        <CardContent className="p-8 md:p-12">
                            <div className="prose prose-invert max-w-none text-center prose-headings:text-slate-200 prose-p:text-slate-400 prose-li:text-slate-400 prose-strong:text-slate-200">

                                <h3>1. Terms</h3>
                                <p>
                                    By accessing the website at <strong className="text-blue-400">Emerging Web Solutions</strong>, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                                </p>

                                <h3>2. Use License</h3>
                                <p>
                                    Permission is granted to temporarily download one copy of the materials (information or software) on Emerging Web Solutions's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                                </p>
                                <ul className="list-none space-y-2 pl-0">
                                    <li>modify or copy the materials;</li>
                                    <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                                    <li>attempt to decompile or reverse engineer any software contained on Emerging Web Solutions's website;</li>
                                    <li>remove any copyright or other proprietary notations from the materials; or</li>
                                    <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                                </ul>

                                <h3>3. Disclaimer</h3>
                                <p>
                                    The materials on Emerging Web Solutions's website are provided on an 'as is' basis. Emerging Web Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                                </p>

                                <h3>4. Limitations</h3>
                                <p>
                                    In no event shall Emerging Web Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Emerging Web Solutions's website, even if Emerging Web Solutions or a Emerging Web Solutions authorized representative has been notified orally or in writing of the possibility of such damage.
                                </p>

                                <h3>5. Accuracy of Materials</h3>
                                <p>
                                    The materials appearing on Emerging Web Solutions's website could include technical, typographical, or photographic errors. Emerging Web Solutions does not warrant that any of the materials on its website are accurate, complete or current. Emerging Web Solutions may make changes to the materials contained on its website at any time without notice. However Emerging Web Solutions does not make any commitment to update the materials.
                                </p>

                                <h3>6. Service Delivery & Payments</h3>
                                <p>
                                    Emerging Web Solutions operates on a "Pay After Delivery" model for standard website packages. The client is obligated to pay the agreed-upon amount once the website is completed and approved on the staging server, before the final migration to the client's domain.
                                </p>

                                <h3>7. Governing Law</h3>
                                <p>
                                    These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                                </p>

                                <div className="my-12 w-24 h-1 bg-purple-500/20 mx-auto rounded-full" />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </Section>
        </div>
    )
}
