'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { MapPin } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 sm:py-32 section-bg section-border border-t"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="glass rounded-2xl p-8 sm:p-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
              About Xentrix
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Xentrix is a South African IT company dedicated to delivering premium
              technical solutions. We combine engineering excellence with a deep
              understanding of modern technology to build reliable, scalable systems
              that drive business success.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our team specializes in full-stack development, cloud architecture, and
              software engineering best practices. We believe in writing clean, maintainable
              code and building solutions that stand the test of time.
            </p>

            {/* Location */}
            <div className="flex items-center space-x-2 text-gray-400 mb-8">
              <MapPin size={20} />
              <span>South Africa</span>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-800">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
