"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const triangleVariants = cva(
  "absolute",
  {
    variants: {
      variant: {
        default: "triangle-decoration bg-primary/20",
        "top-right": "top-0 right-0 triangle-decoration bg-secondary/20",
        "bottom-left": "bottom-0 left-0 triangle-decoration bg-accent/20 rotate-180",
        "bottom-right": "bottom-0 right-0 triangle-decoration bg-primary/20 rotate-90",
      },
      size: {
        sm: "w-16 h-16",
        md: "w-24 h-24",
        lg: "w-32 h-32",
        xl: "w-48 h-48",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface TriangleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof triangleVariants> {
  color?: string
  isAnimated?: boolean
  animationDelay?: number
}

const Triangle = React.forwardRef<HTMLDivElement, TriangleProps>(
  ({ className, variant, size, color, isAnimated = false, animationDelay = 0, style, ...props }, ref) => {
    const triangleStyle = {
      ...style,
      ...(color && { backgroundColor: color }),
    }

    const content = (
      <div
        className={cn(triangleVariants({ variant, size, className }))}
        style={triangleStyle}
        ref={ref}
        {...props}
      />
    )

    if (isAnimated) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: animationDelay,
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="absolute"
        >
          {content}
        </motion.div>
      )
    }

    return content
  }
)
Triangle.displayName = "Triangle"

export { Triangle, triangleVariants }
