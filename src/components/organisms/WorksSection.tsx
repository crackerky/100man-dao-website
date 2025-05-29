"use client"

import { motion } from "framer-motion"

export function WorksSection() {
  const projects = [
    {
      title: "Million Real Estate",
      gradient: "linear-gradient(45deg, #1a1a2e, #16213e)",
      category: "Real Estate"
    },
    {
      title: "MMD DeFi Protocol",
      gradient: "linear-gradient(45deg, #2e1a1a, #3e1621)",
      category: "DeFi"
    },
    {
      title: "Asset NFT Platform",
      gradient: "linear-gradient(45deg, #1a2e1a, #213e16)",
      category: "NFT"
    },
    {
      title: "Community Governance",
      gradient: "linear-gradient(45deg, #2e2e1a, #3e3e16)",
      category: "Governance"
    }
  ]

  return (
    <section id="works" className="px-10 py-[100px]">
      <motion.h2
        className="text-4xl md:text-6xl lg:text-8xl font-thin text-center mb-[100px] tracking-[0.1em]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="aspect-square bg-gray-800 relative overflow-hidden cursor-pointer group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ 
              scale: 1.02,
              filter: "brightness(1.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div
              className="w-full h-full flex items-center justify-center text-lg font-medium transition-all duration-500 group-hover:scale-110"
              style={{ background: project.gradient }}
            >
              <div className="text-center">
                <div className="text-white mb-2">{project.title}</div>
                <div className="text-white/60 text-sm">{project.category}</div>
              </div>
            </div>

            {/* Hover overlay */}
            <motion.div
              className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />

            {/* Subtle border glow on hover */}
            <motion.div
              className="absolute inset-0 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
