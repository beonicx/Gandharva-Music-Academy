'use client'

import { useEffect, useRef, useState } from 'react'
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const courses = [
  'Classical Singing', 'Semi-Classical Singing', 'Folk Singing',
  'Harmonium', 'Casio / Keyboard', 'Guitar', 'Sitar',
  'Tabla', 'Dholak', 'Drums', 'Cajon',
  'Kathak', 'Bollywood Dance',
]

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', course: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-paper-light border-2 border-gold/30 text-text-primary font-body text-sm px-4 py-3 rounded-xl focus:outline-none focus:border-saffron focus:ring-4 focus:ring-saffron/10 placeholder-text-muted/50 transition-all duration-300 hover:border-gold/50'

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-28 bg-gradient-to-b from-paper-warm via-paper-antique to-paper-light overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-saffron/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson/3 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="fade-in-section text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-saffron/10 via-gold/10 to-amber/10 border border-gold/20">
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-saffron to-gold" />
            <span className="text-gold-dark text-xs tracking-[0.35em] uppercase font-body font-semibold">
              Get In Touch
            </span>
            <div className="h-px w-8 bg-gradient-to-r from-gold via-saffron to-transparent" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light text-text-primary mb-4">
            Begin Your{' '}
            <span className="shimmer-text font-semibold">Musical Journey</span>
          </h2>
          <p className="font-body text-text-secondary text-base leading-relaxed">
            Fill in the form below and we'll reach out to schedule your first class.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">
          {/* Contact Info — left */}
          <div className="fade-in-section md:col-span-2 space-y-5">
            {[
              {
                icon: <Phone size={20} />,
                label: 'Call Us',
                value: '+91 63882 50645',
                link: 'tel:+916388250645',
                color: 'saffron',
                bgGradient: 'from-saffron/10 to-amber/5',
              },
              {
                icon: <MapPin size={20} />,
                label: 'Find Us',
                value: 'Eurokids Pre-school, Vishambhar Nath Shiv Mandir, Lanka, Ghazipur — 233001',
                color: 'gold',
                bgGradient: 'from-gold/10 to-amber/5',
              },
              {
                icon: <Clock size={20} />,
                label: 'Hours',
                value: 'Mon – Sat: 2:00 PM – 8:00 PM\nSunday: By appointment',
                color: 'amber',
                bgGradient: 'from-amber/10 to-gold/5',
              },
            ].map((info) => (
              <div
                key={info.label}
                className="classical-card group flex gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-2 border-gold/20 hover:border-gold/40"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.bgGradient} border-2 border-${info.color}/30 flex items-center justify-center text-${info.color} flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <div className="flex-1">
                  <div className="text-text-muted text-xs uppercase tracking-[0.2em] font-body mb-2 font-semibold">
                    {info.label}
                  </div>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="font-body text-text-primary text-base font-medium hover:text-saffron transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="font-body text-text-secondary text-sm whitespace-pre-line leading-relaxed">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* YouTube link */}
            <div className="classical-card group flex gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border-2 border-crimson/20 hover:border-crimson/40">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/15 to-crimson/10 border-2 border-red-500/30 flex items-center justify-center text-red-600 flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-text-muted text-xs uppercase tracking-[0.2em] font-body mb-2 font-semibold">
                  Watch Us
                </div>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-text-secondary text-sm hover:text-red-600 transition-colors flex items-center gap-2 group"
                >
                  Gandharva Music Academy on YouTube
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>

            {/* Decorative element */}
            <div className="classical-card p-6 rounded-2xl border-2 border-gold/20 text-center">
              <div className="text-4xl mb-3">🎵</div>
              <p className="font-display text-lg text-text-primary mb-1">Quick Response</p>
              <p className="text-text-muted text-xs">We typically respond within 24 hours</p>
            </div>
          </div>

          {/* Form — right */}
          <div className="fade-in-section md:col-span-3">
            <div className="classical-card gold-glow p-8 md:p-10 rounded-3xl border-2 border-gold/30 shadow-2xl"
            >
              {status === 'success' ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-saffron/20 to-gold/20 flex items-center justify-center">
                    <CheckCircle className="text-saffron" size={48} strokeWidth={2.5} />
                  </div>
                  <h3 className="font-display text-3xl text-text-primary mb-3">
                    Enquiry Received!
                  </h3>
                  <p className="font-body text-text-secondary text-base mb-8 max-w-md mx-auto">
                    Thank you for your interest! We'll contact you shortly to schedule your first session.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary"
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-text-primary text-xs uppercase tracking-[0.15em] font-body font-semibold mb-3">
                        Full Name <span className="text-saffron">*</span>
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-text-primary text-xs uppercase tracking-[0.15em] font-body font-semibold mb-3">
                        Phone Number <span className="text-saffron">*</span>
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 XXXXX XXXXX"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-primary text-xs uppercase tracking-[0.15em] font-body font-semibold mb-3">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className="block text-text-primary text-xs uppercase tracking-[0.15em] font-body font-semibold mb-3">
                      Interested Course <span className="text-saffron">*</span>
                    </label>
                    <select
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    >
                      <option value="" disabled>Select a course</option>
                      {courses.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-text-primary text-xs uppercase tracking-[0.15em] font-body font-semibold mb-3">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your experience level or any questions..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200">
                      <p className="text-red-600 text-sm font-body font-medium">
                        ⚠️ Something went wrong. Please try calling us directly at +91 63882 50645.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-5 bg-gradient-to-r from-saffron to-amber text-paper-light font-body font-bold text-sm tracking-widest uppercase rounded-xl hover:shadow-2xl hover:shadow-saffron/30 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                  >
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-paper-light/30 border-t-paper-light rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Enquiry
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-text-muted text-xs">
                    By submitting this form, you agree to be contacted by our team.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
