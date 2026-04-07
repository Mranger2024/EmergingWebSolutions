"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function ModeToggle() {
    const { mode, setMode } = useTheme()

    const toggleMode = () => {
        setMode(mode === "light" ? "dark" : "light")
    }

    return (
        <Button 
            variant="ghost" 
            size="icon" 
            className="h-9 w-9 rounded-full bg-background/50 hover:bg-muted/80 border border-border/40 transition-transform active:scale-90"
            onClick={toggleMode}
        >
            <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
