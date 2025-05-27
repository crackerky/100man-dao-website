"use client"

import { MainLayout } from "@/components/templates/MainLayout"
import { Typography } from "@/components/atoms/Typography"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card"
import { Button } from "@/components/atoms/Button"
import { Input } from "@/components/atoms/Input"
import { SocialLink } from "@/components/molecules/SocialLink"
import { SectionLayout } from "@/components/templates/SectionLayout"
import { Icon } from "@/components/atoms/Icon"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
        inquiryType: "",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: "Mail" as const,
      title: "メール",
      description: "一般的なお問い合わせ",
      contact: "contact@100man-dao.com",
      action: "mailto:contact@100man-dao.com",
    },
    {
      icon: "MessageCircle" as const,
      title: "Discord",
      description: "リアルタイムでのチャットサポート",
      contact: "discord.gg/100man-dao",
      action: "https://discord.gg/100man-dao",
    },
    {
      icon: "Phone" as const,
      title: "電話",
      description: "緊急時のお問い合わせ",
      contact: "+81-3-1234-5678",
      action: "tel:+81-3-1234-5678",
    },
    {
      icon: "MapPin" as const,
      title: "住所",
      description: "物理的なオフィス所在地",
      contact: "東京都渋谷区神宮前　1-1-1",
      action: "https://maps.google.com",
    },
  ]

  const inquiryTypes = [
    { value: "general", label: "一般的なお問い合わせ" },
    { value: "partnership", label: "パートナーシップについて" },
    { value: "investment", label: "投資・資金調達" },
    { value: "media", label: "メディア・取材" },
    { value: "technical", label: "技術的な問い合わせ" },
    { value: "join", label: "コミュニティ参加" },
    { value: "other", label: "その他" },
  ]

  const faqs = [
    {
      question: "100万人DAOに参加するにはどうすればいいですか？",
      answer: "はじめにDiscordコミュニティに参加し、自己紹介を行ってください。オンボーディングプロセスを通じて、コミュニティの一員として歓迎します。",
    },
    {
      question: "パートナーシップの機会はありますか？",
      answer: "はい、企業、研究機関、他のDAO組織とのパートナーシップを積極的に探しています。パートナーシップに関するお問い合わせフォームからご連絡ください。",
    },
    {
      question: "投資や資金調達について教えてください。",
      answer: "100万人DAOは投資家やスポンサーからの資金提供を歓迎しています。詳細な投資情報や資金調達に関する資料については、専用のお問い合わせフォームからご連絡ください。",
    },
    {
      question: "メディア取材やインタビューは可能ですか？",
      answer: "はい、メディアの方々からの取材依頼を歓迎しています。代表者のインタビュー、プレスリリース、資料提供などに対応します。メディア用のお問い合わせフォームよりご連絡ください。",
    },
  ]

  return (
    <MainLayout>
      {/* Hero Section */}
      <SectionLayout className="py-24 min-h-[60vh] flex items-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="small"
              className="text-primary uppercase tracking-wider font-semibold mb-4"
            >
              お問い合わせ
            </Typography>
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl font-bold mb-6"
              gradient
            >
              いつでもお気軽にご連絡ください
            </Typography>
            <Typography
              variant="lead"
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              100万人DAOに関するご質問、パートナーシップのご提案、
              コミュニティ参加のご相談など、どんなことでもお気軽にお声がけください。
              私たちのチームが迅速かつ丁寧に対応させていただきます。
            </Typography>
          </motion.div>
        </div>
      </SectionLayout>

      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card variant="glass" className="p-8">
              <CardHeader className="p-0 mb-8">
                <CardTitle className="text-2xl gradient-text mb-4">
                  お問い合わせフォーム
                </CardTitle>
                <Typography variant="p" className="text-muted-foreground">
                  下記フォームに必要事項をご記入いただき、送信ボタンをクリックしてください。
                  24時間以内に担当者より返信いたします。
                </Typography>
              </CardHeader>

              <CardContent className="p-0">
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircle" className="w-5 h-5" />
                      <Typography variant="p">
                        お問い合わせありがとうございました。担当者より連絡いたします。
                      </Typography>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400"
                  >
                    <div className="flex items-center gap-3">
                      <Icon name="AlertCircle" className="w-5 h-5" />
                      <Typography variant="p">
                        送信に失敗しました。時間をおいて再度お試しください。
                      </Typography>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        お名前 <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="山田 太郎"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        メールアドレス <span className="text-red-400">*</span>
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-2">
                      組織・会社名
                    </label>
                    <Input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="株式会社例"
                    />
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium mb-2">
                      お問い合わせ種別 <span className="text-red-400">*</span>
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    >
                      <option value="">選択してください</option>
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      件名 <span className="text-red-400">*</span>
                    </label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="お問い合わせの件名"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      メッセージ <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      placeholder="ご質問やご意見をご記入ください"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-vertical"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "送信中..." : "送信する"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <Card variant="glass" className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl gradient-text">
                  連絡方法
                </CardTitle>
                <Typography variant="p" className="text-muted-foreground">
                  お急ぎの場合や直接お話したい場合は、以下の連絡方法をご利用ください。
                </Typography>
              </CardHeader>
              
              <CardContent className="p-0 space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.action}
                    target={method.action.startsWith("http") ? "_blank" : undefined}
                    rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg glass-card hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon name={method.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <Typography variant="h6" className="gradient-text mb-1">
                        {method.title}
                      </Typography>
                      <Typography variant="small" className="text-muted-foreground mb-1">
                        {method.description}
                      </Typography>
                      <Typography variant="small" className="text-foreground font-medium">
                        {method.contact}
                      </Typography>
                    </div>
                  </motion.a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card variant="glass" className="p-8">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl gradient-text">
                  ソーシャルメディア
                </CardTitle>
                <Typography variant="p" className="text-muted-foreground">
                  コミュニティの最新情報や日常的なやり取りは、ソーシャルメディアでもご参加いただけます。
                </Typography>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-4">
                  <SocialLink platform="discord" href="#" size="lg" showLabel isAnimated animationDelay={0.1} />
                  <SocialLink platform="twitter" href="#" size="lg" showLabel isAnimated animationDelay={0.2} />
                  <SocialLink platform="telegram" href="#" size="lg" showLabel isAnimated animationDelay={0.3} />
                  <SocialLink platform="github" href="#" size="lg" showLabel isAnimated animationDelay={0.4} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <SectionLayout background="alt" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center">
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
                  よくある質問
                </Typography>
                <Typography
                  variant="h2"
                  className="text-4xl md:text-5xl font-bold mb-8"
                  gradient
                >
                  FAQ
                </Typography>
                <Typography
                  variant="p"
                  className="text-muted-foreground leading-relaxed"
                >
                  100万人DAOに関してよくいただくご質問とその回答をまとめました。
                  こちらにない内容については、お気軽にお問い合わせください。
                </Typography>
              </motion.div>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant="glass" className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-lg gradient-text flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold mt-1">
                          Q
                        </span>
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="p-0">
                      <Typography variant="p" className="text-muted-foreground leading-relaxed pl-9">
                        {faq.answer}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionLayout>
    </MainLayout>
  )
}
