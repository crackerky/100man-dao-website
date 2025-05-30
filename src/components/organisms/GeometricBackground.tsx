"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"

interface GeometricObject {
  id: number
  type: 'triangle' | 'circle' | 'square' | 'hexagon' | 'diamond' | 'line' | 'star' | 'pentagon'
  size: number
  initialX: number
  initialY: number
  speed: number
  opacity: number
  rotation: number
  color: string
  pulseDelay: number
  waveOffset: number
  spiralRadius: number
}

export function GeometricBackground() {
  const [objects, setObjects] = useState<GeometricObject[]>([])
  const [isVisible, setIsVisible] = useState(true)
  const { scrollYProgress } = useScroll()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const mouseXSpring = useSpring(mouseX, { damping: 25, stiffness: 100 })
  const mouseYSpring = useSpring(mouseY, { damping: 25, stiffness: 100 })

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth) * 2 - 1)
      mouseY.set((e.clientY / window.innerHeight) * 2 - 1)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  // Visibility optimization
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden)
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  // Generate geometric objects
  useEffect(() => {
    const colors = [
      'rgba(120, 255, 214, 0.08)',
      'rgba(120, 119, 255, 0.08)', 
      'rgba(255, 119, 120, 0.08)',
      'rgba(200, 120, 255, 0.08)',
      'rgba(120, 200, 255, 0.08)',
      'rgba(180, 255, 120, 0.08)',
      'rgba(255, 180, 255, 0.08)',
      'rgba(255, 200, 120, 0.08)',
      'rgba(100, 255, 255, 0.08)',
      'rgba(255, 100, 200, 0.08)',
    ]

    const types: GeometricObject['type'][] = ['triangle', 'circle', 'square', 'hexagon', 'diamond', 'line', 'star', 'pentagon']

    const newObjects: GeometricObject[] = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      size: Math.random() * 100 + 15, // 15-115px
      initialX: Math.random() * 110 - 5, // -5% to 105% (offscreen start)
      initialY: Math.random() * 110 - 5, // -5% to 105%
      speed: Math.random() * 1.2 + 0.3, // 0.3-1.5
      opacity: Math.random() * 0.4 + 0.05, // 0.05-0.45
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulseDelay: Math.random() * 5,
      waveOffset: Math.random() * Math.PI * 2,
      spiralRadius: Math.random() * 50 + 20
    }))

    setObjects(newObjects)
  }, [])

  const renderGeometricShape = useCallback((obj: GeometricObject) => {
    if (!isVisible) return null

    // Individual transforms with explicit types
    const scrollOffset = useTransform(scrollYProgress, [0, 1], [0, -300 * obj.speed])
    const rotationOffset = useTransform(scrollYProgress, [0, 1], [obj.rotation, obj.rotation + 360 * obj.speed])
    
    // Wave motion
    const waveX = useTransform(scrollYProgress, [0, 1], [0, Math.sin(obj.waveOffset) * 100])
    const waveY = useTransform(scrollYProgress, [0, 1], [0, Math.cos(obj.waveOffset * 1.3) * 50])
    
    // Mouse interaction
    const mouseInfluenceX = useTransform(mouseXSpring, [-1, 1], [-20 * obj.speed, 20 * obj.speed])
    const mouseInfluenceY = useTransform(mouseYSpring, [-1, 1], [-20 * obj.speed, 20 * obj.speed])

    const shapeProps = {
      width: obj.size,
      height: obj.size,
      background: obj.color,
      opacity: obj.opacity,
    }

    const baseMotionProps = {
      key: obj.id,
      className: "absolute will-change-transform",
      style: {
        left: `${obj.initialX}%`,
        top: `${obj.initialY}%`,
        x: useTransform(
          [scrollOffset, waveX, mouseInfluenceX], 
          ([scroll, wave, mouse]: [number, number, number]) => scroll + wave + mouse
        ),
        y: useTransform(
          [scrollOffset, waveY, mouseInfluenceY], 
          ([scroll, wave, mouse]: [number, number, number]) => scroll + wave + mouse
        ),
        rotate: rotationOffset,
      },
      animate: {
        scale: [1, 1.1, 1],
        opacity: [obj.opacity, obj.opacity * 1.5, obj.opacity],
      },
      transition: {
        duration: 4 + obj.pulseDelay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: obj.pulseDelay,
      }
    }

    switch (obj.type) {
      case 'triangle':
        return (
          <motion.div {...baseMotionProps}>
            <div
              style={{
                width: 0,
                height: 0,
                borderLeft: `${obj.size / 2}px solid transparent`,
                borderRight: `${obj.size / 2}px solid transparent`,
                borderBottom: `${obj.size}px solid ${obj.color}`,
                opacity: obj.opacity,
                filter: 'blur(0.5px)',
              }}
            />
          </motion.div>
        )

      case 'circle':
        return (
          <motion.div
            {...baseMotionProps}
            className="absolute rounded-full will-change-transform"
            style={{
              ...baseMotionProps.style,
              ...shapeProps,
              filter: 'blur(1px)',
              boxShadow: `0 0 20px ${obj.color}`,
            }}
          />
        )

      case 'square':
        return (
          <motion.div
            {...baseMotionProps}
            style={{
              ...baseMotionProps.style,
              ...shapeProps,
              filter: 'blur(0.5px)',
              borderRadius: '2px',
            }}
          />
        )

      case 'hexagon':
        return (
          <motion.div
            {...baseMotionProps}
            style={{
              ...baseMotionProps.style,
              width: obj.size,
              height: obj.size,
              background: obj.color,
              opacity: obj.opacity,
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              filter: 'blur(0.5px)',
            }}
          />
        )

      case 'diamond':
        return (
          <motion.div
            {...baseMotionProps}
            style={{
              ...baseMotionProps.style,
              width: obj.size,
              height: obj.size,
              background: obj.color,
              opacity: obj.opacity,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
              filter: 'blur(0.5px)',
            }}
          />
        )

      case 'star':
        return (
          <motion.div
            {...baseMotionProps}
            style={{
              ...baseMotionProps.style,
              width: obj.size,
              height: obj.size,
              background: obj.color,
              opacity: obj.opacity,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
              filter: 'blur(0.5px)',
            }}
          />
        )

      case 'pentagon':
        return (
          <motion.div
            {...baseMotionProps}
            style={{
              ...baseMotionProps.style,
              width: obj.size,
              height: obj.size,
              background: obj.color,
              opacity: obj.opacity,
              clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
              filter: 'blur(0.5px)',
            }}
          />
        )

      case 'line':
        return (
          <motion.div
            {...baseMotionProps}
            style={{
              ...baseMotionProps.style,
              width: obj.size * 2,
              height: 1,
              background: `linear-gradient(90deg, transparent, ${obj.color}, transparent)`,
              opacity: obj.opacity,
              filter: 'blur(0.5px)',
            }}
          />
        )

      default:
        return null
    }
  }, [isVisible, scrollYProgress, mouseXSpring, mouseYSpring])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[-8] overflow-hidden">
      <div className="relative w-full h-full">
        {objects.map(obj => renderGeometricShape(obj))}
      </div>
      
      {/* Additional atmospheric effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.1) 100%)',
          x: useTransform(mouseXSpring, [-1, 1], [-50, 50]),
          y: useTransform(mouseYSpring, [-1, 1], [-50, 50]),
        }}
        animate={{
          opacity: [0.0, 0.05, 0.0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
