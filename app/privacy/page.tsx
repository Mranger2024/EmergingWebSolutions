import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Emerging Web Solutions",
    description: "Learn how Emerging Web Solutions collects, uses, and protects your personal information. Our commitment to your privacy.",
}

export default function PrivacyPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[#020617]">
            <Section className="pt-32 pb-12 relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="text-center max-w-3xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-slate-400">
                        Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                    </p>
                </div>
            </Section>

            <Section className="pb-24">
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-slate-900/50 border-slate-800 backdrop-blur-sm">
                        <CardContent className="p-8 md:p-12">
                            <div className="prose prose-invert max-w-none text-center prose-headings:text-slate-200 prose-p:text-slate-400 prose-li:text-slate-400 prose-strong:text-slate-200">
                                <p className="lead text-xl text-slate-300">
                                    At Emerging Web Solutions, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Emerging Web Solutions and how we use it.
                                </p>

                                <div className="my-12 w-24 h-1 bg-blue-500/20 mx-auto rounded-full" />

                                <h3>1. Information We Collect</h3>
                                <p>
                                    The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                                </p>
                                <p>
                                    If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                                </p>

                                <h3>2. How We Use Your Information</h3>
                                <p>We use the information we collect in various ways, including to:</p>
                                <ul className="list-none space-y-2 pl-0">
                                    <li>Provide, operate, and maintain our website</li>
                                    <li>Improve, personalize, and expand our website</li>
                                    <li>Understand and analyze how you use our website</li>
                                    <li>Develop new products, services, features, and functionality</li>
                                    <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                                    <li>Send you emails</li>
                                    <li>Find and prevent fraud</li>
                                </ul>

                                <h3>3. Log Files</h3>
                                <p>
                                    Emerging Web Solutions follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
                                </p>

                                <h3>4. Cookies and Web Beacons</h3>
                                <p>
                                    Like any other website, Emerging Web Solutions uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                                </p>

                                <h3>5. Third Party Privacy Policies</h3>
                                <p>
                                    Emerging Web Solutions's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                                </p>

                                <h3>6. GDPR Data Protection Rights</h3>
                                <p>
                                    We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                                </p>
                                <ul className="list-none space-y-2 pl-0">
                                    <li>The right to access – You have the right to request copies of your personal data.</li>
                                    <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
                                    <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
                                </ul>

                                <div className="my-12 w-24 h-1 bg-blue-500/20 mx-auto rounded-full" />

                                <h3>7. Contact Us</h3>
                                <p>
                                    If you have any questions about our Privacy Policy, do not hesitate to contact us at <br />
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
