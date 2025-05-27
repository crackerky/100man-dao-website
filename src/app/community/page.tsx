"use client"

import { MainLayout } from "@/components/templates/MainLayout"
import { Typography } from "@/components/atoms/Typography"
import { CommunitySection } from "@/components/organisms/CommunitySection"
import { FeatureSection } from "@/components/organisms/FeatureSection"
import { SectionLayout } from "@/components/templates/SectionLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card"
import { Button } from "@/components/atoms/Button"
import { Badge } from "@/components/atoms/Badge"
import { SocialLink } from "@/components/molecules/SocialLink"
import { motion } from "framer-motion"

export default function CommunityPage() {
  const participationBenefits = [
    {
      title: "学習と成長機会",
      description: "DAO、ブロックチェーン、Web3に関する最新知識を学べる豊富な教育リソースと専門家によるワークショップ。初心者から上級者まで、レベルに応じた学習プログラムを提供します。",
      icon: "BookOpen" as const,
    },
    {
      title: "ネットワーキング",
      description: "世界中の同志と繋がり、新しいプロジェクトや協力関係を築く機会。多様なバックグラウンドを持つメンバーとの交流で、視野を広げ、イノベーションを創出します。",
      icon: "Users" as const,
    },
    {
      title: "プロジェクト参加",
      description: "実際の資産価値化プロジェクトに参加し、実践的な経験を積むことができます。アイデア段階から実装まで、プロジェクトのライフサイクル全体に関わることが可能です。",
      icon: "Rocket" as const,
    },
    {
      title: "意思決定への参加",
      description: "DAOの重要な決定に直接参加し、組織の方向性を共に決めることができます。ガバナンストークンによる投票権で、真の民主的組織運営を体験できます。",
      icon: "Vote" as const,
    },
    {
      title: "経済的インセンティブ",
      description: "貢献に応じてトークンリワードを獲得し、プロジェクトの成功による利益分配を受けることができます。持続可能な価値創造に参加することで、経済的恩恵も享受できます。",
      icon: "Coins" as const,
    },
    {
      title: "社会的インパクト",
      description: "遊休資産の価値化を通じて、社会問題の解決に貢献し、持続可能な社会の実現に参加できます。意義のある活動を通じて、社会に対するポジティブな影響を創出します。",
      icon: "Heart" as const,
    },
  ]

  const communityEvents = [
    {
      title: "ウィークリー・コミュニティミーティング",
      schedule: "毎週金曜日 20:00-21:00 JST",
      description: "プロジェクトの進捗報告、新しいアイデアの共有、メンバー同士の交流",
      type: "定期",
    },
    {
      title: "月次ガバナンス投票",
      schedule: "毎月第1週",
      description: "重要な意思決定事項について、全メンバーが参加する民主的な投票",
      type: "定期",
    },
    {
      title: "技術ワークショップ",
      schedule: "隔週土曜日 14:00-16:00 JST",
      description: "ブロックチェーン、AI、IoT等の最新技術に関する実践的な学習セッション",
      type: "定期",
    },
    {
      title: "プロジェクト発表会",
      schedule: "四半期ごと",
      description: "メンバーによる新プロジェクトの提案と、既存プロジェクトの成果発表",
      type: "定期",
    },
    {
      title: "グローバル・DAOサミット",
      schedule: "年1回（次回：2024年12月）",
      description: "世界中のメンバーが集まる大規模なイベント。基調講演、パネルディスカッション、ネットワーキング",
      type: "特別",
    },
    {
      title: "ハッカソン・チャレンジ",
      schedule: "年2回",
      description: "48時間の集中開発イベント。チームを組んで革新的なソリューションを開発",
      type: "特別",
    },
  ]

  const communityGuidelines = [
    {
      title: "尊重と包括性",
      description: "すべてのメンバーを尊重し、多様性を重んじる包括的なコミュニティを維持します。",
    },
    {
      title: "建設的なコミュニケーション",
      description: "建設的で生産的な議論を心がけ、他者の意見に耳を傾ける姿勢を大切にします。",
    },
    {
      title: "協力と共創",
      description: "競争よりも協力を重視し、共に価値を創造する精神を育みます。",
    },
    {
      title: "透明性と説明責任",
      description: "活動の透明性を保ち、コミュニティに対する説明責任を果たします。",
    },
    {
      title: "継続的学習",
      description: "常に学び続ける姿勢を持ち、知識とスキルの向上に努めます。",
    },
    {
      title: "社会的責任",
      description: "持続可能な社会の実現に向けて、責任ある行動を取ります。",
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
              コミュニティ
            </Typography>
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl font-bold mb-6"
              gradient
            >
              グローバルなDAOコミュニティ
            </Typography>
            <Typography
              variant="lead"
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              100万人DAOは、世界中の志を同じくするメンバーが集まる
              活気あふれるコミュニティです。
              多様なバックグラウンドを持つ人々が協力し、
              共に学び、成長し、社会に価値をもたらすプロジェクトを実現しています。
            </Typography>
          </motion.div>
        </div>
      </SectionLayout>

      {/* Participation Benefits */}
      <FeatureSection
        id="participation-benefits"
        subtitle="参加のメリット"
        title="コミュニティ参加で得られること"
        description="100万人DAOのメンバーとして参加することで、学習機会、ネットワーキング、実践的なプロジェクト経験、経済的インセンティブなど、多岐にわたるメリットを享受できます。個人の成長と社会への貢献を同時に実現できる、ユニークなコミュニティです。"
        features={participationBenefits}
      />

      {/* Community Events */}
      <SectionLayout background="alt" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
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
                コミュニティイベント
              </Typography>
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-bold mb-8"
                gradient
              >
                定期イベントと特別企画
              </Typography>
              <Typography
                variant="p"
                className="text-muted-foreground leading-relaxed"
              >
                コミュニティの結束を深め、知識の共有と実践的な学習機会を提供する
                多様なイベントを定期的に開催しています。
              </Typography>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" className="p-6 h-full">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge variant={event.type === "定期" ? "default" : "secondary"}>
                        {event.type}
                      </Badge>
                      <Typography variant="small" className="text-muted-foreground">
                        {event.schedule}
                      </Typography>
                    </div>
                    <CardTitle className="text-lg gradient-text">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <Typography variant="p" className="text-muted-foreground text-sm leading-relaxed">
                      {event.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Community Guidelines */}
      <SectionLayout className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
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
                コミュニティガイドライン
              </Typography>
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-bold mb-8"
                gradient
              >
                共に大切にする価値観
              </Typography>
              <Typography
                variant="p"
                className="text-muted-foreground leading-relaxed"
              >
                100万人DAOコミュニティが健全で生産的な環境を維持するために、
                すべてのメンバーが共有する基本的な価値観とガイドラインです。
              </Typography>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityGuidelines.map((guideline, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" className="p-6 h-full text-center">
                  <CardHeader className="p-0 mb-4">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg gradient-text">
                      {guideline.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <Typography variant="p" className="text-muted-foreground text-sm leading-relaxed">
                      {guideline.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Join Community CTA */}
      <CommunitySection id="join-community" />
    </MainLayout>
  )
}
