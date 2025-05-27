"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const sectionVariants = cva(
  "relative",
  {
    variants: {
      background: {
        default: "bg-transparent",
        alt: "bg-gradient-to-br from-slate-900/50 to-blue-900/30",
        gradient: "bg-gradient-to-br from-blue-900/30 to-slate-900/50",
      },
    },
    defaultVariants: {
      background: "default",
    },
  }
)

export interface SectionLayoutProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {
  children: React.ReactNode
}

const SectionLayout = React.forwardRef<HTMLElement, SectionLayoutProps>(
  ({ children, className, background, id, ...props }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(sectionVariants({ background, className }))}
        {...props}
      >
        {children}
      </section>
    )
  }
)
SectionLayout.displayName = "SectionLayout"

export { SectionLayout, sectionVariants }
