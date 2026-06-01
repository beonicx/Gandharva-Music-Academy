'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/courses', label: 'Courses' },
  { href: '/instruments', label: 'Instruments' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-paper-warm/98 backdrop-blur-lg border-b border-gold/30 shadow-xl py-2 sm:py-3'
          : 'bg-paper-warm/95 backdrop-blur-md border-b border-gold/20 shadow-md py-3 sm:py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-tight group transition-transform duration-300 hover:scale-105 relative z-50"
          onClick={() => setOpen(false)}
        >
          <span className="font-display text-xl sm:text-2xl font-semibold text-saffron tracking-wide">
            Gandharva
          </span>
          <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-text-muted group-hover:text-gold transition-colors">
            Music Academy
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-body transition-all duration-300 tracking-wider uppercase relative group ${
                  isActive(link.href)
                    ? 'text-saffron font-semibold'
                    : 'text-text-secondary hover:text-saffron'
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-saffron transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Link
          href="/contact"
          className="hidden lg:block px-5 xl:px-6 py-2 xl:py-2.5 text-sm font-body font-semibold bg-saffron/10 border-2 border-saffron/40 text-saffron rounded-full hover:bg-saffron hover:text-paper-light transition-all duration-300 tracking-wide shadow-lg hover:scale-105 hover:shadow-saffron/30"
        >
          Enroll Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-saffron p-2 -mr-2 relative z-50 transition-transform duration-300 active:scale-90"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} className="sm:w-6 sm:h-6" /> : <Menu size={24} className="sm:w-6 sm:h-6" />}
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-text-primary/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
        style={{ top: scrolled ? '3.5rem' : '4rem' }}
      />

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed left-0 right-0 bg-paper-warm/98 backdrop-blur-xl border-b border-gold/20 shadow-2xl transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ top: scrolled ? '3.5rem' : '4rem' }}
      >
        <div className="px-4 sm:px-6 py-6 sm:py-8 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <ul className="flex flex-col gap-1 mb-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-body text-base sm:text-lg transition-all duration-200 ${
                    isActive(link.href)
                      ? 'bg-saffron/10 text-saffron font-semibold'
                      : 'text-text-primary hover:bg-gold/10 hover:text-saffron'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-gold/20">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center px-6 py-3.5 text-sm sm:text-base font-body font-semibold bg-saffron text-paper-light rounded-full hover:bg-amber transition-all duration-300 shadow-lg active:scale-95"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
