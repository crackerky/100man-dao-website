"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const typographyVariants = cva(
  "text-foreground",
  {
    variants: {
      variant: {
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
        h4: "scroll-m-20 text-xl font-semibold tracking-tight",
        h5: "scroll-m-20 text-lg font-semibold tracking-tight",
        h6: "scroll-m-20 text-base font-semibold tracking-tight",
        p: "leading-7 [&:not(:first-child)]:mt-6",
        lead: "text-xl text-muted-foreground",
        large: "text-lg font-semibold",
        small: "text-sm font-medium leading-none",
        muted: "text-sm text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "p",
    },
  }
)

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  gradient?: boolean
  isAnimated?: boolean
  animationDelay?: number
  as?: keyof JSX.IntrinsicElements
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, gradient = false, isAnimated = false, animationDelay = 0, as, children, ...props }, ref) => {
    const Component = (as || (variant?.startsWith('h') ? variant : 'p')) as keyof JSX.IntrinsicElements
    
    const content = React.createElement(
      Component,
      {
        className: cn(
          typographyVariants({ variant }),
          gradient && "gradient-text",
          className
        ),
        ref: ref as any,
        ...props
      },
      children
    )

    if (isAnimated) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: animationDelay }}
        >
          {content}
        </motion.div>
      )
    }

    return content
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
