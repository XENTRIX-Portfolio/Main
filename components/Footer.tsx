'use client'

import { motion } from 'framer-motion'
import { Github, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t py-12 bg-background">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-tiny text-text-muted opacity-50">
            © {new Date().getFullYear()} Xentrix. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/XENTRIX-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-primary transition-colors duration-200 focus-visible:outline-none"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:contact@xentrix.co.za"
              className="text-text-secondary hover:text-primary transition-colors duration-200 focus-visible:outline-none"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-200 focus-visible:outline-none"
            aria-label="Back to top"
          >
            <span className="text-small font-medium">Back to top</span>
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
