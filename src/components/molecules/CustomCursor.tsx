"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10)
      cursorY.set(e.clientY - 10)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Only show custom cursor on desktop
    const checkDevice = () => {
      if (window.innerWidth > 768) {
        document.addEventListener("mousemove", moveCursor)
        document.addEventListener("mouseenter", handleMouseEnter)
        document.addEventListener("mouseleave", handleMouseLeave)
      }
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("resize", checkDevice)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed w-5 h-5 bg-white/80 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        display: isVisible ? "block" : "none"
      }}
      initial={{ scale: 0 }}
      animate={{ scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
    />
  )
}
