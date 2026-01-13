"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/components/theme-provider"

export function ParticlesCursor() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const { theme } = useTheme()

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true })
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        let mouseX = 0
        let mouseY = 0
        let lastX = 0
        let lastY = 0
        let lastTime = 0
        const throttleDelay = 16 // ~60fps throttling

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener("resize", resizeCanvas)
        resizeCanvas()

        class Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            color: string
            life: number

            constructor(x: number, y: number, color: string) {
                this.x = x
                this.y = y
                this.size = Math.random() * 2 + 0.5 // Reduced size
                this.speedX = (Math.random() - 0.5) * 1.5 // Reduced speed
                this.speedY = (Math.random() - 0.5) * 1.5
                this.color = color
                this.life = 1.0
            }

            update() {
                this.x += this.speedX
                this.y += this.speedY
                if (this.size > 0.1) this.size -= 0.08 // Faster decay
                this.life -= 0.03 // Faster fade
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = this.color
                ctx.globalAlpha = this.life
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
                ctx.globalAlpha = 1.0
            }
        }

        const getThemeColor = () => {
            const style = getComputedStyle(document.documentElement)
            return style.getPropertyValue("--theme-primary").trim() || "#4f46e5"
        }

        const handleMouseMove = (e: MouseEvent) => {
            const currentTime = Date.now()

            // Throttle particle generation
            if (currentTime - lastTime < throttleDelay) return
            lastTime = currentTime

            mouseX = e.clientX
            mouseY = e.clientY

            const dx = mouseX - lastX
            const dy = mouseY - lastY
            const distance = Math.sqrt(dx * dx + dy * dy)
            const threshold = 5 // Increased threshold to reduce particles

            if (distance > threshold) {
                const color = getThemeColor()

                // Reduced particle generation - only 1 particle per movement
                const steps = Math.max(1, Math.ceil(distance / 15)) // Fewer steps

                for (let i = 0; i < steps; i++) {
                    const t = i / steps
                    const x = lastX + dx * t
                    const y = lastY + dy * t

                    // Single optimized trail
                    particles.push(new Particle(x, y, color))
                }

                lastX = mouseX
                lastY = mouseY
            }
        }

        window.addEventListener("mousemove", handleMouseMove, { passive: true })

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Limit max particles for performance
            if (particles.length > 150) {
                particles = particles.slice(-150)
            }

            for (let i = 0; i < particles.length; i++) {
                particles[i].update()
                particles[i].draw()

                if (particles[i].life <= 0 || particles[i].size <= 0.1) {
                    particles.splice(i, 1)
                    i--
                }
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [theme])

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none absolute inset-0 z-0"
            style={{ width: "100%", height: "100%", willChange: "transform" }}
        />
    )
}
