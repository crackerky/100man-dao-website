"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function FooterWorks() {
  const works = [
    {
      title: "MILLION REAL ESTATE⁺",
      category: "COMMUNITY, FINANCE",
      gradient: "linear-gradient(45deg, #1a1a2e, #16213e)"
    },
    {
      title: "MMD.YIELD",
      category: "DEFI",
      gradient: "linear-gradient(45deg, #2e1a1a, #3e1621)"
    },
    {
      title: "MILLION ASSET COLLECTION",
      category: "NFT",
      gradient: "linear-gradient(45deg, #1a2e1a, #213e16)"
    },
    {
      title: "架空のトークンエコノミー『MAMATO』",
      category: "TOKEN",
      gradient: "linear-gradient(45deg, #2e2e1a, #3e3e16)"
    }
  ]

  return (
    <section className="px-10 py-[100px] pb-[200px]">
      <div className="max-w-6xl mx-auto">
        {works.map((work, index) => (
          <motion.div
            key={work.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Link
              href="#"
              className="flex items-center py-5 border-b border-gray-700 text-white hover:opacity-60 transition-opacity duration-300 group"
            >
              <motion.div
                className="w-15 h-15 mr-8 rounded flex-shrink-0 relative overflow-hidden"
                style={{ background: work.gradient }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 bg-white/5" />
              </motion.div>

              <motion.div
                className="text-lg font-bold flex-grow"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                {work.title}
              </motion.div>

              <div className="text-xs opacity-60 tracking-wider ml-8">
                {work.category}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
