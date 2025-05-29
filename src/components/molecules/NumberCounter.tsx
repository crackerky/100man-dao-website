"use client"

import { motion } from "framer-motion"

export function NumberCounter() {
  const numbers = "000000000010123456789001234567890"

  return (
    <motion.div
      className="fixed top-1/2 left-10 transform -translate-y-1/2 text-xs text-gray-600 z-[100]"
      style={{
        writingMode: "vertical-rl",
        letterSpacing: "-1px"
      }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      <motion.span
        animate={{
          y: ["0px", "-10px", "0px"]
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        {numbers}
      </motion.span>
    </motion.div>
  )
}
