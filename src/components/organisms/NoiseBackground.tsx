"use client"

import { motion } from "framer-motion"

export function NoiseBackground() {
  return (
    <>
      {/* ノイズグラデーション背景 */}
      <motion.div
        className="fixed -top-1/2 -left-1/2 w-[200%] h-[200%] z-[-10] will-change-transform"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 255, 214, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(120, 119, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 119, 120, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 90% 90%, rgba(200, 120, 255, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 10% 10%, rgba(120, 200, 255, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 70%, rgba(180, 255, 120, 0.3) 0%, transparent 50%),
            radial-gradient(ellipse at 30% 90%, rgba(255, 180, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 60% 30%, rgba(120, 255, 180, 0.4) 0%, transparent 50%),
            linear-gradient(45deg, 
              rgba(0, 0, 0, 0.8) 0%, 
              rgba(20, 20, 40, 0.6) 25%, 
              rgba(40, 20, 60, 0.4) 50%, 
              rgba(20, 40, 60, 0.6) 75%, 
              rgba(0, 0, 0, 0.8) 100%
            )
          `,
          filter: "blur(80px) saturate(1.5) contrast(1.2)"
        }}
        animate={{
          transform: [
            "translate(0%, 0%) rotate(0deg) scale(1)",
            "translate(2%, -1%) rotate(1deg) scale(1.02)",
            "translate(-1%, 2%) rotate(-1deg) scale(1.01)",
            "translate(1%, 1%) rotate(0.5deg) scale(1.03)",
            "translate(0%, 0%) rotate(0deg) scale(1)"
          ]
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />

      {/* 追加のノイズテクスチャオーバーレイ */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full z-[-9] opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.02) 0%, transparent 2%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.01) 0%, transparent 2%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.015) 0%, transparent 1.5%)
          `,
          backgroundSize: "100px 100px, 150px 150px, 200px 200px",
          backgroundPosition: "0 0, 50px 50px, 100px 100px"
        }}
        animate={{
          backgroundPosition: [
            "0 0, 50px 50px, 100px 100px",
            "100px 100px, 150px 150px, 200px 200px"
          ]
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity
        }}
      />
    </>
  )
}
