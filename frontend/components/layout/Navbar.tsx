'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-paper-warm/98 backdrop-blur-lg border-b border-gold/30 shadow-xl py-3'
          : 'bg-paper-warm/95 backdrop-blur-md border-b border-gold/20 shadow-md py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight group transition-transform duration-300 hover:scale-105">
          <span className="font-display text-2xl font-semibold text-saffron tracking-wide">
            Gandharva
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-text-muted group-hover:text-gold transition-colors">
            Music Academy
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-body text-text-secondary hover:text-saffron transition-all duration-300 tracking-wider uppercase relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-saffron transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <Link
          href="/contact"
          className="hidden md:block px-6 py-2.5 text-sm font-body font-semibold bg-saffron/10 border-2 border-saffron/40 text-saffron rounded-full hover:bg-saffron hover:text-paper-light transition-all duration-300 tracking-wide shadow-lg hover:scale-105 hover:shadow-saffron/30"
        >
          Enroll Now
        </Link>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-saffron"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-paper-warm/98 backdrop-blur-lg border-t border-gold/20 px-6 py-6 shadow-lg">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-text-primary font-body text-lg hover:text-saffron transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="inline-block mt-2 px-6 py-3 text-sm font-body font-medium bg-saffron text-paper-light rounded-full hover:bg-amber transition-colors"
              >
                Enroll Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
