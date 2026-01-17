'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { MapPin } from 'lucide-react'

// Animated counter hook
function useCountUp(end: number, duration = 2000, isInView: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, isInView])

  return count
}

// Stat component that uses the hook
function StatItem({ 
  value, 
  suffix, 
  label, 
  index, 
  isInView 
}: { 
  value: number
  suffix: string
  label: string
  index: number
  isInView: boolean
}) {
  const count = useCountUp(value, 2000, isInView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.9 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.3 + index * 0.15, 
        ease: [0.33, 1, 0.68, 1] 
      }}
      className="text-center relative"
    >
      <div className="text-[3rem] md:text-[3.5rem] font-semibold text-primary mb-3 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-small text-text-secondary uppercase tracking-wider">
        {label}
      </div>
      {/* Decorative dot */}
      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary/30" />
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    { value: 5, suffix: '+', label: 'Years Experience' },
    { value: 50, suffix: '+', label: 'Projects Delivered' },
    { value: 100, suffix: '%', label: 'Client Satisfaction' },
  ]

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-section-mobile md:py-section section-bg section-border"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-section font-normal mb-8 text-foreground">
            About Xentrix
          </h2>
          <div className="space-y-6 mb-12">
            <p className="text-body-lg text-text-primary leading-relaxed">
              Xentrix is a South African IT company dedicated to delivering premium
              technical solutions. We combine engineering excellence with a deep
              understanding of modern technology to build reliable, scalable systems
              that drive business success.
            </p>
            <p className="text-body-lg text-text-primary leading-relaxed">
              Our team specializes in full-stack development, cloud architecture, and
              software engineering best practices. We believe in writing clean, maintainable
              code and building solutions that stand the test of time.
            </p>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 text-text-secondary mb-12">
            <MapPin size={18} />
            <span className="text-body">South Africa</span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
