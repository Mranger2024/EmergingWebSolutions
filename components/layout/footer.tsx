import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const navigation = {
    main: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Process", href: "/process" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ],
    social: [
        {
            name: "Facebook",
            href: "#",
            icon: (props: any) => <Facebook {...props} />,
        },
        {
            name: "Instagram",
            href: "#",
            icon: (props: any) => <Instagram {...props} />,
        },
        {
            name: "Twitter",
            href: "#",
            icon: (props: any) => <Twitter {...props} />,
        },
        {
            name: "LinkedIn",
            href: "#",
            icon: (props: any) => <Linkedin {...props} />,
        },
    ],
}

export function Footer() {
    return (
        <footer className="bg-muted/30 border-t">
            <div className="container px-4 md:px-6 py-12 mx-auto overflow-hidden sm:py-16 lg:px-8">
                <nav
                    className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
                    aria-label="Footer"
                >
                    {navigation.main.map((item) => (
                        <div key={item.name} className="pb-6">
                            <Link
                                href={item.href}
                                className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {navigation.social.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </Link>
                    ))}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
                    &copy; {new Date().getFullYear()} Web Solutions. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
