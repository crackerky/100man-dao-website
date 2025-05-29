"use client"

import { motion } from "framer-motion"

interface ServiceIconProps {
  type: "real-estate" | "financial" | "digital" | "community"
  className?: string
}

export function ServiceIcon({ type, className = "" }: ServiceIconProps) {
  const baseClasses = "w-[120px] h-[120px] mx-auto mb-10 relative flex items-center justify-center transition-all duration-500"

  switch (type) {
    case "real-estate":
      return (
        <motion.div
          className={`${baseClasses} ${className}`}
          style={{
            background: "linear-gradient(45deg, rgba(120, 255, 214, 0.2), rgba(120, 200, 255, 0.3))",
            borderRadius: "15px",
            transformStyle: "preserve-3d"
          }}
          animate={{
            y: [0, -10, 0],
            rotateX: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity
          }}
          whileHover={{
            scale: 1.1,
            filter: "brightness(1.2) saturate(1.3)"
          }}
        >
          {/* 立方体の影 */}
          <div
            className="absolute -top-2.5 -left-2.5 w-full h-full opacity-50"
            style={{
              background: "linear-gradient(45deg, rgba(120, 255, 214, 0.1), rgba(120, 200, 255, 0.2))",
              borderRadius: "15px",
              transform: "translateZ(-20px)"
            }}
          />
          {/* 三角形のシンボル */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/80"
            style={{
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)"
            }}
          />
        </motion.div>
      )

    case "financial":
      return (
        <motion.div
          className={`${baseClasses} ${className}`}
          style={{
            background: "linear-gradient(60deg, rgba(120, 119, 255, 0.2), rgba(200, 120, 255, 0.3))",
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
          }}
          animate={{
            rotate: [0, 360]
          }}
          transition={{
            duration: 8,
            ease: "linear",
            repeat: Infinity
          }}
          whileHover={{
            animationDuration: "4s",
            filter: "brightness(1.2) saturate(1.3)"
          }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white/90">
            ¥
          </div>
        </motion.div>
      )

    case "digital":
      return (
        <motion.div
          className={`${baseClasses} ${className} rounded-full relative`}
          style={{
            background: "linear-gradient(135deg, rgba(255, 119, 120, 0.2), rgba(255, 180, 255, 0.3))"
          }}
          animate={{
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity
          }}
          whileHover={{
            animationDuration: "2s",
            filter: "brightness(1.2) saturate(1.3)"
          }}
        >
          {/* 内側の円形ボーダー */}
          <div
            className="absolute top-5 left-5 right-5 bottom-5 border-2 border-white/40 rounded-full"
            style={{ borderStyle: "dashed" }}
          />
          {/* ダイヤモンドシンボル */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl text-white/80">
            ◆
          </div>
        </motion.div>
      )

    case "community":
      return (
        <motion.div
          className={`${baseClasses} ${className} rounded-full relative`}
          style={{
            background: "linear-gradient(120deg, rgba(180, 255, 120, 0.2), rgba(120, 255, 180, 0.3))",
            boxShadow: `
              inset 15px 15px 0 -10px rgba(255, 255, 255, 0.1),
              inset -15px -15px 0 -10px rgba(255, 255, 255, 0.05)
            `
          }}
          animate={{
            scale: [1, 1.08, 1]
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity
          }}
          whileHover={{
            animationDuration: "3s",
            filter: "brightness(1.2) saturate(1.3)"
          }}
        >
          {/* メイン三角形 */}
          <div
            className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 0,
              height: 0,
              borderLeft: "15px solid transparent",
              borderRight: "15px solid transparent",
              borderBottom: "20px solid rgba(255, 255, 255, 0.8)"
            }}
          />
          {/* サブ三角形 */}
          <div
            className="absolute top-[60%] left-[35%]"
            style={{
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderBottom: "12px solid rgba(255, 255, 255, 0.6)",
              boxShadow: "20px -10px 0 -4px rgba(255, 255, 255, 0.4)"
            }}
          />
        </motion.div>
      )

    default:
      return null
  }
}
