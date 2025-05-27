"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const logoVariants = cva(
  "font-bold flex items-center gap-2",
  {
    variants: {
      variant: {
        default: "text-foreground",
        white: "text-white",
      },
      size: {
        sm: "text-lg",
        md: "text-xl",
        lg: "text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface LogoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof logoVariants> {
  isAnimated?: boolean
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, variant, size, isAnimated = false, ...props }, ref) => {
    const content = (
      <div
        ref={ref}
        className={cn(logoVariants({ variant, size, className }))}
        {...props}
      >
        <div className="relative">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-white triangle-decoration"></div>
          </div>
        </div>
        <span className="gradient-text font-extrabold">１００万人DAO</span>
      </div>
    )

    if (isAnimated) {
      return (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content}
        </motion.div>
      )
    }

    return content
  }
)
Logo.displayName = "Logo"

export { Logo, logoVariants }
