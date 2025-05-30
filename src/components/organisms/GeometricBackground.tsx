"use client"

import { useEffect, useState, useMemo } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

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
}

// Create a separate component for each shape to avoid hooks in loops
function GeometricShape({ obj }: { obj: GeometricObject }) {
  const { scrollYProgress } = useScroll()
  
  // Move useTransform calls to component level to follow React rules
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [0, -200 * obj.speed])
  const rotationOffset = useTransform(scrollYProgress, [0, 1], [obj.rotation, obj.rotation + 180 * obj.speed])

  const shapeProps = {
    width: obj.size,
    height: obj.size,
    background: obj.color,
    opacity: obj.opacity,
  }

  const commonMotionProps = {
    className: "absolute",
    style: {
      left: `${obj.initialX}%`,
      top: `${obj.initialY}%`,
      y: scrollOffset,
      rotate: rotationOffset,
    }
  }

  switch (obj.type) {
    case 'triangle':
      return (
        <motion.div {...commonMotionProps}>
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: `${obj.size / 2}px solid transparent`,
              borderRight: `${obj.size / 2}px solid transparent`,
              borderBottom: `${obj.size}px solid ${obj.color}`,
              opacity: obj.opacity,
            }}
          />
        </motion.div>
      )

    case 'circle':
      return (
        <motion.div
          {...commonMotionProps}
          className="absolute rounded-full"
          style={{
            ...commonMotionProps.style,
            ...shapeProps,
          }}
        />
      )

    case 'square':
      return (
        <motion.div
          {...commonMotionProps}
          style={{
            ...commonMotionProps.style,
            ...shapeProps,
          }}
        />
      )

    case 'hexagon':
      return (
        <motion.div
          {...commonMotionProps}
          style={{
            ...commonMotionProps.style,
            width: obj.size,
            height: obj.size,
            background: obj.color,
            opacity: obj.opacity,
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          }}
        />
      )

    case 'diamond':
      return (
        <motion.div
          {...commonMotionProps}
          style={{
            ...commonMotionProps.style,
            width: obj.size,
            height: obj.size,
            background: obj.color,
            opacity: obj.opacity,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
          }}
        />
      )

    case 'line':
      return (
        <motion.div
          {...commonMotionProps}
          style={{
            ...commonMotionProps.style,
            width: obj.size * 1.5,
            height: 2,
            background: obj.color,
            opacity: obj.opacity,
          }}
        />
      )

    default:
      return null
  }
}

export function GeometricBackground() {
  const [objects, setObjects] = useState<GeometricObject[]>([])

  // Generate geometric objects with restored visibility settings
  const generatedObjects = useMemo(() => {
    const colors = [
      'rgba(120, 255, 214, 0.15)', // Restored original alpha values
      'rgba(120, 119, 255, 0.15)', 
      'rgba(255, 119, 120, 0.15)',
      'rgba(200, 120, 255, 0.15)',
      'rgba(120, 200, 255, 0.15)',
      'rgba(180, 255, 120, 0.15)',
      'rgba(255, 180, 255, 0.15)',
      'rgba(255, 200, 120, 0.15)',
    ]

    const types: GeometricObject['type'][] = ['triangle', 'circle', 'square', 'hexagon', 'diamond', 'line']

    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      size: Math.random() * 80 + 20, // 20-100px
      initialX: Math.random() * 100, // 0-100% (restored original range)
      initialY: Math.random() * 100, // 0-100%
      speed: Math.random() * 0.8 + 0.2, // 0.2-1.0 (restored original speed)
      opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4 (restored original opacity)
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))
  }, [])

  useEffect(() => {
    setObjects(generatedObjects)
  }, [generatedObjects])

  return (
    <div className="fixed inset-0 pointer-events-none z-[-8] overflow-hidden">
      {objects.map(obj => (
        <GeometricShape key={obj.id} obj={obj} />
      ))}
    </div>
  )
}
