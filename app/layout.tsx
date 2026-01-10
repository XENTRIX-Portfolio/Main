import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Xentrix - Premium IT Solutions',
  description: 'South African IT company delivering premium technical solutions and engineering excellence.',
  keywords: ['IT', 'South Africa', 'software development', 'engineering'],
  authors: [{ name: 'Xentrix' }],
  openGraph: {
    title: 'Xentrix - Premium IT Solutions',
    description: 'South African IT company delivering premium technical solutions and engineering excellence.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
