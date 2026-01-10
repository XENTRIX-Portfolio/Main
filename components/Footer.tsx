'use client'

import { motion } from 'framer-motion'
import { Github, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-gray-800 bg-black/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Xentrix. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/XENTRIX-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-200 focus-visible:outline-none"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:contact@xentrix.co.za"
              className="text-gray-400 hover:text-primary transition-colors duration-200 focus-visible:outline-none"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors duration-200 focus-visible:outline-none"
            aria-label="Back to top"
          >
            <span className="text-sm font-medium">Back to top</span>
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
