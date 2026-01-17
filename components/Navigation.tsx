'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'
import { useScrollProgress, useMagnetic } from '@/lib/hooks'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Technologies', href: '#technologies' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const scrollProgress = useScrollProgress()
  const logoRef = useRef<HTMLAnchorElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useMagnetic(logoRef, 0.2)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <motion.nav
        ref={navRef}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 ${
          isScrolled 
            ? 'h-16 glass shadow-lg' 
            : 'h-20 bg-transparent'
        }`}
        style={{
          background: isScrolled 
            ? undefined 
            : 'transparent',
        }}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl w-full">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <motion.a
              ref={logoRef}
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center space-x-3 focus-visible:outline-none magnetic"
              aria-label="Xentrix Home"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className="relative w-10 h-10">
                <Image
                  src="/logo.jpg"
                  alt="Xentrix Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-lg font-light tracking-[0.1em] text-foreground">XENTRIX</span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="relative text-sm text-text-secondary hover:text-primary transition-colors duration-200 focus-visible:outline-none group"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button & Theme Toggle */}
            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-text-secondary hover:text-primary transition-colors focus-visible:outline-none"
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 top-20 bg-background/95 backdrop-blur-xl z-40 md:hidden"
            >
              <div className="container mx-auto px-6 py-12">
                <div className="flex flex-col space-y-8">
                  {navItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-2xl font-light text-text-primary hover:text-primary transition-colors duration-200 py-2 focus-visible:outline-none"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
