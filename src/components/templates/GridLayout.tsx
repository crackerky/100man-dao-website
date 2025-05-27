"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const gridVariants = cva(
  "grid",
  {
    variants: {
      columns: {
        1: "grid-cols-1",
        2: "grid-cols-1 md:grid-cols-2",
        3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
        4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
      },
      gap: {
        sm: "gap-4",
        md: "gap-6",
        lg: "gap-8",
      },
    },
    defaultVariants: {
      columns: 1,
      gap: "md",
    },
  }
)

export interface GridLayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof gridVariants> {
  children: React.ReactNode
}

const GridLayout = React.forwardRef<HTMLDivElement, GridLayoutProps>(
  ({ children, className, columns, gap, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(gridVariants({ columns, gap, className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GridLayout.displayName = "GridLayout"

export { GridLayout, gridVariants }
