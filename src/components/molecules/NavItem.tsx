"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface NavItemProps {
  label: string
  href: string
  isActive?: boolean
  className?: string
}

const NavItem = React.forwardRef<HTMLAnchorElement, NavItemProps>(
  ({ label, href, isActive = false, className, ...props }, ref) => {
    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          ref={ref}
          href={href}
          className={cn(
            "relative px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
            isActive
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground",
            className
          )}
          {...props}
        >
          {label}
          {isActive && (
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent"
              layoutId="activeTab"
              initial={false}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30
              }}
            />
          )}
        </Link>
      </motion.div>
    )
  }
)
NavItem.displayName = "NavItem"

export { NavItem }
