'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Cloud, Database, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'End-to-end web applications built with modern frameworks and best practices.',
  },
  {
    icon: Cloud,
    title: 'Cloud Architecture',
    description: 'Scalable cloud solutions designed for performance and reliability.',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Optimized data structures and efficient database management systems.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Solutions',
    description: 'Cross-platform mobile applications with native performance.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section
      id="services"
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
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                whileHover={{ y: -8 }}
                className="glass rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="mb-6 inline-flex p-4 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
