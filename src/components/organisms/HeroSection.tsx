"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Transform mouse position to movement values
  const backgroundMoveX = useTransform(mouseX, [0, 1], [-2, 2])
  const backgroundMoveY = useTransform(mouseY, [0, 1], [-2, 2])
  const circleMoveX = useTransform(mouseX, [0, 1], [-5, 5])
  const circleMoveY = useTransform(mouseY, [0, 1], [-5, 5])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        mouseX.set(x)
        mouseY.set(y)
      }
    }

    const section = sectionRef.current
    if (section) {
      section.addEventListener("mousemove", handleMouseMove)
      return () => section.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  // Particle creation
  useEffect(() => {
    const createParticles = () => {
      if (!sectionRef.current) return

      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          const particle = document.createElement("div")
          particle.className = "absolute w-0.5 h-0.5 bg-white/30 rounded-full animate-float-particle pointer-events-none"
          particle.style.left = Math.random() * 100 + "%"
          particle.style.animationDelay = Math.random() * 15 + "s"
          particle.style.animationDuration = (10 + Math.random() * 10) + "s"
          
          sectionRef.current?.appendChild(particle)
          
          setTimeout(() => {
            if (particle.parentNode) {
              particle.parentNode.removeChild(particle)
            }
          }, 20000)
        }, i * 1000)
      }
    }

    createParticles()
    const interval = setInterval(createParticles, 20000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center overflow-hidden px-10 md:px-[10vw] py-[20vh] cursor-none"
    >
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Circles */}
        <motion.div
          className="absolute w-[40vw] h-[40vw] rounded-full border border-white/5 top-1/2 left-1/2"
          style={{
            background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
            x: circleMoveX,
            y: circleMoveY,
            translateX: "-50%",
            translateY: "-50%"
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />
        
        <motion.div
          className="absolute w-[60vw] h-[60vw] rounded-full border border-white/2 top-1/2 left-1/2"
          style={{
            translateX: "-50%",
            translateY: "-50%"
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            direction: "reverse"
          }}
        />
        
        <motion.div
          className="absolute w-[80vw] h-[80vw] rounded-full border border-white/[0.01] top-1/2 left-1/2"
          style={{
            translateX: "-50%",
            translateY: "-50%"
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [1, 0.8, 1]
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity
          }}
        />

        {/* Gradient Background */}
        <motion.div
          className="absolute w-[120%] h-[120%] -top-[10%] -left-[10%]"
          style={{
            background: "radial-gradient(ellipse at center, rgba(10,10,30,0.3) 0%, rgba(0,0,0,0.9) 100%)",
            x: backgroundMoveX,
            y: backgroundMoveY
          }}
        />
      </div>

      {/* Hero Text */}
      <div className="relative z-10 text-center w-full pointer-events-none">
        <motion.div
          className="text-xs md:text-base lg:text-2xl font-light tracking-[0.3em] mb-6 md:mb-12 opacity-60 uppercase"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        >
          Synthesize Assets,
        </motion.div>

        <motion.div
          className="text-4xl md:text-8xl lg:text-[12rem] font-black leading-[0.75] tracking-[-0.02em] mb-8 md:mb-16 text-white relative cursor-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block transition-all duration-300 hover:scale-105 hover:text-white/80"
            whileHover={{
              textShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
            }}
          >
            MILLION
          </motion.span>
          <br />
          <motion.span
            className="inline-block transition-all duration-300 hover:scale-105 hover:text-white/80"
            whileHover={{
              textShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
            }}
          >
            MEMBER
          </motion.span>
          <br />
          <motion.span
            className="inline-block transition-all duration-300 hover:scale-105 hover:text-white/80"
            whileHover={{
              textShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
            }}
          >
            DAO
          </motion.span>
        </motion.div>

        <motion.div
          className="text-sm md:text-xl lg:text-4xl font-light tracking-[0.1em] leading-[1.4] opacity-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut" }}
        >
          For Community and Value.
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0% {
            transform: translateY(100vh) translateX(0px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-10vh) translateX(100px);
            opacity: 0;
          }
        }
        .animate-float-particle {
          animation: float-particle 15s linear infinite;
        }
      `}</style>
    </section>
  )
}
