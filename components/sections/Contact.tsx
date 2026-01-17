'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, FormEvent, useEffect } from 'react'
import { Send, Mail, Github, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  // Initialize EmailJS (you'll need to set these environment variables)
  useEffect(() => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    }
  }, [])

  const validateForm = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required')
      return false
    }
    if (!formData.email.trim()) {
      setErrorMessage('Email is required')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Please enter a valid email address')
      return false
    }
    if (!formData.message.trim()) {
      setErrorMessage('Message is required')
      return false
    }
    return true
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrorMessage('')

    if (!validateForm()) {
      setStatus('error')
      return
    }

    setStatus('sending')

    try {
      // Using EmailJS - update these with your actual service IDs
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please set environment variables.')
      }

      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, publicKey)

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      console.error('Error sending email:', error)
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again or contact us directly.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (status === 'error') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-section-mobile md:py-section section-bg section-border"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-section font-normal mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-body-lg text-text-secondary max-w-2xl mx-auto opacity-70">
            Have a project in mind? Let&apos;s discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="card-premium p-10 md:p-14"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-small font-medium text-text-primary mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 input-bg rounded-md text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-small font-medium text-text-primary mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 input-bg rounded-md text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-small font-medium text-text-primary mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  minLength={120}
                  className="w-full min-h-[120px] px-4 py-3 input-bg rounded-md text-foreground placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors duration-200 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Error Message */}
              {status === 'error' && errorMessage && (
                <div className="flex items-center space-x-2 text-red-500 bg-red-500/10 border border-red-500/30 rounded-md p-4">
                  <AlertCircle size={18} />
                  <span className="text-small">{errorMessage}</span>
                </div>
              )}

              {/* Success Message */}
              {status === 'success' && (
                <div className="flex items-center space-x-2 text-green-500 bg-green-500/10 border border-green-500/30 rounded-md p-4">
                  <CheckCircle size={18} />
                  <span className="text-small">
                    Message sent successfully! We&apos;ll get back to you soon.
                  </span>
                </div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="btn-premium w-full sm:w-auto bg-primary text-white dark:text-black font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Contact Links */}
            <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <a
                href="mailto:contact@xentrix.co.za"
                className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-200 focus-visible:outline-none"
              >
                <Mail size={18} />
                <span className="text-small">contact@xentrix.co.za</span>
              </a>
              <a
                href="https://github.com/XENTRIX-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-200 focus-visible:outline-none"
              >
                <Github size={18} />
                <span className="text-small">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
