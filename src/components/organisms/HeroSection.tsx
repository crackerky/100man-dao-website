"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"
import { Button } from "@/components/atoms/Button"
import { Triangle } from "@/components/atoms/Triangle"
import { AnimatedCounter } from "@/components/molecules/AnimatedCounter"
import { cn } from "@/lib/utils"

export interface HeroSectionProps {
  className?: string
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  ({ className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative min-h-screen flex items-center justify-center overflow-hidden",
          className
        )}
      >
        {/* Background decorations */}
        <Triangle
          variant="top-right"
          size="xl"
          isAnimated
          animationDelay={0.5}
        />
        <Triangle
          variant="bottom-left"
          size="lg"
          isAnimated
          animationDelay={0.8}
        />
        
        {/* Floating triangles */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 triangle-decoration bg-secondary/30"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute top-1/3 right-1/3 w-12 h-12 triangle-decoration bg-accent/30"
          animate={{
            y: [0, 15, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="container mx-auto px-4 text-center z-10">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              gradient
            >
              １００万人DAO
            </Typography>
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="lead"
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            >
              遊休資産価値化プロジェクト<br />
              DAOの理念とエコシステムで新しい社会システムを構築
            </Typography>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button variant="gradient" size="lg" className="text-lg px-8">
              今すぐ参加する
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              詳細を見る
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <AnimatedCounter end={1000000} suffix="人" />
              <Typography variant="small" className="text-muted-foreground mt-2">
                目標参加者数
              </Typography>
            </div>
            <div className="text-center">
              <AnimatedCounter end={50} suffix="+" />
              <Typography variant="small" className="text-muted-foreground mt-2">
                パートナー企業
              </Typography>
            </div>
            <div className="text-center">
              <AnimatedCounter end={10} suffix="億円" />
              <Typography variant="small" className="text-muted-foreground mt-2">
                資産価値化目標
              </Typography>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>
    )
  }
)
HeroSection.displayName = "HeroSection"

export { HeroSection }
