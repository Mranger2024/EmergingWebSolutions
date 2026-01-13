"use client"

import * as React from "react"

type Theme = "gold" | "blue" | "rose" | "green"
type Mode = "light" | "dark" | "system"

type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: Theme
    defaultMode?: Mode
    storageKey?: string
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
    mode: Mode
    setMode: (mode: Mode) => void
}

const initialState: ThemeProviderState = {
    theme: "gold",
    setTheme: () => null,
    mode: "system",
    setMode: () => null,
}

const ThemeProviderContext = React.createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
    children,
    defaultTheme = "gold",
    defaultMode = "system",
    storageKey = "vite-ui-theme",
    ...props
}: ThemeProviderProps) {
    const [theme, setTheme] = React.useState<Theme>(defaultTheme)
    const [mode, setMode] = React.useState<Mode>(defaultMode)

    React.useEffect(() => {
        const savedTheme = localStorage.getItem(`${storageKey}-color`) as Theme | null
        if (savedTheme) {
            setTheme(savedTheme)
        }

        const savedMode = localStorage.getItem(`${storageKey}-mode`) as Mode | null
        if (savedMode) {
            setMode(savedMode)
        }
    }, [storageKey])

    React.useEffect(() => {
        const root = window.document.documentElement
        root.setAttribute("data-theme", theme)
        localStorage.setItem(`${storageKey}-color`, theme)
    }, [theme, storageKey])

    React.useEffect(() => {
        const root = window.document.documentElement
        root.classList.remove("light", "dark")

        if (mode === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"

            root.classList.add(systemTheme)
            return
        }

        root.classList.add(mode)
        localStorage.setItem(`${storageKey}-mode`, mode)
    }, [mode, storageKey])

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            setTheme(theme)
        },
        mode,
        setMode: (mode: Mode) => {
            setMode(mode)
        },
    }

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    const context = React.useContext(ThemeProviderContext)

    if (context === undefined)
        throw new Error("useTheme must be used within a ThemeProvider")

    return context
}
