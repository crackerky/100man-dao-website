"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Logo } from "@/components/atoms/Logo"
import { Button } from "@/components/atoms/Button"
import { NavItem } from "@/components/molecules/NavItem"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navigationItems = [
  { label: "ホーム", href: "/" },
  { label: "DAOについて", href: "/about" },
  { label: "エコシステム", href: "/ecosystem" },
  { label: "ロードマップ", href: "/roadmap" },
  { label: "コミュニティ", href: "/community" },
  { label: "お問い合わせ", href: "/contact" },
]

export interface NavigationProps {
  className?: string
}

const Navigation = React.forwardRef<HTMLElement, NavigationProps>(
  ({ className }, ref) => {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
      <motion.nav
        ref={ref}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-card backdrop-blur-lg shadow-lg"
            : "bg-transparent",
          className
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Logo isAnimated />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <NavItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  isActive={pathname === item.href}
                />
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="gradient" size="sm">
                参加する
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-white/10"
          >
            <div className="px-4 py-3 space-y-1">
              {navigationItems.map((item) => (
                <NavItem
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  isActive={pathname === item.href}
                  className="block w-full text-left px-3 py-2"
                />
              ))}
              <div className="pt-3">
                <Button variant="gradient" className="w-full">
                  参加する
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>
    )
  }
)
Navigation.displayName = "Navigation"

export { Navigation }
