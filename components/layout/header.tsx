"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { motion } from "framer-motion"

import { ThemeSwitcher } from "@/components/ui/theme-switcher"
import { ModeToggle } from "@/components/ui/mode-toggle"

const navigation = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/portfolio" },
    { name: "Agency", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Affiliate", href: "/affiliate" },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
    const [scrollProgress, setScrollProgress] = React.useState(0)

    React.useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight
            const currentScroll = window.scrollY
            setScrollProgress((currentScroll / totalScroll) * 100)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className="sticky top-0 z-50 w-full bg-background/60 dark:bg-slate-950/80 backdrop-blur-[20px] border-b border-border/40 shadow-sm transition-all duration-500">
            {/* Scroll Progress Bar */}
            <div className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-150 ease-out z-[60]" style={{ width: `${scrollProgress}%` }} />
            
            <div className="container flex h-20 md:h-24 items-center justify-between px-4 md:px-6 mx-auto relative z-[50]">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-4 group transition-transform hover:scale-[1.02] active:scale-95 origin-left">
                        <div className="relative h-12 w-12 flex items-center justify-center">
                            {/* Logo Pulse Effect */}
                            <motion.div 
                                className="absolute inset-0 bg-primary/10 rounded-full blur-xl"
                                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <img 
                                src="/logo-abstract.png" 
                                alt="Emerging Web Solutions Logo" 
                                className="h-10 w-10 relative z-10 drop-shadow-2xl group-hover:rotate-[15deg] transition-transform duration-700" 
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter text-foreground leading-none group-hover:text-primary transition-colors">EMERGING WEB</span>
                            <span className="text-[9px] tracking-[0.4em] font-black text-muted-foreground uppercase leading-none mt-1.5 group-hover:tracking-[0.5em] transition-all">Solutions</span>
                        </div>
                    </Link>
                </div>

                <nav className="hidden lg:flex items-center gap-x-2 relative group-menu" onMouseLeave={() => setHoveredIndex(null)}>
                    {navigation.map((item, idx) => (
                        <li key={item.name} className="list-none relative px-4 py-2">
                            <Link
                                href={item.href}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                className={cn(
                                    "relative z-10 text-[10px] font-black tracking-[0.2em] uppercase transition-colors duration-300",
                                    hoveredIndex === idx ? "text-primary" : "text-muted-foreground/60"
                                )}
                            >
                                {item.name}
                            </Link>

                            {hoveredIndex === idx && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 z-0 bg-primary/[0.08] dark:bg-primary/[0.12] rounded-full border border-primary/20 backdrop-blur-sm"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                        </li>
                    ))}
                </nav>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6 items-center">
                    <div className="flex items-center gap-2 bg-muted/50 p-1.5 rounded-full border border-border/50">
                        <ThemeSwitcher />
                        <ModeToggle />
                    </div>
                    <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                        <Link href="/contact">Get Started</Link>
                    </Button>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-foreground transition-colors hover:bg-muted"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border shadow-2xl">
                        <div className="flex items-center justify-between mb-12">
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                                <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                                    <div className="h-5 w-5 bg-primary-foreground rounded-lg" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-black tracking-tight text-foreground leading-none">EMERGING WEB</span>
                                    <span className="text-[10px] tracking-[0.3em] font-bold text-muted-foreground uppercase leading-none mt-1">Solutions</span>
                                </div>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-foreground hover:bg-muted transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-border">
                                <div className="space-y-4 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-xl px-4 py-4 text-lg font-bold text-foreground hover:bg-muted transition-all active:scale-98"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-8 space-y-6">
                                    <div className="flex items-center justify-between px-3">
                                        <span className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Theme Options</span>
                                        <div className="flex gap-2">
                                            <ThemeSwitcher />
                                            <ModeToggle />
                                        </div>
                                    </div>
                                    <Button asChild className="w-full h-14 text-lg font-bold rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20" onClick={() => setMobileMenuOpen(false)}>
                                        <Link href="/contact">Get Started Now</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
