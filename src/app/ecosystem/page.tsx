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
      description: "地域の土地所有者、農業従事者、不動産専門家、地方自治体関係者などが参加。実際の遊休資産情報を持ち寄り、再生可能な物件をデータベース化。現在、全国15都道府県から500名以上が参加し、100件以上の物件情報を収集しています。",
    },
    {
      number: 2,
      title: "ガバナンス設計・意思決定システム構築",
      description: "プロジェクトの選定基準：地域への貢献度、収益性、実現可能性をスコア化。DAO投票により月1回、新規プロジェクトを決定。投資額の配分、工事業者の選定、運営方針まですべてを透明性高く決定。現在までに15プロジェクトが承認され、8件が稼働中です。",
    },
    {
      number: 3,
      title: "資産発掘・評価システム構築",
      description: "衛星画像解析により耕作放棄地を特定、不動産データベースから空き家を抽出。現地調査チームが物件の状態、アクセス、周辺環境を詳細評価。再生コスト、想定収益、地域への影響度を数値化。すでに1,200件の物件を調査し、250件を再生候補として選定しています。",
    },
    {
      number: 4,
      title: "価値化プロジェクト実行・成果還元",
      description: "実際の施工開始から運営まで一貫してDAO が管理。千葉の農地は体験農園として月間500名が利用、京都の古民家は満室稼働で年間売上1,200万円達成。収益の30%を地域に還元、40%を次期プロジェクトへ再投資、30%をDAO参加者に分配する仕組みを確立しています。",
    },
  ]

  const assetTypes = [
    {
      title: "物理的資産",
      description: "耕作放棄圐42万ヘクタール、空き家849万戸、空地、5.4万ヘクタールの山林など。これらを農業体験施設、シェアハウス、キャンプ場、再生可能エネルギー施設へと転換します。",
      icon: "Building" as const,
    },
    {
      title: "地域ノウハウ",
      description: "農業技術、伝統工芸、地域特産品の製造方法など、地域に眠るノウハウをデジタル化・体系化。現在、200件以上の地域固有技術をデータベース化し、プロジェクトに活用しています。",
      icon: "Lightbulb" as const,
    },
    {
      title: "地域人材",
      description: "地元の農家、建築士、デザイナー、エンジニアなどの専門家が参加。プロジェクトごとにチームを編成し、知識と経験を共有。現在2,500名以上の専門家が登録されています。",
      icon: "Users" as const,
    },
    {
      title: "プロジェクトデータ",
      description: "各プロジェクトの進捗、収支、利用者数などのデータをブロックチェーン上に記録。透明性の高い情報公開と、AI分析による次期プロジェクトの最適化に活用しています。",
      icon: "Smartphone" as const,
    },
    {
      title: "地域コミュニティ",
      description: "地元住民、商店街、農協、漁協などとの連携ネットワークを構築。地域イベントの共催、特産品の共同開発、観光ルートの整備などで地域全体の活性化に貢献しています。",
      icon: "Heart" as const,
    },
    {
      title: "自然資源",
      description: "山林、河川、海岸線などの自然資源を活用したエコツーリズム、太陽光発電、小水力発電などを展開。長野の山林プロジェクトでは、CO2吸収量のクレジット化も実現しています。",
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
