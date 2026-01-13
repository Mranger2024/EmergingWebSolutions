
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
            href: "#",
            icon: Linkedin,
        },
    ],
}

export function Footer() {
    return (
        <footer className="bg-[#020617] border-t border-white/10 pt-16 pb-8">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                            <div className="h-8 w-8 bg-white rounded-sm flex items-center justify-center">
                                <div className="h-4 w-4 bg-black rounded-sm" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold tracking-wide text-white leading-none">EMERGING WEB</span>
                                <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase leading-none">Solutions</span>
                            </div>
                        </Link>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mt-2">
                            Premium web development agency for Indian businesses. We build first, you pay later.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {navigation.social.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 w-10 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Services</h3>
                        <ul className="space-y-4">
                            {navigation.services.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Company</h3>
                        <ul className="space-y-4">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span className="h-1 w-1 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3 text-slate-400 text-sm">
                                <MapPin className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                                <span>
                                    G D complex, opp. R T C,<br />
                                    A B M Compound, bustand,<br />
                                    Kavali, Andhra Pradesh 524201
                                </span>
                            </li>
                            <li>
                                <a href="tel:8688440114" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                                    <Phone className="h-5 w-5 text-blue-500 shrink-0" />
                                    8688440114
                                </a>
                            </li>
                            <li>
                                <a href="mailto:emergingwebsolutions@gmail.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors text-sm">
                                    <Mail className="h-5 w-5 text-blue-500 shrink-0" />
                                    emergingwebsolutions@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        &copy; {new Date().getFullYear()} Emerging Web Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
