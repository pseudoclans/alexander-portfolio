"use client"

import type { ReactNode } from "react"
import { useScrollReveal } from "@/hooks/useScrollReveal"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
  duration?: number
  threshold?: number
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 600,
  threshold = 0.1,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold })

  const getTransformClasses = () => {
    const baseClasses = "transition-all ease-out"
    const durationClass = `duration-${duration}`

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
        case "down":
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`
        case "left":
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`
        case "right":
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`
        case "fade":
          return `${baseClasses} ${durationClass} opacity-0`
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`
      }
    }

    return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0`
  }

  return (
    <div ref={ref} className={`${getTransformClasses()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
