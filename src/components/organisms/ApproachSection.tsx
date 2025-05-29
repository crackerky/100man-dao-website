"use client"

import { motion } from "framer-motion"
import { ServiceIcon } from "@/components/molecules/ServiceIcon"

export function ApproachSection() {
  const services = [
    {
      type: "real-estate" as const,
      title: "Real Estate",
      titleJp: "不動産",
      description: `I design and create purposeful strategies to effectively
utilize idle properties in both residential and commercial sectors. Specializing in asset transformation,
I focus on the flow and optimization of real estate value,
balancing community impact with sustainable returns.`
    },
    {
      type: "financial" as const,
      title: "Financial Assets",
      titleJp: "金融資産",
      description: `I provide DeFi-focused development across various areas,
including yield farming, liquidity provision, staking optimization,
and portfolio diversification.
I also prioritize risk management and transparency to deliver sustainable and intuitive financial growth.`
    },
    {
      type: "digital" as const,
      title: "Digital Assets",
      titleJp: "デジタル資産",
      description: `I create assets that digitally embody a community's vision and concept,
especially in NFT and token ecosystems. By unifying elements such as utility, scarcity, governance rights, and interoperability,
I build digital assets that are both valuable and meaningful for holders.`
    },
    {
      type: "community" as const,
      title: "Community Power",
      titleJp: "コミュニティパワー",
      description: `I lead the collective intelligence strategy for projects,
ensuring the community's vision and values are reflected in the ecosystem. From governance to value distribution,
I manage each stage to deliver cohesive and impactful community-driven growth.`
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
          I synthesize four key areas
          <br />
          with both logical and intuitive approaches,
          <br />
          shaping visions and communities
          <br />
          to deliver
          <br />
          new value through digital experiences.
        </motion.h2>
        
        <motion.p
          className="text-xl md:text-2xl lg:text-4xl font-light leading-relaxed opacity-70"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          論理・感覚の両面からのアプローチと4つの主要な領域を
          <br />
          組み合わせ、ビジョンやコミュニティを形にすることで
          <br />
          デジタル体験を通じた新しい価値を生み出します。
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
