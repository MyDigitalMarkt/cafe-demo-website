'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/constants'
import { Menu, X, Coffee } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname() ?? '/'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Coffee className="w-7 h-7 text-primary transition-transform duration-300 group-hover:rotate-12" />
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground">
              De Gouden Boon
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS?.map?.((link: any) => {
              const isActive = pathname === link?.href
              return (
                <Link
                  key={link?.href ?? ''}
                  href={link?.href ?? '/'}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground/70 hover:text-foreground hover:bg-accent'
                  }`}
                >
                  {link?.label ?? ''}
                </Link>
              )
            }) ?? []}
            <Link
              href="/contact"
              className="ml-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Reserveren
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Menu openen"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS?.map?.((link: any) => {
                const isActive = pathname === link?.href
                return (
                  <Link
                    key={link?.href ?? ''}
                    href={link?.href ?? '/'}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground/70 hover:bg-accent'
                    }`}
                  >
                    {link?.label ?? ''}
                  </Link>
                )
              }) ?? []}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg text-base font-semibold text-center"
              >
                Reserveren
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
