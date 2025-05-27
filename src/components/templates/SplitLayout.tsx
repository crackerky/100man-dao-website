"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const splitVariants = cva(
  "grid gap-8 items-center",
  {
    variants: {
      ratio: {
        "50-50": "lg:grid-cols-2",
        "60-40": "lg:grid-cols-[3fr_2fr]",
        "70-30": "lg:grid-cols-[7fr_3fr]",
      },
      verticalAlign: {
        top: "items-start",
        center: "items-center",
        bottom: "items-end",
      },
      reverse: {
        true: "lg:grid-flow-col-dense [&>:first-child]:lg:col-start-2",
        false: "",
      },
    },
    defaultVariants: {
      ratio: "50-50",
      verticalAlign: "center",
      reverse: false,
    },
  }
)

export interface SplitLayoutProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof splitVariants> {
  children: React.ReactNode
}

const SplitLayout = React.forwardRef<HTMLDivElement, SplitLayoutProps>(
  ({ children, className, ratio, verticalAlign, reverse, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(splitVariants({ ratio, verticalAlign, reverse, className }))}
        {...props}
      >
        {children}
      </div>
    )
  }
)
SplitLayout.displayName = "SplitLayout"

export { SplitLayout, splitVariants }
