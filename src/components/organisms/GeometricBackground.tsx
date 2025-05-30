"use client"

import { useEffect, useState } from "react"
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

export function GeometricBackground() {
  const [objects, setObjects] = useState<GeometricObject[]>([])
  const { scrollYProgress } = useScroll()

  // Generate geometric objects
  useEffect(() => {
    const colors = [
      'rgba(120, 255, 214, 0.15)',
      'rgba(120, 119, 255, 0.15)', 
      'rgba(255, 119, 120, 0.15)',
      'rgba(200, 120, 255, 0.15)',
      'rgba(120, 200, 255, 0.15)',
      'rgba(180, 255, 120, 0.15)',
      'rgba(255, 180, 255, 0.15)',
      'rgba(255, 200, 120, 0.15)',
    ]

    const types: GeometricObject['type'][] = ['triangle', 'circle', 'square', 'hexagon', 'diamond', 'line']

    const newObjects: GeometricObject[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      size: Math.random() * 80 + 20, // 20-100px
      initialX: Math.random() * 100, // 0-100%
      initialY: Math.random() * 100, // 0-100%
      speed: Math.random() * 0.8 + 0.2, // 0.2-1.0
      opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)]
    }))

    setObjects(newObjects)
  }, [])

  const renderGeometricShape = (obj: GeometricObject) => {
    const scrollOffset = useTransform(scrollYProgress, [0, 1], [0, -200 * obj.speed])
    const rotationOffset = useTransform(scrollYProgress, [0, 1], [obj.rotation, obj.rotation + 180 * obj.speed])

    const shapeProps = {
      width: obj.size,
      height: obj.size,
      background: obj.color,
      opacity: obj.opacity,
    }

    switch (obj.type) {
      case 'triangle':
        return (
          <motion.div
            key={obj.id}
            className="absolute"
            style={{
              left: `${obj.initialX}%`,
              top: `${obj.initialY}%`,
              y: scrollOffset,
              rotate: rotationOffset,
            }}
          >
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
            key={obj.id}
            className="absolute rounded-full"
            style={{
              left: `${obj.initialX}%`,
              top: `${obj.initialY}%`,
              y: scrollOffset,
              rotate: rotationOffset,
              ...shapeProps,
            }}
          />
        )

      case 'square':
        return (
          <motion.div
            key={obj.id}
            className="absolute"
            style={{
              left: `${obj.initialX}%`,
              top: `${obj.initialY}%`,
              y: scrollOffset,
              rotate: rotationOffset,
              ...shapeProps,
            }}
          />
        )

      case 'hexagon':
        return (
          <motion.div
            key={obj.id}
            className="absolute"
            style={{
              left: `${obj.initialX}%`,
              top: `${obj.initialY}%`,
              y: scrollOffset,
              rotate: rotationOffset,
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
            key={obj.id}
            className="absolute"
            style={{
              left: `${obj.initialX}%`,
              top: `${obj.initialY}%`,
              y: scrollOffset,
              rotate: rotationOffset,
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
            key={obj.id}
            className="absolute"
            style={{
              left: `${obj.initialX}%`,
              top: `${obj.initialY}%`,
              y: scrollOffset,
              rotate: rotationOffset,
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

  return (
    <div className="fixed inset-0 pointer-events-none z-[-8] overflow-hidden">
      {objects.map(obj => renderGeometricShape(obj))}
    </div>
  )
}
