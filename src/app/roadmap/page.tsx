"use client"

import { MainLayout } from "@/components/templates/MainLayout"
import { Typography } from "@/components/atoms/Typography"
import { RoadmapTimeline } from "@/components/organisms/RoadmapTimeline"
import { SectionLayout } from "@/components/templates/SectionLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card"
import { Badge } from "@/components/atoms/Badge"
import { motion } from "framer-motion"

export default function RoadmapPage() {
  const detailedRoadmap = [
    {
      date: "2024 Q1",
      title: "DAO設立・初期コミュニティ構築",
      description: "コアチーム結成、コンセプト策定、初期メンバー募集を実施。DAOの基本的なガバナンス構造とルールを確立し、コミュニティの価値観と文化を形成します。初期参加者との信頼関係を築き、今後の成長の基盤を作ります。",
      isCompleted: true,
      milestones: [
        "コアチーム10名の結成",
        "DAO憲章とガバナンスルールの策定",
        "初期コミュニティ100名の獲得",
        "公式ウェブサイトとSNSの開設",
      ],
    },
    {
      date: "2024 Q2",
      title: "プラットフォーム開発・パイロットプロジェクト",
      description: "DAO運営用プラットフォームの開発、最初の資産価値化パイロットプロジェクトを実行。技術基盤を構築し、実際の価値創造プロセスを検証します。メンバー数を100人に拡大し、活発なコミュニティを形成します。",
      isCompleted: true,
      milestones: [
        "DAO運営プラットフォームβ版リリース",
        "第1回パイロットプロジェクト実施",
        "メンバー数100名達成",
        "初回ガバナンストークン配布",
      ],
    },
    {
      date: "2024 Q3",
      title: "コミュニティ拡大・パートナーシップ構築",
      description: "コミュニティを1,000人に拡大し、企業パートナーとの連携を開始。実用的な資産価値化プロジェクトを展開し、DAOの社会的影響力を拡大します。多様なステークホルダーとの協力関係を構築します。",
      isActive: true,
      milestones: [
        "メンバー数1,000名達成",
        "企業パートナー5社との提携",
        "資産価値化プロジェクト3件実施",
        "地域コミュニティとの連携開始",
      ],
    },
    {
      date: "2024 Q4",
      title: "グローバル展開・技術革新",
      description: "国際的な展開を開始し、AIやIoTなどの最新技術を統合。メンバー数を10,000人に拡大し、より大規模で影響力のあるプロジェクトを実行します。技術革新と社会的インパクトの両立を図ります。",
      isActive: false,
      milestones: [
        "メンバー数10,000名達成",
        "海外展開（3カ国）開始",
        "AI統合プラットフォーム実装",
        "大規模資産価値化プロジェクト開始",
      ],
    },
    {
      date: "2025 Q1-Q2",
      title: "エコシステム本格運用",
      description: "完成したエコシステムで本格的な資産価値化を開始。多種多様なプロジェクトを同時並行で進め、持続可能な価値創造サイクルを確立します。コミュニティの自律性と持続可能性を実現します。",
      isActive: false,
      milestones: [
        "メンバー数50,000名達成",
        "同時進行プロジェクト50件",
        "自律的運営システム確立",
        "サステナビリティ指標達成",
      ],
    },
    {
      date: "2025 Q3-Q4",
      title: "100万人コミュニティ達成",
      description: "目標である100万人のコミュニティを達成。グローバルな影響力を持つDAOとして、社会変革をリードします。持続可能な社会システムのモデルケースとして、世界的な注目を集めます。",
      isActive: false,
      milestones: [
        "メンバー数1,000,000名達成",
        "グローバル影響力の確立",
        "社会システム変革の実現",
        "持続可能性モデルの確立",
      ],
    },
  ]

  const kpis = [
    {
      category: "コミュニティ成長",
      metrics: [
        { label: "メンバー数", current: "1,000+", target: "1,000,000", progress: 0.1 },
        { label: "アクティブ率", current: "75%", target: "80%", progress: 93.75 },
        { label: "定着率", current: "85%", target: "90%", progress: 94.4 },
      ],
    },
    {
      category: "プロジェクト実績",
      metrics: [
        { label: "完了プロジェクト", current: "3", target: "1,000", progress: 0.3 },
        { label: "価値創造額", current: "500万円", target: "100億円", progress: 0.05 },
        { label: "パートナー企業", current: "5", target: "500", progress: 1 },
      ],
    },
    {
      category: "技術・イノベーション",
      metrics: [
        { label: "プラットフォーム機能", current: "15", target: "100", progress: 15 },
        { label: "AI統合度", current: "30%", target: "95%", progress: 31.6 },
        { label: "自動化率", current: "40%", target: "85%", progress: 47.1 },
      ],
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
              ロードマップ
            </Typography>
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl font-bold mb-6"
              gradient
            >
              100万人コミュニティへの道のり
            </Typography>
            <Typography
              variant="lead"
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              100万人DAOの野心的な目標達成までの明確で実現可能なロードマップです。
              各フェーズでの具体的なマイルストーン、KPI、達成目標を詳細に定め、
              透明性の高い進捗管理と継続的な改善を通じて着実な成長を目指します。
            </Typography>
          </motion.div>
        </div>
      </SectionLayout>

      {/* Detailed Timeline */}
      <RoadmapTimeline
        id="detailed-roadmap"
        subtitle="詳細プロジェクトタイムライン"
        title="段階的成長戦略"
        description="100万人DAOは段階的なアプローチで成長します。各フェーズで明確な目標と成果指標を設定し、コミュニティと共に着実に前進していきます。"
        timelineItems={detailedRoadmap}
      />

      {/* Milestones Detail */}
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
                マイルストーン詳細
              </Typography>
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-bold mb-8"
                gradient
              >
                各フェーズの具体的な成果目標
              </Typography>
            </motion.div>
          </div>

          <div className="space-y-8">
            {detailedRoadmap.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge 
                        variant={phase.isCompleted ? "secondary" : phase.isActive ? "default" : "outline"}
                      >
                        {phase.isCompleted ? "完了" : phase.isActive ? "進行中" : "予定"}
                      </Badge>
                      <Typography variant="small" className="text-muted-foreground">
                        {phase.date}
                      </Typography>
                    </div>
                    <CardTitle className="text-2xl gradient-text">
                      {phase.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <Typography variant="p" className="text-muted-foreground mb-6 leading-relaxed">
                      {phase.description}
                    </Typography>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {phase.milestones.map((milestone, milestoneIndex) => (
                        <div key={milestoneIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                          <Typography variant="small" className="text-foreground">
                            {milestone}
                          </Typography>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* KPIs */}
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
                成果指標（KPI）
              </Typography>
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-bold mb-8"
                gradient
              >
                現在の進捗と目標
              </Typography>
              <Typography
                variant="p"
                className="text-muted-foreground leading-relaxed"
              >
                100万人DAOの成長を定量的に測定し、透明性の高い進捗報告を行います。
                コミュニティの成長、プロジェクトの実績、技術的革新の各領域で明確な指標を設定しています。
              </Typography>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {kpis.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <Card variant="glass" className="p-6 h-full">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-xl gradient-text text-center">
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-6">
                    {category.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <Typography variant="small" className="font-medium">
                            {metric.label}
                          </Typography>
                          <Typography variant="small" className="text-muted-foreground">
                            {metric.current} / {metric.target}
                          </Typography>
                        </div>
                        
                        <div className="w-full bg-muted rounded-full h-2">
                          <motion.div
                            className="h-2 rounded-full bg-gradient-to-r from-primary via-secondary to-accent"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.min(metric.progress, 100)}%` }}
                            transition={{ duration: 1.5, delay: metricIndex * 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        
                        <Typography variant="small" className="text-right text-muted-foreground">
                          {Math.min(metric.progress, 100).toFixed(1)}%
                        </Typography>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionLayout>
    </MainLayout>
  )
}
