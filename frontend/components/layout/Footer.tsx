import Link from 'next/link'

export default function Footer() {
  return (
    <footer
      className="relative pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8 border-t-2 border-gold/20 bg-paper-warm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 mb-10 sm:mb-12">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="font-display text-2xl sm:text-3xl text-gold mb-1">Gandharva</div>
            <div className="text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-text-muted mb-3 sm:mb-4">
              Music Academy
            </div>
            <p className="font-body text-text-muted text-sm sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Preserving and propagating the heritage of Indian classical music in Ghazipur since
              our founding. Rated 5.0 ★ on Google.
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center sm:text-left">
            <h4 className="font-body text-xs sm:text-xs uppercase tracking-widest text-gold mb-4 sm:mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 sm:space-y-3">
              {[
                { href: '#about', label: 'About Us' },
                { href: '#courses', label: 'Courses' },
                { href: '#reviews', label: 'Reviews' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-text-muted text-sm sm:text-sm hover:text-gold transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h4 className="font-body text-xs sm:text-xs uppercase tracking-widest text-gold mb-4 sm:mb-5">
              Contact
            </h4>
            <div className="space-y-2.5 sm:space-y-3 font-body text-text-muted text-sm sm:text-sm">
              <p>
                <a href="tel:+916388250645" className="hover:text-gold transition-colors">
                  +91 63882 50645
                </a>
              </p>
              <p className="leading-relaxed">
                Lanka, Ghazipur<br />Uttar Pradesh — 233001
              </p>
              <p>Mon–Sat: 2 PM – 8 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 sm:pt-8 border-t border-gold/15 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="font-body text-text-muted text-xs sm:text-xs text-center sm:text-left">
            © {new Date().getFullYear()} Gandharva Music Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-text-muted text-xs sm:text-xs font-body">
            <span>🎵</span>
            <span>Where music becomes life</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
