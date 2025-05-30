"use client"

import { motion, useScroll, useTransform } from "framer-motion"

// Lightweight fallback version of GeometricBackground
export function GeometricBackgroundLite() {
  const { scrollYProgress } = useScroll()

  // Simple geometric objects with minimal animations
  const objects = [
    { id: 1, x: 20, y: 20, size: 30, type: 'circle', delay: 0 },
    { id: 2, x: 80, y: 30, size: 25, type: 'square', delay: 0.5 },
    { id: 3, x: 60, y: 70, size: 35, type: 'triangle', delay: 1 },
    { id: 4, x: 30, y: 80, size: 20, type: 'circle', delay: 1.5 },
    { id: 5, x: 90, y: 60, size: 28, type: 'diamond', delay: 2 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-[-8] overflow-hidden">
      {objects.map((obj) => {
        const y = useTransform(scrollYProgress, [0, 1], [0, -100])
        const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])

        return (
          <motion.div
            key={obj.id}
            className="absolute opacity-20"
            style={{
              left: `${obj.x}%`,
              top: `${obj.y}%`,
              y,
              rotate,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: obj.delay,
            }}
          >
            {obj.type === 'circle' && (
              <div
                className="rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20"
                style={{ width: obj.size, height: obj.size }}
              />
            )}
            {obj.type === 'square' && (
              <div
                className="bg-gradient-to-r from-pink-400/20 to-blue-400/20"
                style={{ width: obj.size, height: obj.size }}
              />
            )}
            {obj.type === 'triangle' && (
              <div
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${obj.size / 2}px solid transparent`,
                  borderRight: `${obj.size / 2}px solid transparent`,
                  borderBottom: `${obj.size}px solid rgba(120, 255, 214, 0.1)`,
                }}
              />
            )}
            {obj.type === 'diamond' && (
              <div
                className="bg-gradient-to-r from-yellow-400/20 to-red-400/20"
                style={{
                  width: obj.size,
                  height: obj.size,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }}
              />
            )}
          </motion.div>
        )
      })}
    </div>
  )
}
