'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">Premium</span>
            <br />
            <span className="text-primary">IT Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Engineering excellence from South Africa. Building reliable, scalable
            solutions for the modern world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200 focus-visible:outline-none"
            >
              Get In Touch
            </a>
            <button
              onClick={scrollToAbout}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors duration-200 focus-visible:outline-none"
              aria-label="Learn more"
            >
              <span>Learn More</span>
              <ArrowDown size={20} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 10, 0] }}
          transition={shouldReduceMotion ? {} : { 
            duration: 2, 
            repeat: Infinity, 
            ease: 'easeInOut',
          }}
        >
          <ArrowDown className="text-gray-500" size={24} />
        </motion.div>
      </motion.div>
    </section>
  )
}
