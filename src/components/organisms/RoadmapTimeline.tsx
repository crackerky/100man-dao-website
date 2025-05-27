"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"
import { TimelineItem } from "@/components/molecules/TimelineItem"
import { Triangle } from "@/components/atoms/Triangle"
import { cn } from "@/lib/utils"

export interface RoadmapTimelineProps {
  className?: string
  title: string
  subtitle: string
  description: string
  timelineItems: {
    date: string
    title: string
    description: string
    isActive?: boolean
    isCompleted?: boolean
  }[]
  id?: string
}

const RoadmapTimeline = React.forwardRef<HTMLElement, RoadmapTimelineProps>(
  ({ className, title, subtitle, description, timelineItems, id }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "relative py-24 overflow-hidden",
          className
        )}
      >
        {/* Background decorations */}
        <Triangle
          variant="bottom-left"
          size="xl"
          color="rgba(0, 204, 102, 0.1)"
          className="opacity-40"
        />
        
        <motion.div
          className="absolute top-1/2 right-1/4 w-20 h-20 triangle-decoration bg-primary/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="small"
                className="text-accent uppercase tracking-wider font-semibold mb-4"
              >
                {subtitle}
              </Typography>
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-bold mb-6"
                gradient
              >
                {title}
              </Typography>
              <Typography
                variant="lead"
                className="text-muted-foreground leading-relaxed"
              >
                {description}
              </Typography>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Main timeline line */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 2, delay: 0.3 }}
                viewport={{ once: true }}
                className="absolute left-8 top-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-60"
              />
              
              {/* Timeline items */}
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <TimelineItem
                    key={index}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    isActive={item.isActive}
                    isCompleted={item.isCompleted}
                    isAnimated
                    animationDelay={index * 0.2}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
)
RoadmapTimeline.displayName = "RoadmapTimeline"

export { RoadmapTimeline }
