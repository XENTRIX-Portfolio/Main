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

  const words = ['Premium', 'IT Solutions']

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Staggered Hero Text */}
          <motion.h1
            className="text-hero mb-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {words.map((word, index) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: [0.33, 1, 0.68, 1],
                    },
                  },
                }}
                className={index === 1 ? 'text-primary' : 'text-foreground'}
              >
                {word}
                {index === 0 && <br />}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="text-lead text-text-secondary mb-12 max-w-2xl mx-auto"
          >
            Engineering excellence from South Africa. Building reliable, scalable
            solutions for the modern world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.33, 1, 0.68, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
              className="btn-premium bg-primary text-white dark:text-black font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Get In Touch
            </motion.a>
            <motion.button
              onClick={scrollToAbout}
              className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-200 focus-visible:outline-none px-6 py-3.5 border rounded-lg hover:border-primary group"
              aria-label="Learn more"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Learn More</span>
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
                transition={shouldReduceMotion ? {} : {
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <ArrowDown size={18} className="group-hover:text-primary" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-tiny text-text-tertiary uppercase tracking-wider">Scroll</span>
        <motion.div
          animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
          transition={shouldReduceMotion ? {} : {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <ArrowDown className="text-text-tertiary" size={20} />
        </motion.div>
      </motion.div>
    </section>
  )
}
