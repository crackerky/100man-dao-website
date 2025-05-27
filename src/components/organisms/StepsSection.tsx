"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"
import { StepItem } from "@/components/molecules/StepItem"
import { Triangle } from "@/components/atoms/Triangle"
import { cn } from "@/lib/utils"

export interface StepsSectionProps {
  className?: string
  title: string
  subtitle: string
  description: string
  steps: {
    number: number
    title: string
    description: string
  }[]
  id?: string
}

const StepsSection = React.forwardRef<HTMLElement, StepsSectionProps>(
  ({ className, title, subtitle, description, steps, id }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "relative py-24 bg-gradient-to-br from-slate-900/50 to-blue-900/30",
          className
        )}
      >
        {/* Background decorations */}
        <Triangle
          variant="top-right"
          size="xl"
          color="rgba(255, 102, 0, 0.1)"
          className="opacity-30"
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
                className="text-secondary uppercase tracking-wider font-semibold mb-4"
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

          {/* Steps */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <StepItem
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  isAnimated
                  animationDelay={index * 0.2}
                />
              ))}
            </div>
          </div>

          {/* Connection Lines */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute left-1/2 transform -translate-x-1/2 top-1/2 w-px h-96 bg-gradient-to-b from-primary via-secondary to-accent opacity-30 -z-10"
          />
        </div>
      </section>
    )
  }
)
StepsSection.displayName = "StepsSection"

export { StepsSection }
