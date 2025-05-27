"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/atoms/Button"
import { Icon } from "@/components/atoms/Icon"
import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"

const socialIcons = {
  twitter: "Twitter" as keyof typeof LucideIcons,
  discord: "MessageCircle" as keyof typeof LucideIcons,
  github: "Github" as keyof typeof LucideIcons,
  telegram: "MessageSquare" as keyof typeof LucideIcons,
}

export interface SocialLinkProps {
  platform: keyof typeof socialIcons
  href: string
  size?: "sm" | "md" | "lg"
  showLabel?: boolean
  className?: string
  isAnimated?: boolean
  animationDelay?: number
}

const SocialLink = React.forwardRef<HTMLAnchorElement, SocialLinkProps>(
  ({ platform, href, size = "md", showLabel = false, className, isAnimated = false, animationDelay = 0, ...props }, ref) => {
    const iconName = socialIcons[platform]
    const label = platform.charAt(0).toUpperCase() + platform.slice(1)

    const sizeStyles = {
      sm: { button: "h-8 w-8", icon: "w-4 h-4" },
      md: { button: "h-10 w-10", icon: "w-5 h-5" },
      lg: { button: "h-12 w-12", icon: "w-6 h-6" },
    }

    const content = (
      <Link
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("inline-block", className)}
        {...props}
      >
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "rounded-full glass-card hover:bg-white/20 transition-all duration-300",
            sizeStyles[size].button
          )}
        >
          <Icon name={iconName} className={sizeStyles[size].icon} />
          {showLabel && <span className="sr-only">{label}</span>}
        </Button>
        {showLabel && (
          <span className="ml-2 text-sm font-medium">{label}</span>
        )}
      </Link>
    )

    if (isAnimated) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: animationDelay }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {content}
        </motion.div>
      )
    }

    return content
  }
)
SocialLink.displayName = "SocialLink"

export { SocialLink }
