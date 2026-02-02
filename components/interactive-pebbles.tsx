"use client"

import { useEffect, useRef } from "react"

interface Particle {
    x: number
    y: number
    originX: number
    originY: number
    color: string
    size: number
    vx: number
    vy: number
    ease: number
}

export function InteractivePebbles() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let particleArray: Particle[] = []
        let animationFrameId: number

        // Mouse state
        const mouse = {
            x: -1000,
            y: -1000,
            radius: 40 // Reduced Interaction radius
        }

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect()
            mouse.x = event.clientX - rect.left
            mouse.y = event.clientY - rect.top
        }

        // Resize and Init
        const init = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            particleArray = []

            const numberOfParticles = 150 // Optimized for performance

            for (let i = 0; i < numberOfParticles; i++) {
                const size = Math.random() * 3 + 1
                const x = Math.random() * canvas.width
                const y = Math.random() * canvas.height
                // Orange shades
                const opacity = Math.random() * 0.5 + 0.3
                const color = `rgba(255, ${Math.floor(Math.random() * 100 + 50)}, 0, ${opacity})`

                particleArray.push({
                    x,
                    y,
                    originX: x,
                    originY: y,
                    color,
                    size,
                    vx: 0,
                    vy: 0,
                    ease: Math.random() * 0.1 + 0.05 // Individual ease factor
                })
            }
        }

        const update = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            for (let i = 0; i < particleArray.length; i++) {
                const p = particleArray[i]

                // Calculate distance from mouse
                const dx = mouse.x - p.x
                const dy = mouse.y - p.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                const forceDirectionX = dx / distance
                const forceDirectionY = dy / distance

                // Physics: Repel if close
                const maxDistance = 100
                let force = 0

                if (distance < maxDistance) {
                    force = (maxDistance - distance) / maxDistance
                    // Push away stronger to feel "harder"
                    const repulsionStrength = 50
                    p.vx -= forceDirectionX * force * repulsionStrength
                    p.vy -= forceDirectionY * force * repulsionStrength
                }

                // Return to origin (much slower to avoid "rubber band" feel)
                const returnSpeed = 0.008
                p.vx += (p.originX - p.x) * returnSpeed
                p.vy += (p.originY - p.y) * returnSpeed

                // Higher friction (slide and stop, don't wiggle)
                const friction = 0.90
                p.vx *= friction
                p.vy *= friction

                // Update position
                p.x += p.vx
                p.y += p.vy

                // Draw
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = p.color
                ctx.fill()
            }

            animationFrameId = requestAnimationFrame(update)
        }

        init()
        update()

        window.addEventListener("resize", init)
        window.addEventListener("mousemove", handleMouseMove)

        return () => {
            window.removeEventListener("resize", init)
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 -z-10 h-full w-full bg-white" // White background behind pebbles
        />
    )
}
