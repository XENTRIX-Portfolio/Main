'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const technologies = [
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'JavaScript', color: '#f7df1e' },
  { name: 'Python', color: '#3776ab' },
  { name: 'React', color: '#61dafb' },
  { name: 'Next.js', color: '#000000' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Tailwind CSS', color: '#06b6d4' },
  { name: 'Git', color: '#f05032' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'PostgreSQL', color: '#4169e1' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'Redis', color: '#dc382d' },
  { name: 'AWS', color: '#ff9900' },
  { name: 'Google Cloud', color: '#4285f4' },
]

export default function Technologies() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="technologies"
      ref={ref}
      className="relative py-section-mobile md:py-section section-bg-alt section-border"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-section font-normal mb-4 text-foreground">
            Technologies
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto opacity-70">
            Our tech stack spans modern languages, frameworks, and cloud platforms
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: Math.min(index * 0.04, 0.6), 
                ease: [0.33, 1, 0.68, 1] 
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary/10 text-small font-medium text-text-primary border border-primary/20 hover:border-primary hover:bg-primary/15 transition-all duration-200 glass"
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
