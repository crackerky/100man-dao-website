"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const dividerVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "h-px bg-border",
        gradient: "h-px bg-gradient-to-r from-transparent via-border to-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface DividerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {
  isAnimated?: boolean
  animationDelay?: number
}

const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
  ({ className, variant, isAnimated = false, animationDelay = 0, ...props }, ref) => {
    const content = (
      <div
        ref={ref}
        className={cn(dividerVariants({ variant, className }))}
        {...props}
      />
    )

    if (isAnimated) {
      return (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: animationDelay }}
          className="w-full"
        >
          {content}
        </motion.div>
      )
    }

    return content
  }
)
Divider.displayName = "Divider"

export { Divider, dividerVariants }
