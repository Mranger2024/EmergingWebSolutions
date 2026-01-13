"use client"

import { Heart } from "lucide-react"

export function MadeInIndiaBadge() {
    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md border border-white/20 shadow-lg transition-all hover:scale-105 hover:bg-white/20">
            <span>Made with</span>
            <Heart className="h-3 w-3 fill-red-500 text-red-500 animate-pulse" />
            <span>in</span>
            <span className="bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent font-bold">
                India
            </span>
        </div>
    )
}
