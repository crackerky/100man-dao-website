"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"

const iconVariants = cva(
  "inline-block",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
        xl: "w-8 h-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

export interface IconProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof iconVariants> {
  name: keyof typeof LucideIcons
}

const Icon = React.forwardRef<HTMLElement, IconProps>(
  ({ className, size, name, ...props }, ref) => {
    const IconComponent = LucideIcons[name] as React.ComponentType<any>
    
    if (!IconComponent) {
      console.warn(`Icon "${name}" not found in lucide-react`)
      return null
    }

    return (
      <IconComponent
        ref={ref}
        className={cn(iconVariants({ size, className }))}
        {...props}
      />
    )
  }
)
Icon.displayName = "Icon"

export { Icon, iconVariants }
