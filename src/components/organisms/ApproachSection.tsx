"use client"

import { motion } from "framer-motion"
import { ServiceIcon } from "@/components/molecules/ServiceIcon"

export function ApproachSection() {
  const services = [
    {
      type: "real-estate" as const,
      title: "Real Estate",
      titleJp: "不動産",
      description: `耕作放棄地を農業体験施設や市民農園へ。
空き家をシェアハウスや民泊施設へ。
空地をキャンプ場やイベントスペースへ。
実際の再生事例を通じて、地域に新しい価値を創出します。`
    },
    {
      type: "financial" as const,
      title: "OSS Development",
      titleJp: "OSS開発",
      description: `AIを活用したDAO運営支援ツールを開発。
DAO設立支援botや税務自動化botなどのOSSを提供。
誰でも利用可能で、誰でも開発に参加できる仕組み。
技術の民主化により、DAOへの参加障壁を低減します。`
    },
    {
      type: "digital" as const,
      title: "Digital Assets",
      titleJp: "デジタル資産",
      description: `再生プロジェクトの進捗をNFTで可視化。
貢献度に応じたガバナンストークンを発行。
地域の特産品や体験をデジタル資産として価値化。
メタバース空間での地域PRや仮想観光を展開します。`
    },
    {
      type: "community" as const,
      title: "Community Power",
      titleJp: "コミュニティパワー",
      description: `Discordで週1回のイベントを定期開催。
誰でも入れて、誰でも力になれるオープンなDAO。
地域住民、開発者、専門家が協働する場を提供。
100万人の多様な力で、日本の遊休資産問題を解決へ導きます。`
    }
  ]

  return (
    <section className="px-10 py-[150px] relative">
      {/* Introduction */}
      <motion.div
        className="text-center mb-[150px] backdrop-blur-sm bg-black/20 p-15 rounded-3xl border border-white/[0.03] max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight tracking-[0.05em] mb-15 opacity-90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          We transform idle assets
          <br />
          into valuable community resources.
          <br />
          From abandoned farmland to vacant houses,
          <br />
          we create real value
          <br />
          through concrete regeneration projects.
        </motion.h2>
        
        <motion.p
          className="text-xl md:text-2xl lg:text-4xl font-light leading-relaxed opacity-70"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          耕作放棄地42万ヘクタール、空き家849万戸。
          <br />
          これらの放置された資産を、100万人のDAOメンバーと共に
          <br />
          実際のプロジェクトとして再生・活用していきます。
        </motion.p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.type}
            className="text-center backdrop-blur-sm bg-black/15 p-15 rounded-3xl border border-white/5 transition-all duration-500 relative overflow-hidden group hover:bg-black/25 hover:-translate-y-2.5 hover:border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <ServiceIcon type={service.type} />
            
            <motion.h3
              className="text-xl font-bold mb-4 tracking-wider text-white uppercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 + 0.2,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
            >
              {service.title}
            </motion.h3>
            
            <motion.h4
              className="text-base font-normal mb-6 text-white/70 tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 + 0.3,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
            >
              {service.titleJp}
            </motion.h4>
            
            <motion.p
              className="text-sm leading-relaxed opacity-80 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 + 0.4,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
            >
              {service.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
