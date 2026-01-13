"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { ThemeSwitcher } from "@/components/ui/theme-switcher"
import { ModeToggle } from "@/components/ui/mode-toggle"

const navigation = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/portfolio" },
    { name: "Agency", href: "/about" },
    { name: "Contact", href: "/contact" },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md ">
            <div className="container flex h-20 items-center justify-between px-4 md:px-6 mx-auto">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                        <div className="h-8 w-8 bg-white rounded-sm flex items-center justify-center">
                            <div className="h-4 w-4 bg-black rounded-sm" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold tracking-wide text-white leading-none">EMERGING WEB</span>
                            <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase leading-none">Solutions</span>
                        </div>
                    </Link>
                </div>
                <div className="hidden lg:flex lg:gap-x-10">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium leading-6 text-slate-300 hover:text-white transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4 items-center">
                    <ThemeSwitcher />
                    <ModeToggle />
                    <Button asChild className="rounded-full bg-primary hover:bg-primary/90 text-white px-6">
                        <Link href="/contact">Contact</Link>
                    </Button>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300"
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
                    <div className="fixed inset-0 z-50" />
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#020617] px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                                <div className="h-8 w-8 bg-white rounded-sm flex items-center justify-center">
                                    <div className="h-4 w-4 bg-black rounded-sm" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-lg font-bold tracking-wide text-white leading-none">EMERGING WEB</span>
                                    <span className="text-[10px] tracking-[0.2em] text-slate-400 uppercase leading-none">Solutions</span>
                                </div>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-slate-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <X className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-white/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-4">
                                    <Button asChild className="w-full rounded-full bg-primary hover:bg-primary/90 text-white">
                                        <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                            Contact
                                        </Link>
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
