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
    const baseClassName = cn(
      typographyVariants({ variant }),
      gradient && "gradient-text",
      className
    )

    const renderContent = () => {
      // Use explicit 'as' prop first
      if (as) {
        const CustomComponent = as
        return (
          <CustomComponent
            className={baseClassName}
            ref={ref as any}
            {...props}
          >
            {children}
          </CustomComponent>
        )
      }

      // Otherwise use variant-specific elements with explicit JSX
      switch (variant) {
        case 'h1':
          return (
            <h1 className={baseClassName} ref={ref as any} {...props}>
              {children}
            </h1>
          )
        case 'h2':
          return (
            <h2 className={baseClassName} ref={ref as any} {...props}>
              {children}
            </h2>
          )
        case 'h3':
          return (
            <h3 className={baseClassName} ref={ref as any} {...props}>
              {children}
            </h3>
          )
        case 'h4':
          return (
            <h4 className={baseClassName} ref={ref as any} {...props}>
              {children}
            </h4>
          )
        case 'h5':
          return (
            <h5 className={baseClassName} ref={ref as any} {...props}>
              {children}
            </h5>
          )
        case 'h6':
          return (
            <h6 className={baseClassName} ref={ref as any} {...props}>
              {children}
            </h6>
          )
        case 'small':
          return (
            <span className={baseClassName} ref={ref as any} {...props}>
              {children}
            </span>
          )
        case 'lead':
        case 'large':
        case 'muted':
        case 'p':
        default:
          return (
            <p className={baseClassName} ref={ref as any} {...props}>
              {children}
            </p>
          )
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
