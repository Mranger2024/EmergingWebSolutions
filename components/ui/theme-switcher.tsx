"use client"

import * as React from "react"
import { Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeSwitcher() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                    <Palette className="h-4 w-4" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("gold")}>
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <span>Gold (Default)</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("blue")}>
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-blue-600" />
                        <span>Professional Blue</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("rose")}>
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-rose-600" />
                        <span>Vibrant Rose</span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("green")}>
                    <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-emerald-600" />
                        <span>Growth Green</span>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
