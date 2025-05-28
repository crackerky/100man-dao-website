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
  extends Omit<React.HTMLAttributes<HTMLElement>, 'as'>,
    VariantProps<typeof typographyVariants> {
  gradient?: boolean
  isAnimated?: boolean
  animationDelay?: number
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, gradient = false, isAnimated = false, animationDelay = 0, as, children, ...props }, ref) => {
    const baseClassName = cn(
      typographyVariants({ variant }),
      gradient && "gradient-text",
      className
    )

    const renderContent = () => {
      // Use explicit 'as' prop first with type-safe casting
      if (as) {
        const elementProps = {
          className: baseClassName,
          ref: ref as React.Ref<any>,
          ...props
        }

        switch (as) {
          case 'h1':
            return React.createElement('h1', elementProps, children)
          case 'h2':
            return React.createElement('h2', elementProps, children)
          case 'h3':
            return React.createElement('h3', elementProps, children)
          case 'h4':
            return React.createElement('h4', elementProps, children)
          case 'h5':
            return React.createElement('h5', elementProps, children)
          case 'h6':
            return React.createElement('h6', elementProps, children)
          case 'p':
            return React.createElement('p', elementProps, children)
          case 'span':
            return React.createElement('span', elementProps, children)
          case 'div':
            return React.createElement('div', elementProps, children)
          default:
            return React.createElement('p', elementProps, children)
        }
      }

      // Otherwise use variant-specific elements with explicit JSX
      const elementProps = {
        className: baseClassName,
        ref: ref as React.Ref<any>,
        ...props
      }

      switch (variant) {
        case 'h1':
          return React.createElement('h1', elementProps, children)
        case 'h2':
          return React.createElement('h2', elementProps, children)
        case 'h3':
          return React.createElement('h3', elementProps, children)
        case 'h4':
          return React.createElement('h4', elementProps, children)
        case 'h5':
          return React.createElement('h5', elementProps, children)
        case 'h6':
          return React.createElement('h6', elementProps, children)
        case 'small':
          return React.createElement('span', elementProps, children)
        case 'lead':
        case 'large':
        case 'muted':
        case 'p':
        default:
          return React.createElement('p', elementProps, children)
      }
    }

    const content = renderContent()

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
