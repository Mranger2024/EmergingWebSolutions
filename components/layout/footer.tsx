
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = {
    services: [
        { name: "Web Design", href: "/services" },
        { name: "E-Commerce", href: "/services" },
        { name: "SEO Optimization", href: "/services" },
        { name: "Maintenance", href: "/services" },
    ],
    company: [
        { name: "About Us", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Referral Program", href: "/affiliate" },
        { name: "Process", href: "/process" },
        { name: "Contact", href: "/contact" },
    ],
    social: [
        {
            name: "WhatsApp",
            href: "https://wa.me/918688440114",
            icon: Phone,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/emergingwebsolutions.in/",
            icon: Instagram,
        },
        {
            name: "Twitter",
            href: "https://x.com/EmergingWebSol",
            icon: Twitter,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BubPw8IszS%2Falqx%2FLYljHXA%3D%3D",
            icon: Linkedin,
        },
    ],
}

export function Footer() {
    return (
        <footer className="bg-[var(--background-alt)] border-t border-border/40 pt-24 pb-12 transition-colors duration-500 relative overflow-hidden">
            {/* Top Identity Prompt */}
            <div className="container px-4 md:px-6 mx-auto mb-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-[3.5rem] bg-background border border-border/60 shadow-xl shadow-primary/5">
                    <div className="space-y-2 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-foreground">
                            Ready to <span className="text-primary italic">Scale?</span>
                        </h2>
                        <p className="text-muted-foreground font-semibold text-lg">Join 50+ global businesses winning with high-performance web systems.</p>
                    </div>
                    <Button size="lg" className="h-16 px-10 text-xl rounded-full bg-primary hover:bg-primary/95 text-primary-foreground font-black shadow-lg shadow-primary/20 hover:scale-[1.03] transition-all" asChild>
                        <Link href="/contact">Book Your Free Demo</Link>
                    </Button>
                </div>
            </div>

            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center gap-2.5 group transition-transform hover:scale-[1.02] active:scale-95 origin-left">
                            <div className="h-12 w-12 flex items-center justify-center">
                                <img 
                                    src="/logo-abstract.png" 
                                    alt="Emerging Web Solutions Logo" 
                                    className="h-10 w-10 drop-shadow-2xl group-hover:rotate-[15deg] transition-transform duration-700" 
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-black tracking-tighter text-foreground leading-none group-hover:text-primary transition-colors">EMERGING WEB</span>
                                <span className="text-[9px] tracking-[0.4em] font-black text-muted-foreground uppercase leading-none mt-1.5 group-hover:tracking-[0.5em] transition-all">Solutions</span>
                            </div>
                        </Link>
                        <p className="text-muted-foreground/80 font-semibold text-base leading-relaxed max-w-xs">
                            Architecting world-class digital identities for forward-thinking brands. We build your vision first—you pay only when it scales.
                        </p>
                        <div className="flex gap-4">
                            {navigation.social.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-11 w-11 flex items-center justify-center rounded-xl bg-background border border-border/80 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div className="space-y-8">
                        <h3 className="text-foreground font-black text-xs uppercase tracking-[0.3em] opacity-40">Core Services</h3>
                        <ul className="space-y-5">
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-muted-foreground/80 hover:text-primary transition-all text-sm font-bold flex items-center gap-3 group"
                                    >
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary/20 group-hover:bg-primary group-hover:scale-150 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-8">
                        <h3 className="text-foreground font-black text-xs uppercase tracking-[0.3em] opacity-40">The Agency</h3>
                        <ul className="space-y-5">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-muted-foreground/80 hover:text-primary transition-all text-sm font-bold flex items-center gap-3 group"
                                    >
                                        <div className="h-1.5 w-1.5 rounded-full bg-primary/20 group-hover:bg-primary group-hover:scale-150 transition-all" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Global Presence */}
                    <div className="space-y-8">
                        <h3 className="text-foreground font-black text-xs uppercase tracking-[0.3em] opacity-40">Global Hub</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-5 text-muted-foreground/80 font-semibold text-sm group">
                                <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center shrink-0 border border-border/80 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <span className="leading-relaxed">
                                    G D complex, Kavali,<br />
                                    Andhra Pradesh, India 524201
                                </span>
                            </li>
                            <li className="group">
                                <a href="mailto:emergingwebsolutions@gmail.com" className="flex items-center gap-5 text-muted-foreground/80 hover:text-foreground transition-all text-sm font-bold">
                                    <div className="h-10 w-10 rounded-xl bg-background flex items-center justify-center shrink-0 border border-border/80 group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                        <Mail className="h-5 w-5" />
                                    </div>
                                    emergingwebsolutions@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border/60 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-muted-foreground/60 text-xs font-black uppercase tracking-widest order-2 md:order-1">
                        &copy; {new Date().getFullYear()} Emerging Web Solutions &bull; Engineered for Global Excellence
                    </p>
                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60 order-1 md:order-2">
                        <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                        <Link href="/refund" className="hover:text-primary transition-colors">Refunds</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

