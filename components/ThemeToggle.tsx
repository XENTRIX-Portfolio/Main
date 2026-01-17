'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Return placeholder during SSR
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg border" />
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="w-10 h-10 rounded-lg flex items-center justify-center border hover:border-primary transition-colors duration-300 focus-visible:outline-none"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Sun size={20} className="text-text-primary" />
        ) : (
          <Moon size={20} className="text-text-primary" />
        )}
      </motion.div>
    </motion.button>
  )
}
