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
    <section className="px-6 lg:px-10 py-20 lg:py-32 relative">
      {/* Introduction */}
      <motion.div
        className="text-center mb-20 lg:mb-32 backdrop-blur-sm bg-black/20 p-8 lg:p-15 rounded-3xl border border-white/[0.03] max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight tracking-wide mb-10 lg:mb-15 opacity-90"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="block mb-2">We transform idle assets</span>
          <span className="block mb-2">into valuable community resources.</span>
          <span className="block mb-4 text-lg md:text-2xl lg:text-3xl opacity-75">
            From abandoned farmland to vacant houses,<br />
            we create real value through concrete regeneration projects.
          </span>
        </motion.h2>
        
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="text-center space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">42万</div>
              <div className="text-sm md:text-base opacity-70">ヘクタールの耕作放棄地</div>
            </div>
            <div className="text-center space-y-1">
              <div className="text-2xl md:text-3xl font-bold text-blue-400">849万</div>
              <div className="text-sm md:text-base opacity-70">戸の空き家</div>
            </div>
          </div>
          
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed opacity-75 max-w-4xl mx-auto">
            これらの放置された資産を、100万人のDAOメンバーと共に<br />
            実際のプロジェクトとして再生・活用していきます
          </p>
        </motion.div>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.type}
            className="backdrop-blur-sm bg-black/15 p-6 lg:p-12 rounded-3xl border border-white/5 transition-all duration-500 relative overflow-hidden group hover:bg-black/25 hover:-translate-y-2.5 hover:border-white/10"
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
            
            <div className="text-center mb-6">
              <motion.h3
                className="text-lg md:text-xl font-bold mb-2 tracking-wide text-white uppercase"
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
                className="text-xl md:text-2xl font-light text-white/90 tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.9, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1 + 0.3,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
              >
                {service.titleJp}
              </motion.h4>
            </div>
            
            <motion.div
              className="text-sm md:text-base leading-relaxed opacity-80 text-left space-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 + 0.4,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
            >
              {service.description.split('\n').map((line, lineIndex) => (
                <p key={lineIndex} className="leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
