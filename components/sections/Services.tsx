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
            Our Services
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto opacity-70">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            const number = String(index + 1).padStart(2, '0')
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1, 
                  ease: [0.33, 1, 0.68, 1] 
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="card-premium p-10 group relative overflow-hidden"
              >
                {/* Number Prefix */}
                <div className="absolute top-6 right-6 text-[4rem] font-light text-text-tertiary opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  {number}
                </div>

                {/* Icon Container */}
                <motion.div
                  className="mb-8 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={28} />
                </motion.div>

                {/* Decorative Line */}
                <div className="w-12 h-[1.5px] bg-primary/30 mb-6 group-hover:w-16 transition-all duration-300" />

                <h3 className="text-h3 font-medium mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-body text-text-secondary leading-relaxed">
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
