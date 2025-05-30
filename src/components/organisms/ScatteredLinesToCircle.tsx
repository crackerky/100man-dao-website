import { useMemo } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

interface LineSegment {
  id: number
  startX: number
  startY: number
  endX: number
  endY: number
  finalStartX: number
  finalStartY: number
  finalEndX: number
  finalEndY: number
  length: number
  angle: number
}

// Generate scattered line segments across the screen
function generateScatteredLines(count: number, screenWidth: number, screenHeight: number): LineSegment[] {
  const segments: LineSegment[] = []
  
  for (let i = 0; i < count; i++) {
    // Random position across the screen
    const centerX = Math.random() * (screenWidth - 200) + 100
    const centerY = Math.random() * (screenHeight - 200) + 100
    
    // Random angle and length for each line
    const angle = Math.random() * Math.PI * 2
    const length = 20 + Math.random() * 40
    
    const startX = centerX - Math.cos(angle) * length / 2
    const startY = centerY - Math.sin(angle) * length / 2
    const endX = centerX + Math.cos(angle) * length / 2
    const endY = centerY + Math.sin(angle) * length / 2
    
    segments.push({
      id: i,
      startX,
      startY,
      endX,
      endY,
      finalStartX: startX,
      finalStartY: startY,
      finalEndX: endX,
      finalEndY: endY,
      length,
      angle
    })
  }
  
  return segments
}

// Calculate final positions to form a large circle
function calculateCirclePositions(segments: LineSegment[], centerX: number, centerY: number, radius: number): LineSegment[] {
  const totalSegments = segments.length
  const angleStep = (Math.PI * 2) / totalSegments
  
  return segments.map((segment, index) => {
    const circleAngle = index * angleStep
    const nextAngle = ((index + 1) % totalSegments) * angleStep
    
    const finalStartX = centerX + Math.cos(circleAngle) * radius
    const finalStartY = centerY + Math.sin(circleAngle) * radius
    const finalEndX = centerX + Math.cos(nextAngle) * radius
    const finalEndY = centerY + Math.sin(nextAngle) * radius
    
    return {
      ...segment,
      finalStartX,
      finalStartY,
      finalEndX,
      finalEndY
    }
  })
}

// Animated line component
function MovingLine({ segment, scrollProgress }: { segment: LineSegment, scrollProgress: any }) {
  // Interpolate positions smoothly
  const x1 = useTransform(
    scrollProgress,
    [0, 1],
    [segment.startX, segment.finalStartX]
  )
  const y1 = useTransform(
    scrollProgress,
    [0, 1],
    [segment.startY, segment.finalStartY]
  )
  const x2 = useTransform(
    scrollProgress,
    [0, 1],
    [segment.endX, segment.finalEndX]
  )
  const y2 = useTransform(
    scrollProgress,
    [0, 1],
    [segment.endY, segment.finalEndY]
  )
  
  // Dynamic opacity for gathering effect
  const opacity = useTransform(
    scrollProgress,
    [0, 0.3, 0.7, 1],
    [0.6, 0.8, 0.9, 1]
  )
  
  // Dynamic stroke width for emphasis
  const strokeWidth = useTransform(
    scrollProgress,
    [0, 0.5, 1],
    [2, 3, 4]
  )

  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="white"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      style={{
        opacity,
        filter: "drop-shadow(0 0 4px rgba(255, 255, 255, 0.6))"
      }}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ 
        duration: 2,
        delay: segment.id * 0.05,
        ease: "easeOut"
      }}
    />
  )
}

export default function ScatteredLinesToCircle() {
  const { scrollYProgress } = useScroll()
  
  // Smooth spring animation
  const springProgress = useSpring(scrollYProgress, { 
    stiffness: 60, 
    damping: 25,
    mass: 0.8
  })

  // Generate the scattered lines and their final positions
  const lineSegments = useMemo(() => {
    const screenWidth = window.innerWidth || 800
    const screenHeight = window.innerHeight || 600
    const lineCount = 60 // Good number for a smooth circle
    
    // Generate scattered lines
    const scattered = generateScatteredLines(lineCount, screenWidth, screenHeight)
    
    // Calculate final circle positions - screen center
    const finalCenterX = screenWidth / 2
    const finalCenterY = screenHeight / 2
    const finalRadius = 180
    
    return calculateCirclePositions(scattered, finalCenterX, finalCenterY, finalRadius)
  }, [])

  // Story phase transitions
  const scatterPhase = useTransform(springProgress, [0, 0.15], [1, 0])
  const gatheringPhase = useTransform(springProgress, [0.1, 0.5], [0, 1])
  const unityPhase = useTransform(springProgress, [0.4, 0.7], [0, 1])
  const wavePhase = useTransform(springProgress, [0.65, 1], [0, 1])

  // Background effects
  const backgroundIntensity = useTransform(springProgress, [0, 0.7, 1], [0.02, 0.12, 0.08])
  const centerGlow = useTransform(springProgress, [0.5, 0.7], [0, 1])

  // Circle completion effect
  const circleOpacity = useTransform(springProgress, [0.6, 0.75], [0, 1])
  const circleScale = useTransform(springProgress, [0.6, 0.75], [0.8, 1])
  
  // Wave ripple effects
  const wave1Scale = useTransform(springProgress, [0.7, 0.85], [0, 3])
  const wave1Opacity = useTransform(springProgress, [0.7, 0.85], [1, 0])
  const wave2Scale = useTransform(springProgress, [0.75, 0.9], [0, 4])
  const wave2Opacity = useTransform(springProgress, [0.75, 0.9], [0.8, 0])
  const wave3Scale = useTransform(springProgress, [0.8, 0.95], [0, 5])
  const wave3Opacity = useTransform(springProgress, [0.8, 0.95], [0.6, 0])
  const wave4Scale = useTransform(springProgress, [0.85, 1], [0, 6])
  const wave4Opacity = useTransform(springProgress, [0.85, 1], [0.4, 0])

  // Get screen center
  const screenWidth = window.innerWidth || 800
  const screenHeight = window.innerHeight || 600
  const centerX = screenWidth / 2
  const centerY = screenHeight / 2

  return (
    <div className="w-full min-h-[400vh] bg-gradient-to-br from-slate-950 via-slate-900 to-black relative">
      {/* Fixed viewport */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Dynamic background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-white/5 via-transparent to-transparent"
          style={{ opacity: backgroundIntensity }}
        />
        
        {/* Main SVG Animation */}
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <filter id="unityGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feGaussianBlur stdDeviation="8" result="wideGlow"/>
              <feMerge> 
                <feMergeNode in="wideGlow"/>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            {/* Grid pattern for context */}
            <pattern id="unityGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="rgba(255, 255, 255, 0.03)" />
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(255, 255, 255, 0.01)" strokeWidth="0.5"/>
            </pattern>
            
            {/* Radial gradient for center */}
            <radialGradient id="centerLight" cx="50%" cy="50%" r="50%">
              <stop offset="0%" style={{ stopColor: "rgba(255, 255, 255, 0.8)", stopOpacity: 1 }} />
              <stop offset="70%" style={{ stopColor: "rgba(255, 255, 255, 0.2)", stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: "rgba(255, 255, 255, 0)", stopOpacity: 0 }} />
            </radialGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#unityGrid)" />
          
          {/* Render moving line segments */}
          <g filter="url(#unityGlow)">
            {lineSegments.map((segment) => (
              <MovingLine 
                key={segment.id}
                segment={segment} 
                scrollProgress={springProgress}
              />
            ))}
          </g>
          
          {/* Perfect circle overlay for completion */}
          <motion.g style={{ opacity: circleOpacity, scale: circleScale }}>
            <motion.circle
              cx={centerX}
              cy={centerY}
              r={180}
              fill="none"
              stroke="white"
              strokeWidth={5}
              style={{
                filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.8))"
              }}
              animate={{
                scale: [1, 1.01, 1],
                opacity: [0.9, 1, 0.9]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Inner harmony rings */}
            <motion.circle
              cx={centerX}
              cy={centerY}
              r={120}
              fill="none"
              stroke="white"
              strokeWidth={2}
              opacity={0.6}
              style={{
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))"
              }}
              animate={{
                scale: [1, 1.02, 1],
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.circle
              cx={centerX}
              cy={centerY}
              r={60}
              fill="none"
              stroke="white"
              strokeWidth={1}
              opacity={0.4}
              style={{
                filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
              }}
              animate={{
                scale: [1, 1.03, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.g>
          
          {/* Water ripple wave effects */}
          <motion.g style={{ opacity: wavePhase }}>
            {/* Wave 1 */}
            <motion.circle
              cx={centerX}
              cy={centerY}
              r={180}
              fill="none"
              stroke="white"
              strokeWidth={3}
              style={{
                scale: wave1Scale,
                opacity: wave1Opacity,
                filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.6))"
              }}
            />
            
            {/* Wave 2 */}
            <motion.circle
              cx={centerX}
              cy={centerY}
              r={180}
              fill="none"
              stroke="white"
              strokeWidth={2}
              style={{
                scale: wave2Scale,
                opacity: wave2Opacity,
                filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 0.5))"
              }}
            />
            
            {/* Wave 3 */}
            <motion.circle
              cx={centerX}
              cy={centerY}
              r={180}
              fill="none"
              stroke="white"
              strokeWidth={1.5}
              style={{
                scale: wave3Scale,
                opacity: wave3Opacity,
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.4))"
              }}
            />
            
            {/* Wave 4 */}
            <motion.circle
              cx={centerX}
              cy={centerY}
              r={180}
              fill="none"
              stroke="white"
              strokeWidth={1}
              style={{
                scale: wave4Scale,
                opacity: wave4Opacity,
                filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))"
              }}
            />
          </motion.g>
          
          {/* Central light core */}
          <motion.g style={{ opacity: centerGlow, scale: centerGlow }}>
            <motion.circle
              cx={centerX}
              cy={centerY}
              r={8}
              fill="url(#centerLight)"
              style={{
                filter: "drop-shadow(0 0 25px rgba(255, 255, 255, 1))"
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.g>
        </svg>
        
        {/* Story progression indicators */}
        <div className="fixed top-10 left-10 text-white/50 text-sm font-light space-y-3">
          <motion.div style={{ opacity: scatterPhase }} className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-white/40" />
            <span>Scattered lines seeking purpose...</span>
          </motion.div>
          <motion.div style={{ opacity: gatheringPhase }} className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-white/60" />
            <span>Lines gathering toward unity...</span>
          </motion.div>
          <motion.div style={{ opacity: unityPhase }} className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-white/80" />
            <span>Perfect circle achieved</span>
          </motion.div>
          <motion.div style={{ opacity: wavePhase }} className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-white" />
            <span>Ripples spreading through infinity...</span>
          </motion.div>
        </div>
        
        {/* Elegant progress indicator */}
        <div className="fixed bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="relative w-40 h-40">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="75"
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="2"
              />
              <motion.circle
                cx="80"
                cy="80"
                r="75"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                style={{
                  pathLength: springProgress,
                  filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.8))"
                }}
                strokeDasharray="471" // 2 * π * 75
                strokeDashoffset="471"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-4 h-4 rounded-full bg-white"
                style={{
                  scale: centerGlow,
                  filter: "drop-shadow(0 0 12px rgba(255, 255, 255, 1))"
                }}
              />
            </div>
          </div>
        </div>
        
        {/* Story title */}
        <motion.div 
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/20 text-center pointer-events-none"
          style={{ opacity: scatterPhase }}
        >
          <h1 className="text-4xl font-light mb-2">Unity</h1>
          <p className="text-lg">From chaos to harmony</p>
        </motion.div>
        
        {/* Scroll invitation */}
        <motion.div 
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 text-white/30 text-xs text-center"
          style={{ opacity: scatterPhase }}
        >
          ↓ Scroll to witness the transformation ↓
        </motion.div>
      </div>
      
      {/* Spacer for scrolling */}
      <div className="relative z-10 pt-[100vh]">
        <div className="h-screen flex items-center justify-center">
          <div className="text-white/10 text-center">
            <h2 className="text-3xl mb-4 font-light">Gathering</h2>
            <p className="text-lg">Lines finding their way home</p>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center">
          <div className="text-white/10 text-center">
            <h2 className="text-3xl mb-4 font-light">Convergence</h2>
            <p className="text-lg">Unity emerging from diversity</p>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center">
          <div className="text-white/10 text-center">
            <h2 className="text-3xl mb-4 font-light">Harmony</h2>
            <p className="text-lg">The perfect circle complete</p>
          </div>
        </div>
        <div className="h-screen flex items-center justify-center">
          <div className="text-white/10 text-center">
            <h2 className="text-3xl mb-4 font-light">Ripples</h2>
            <p className="text-lg">Infinite waves of possibility</p>
          </div>
        </div>
      </div>
    </div>
  )
}