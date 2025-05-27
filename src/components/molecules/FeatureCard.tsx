"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card"
import { Icon } from "@/components/atoms/Icon"
import { Typography } from "@/components/atoms/Typography"
import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"

export interface FeatureCardProps {
  title: string
  description: string
  icon?: keyof typeof LucideIcons
  className?: string
  isAnimated?: boolean
  animationDelay?: number
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ title, description, icon, className, isAnimated = false, animationDelay = 0, ...props }, ref) => {
    const content = (
      <Card
        ref={ref}
        variant="glass"
        className={cn("p-6 hover:bg-white/10 transition-all duration-300", className)}
        {...props}
      >
        <CardHeader className="p-0 mb-4">
          <div className="flex items-center gap-3">
            {icon && (
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name={icon} className="w-6 h-6 text-white" />
              </div>
            )}
            <CardTitle className="text-xl gradient-text">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Typography variant="p" className="text-muted-foreground leading-relaxed">
            {description}
          </Typography>
        </CardContent>
      </Card>
    )

    if (isAnimated) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: animationDelay }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          {content}
        </motion.div>
      )
    }

    return content
  }
)
FeatureCard.displayName = "FeatureCard"

export { FeatureCard }
