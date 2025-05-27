"use client"

import * as React from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"
import { cn } from "@/lib/utils"

export interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

const AnimatedCounter = React.forwardRef<HTMLDivElement, AnimatedCounterProps>(
  ({ end, duration = 2, prefix = "", suffix = "", className, ...props }, ref) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const displayValue = useTransform(rounded, (latest) => `${prefix}${latest.toLocaleString()}${suffix}`)

    React.useEffect(() => {
      const controls = animate(count, end, { duration })
      return controls.stop
    }, [count, end, duration])

    return (
      <div
        ref={ref}
        className={cn("text-center", className)}
        {...props}
      >
        <Typography variant="h2" className="gradient-text font-bold">
          <motion.span>{displayValue}</motion.span>
        </Typography>
      </div>
    )
  }
)
AnimatedCounter.displayName = "AnimatedCounter"

export { AnimatedCounter }
