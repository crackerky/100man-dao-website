"use client"

import { MainLayout } from "@/components/templates/MainLayout"
import { Typography } from "@/components/atoms/Typography"
import { StepsSection } from "@/components/organisms/StepsSection"
import { FeatureSection } from "@/components/organisms/FeatureSection"
import { SectionLayout } from "@/components/templates/SectionLayout"
import { motion } from "framer-motion"

export default function EcosystemPage() {
  const ecosystemSteps = [
    {
      number: 1,
      title: "コミュニティ形成・メンバー募集",
      description: "多様なバックグラウンドを持つメンバーを募集し、強固なコミュニティ基盤を構築します。起業家、技術者、研究者、社会変革家などが集まり、それぞれの専門知識と経験を持ち寄ります。共通のビジョンと価値観を共有し、相互信頼と協力の精神を育みます。",
    },
    {
      number: 2,
      title: "ガバナンス設計・意思決定システム構築",
      description: "民主的で透明性の高い意思決定プロセスを設計します。ブロックチェーン技術を活用したスマートコントラクトと投票システムで、公正かつ効率的なガバナンスを実現します。メンバーの意見が正しく反映され、誰でも情報にアクセスできるシステムを構築します。",
    },
    {
      number: 3,
      title: "資産発掘・評価システム構築",
      description: "コミュニティ内の遊休資産を体系的に発掘・評価するシステムを構築します。AI、4IoT、ビッグデータ分析を活用して、潜在的な価値を持つ資産を特定します。物理的資産だけでなく、知的資産、スキル、ネットワークなどの無形資産も対象とします。",
    },
    {
      number: 4,
      title: "価値化プロジェクト実行・成果還元",
      description: "発掘した資産を実際に価値化するプロジェクトを実行します。技術革新、ビジネスモデル開発、社会影響を考慮した総合的アプローチで進めます。創出された価値はコミュニティに還元され、持続可能な成長サイクルを実現します。",
    },
  ]

  const assetTypes = [
    {
      title: "物理的資産",
      description: "不動産、車両、機械、在庫などの有形資産を有効活用し、シェアリングエコノミーや新しい価値創造モデルを構築します。",
      icon: "Building" as const,
    },
    {
      title: "知的資産",
      description: "特許、ノウハウ、データ、アルゴリズムなどの知的資産を活用し、オープンイノベーションや協力的研究開発を促進します。",
      icon: "Lightbulb" as const,
    },
    {
      title: "ヒューマンキャピタル",
      description: "メンバーのスキル、経験、ネットワークを最大限に活用し、コラボレーションや相互支援のシステムを構築します。",
      icon: "Users" as const,
    },
    {
      title: "デジタル資産",
      description: "データ、コンテンツ、プラットフォームなどのデジタル資産を活用し、新しいビジネスモデルやサービスを開発します。",
      icon: "Smartphone" as const,
    },
    {
      title: "社会関係資本",
      description: "コミュニティの絆、信頼関係、文化的資源を活用し、持続可能な社会インパクトを生み出すプロジェクトを実行します。",
      icon: "Heart" as const,
    },
    {
      title: "環境資産",
      description: "自然環境、再生可能エネルギー、循環資源などを活用し、環境に優しい持続可能なソリューションを開発します。",
      icon: "Leaf" as const,
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
              エコシステム
            </Typography>
            <Typography
              variant="h1"
              className="text-4xl md:text-6xl font-bold mb-6"
              gradient
            >
              遊休資産価値化エコシステム
            </Typography>
            <Typography
              variant="lead"
              className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            >
              100万人DAOは、コミュニティ内に眠る未活用の資産を発掘し、
              新しい価値を生み出す持続可能なエコシステムを構築します。
              技術、人材、知識、環境などの多様な資産を統合し、
              全体最適を実現する革新的なアプローチです。
            </Typography>
          </motion.div>
        </div>
      </SectionLayout>

      {/* Ecosystem Steps */}
      <StepsSection
        id="ecosystem-steps"
        subtitle="構築プロセス"
        title="エコシステム構築の4ステップ"
        description="100万人DAOのエコシステムは、体系的かつ段階的なアプローチで構築されます。各ステップでは、コミュニティの参加と協力を得ながら、持続可能な価値創造システムを段階的に実現していきます。"
        steps={ecosystemSteps}
      />

      {/* Asset Types */}
      <FeatureSection
        id="asset-types"
        subtitle="資産の種類"
        title="多様な資産の価値化"
        description="100万人DAOは、物理的資産から無形資産まで、あらゆる種類の遊休資産を対象とします。各資産の特性と潜在能力を理解し、最適な価値化アプローチを採用します。"
        features={assetTypes}
      />

      {/* Value Creation Process */}
      <SectionLayout background="alt" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
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
                価値創造プロセス
              </Typography>
              <Typography
                variant="h2"
                className="text-4xl md:text-5xl font-bold mb-8"
                gradient
              >
                持続可能な価値創造サイクル
              </Typography>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "発掘・評価",
                description: "AIとビッグデータを活用した系統的な資産発掘と価値評価",
              },
              {
                step: "02",
                title: "マッチング",
                description: "資産とニーズ、リソースと機会の最適なマッチング",
              },
              {
                step: "03",
                title: "開発・実行",
                description: "コミュニティ主導のプロジェクト開発と実装",
              },
              {
                step: "04",
                title: "価値分配",
                description: "公正な価値分配とステークホルダーへの還元",
              },
              {
                step: "05",
                title: "フィードバック",
                description: "継続的な改善と最適化のためのフィードバック収集",
              },
              {
                step: "06",
                title: "再投資",
                description: "創出された価値の一部を新たなプロジェクトに再投資",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-lg p-6 glass-card hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <Typography variant="h4" className="gradient-text mb-3">
                    {item.title}
                  </Typography>
                  <Typography variant="p" className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </Typography>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionLayout>
    </MainLayout>
  )
}
