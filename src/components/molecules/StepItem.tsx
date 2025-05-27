"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"
import { cn } from "@/lib/utils"

export interface StepItemProps {
  number: number
  title: string
  description: string
  isAnimated?: boolean
  animationDelay?: number
  className?: string
}

const StepItem = React.forwardRef<HTMLDivElement, StepItemProps>(
  ({ number, title, description, isAnimated = false, animationDelay = 0, className, ...props }, ref) => {
    const content = (
      <div
        ref={ref}
        className={cn("flex gap-6", className)}
        {...props}
      >
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center text-white font-bold text-lg">
            {number}
          </div>
        </div>
        <div className="flex-1">
          <Typography variant="h4" className="mb-2 gradient-text">
            {title}
          </Typography>
          <Typography variant="p" className="text-muted-foreground leading-relaxed">
            {description}
          </Typography>
        </div>
      </div>
    )

    if (isAnimated) {
      return (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: animationDelay }}
        >
          {content}
        </motion.div>
      )
    }

    return content
  }
)
StepItem.displayName = "StepItem"

export { StepItem }
