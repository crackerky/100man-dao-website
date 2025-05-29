"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="px-10 py-[150px] text-center">
      <motion.h2
        className="text-4xl md:text-6xl lg:text-8xl font-thin mb-15 tracking-[0.1em]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Link
          href="#"
          className="inline-block text-white text-lg tracking-wider border border-white px-10 py-5 hover:bg-white hover:text-black transition-all duration-300 group"
        >
          <motion.span
            className="block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            JOIN MILLION MEMBER DAO
          </motion.span>
        </Link>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="mt-20 flex justify-center space-x-8 opacity-30"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-white rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>
    </section>
  )
}
