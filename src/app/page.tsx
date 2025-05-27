"use client"

import { MainLayout } from "@/components/templates/MainLayout"
import { HeroSection } from "@/components/organisms/HeroSection"
import { FeatureSection } from "@/components/organisms/FeatureSection"
import { StepsSection } from "@/components/organisms/StepsSection"
import { RoadmapTimeline } from "@/components/organisms/RoadmapTimeline"
import { CommunitySection } from "@/components/organisms/CommunitySection"

export default function HomePage() {
  const daoFeatures = [
    {
      title: "分散型意思決定",
      description: "中央管理者のいない組織で、メンバーが直接意思決定に参加できます。透明性と民主的な運営を実現します。",
      icon: "Users" as const,
    },
    {
      title: "スマートコントラクト",
      description: "ブロックチェーン技術を活用し、自動化されたルールとガバナンスで組織を運営します。",
      icon: "Code" as const,
    },
    {
      title: "グローバルアクセス",
      description: "世界中の誰でも、地理的制約なく参加できるオープンなコミュニティを構築します。",
      icon: "Globe" as const,
    },
    {
      title: "資産価値化",
      description: "遊休資産を有効活用し、新しい価値を生み出すエコシステムを構築します。",
      icon: "TrendingUp" as const,
    },
    {
      title: "持続可能性",
      description: "環境と社会に配慮した持続可能なビジネスモデルで長期的な成長を目指します。",
      icon: "Leaf" as const,
    },
    {
      title: "イノベーション",
      description: "最新技術と革新的なアプローチで、社会問題を解決する新しい方法を探求します。",
      icon: "Lightbulb" as const,
    },
  ]

  const ecosystemSteps = [
    {
      number: 1,
      title: "コミュニティ形成",
      description: "志を同じくするメンバーを集め、強固なコミュニティの基盤を構築します。多様なバックグラウンドを持つ参加者が、それぞれの専門知識を持ち寄ります。",
    },
    {
      number: 2,
      title: "ガバナンス設計",
      description: "民主的で透明性の高い意思決定プロセスを設計します。スマートコントラクトと投票システムで、公正かつ効率的なガバナンスを実現します。",
    },
    {
      number: 3,
      title: "資産発掘・評価",
      description: "コミュニティ内の遊休資産を体系的に発掘・評価します。AIとビッグデータを活用して、潜在的な価値を持つ資産を特定します。",
    },
    {
      number: 4,
      title: "価値化プロジェクト実行",
      description: "発掘した資産を実際に価値化するプロジェクトを実行します。技術革新、ビジネスモデル開発、社会影響を考慮した総合的アプローチで進めます。",
    },
  ]

  const roadmapItems = [
    {
      date: "2024 Q1",
      title: "DAO設立・初期コミュニティ構築",
      description: "コアチーム結成、コンセプト策定、初期メンバー募集を実施。DAOの基本的なガバナンス構造とルールを確立します。",
      isCompleted: true,
    },
    {
      date: "2024 Q2",
      title: "プラットフォーム開発・パイロットプロジェクト",
      description: "DAO運営用プラットフォームの開発、最初の資産価値化パイロットプロジェクトを実行。メンバー数を100人に拡大します。",
      isCompleted: true,
    },
    {
      date: "2024 Q3",
      title: "コミュニティ拡大・パートナーシップ構築",
      description: "コミュニティを１，０００人に拡大。企業パートナーとの連携を開始し、実用的な資産価値化プロジェクトを展開します。",
      isActive: true,
    },
    {
      date: "2024 Q4",
      title: "グローバル展開・技術革新",
      description: "国際的な展開を開始し、AIやIoTなどの最新技術を統合。メンバー数を１０，０００人に拡大します。",
      isActive: false,
    },
    {
      date: "2025 Q1-Q2",
      title: "エコシステム本格運用",
      description: "完成したエコシステムで本格的な資産価値化を開始。多種多様なプロジェクトを同時並行で進めます。",
      isActive: false,
    },
    {
      date: "2025 Q3-Q4",
      title: "100万人コミュニティ達成",
      description: "目標である100万人のコミュニティを達成。グローバルな影響力を持つDAOとして、社会変革をリードします。",
      isActive: false,
    },
  ]

  return (
    <MainLayout>
      <HeroSection />
      
      <FeatureSection
        id="features"
        subtitle="DAOの特徴"
        title="新しい社会システムの構築"
        description="100万人DAOは、分散型自律組織（DAO）の理念を基盤とし、遊休資産の価値化を通じて新しい経済エコシステムを構築します。民主的で透明性の高い組織運営で、持続可能な社会を実現します。"
        features={daoFeatures}
      />
      
      <StepsSection
        id="steps"
        subtitle="構築プロセス"
        title="エコシステム構築の4ステップ"
        description="100万人DAOは、体系的なアプローチでエコシステムを構築します。コミュニティ形成から始まり、最終的には持続可能な価値創造システムを実現します。"
        steps={ecosystemSteps}
      />
      
      <RoadmapTimeline
        id="roadmap"
        subtitle="プロジェクトロードマップ"
        title="100万人コミュニティへの道のり"
        description="私たちの野心ある目標である100万人コミュニティ達成までの明確なロードマップです。各フェーズでの具体的なマイルストーンと達成目標を明確に定め、着実な成長を目指します。"
        timelineItems={roadmapItems}
      />
      
      <CommunitySection id="community" />
    </MainLayout>
  )
}
