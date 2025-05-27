"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Navigation } from "@/components/organisms/Navigation"
import { Footer } from "@/components/organisms/Footer"
import { cn } from "@/lib/utils"

export interface MainLayoutProps {
  children: React.ReactNode
  className?: string
}

const MainLayout = React.forwardRef<HTMLDivElement, MainLayoutProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("min-h-screen flex flex-col", className)}
      >
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 pt-16"
        >
          {children}
        </motion.main>
        
        {/* Footer */}
        <Footer />
      </div>
    )
  }
)
MainLayout.displayName = "MainLayout"

export { MainLayout }
