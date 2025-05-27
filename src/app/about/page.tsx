"use client"

import { MainLayout } from "@/components/templates/MainLayout"
import { Typography } from "@/components/atoms/Typography"
import { FeatureSection } from "@/components/organisms/FeatureSection"
import { StepsSection } from "@/components/organisms/StepsSection"
import { SectionLayout } from "@/components/templates/SectionLayout"
import { motion } from "framer-motion"

export default function AboutPage() {
  const daoFeatures = [
    {
      title: "分散型意思決定",
      description: "中央管理者に依存しない、メンバー主導の意思決定システム。投票とコンセンサスで組織の方向性を決定します。",
      icon: "Vote" as const,
    },
    {
      title: "透明性の確保",
      description: "すべての意思決定プロセス、資金の流れ、活動内容がブロックチェーン上で公開され、誰でも確認可能です。",
      icon: "Eye" as const,
    },
    {
      title: "自動化されたガバナンス",
      description: "スマートコントラクトにより、ルールと手続きが自動化され、人為的エラーや不正のリスクを最小限に抑えます。",
      icon: "Settings" as const,
    },
    {
      title: "グローバル参加",
      description: "地理的、文化的制約なく、世界中の誰でも参加可能。コミュニティの多様性がイノベーションを促進します。",
      icon: "Globe" as const,
    },
    {
      title: "トークンエコノミー",
      description: "貢献に応じてトークンを配布し、メンバーのモチベーションと持続的参加を促進する経済システム。",
      icon: "Coins" as const,
    },
    {
      title: "コミュニティガバナンス",
      description: "メンバー自身がルールを策定・変更できる、適応的で柔軟な組織運営システムで継続的成長を実現します。",
      icon: "Users" as const,
    },
  ]

  const setupSteps = [
    {
      number: 1,
      title: "コンセプト設計・ビジョン策定",
      description: "DAOの目的、ミッション、価値観を明確に定義し、コミュニティと共有できるビジョンを策定します。どのような社会問題を解決し、どのような価値を提供するかを明確にします。",
    },
    {
      number: 2,
      title: "ガバナンスモデル構築",
      description: "意思決定の方法、投票システム、経済モデルを設計します。メンバーの権利と責任、貢献に対する報酬システム、紛争解決のメカニズムなどを具体的に定めます。",
    },
    {
      number: 3,
      title: "技術インフラ構築",
      description: "スマートコントラクトの開発、ブロックチェーンの選定、ウォレットやDAppの構築を行います。セキュリティ、スケーラビリティ、ユーザビリティを重視した設計です。",
    },
    {
      number: 4,
      title: "コミュニティ形成・ローンチ",
      description: "初期メンバーの募集、コミュニティガイドラインの策定、オンボーディングプロセスの確立を行います。活発で健全なコミュニティを育成し、持続的な成長の土台を作ります。",
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
              DAOについて
            </Typography>
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl font-bold mb-6"
              gradient
            >
              分散型自律組織（DAO）とは
            </Typography>
            <Typography
              variant="lead"
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              DAO（Decentralized Autonomous Organization）は、中央管理者のいない分散型組織です。
              ブロックチェーン技術を基盤とし、メンバーが直接意思決定に参加し、
              透明性と民主性を実現する新しい組織形態です。
            </Typography>
          </motion.div>
        </div>
      </SectionLayout>

      {/* DAO Features */}
      <FeatureSection
        id="dao-features"
        subtitle="DAOの特徴"
        title="従来の組織との違い"
        description="DAOは従来の中央集権的な組織とは根本的に異なる特徴を持ちます。これらの特徴により、より民主的で透明性の高い、持続可能な組織運営を実現します。"
        features={daoFeatures}
      />

      {/* What makes 100万人DAO special */}
      <SectionLayout background="alt" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
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
                100万人DAOの特徴
              </Typography>
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-bold mb-8"
                gradient
              >
                なぜ100万人なのか？
              </Typography>
              
              <div className="space-y-6 text-left">
                <div className="bg-white/5 rounded-lg p-6 glass-card">
                  <Typography variant="h4" className="gradient-text mb-3">
                    クリティカルマスの達成
                  </Typography>
                  <Typography variant="p" className="text-muted-foreground leading-relaxed">
                    100万人という規模は、社会に実質的な影響を与えるためのクリティカルマスです。
                    この規模に達することで、既存のシステムを変革し、新しい社会モデルを提示することが可能になります。
                  </Typography>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 glass-card">
                  <Typography variant="h4" className="gradient-text mb-3">
                    多様性と代表性
                  </Typography>
                  <Typography variant="p" className="text-muted-foreground leading-relaxed">
                    100万人という多様なコミュニティでは、異なる背景、スキル、文化を持つメンバーが集まります。
                    この多様性がイノベーションを促進し、より包括的で持続可能なソリューションを生み出します。
                  </Typography>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 glass-card">
                  <Typography variant="h4" className="gradient-text mb-3">
                    ネットワーク効果の最大化
                  </Typography>
                  <Typography variant="p" className="text-muted-foreground leading-relaxed">
                    大規模なネットワークは、情報の流通、リソースの最適配分、協力の機会を指数関数的に増加させます。
                    これにより、個々のメンバーだけでは達成不可能な大きな目標を実現できます。
                  </Typography>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionLayout>

      {/* DAO Setup Steps */}
      <StepsSection
        id="setup-steps"
        subtitle="設立プロセス"
        title="DAO設立の4ステップ"
        description="100万人DAOの設立は、体系的かつ段階的なアプローチで進められます。各ステップでは、コミュニティの意見を取り入れながら、持続可能で適応性のあるDAOを構築していきます。"
        steps={setupSteps}
      />
    </MainLayout>
  )
}
