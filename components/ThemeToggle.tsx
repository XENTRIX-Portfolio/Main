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
      <div className="p-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/50 border border-gray-700/50 dark:border-gray-700/50 light:border-gray-300/50 w-[40px] h-[40px]" />
    )
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="p-2 rounded-lg bg-gray-800/50 dark:bg-gray-800/50 light:bg-gray-200/50 hover:bg-gray-700/50 dark:hover:bg-gray-700/50 light:hover:bg-gray-300/50 border border-gray-700/50 dark:border-gray-700/50 light:border-gray-300/50 transition-colors duration-200 focus-visible:outline-none"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun size={20} className="text-gray-300" />
      ) : (
        <Moon size={20} className="text-gray-600 dark:text-gray-300" />
      )}
    </motion.button>
  )
}
