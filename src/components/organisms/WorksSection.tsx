"use client"

import { motion } from "framer-motion"

export function WorksSection() {
  const projects = [
    {
      title: "長野県 空地活用プロジェクト",
      gradient: "linear-gradient(45deg, #1a1a2e, #16213e)",
      category: "空地活用 | 870坪"
    },
    {
      title: "小豆島 島丸ごと再築プロジェクト",
      gradient: "linear-gradient(45deg, #2e1a1a, #3e1621)",
      category: "離島再生 | 香川県高松市"
    },
    {
      title: "鎌倉 空き家再生プロジェクト",
      gradient: "linear-gradient(45deg, #1a2e1a, #213e16)",
      category: "空き家活用 | 神奈川県"
    },
    {
      title: "次のプロジェクトを準備中...",
      gradient: "linear-gradient(45deg, #2a2a2a, #3a3a3a)",
      category: "全国に拡張中 | Coming Soon",
      isExpanding: true
    }
  ]

  return (
    <section id="works" className="px-6 lg:px-10 py-20 lg:py-32">
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl font-light text-center mb-16 lg:mb-24 tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        実施中プロジェクト
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="aspect-square bg-gray-800 relative overflow-hidden cursor-pointer group rounded-2xl border border-white/10"
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
              className={`w-full h-full flex items-center justify-center p-6 transition-all duration-500 group-hover:scale-105 ${
                project.isExpanding ? 'border-2 border-dashed border-white/30' : ''
              }`}
              style={{ background: project.gradient }}
            >
              <div className="text-center space-y-4">
                <div className={`text-white text-lg md:text-xl font-medium leading-tight ${
                  project.isExpanding ? 'opacity-70' : ''
                }`}>
                  {project.title}
                </div>
                <div className={`text-white/70 text-sm md:text-base font-light ${
                  project.isExpanding ? 'flex items-center justify-center gap-2' : ''
                }`}>
                  {project.category}
                  {project.isExpanding && (
                    <motion.div
                      className="flex gap-1"
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Hover overlay */}
            <motion.div
              className={`absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                project.isExpanding ? 'group-hover:opacity-50' : ''
              }`}
              initial={false}
            />

            {/* Subtle border glow on hover */}
            <motion.div
              className="absolute inset-0 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            
            {/* Expanding indicator */}
            {project.isExpanding && (
              <motion.div
                className="absolute top-4 right-4 text-white/50 text-xs"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
