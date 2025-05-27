"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"
import { Button } from "@/components/atoms/Button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card"
import { SocialLink } from "@/components/molecules/SocialLink"
import { Triangle } from "@/components/atoms/Triangle"
import { cn } from "@/lib/utils"

export interface CommunitySectionProps {
  className?: string
  id?: string
}

const CommunitySection = React.forwardRef<HTMLElement, CommunitySectionProps>(
  ({ className, id }, ref) => {
    const communityFeatures = [
      {
        title: "活発なディスカッション",
        description: "24/7アクティブなコミュニティで、最新のDAO動向や技術について議論できます。",
      },
      {
        title: "学習リソース",
        description: "初心者から上級者まで、DAOとブロックチェーンについて学べる豊富なリソースを提供。",
      },
      {
        title: "ネットワーキング",
        description: "同じ志を持つメンバーとつながり、新しいプロジェクトや協力関係を築くことができます。",
      },
      {
        title: "意思決定への参加",
        description: "DAOの重要な決定に参加し、プロジェクトの方向性を共に決めることができます。",
      },
    ]

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "relative py-24 bg-gradient-to-br from-blue-900/30 to-slate-900/50",
          className
        )}
      >
        {/* Background decorations */}
        <Triangle
          variant="top-right"
          size="lg"
          color="rgba(255, 102, 0, 0.15)"
          className="opacity-60"
        />
        
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-16 h-16 triangle-decoration bg-accent/30"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
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
                className="text-secondary uppercase tracking-wider font-semibold mb-4"
              >
                コミュニティ
              </Typography>
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-bold mb-6"
                gradient
              >
                100万人のコミュニティに参加しよう
              </Typography>
              <Typography
                variant="lead"
                className="text-muted-foreground leading-relaxed"
              >
                グローバルなDAO愛好家とつながり、共に未来の分散組織を構築しましょう。
                活発なディスカッション、学習機会、そして意思決定への参加が待っています。
              </Typography>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Community Features */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {communityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card variant="glass" className="h-full p-6">
                      <CardHeader className="p-0 mb-3">
                        <CardTitle className="text-lg gradient-text">
                          {feature.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <Typography
                          variant="small"
                          className="text-muted-foreground leading-relaxed"
                        >
                          {feature.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Join Community */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card variant="glass" className="p-8 text-center">
                <CardHeader className="p-0 mb-6">
                  <Typography variant="h3" className="gradient-text mb-4">
                    今すぐ参加する
                  </Typography>
                  <Typography variant="p" className="text-muted-foreground">
                    お好みのプラットフォームでコミュニティに参加し、
                    DAOの未来を一緒に創造しましょう。
                  </Typography>
                </CardHeader>
                
                <CardContent className="p-0">
                  {/* Social Links */}
                  <div className="flex justify-center gap-4 mb-8">
                    <SocialLink
                      platform="discord"
                      href="#"
                      size="lg"
                      isAnimated
                      animationDelay={0.1}
                    />
                    <SocialLink
                      platform="twitter"
                      href="#"
                      size="lg"
                      isAnimated
                      animationDelay={0.2}
                    />
                    <SocialLink
                      platform="telegram"
                      href="#"
                      size="lg"
                      isAnimated
                      animationDelay={0.3}
                    />
                    <SocialLink
                      platform="github"
                      href="#"
                      size="lg"
                      isAnimated
                      animationDelay={0.4}
                    />
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <Button variant="gradient" size="lg" className="w-full">
                      Discordに参加
                    </Button>
                    <Button variant="outline" size="lg" className="w-full">
                      ニュースレター登録
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    )
  }
)
CommunitySection.displayName = "CommunitySection"

export { CommunitySection }
