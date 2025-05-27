"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"
import { Badge } from "@/components/atoms/Badge"
import { cn } from "@/lib/utils"

export interface TimelineItemProps {
  date: string
  title: string
  description: string
  isActive?: boolean
  isCompleted?: boolean
  className?: string
  isAnimated?: boolean
  animationDelay?: number
}

const TimelineItem = React.forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ date, title, description, isActive = false, isCompleted = false, className, isAnimated = false, animationDelay = 0, ...props }, ref) => {
    const content = (
      <div
        ref={ref}
        className={cn("relative flex gap-6 pb-8", className)}
        {...props}
      >
        {/* タイムライン線 */}
        <div className="flex flex-col items-center">
          <div
            className={cn(
              "w-4 h-4 rounded-full border-2 z-10",
              isCompleted
                ? "bg-accent border-accent"
                : isActive
                ? "bg-primary border-primary pulse-glow"
                : "bg-background border-muted"
            )}
          />
          <div className="w-0.5 h-full bg-muted mt-2" />
        </div>

        {/* コンテンツ */}
        <div className="flex-1 pb-8">
          <div className="flex items-center gap-3 mb-2">
            <Typography variant="small" className="text-muted-foreground">
              {date}
            </Typography>
            {isActive && (
              <Badge variant="default">進行中</Badge>
            )}
            {isCompleted && (
              <Badge variant="secondary">完了</Badge>
            )}
          </div>
          <Typography variant="h4" className="mb-3 gradient-text">
            {title}
          </Typography>
          <Typography variant="p" className="text-muted-foreground leading-relaxed">
            {description}
          </Typography>
        </div>
      </div>
    )

    if (isAnimated) {
      return (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: animationDelay }}
        >
          {content}
        </motion.div>
      )
    }

    return content
  }
)
TimelineItem.displayName = "TimelineItem"

export { TimelineItem }
