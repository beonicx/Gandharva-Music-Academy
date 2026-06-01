'use client'

import { useEffect, useRef } from 'react'

const categories = [
  {
    title: 'Vocal',
    color: '#9B2335',
    items: [
      { name: 'Classical Singing', icon: '🎤', desc: 'Hindustani classical with ragas & talas' },
      { name: 'Semi-Classical', icon: '🎵', desc: 'Thumri, dadra, ghazal forms' },
      { name: 'Folk Singing', icon: '🎶', desc: 'Regional folk traditions of UP & beyond' },
    ],
  },
  {
    title: 'String Instruments',
    color: '#D4A843',
    items: [
      { name: 'Guitar', icon: '🎸', desc: 'Acoustic & electric fundamentals' },
      { name: 'Sitar', icon: '🪕', desc: 'Classical sitar in Hindustani tradition' },
      { name: 'Harmonium', icon: '🎹', desc: 'Foundational accompaniment instrument' },
    ],
  },
  {
    title: 'Percussion',
    color: '#E8861A',
    items: [
      { name: 'Tabla', icon: '🥁', desc: 'Classical rhythmic training' },
      { name: 'Dholak', icon: '🪘', desc: 'Traditional folk percussion' },
      { name: 'Drums', icon: '🥁', desc: 'Modern drum kit technique' },
      { name: 'Cajon', icon: '🪵', desc: 'Afro-Peruvian box drum' },
    ],
  },
  {
    title: 'Keys',
    color: '#6B8E6B',
    items: [
      { name: 'Casio / Keyboard', icon: '🎹', desc: 'Keys, chords, composition basics' },
    ],
  },
  {
    title: 'Dance',
    color: '#7B5EA7',
    items: [
      { name: 'Kathak', icon: '💃', desc: 'Classical North Indian dance' },
      { name: 'Bollywood Dance', icon: '🕺', desc: 'Contemporary film-style choreography' },
    ],
  },
]

export default function Courses() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="relative py-28 section-warm"
    >
      {/* Section header */}
      <div className="fade-in-section text-center max-w-2xl mx-auto px-6 mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-10 bg-saffron" />
          <span className="text-gold text-xs tracking-[0.35em] uppercase font-body">
            What We Teach
          </span>
          <div className="h-px w-10 bg-saffron" />
        </div>
        <h2 className="font-display text-4xl md:text-6xl font-light text-text-primary mb-4">
          Our Courses &{' '}
          <span className="text-gold font-semibold italic">Instruments</span>
        </h2>
        <p className="font-body text-text-muted text-base leading-relaxed">
          From ancient classical traditions to contemporary forms — we offer diverse programs
          for students of all ages and skill levels.
        </p>
      </div>

      {/* Category sections */}
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        {categories.map((cat, ci) => (
          <div key={cat.title} className="fade-in-section">
            {/* Category label */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-2 h-8 rounded-full"
                style={{ background: cat.color }}
              />
              <h3
                className="font-display text-2xl font-semibold"
                style={{ color: cat.color }}
              >
                {cat.title}
              </h3>
              <div className="flex-1 h-px bg-saffron/08" style={{ background: `${cat.color}15` }} />
            </div>

            {/* Instrument cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cat.items.map((item) => (
                <div
                  key={item.name}
                  className="group classical-card p-6 rounded-2xl border-2 cursor-default transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{
                    borderColor: `${cat.color}30`,
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = `${cat.color}60`
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 48px ${cat.color}20`
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = `${cat.color}30`
                    ;(e.currentTarget as HTMLDivElement).style.boxShadow = ''
                  }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h4 className="font-display text-lg font-semibold text-text-primary mb-2">
                    {item.name}
                  </h4>
                  <p className="font-body text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Enquire banner */}
      <div className="fade-in-section max-w-4xl mx-auto mt-20 px-6">
        <div className="classical-card ornate-corners rounded-3xl p-8 md:p-12 text-center relative overflow-hidden gold-glow">
          <div
            className="absolute inset-0 rounded-3xl opacity-40"
            style={{
              background:
                'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(232,134,26,0.08) 0%, transparent 70%)',
            }}
          />
          <p className="font-body text-gold-dark text-sm tracking-[0.2em] uppercase mb-3 relative z-10">
            All levels welcome
          </p>
          <h3 className="font-display text-3xl md:text-4xl text-text-primary font-light mb-6 relative z-10">
            Not sure which course is right for you?
          </h3>
          <a
            href="#contact"
            className="relative z-10 inline-block px-8 py-4 bg-saffron text-paper-light font-body font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-amber transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
