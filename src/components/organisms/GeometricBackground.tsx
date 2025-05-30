"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion"

interface GeometricObject {
  id: number
  type: 'triangle' | 'circle' | 'square' | 'hexagon' | 'diamond' | 'line'
  size: number
  initialX: number
  initialY: number
  speed: number
  opacity: number
  rotation: number
  color: string
  pulseDelay: number
  waveOffset: number
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

  // Generate geometric objects (reduced count for performance)
  useEffect(() => {
    const colors = [
      'rgba(120, 255, 214, 0.06)',
      'rgba(120, 119, 255, 0.06)', 
      'rgba(255, 119, 120, 0.06)',
      'rgba(200, 120, 255, 0.06)',
      'rgba(120, 200, 255, 0.06)',
      'rgba(180, 255, 120, 0.06)',
    ]

    const types: GeometricObject['type'][] = ['triangle', 'circle', 'square', 'hexagon', 'diamond', 'line']

    // Reduced from 35 to 20 for better build performance
    const newObjects: GeometricObject[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      size: Math.random() * 80 + 20, // 20-100px
      initialX: Math.random() * 110 - 5, // -5% to 105%
      initialY: Math.random() * 110 - 5, // -5% to 105%
      speed: Math.random() * 1.0 + 0.3, // 0.3-1.3
      opacity: Math.random() * 0.3 + 0.05, // 0.05-0.35
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      pulseDelay: Math.random() * 4,
      waveOffset: Math.random() * Math.PI * 2,
    }))

    setObjects(newObjects)
  }, [])

  const renderGeometricShape = useCallback((obj: GeometricObject) => {
    if (!isVisible) return null

    // Simplified transforms for better performance
    const scrollOffset = useTransform(scrollYProgress, [0, 1], [0, -200 * obj.speed])
    const rotationOffset = useTransform(scrollYProgress, [0, 1], [obj.rotation, obj.rotation + 180 * obj.speed])
    
    // Simplified wave motion
    const waveX = useTransform(scrollYProgress, [0, 1], [0, Math.sin(obj.waveOffset) * 50])
    const waveY = useTransform(scrollYProgress, [0, 1], [0, Math.cos(obj.waveOffset) * 30])
    
    // Reduced mouse interaction
    const mouseInfluenceX = useTransform(mouseXSpring, [-1, 1], [-10 * obj.speed, 10 * obj.speed])
    const mouseInfluenceY = useTransform(mouseYSpring, [-1, 1], [-10 * obj.speed, 10 * obj.speed])

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
        scale: [1, 1.05, 1],
        opacity: [obj.opacity, obj.opacity * 1.3, obj.opacity],
      },
      transition: {
        duration: 5 + obj.pulseDelay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: obj.pulseDelay,
      }
    }

    const shapeStyle = {
      width: obj.size,
      height: obj.size,
      background: obj.color,
      opacity: obj.opacity,
      filter: 'blur(0.5px)',
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
              ...shapeStyle,
            }}
          />
        )

      case 'square':
        return (
          <motion.div
            {...baseMotionProps}
            style={{
              ...baseMotionProps.style,
              ...shapeStyle,
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
              ...shapeStyle,
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            }}
          />
        )

      case 'diamond':
        return (
          <motion.div
            {...baseMotionProps}
            style={{
              ...baseMotionProps.style,
              ...shapeStyle,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          />
        )

      case 'line':
        return (
          <motion.div
            {...baseMotionProps}
            style={{
              ...baseMotionProps.style,
              width: obj.size * 1.5,
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
    </div>
  )
}
