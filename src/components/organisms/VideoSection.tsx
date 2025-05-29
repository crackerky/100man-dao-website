"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play } from "lucide-react"

export function VideoSection() {
  const [isLoading, setIsLoading] = useState(false)

  const handleVideoClick = () => {
    setIsLoading(true)
    // Simulate video loading
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <section className="px-10 py-[100px] text-center">
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-thin mb-5 tracking-[0.1em]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        PLAY REEL
      </motion.h2>

      <motion.p
        className="text-base opacity-60 mb-15"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        RebuildingExpression,
        <br />
        ContinuouslyPursuing
        <br />
        UniqueandRefinedCreations.
      </motion.p>

      <motion.div
        className="max-w-4xl mx-auto aspect-video bg-black/40 backdrop-blur-sm flex items-center justify-center rounded border border-white/10 cursor-pointer group overflow-hidden relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        onClick={handleVideoClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-50" />
        
        {/* Video Player UI */}
        {isLoading ? (
          <motion.div
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full mx-auto mb-4"
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                ease: "linear",
                repeat: Infinity
              }}
            />
            Video Player Loading...
          </motion.div>
        ) : (
          <motion.div
            className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-2xl group-hover:bg-white/20 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Play 
              className="w-8 h-8 ml-1 fill-white/80 text-white/80" 
              strokeWidth={1}
            />
          </motion.div>
        )}

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={false}
        />
      </motion.div>
    </section>
  )
}
