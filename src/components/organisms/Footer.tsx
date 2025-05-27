"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Typography } from "@/components/atoms/Typography"
import { Logo } from "@/components/atoms/Logo"
import { Button } from "@/components/atoms/Button"
import { Input } from "@/components/atoms/Input"
import { SocialLink } from "@/components/molecules/SocialLink"
import { Divider } from "@/components/atoms/Divider"
import { Triangle } from "@/components/atoms/Triangle"
import { cn } from "@/lib/utils"

export interface FooterProps {
  className?: string
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className }, ref) => {
    const [email, setEmail] = React.useState("")

    const handleNewsletterSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // Handle newsletter subscription
      console.log("Newsletter subscription:", email)
      setEmail("")
    }

    const footerLinks = {
      dao: {
        title: "DAOについて",
        links: [
          { label: "DAOとは", href: "/about#what-is-dao" },
          { label: "特徴", href: "/about#features" },
          { label: "設立ステップ", href: "/about#setup" },
          { label: "FAQ", href: "/about#faq" },
        ],
      },
      ecosystem: {
        title: "エコシステム",
        links: [
          { label: "構築ステップ", href: "/ecosystem#steps" },
          { label: "価値化プロセス", href: "/ecosystem#process" },
          { label: "パートナー", href: "/ecosystem#partners" },
          { label: "成果", href: "/ecosystem#results" },
        ],
      },
      community: {
        title: "コミュニティ",
        links: [
          { label: "参加方法", href: "/community#join" },
          { label: "イベント", href: "/community#events" },
          { label: "リソース", href: "/community#resources" },
          { label: "サポート", href: "/community#support" },
        ],
      },
      support: {
        title: "サポート",
        links: [
          { label: "お問い合わせ", href: "/contact" },
          { label: "プライバシーポリシー", href: "/privacy" },
          { label: "利用規約", href: "/terms" },
          { label: "ヘルプ", href: "/help" },
        ],
      },
    }

    return (
      <footer
        ref={ref}
        className={cn(
          "relative bg-gradient-to-br from-slate-900 to-blue-900 overflow-hidden",
          className
        )}
      >
        {/* Background decorations */}
        <Triangle
          variant="top-right"
          size="xl"
          color="rgba(0, 102, 204, 0.1)"
          className="opacity-50"
        />
        <Triangle
          variant="bottom-left"
          size="lg"
          color="rgba(255, 102, 0, 0.1)"
          className="opacity-30"
        />
        
        <div className="container mx-auto px-4 pt-16 pb-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Logo size="lg" className="mb-4" />
                <Typography
                  variant="p"
                  className="text-muted-foreground mb-6 leading-relaxed max-w-sm"
                >
                  遊休資産価値化プロジェクトで、
                  DAOの理念とエコシステムで新しい社会システムを構築します。
                </Typography>
                
                {/* Social Links */}
                <div className="flex gap-3">
                  <SocialLink platform="discord" href="#" isAnimated animationDelay={0.1} />
                  <SocialLink platform="twitter" href="#" isAnimated animationDelay={0.2} />
                  <SocialLink platform="telegram" href="#" isAnimated animationDelay={0.3} />
                  <SocialLink platform="github" href="#" isAnimated animationDelay={0.4} />
                </div>
              </motion.div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([key, section], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Typography variant="h6" className="gradient-text mb-4">
                  {section.title}
                </Typography>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="max-w-md mx-auto text-center lg:max-w-2xl">
              <Typography variant="h4" className="gradient-text mb-4">
                最新情報を受け取る
              </Typography>
              <Typography variant="p" className="text-muted-foreground mb-6">
                DAOの最新アップデート、イベント情報、特別な機会をいち早くお届けします。
              </Typography>
              
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="メールアドレスを入力"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" variant="gradient">
                  登録
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Divider */}
          <Divider variant="gradient" className="mb-8" />

          {/* Bottom Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <Typography variant="small" className="text-muted-foreground">
              © 2024 １００万人DAO. All rights reserved.
            </Typography>
            
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                プライバシーポリシー
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                利用規約
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                お問い合わせ
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    )
  }
)
Footer.displayName = "Footer"

export { Footer }
