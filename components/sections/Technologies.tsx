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
      className="relative py-24 sm:py-32 section-bg-alt section-border border-t"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-foreground">
            Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Our tech stack spans modern languages, frameworks, and cloud platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: Math.min(index * 0.05, 0.5), ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-gray-900/30 border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center text-white font-bold text-sm transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: tech.color }}
              >
                {tech.name.charAt(0)}
              </div>
              <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
