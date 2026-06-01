'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const stats = [
  { value: '500+', label: 'Students Trained' },
  { value: '12+', label: 'Art Forms Taught' },
  { value: '5.0', label: 'Google Rating' },
  { value: '81', label: 'JustDial Reviews' },
]

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('is-visible')),
      { threshold: 0.15 }
    )
    sectionRef.current?.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="relative py-28 overflow-hidden bg-paper-light">
      {/* Background ornament */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,35,53,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Left — Image with decorative elements */}
        <div className="fade-in-section relative flex items-center justify-center">
          <div className="classical-card w-72 h-72 md:w-96 md:h-96 rounded-3xl relative overflow-hidden shadow-2xl border-2 border-gold/30 group">
            {/* Harmonium Image */}
            <Image
              src="/harmonium.jpg"
              alt="Harmonium - Classical Indian Musical Instrument"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              quality={90}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-text-primary/70 via-text-primary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Decorative musical note in corner */}
            <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-gold/20 backdrop-blur-sm border-2 border-gold/40 flex items-center justify-center">
              <span className="font-display text-3xl text-gold drop-shadow-lg">𝄞</span>
            </div>

            {/* Orbiting notes */}
            {['♩', '♪', '♫', '♬'].map((note, i) => (
              <span
                key={i}
                className="absolute text-gold/80 font-display text-2xl note-float drop-shadow-lg"
                style={{
                  top: `${[8, 15, 70, 75][i]}%`,
                  left: `${[75, 5, 85, 10][i]}%`,
                  animationDelay: `${i * -1.5}s`,
                }}
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Right — text content */}
        <div className="fade-in-section space-y-6">
          {/* Section label */}
          <div className="flex items-center gap-3">
            <div className="h-px w-10 bg-saffron" />
            <span className="text-gold text-xs tracking-[0.35em] uppercase font-body">
              Our Story
            </span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl font-light text-text-primary leading-snug">
            The Only Place to Learn{' '}
            <em className="text-gold not-italic font-semibold">Classical Music</em>{' '}
            in Ghazipur
          </h2>

          <p className="font-body text-text-muted text-base leading-relaxed">
            Gandharva Music Academy was founded with a singular vision: to preserve and propagate
            the rich heritage of Indian classical music in the Ghazipur region. We offer
            comprehensive training in both classical and contemporary forms, nurturing students
            from beginners to advanced levels.
          </p>
          <p className="font-body text-text-muted text-base leading-relaxed">
            Our students consistently describe us as "the perfect place to make a career in music."
            Whether you dream of performing on stage or simply wish to connect with your cultural
            roots through music, our experienced instructors guide every step of your journey.
          </p>

          {/* Location */}
          <div className="flex items-start gap-3 pt-2">
            <span className="text-gold mt-0.5">📍</span>
            <div>
              <p className="font-body text-text-primary text-sm">
                Eurokids Pre-school, Vishambhar Nath Shiv Mandir, Lanka
              </p>
              <p className="font-body text-text-muted text-sm">Ghazipur, Uttar Pradesh — 233001</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gold/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl text-gold font-semibold">
                  {s.value}
                </div>
                <div className="font-body text-text-muted text-xs mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
