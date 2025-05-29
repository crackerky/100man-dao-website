"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Navigation() {
  const navLeftItems = [
    { href: "#", label: "INDEX" },
    { href: "#profile", label: "PROFILE" },
    { href: "#works", label: "WORKS" },
    { href: "#contact", label: "CONTACT" },
  ]

  const navRightItems = [
    { href: "#", label: "X" },
    { href: "#", label: "Discord" },
    { href: "#", label: "YouTube" },
    { href: "#", label: "GitHub" },
  ]

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[1000] px-10 py-5 flex justify-between items-start"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Navigation */}
      <div className="flex flex-col gap-1.5">
        {navLeftItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: "easeOut" 
            }}
          >
            <Link
              href={item.href}
              className="text-white text-sm tracking-wider font-normal hover:opacity-70 transition-opacity duration-300"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Right Navigation */}
      <div className="hidden md:flex gap-5">
        {navRightItems.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1 + 0.2,
              ease: "easeOut" 
            }}
          >
            <Link
              href={item.href}
              className="text-white text-xs hover:opacity-70 transition-opacity duration-300"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  )
}
