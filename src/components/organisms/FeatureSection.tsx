"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"
import { FeatureCard } from "@/components/molecules/FeatureCard"
import { Triangle } from "@/components/atoms/Triangle"
import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"

export interface FeatureSectionProps {
  className?: string
  title: string
  subtitle: string
  description: string
  features: {
    title: string
    description: string
    icon?: keyof typeof LucideIcons
  }[]
  id?: string
}

const FeatureSection = React.forwardRef<HTMLElement, FeatureSectionProps>(
  ({ className, title, subtitle, description, features, id }, ref) => {
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
          variant="bottom-right"
          size="lg"
          color="rgba(0, 102, 204, 0.1)"
          className="opacity-50"
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
                className="text-primary uppercase tracking-wider font-semibold mb-4"
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

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                isAnimated
                animationDelay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>
    )
  }
)
FeatureSection.displayName = "FeatureSection"

export { FeatureSection }
