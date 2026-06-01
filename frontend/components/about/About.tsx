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
    <section id="about" ref={sectionRef} className="relative py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden bg-paper-light">
      {/* Background ornament */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,35,53,0.07) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
        {/* Left — Image with decorative elements */}
        <div className="fade-in-section relative flex items-center justify-center order-2 md:order-1">
          <div className="classical-card w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl sm:rounded-3xl relative overflow-hidden shadow-2xl border-2 border-gold/30 group">
            {/* Kathak Dancer Image */}
            <Image
              src="/kathak-dancer.jpg"
              alt="kathak Dancer - Classical Indian Dance"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              quality={90}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-text-primary/70 via-text-primary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

            {/* Decorative musical note in corner */}
            <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gold/20 backdrop-blur-sm border-2 border-gold/40 flex items-center justify-center">
              <span className="font-display text-2xl sm:text-2xl md:text-3xl text-gold drop-shadow-lg">𝄞</span>
            </div>

            {/* Orbiting notes */}
            {['♩', '♪', '♫', '♬'].map((note, i) => (
              <span
                key={i}
                className="absolute text-gold/80 font-display text-lg sm:text-xl md:text-2xl note-float drop-shadow-lg"
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
        <div className="fade-in-section space-y-5 sm:space-y-6 order-1 md:order-2 text-center md:text-left">
          {/* Section label */}
          <div className="flex items-center gap-2 sm:gap-3 justify-center md:justify-start">
            <div className="h-px w-8 sm:w-10 bg-saffron" />
            <span className="text-gold text-xs sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase font-body">
              Our Story
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-light text-text-primary leading-snug">
            The Only Place to Learn{' '}
            <em className="text-gold not-italic font-semibold">Classical Music</em>{' '}
            in Ghazipur
          </h2>

          <p className="font-body text-text-muted text-base sm:text-base leading-relaxed">
            Gandharva Music Academy was founded with a singular vision: to preserve and propagate
            the rich heritage of Indian classical music in the Ghazipur region. We offer
            comprehensive training in both classical and contemporary forms, nurturing students
            from beginners to advanced levels.
          </p>
          <p className="font-body text-text-muted text-base sm:text-base leading-relaxed">
            Our students consistently describe us as "the perfect place to make a career in music."
            Whether you dream of performing on stage or simply wish to connect with your cultural
            roots through music, our experienced instructors guide every step of your journey.
          </p>

          {/* Location */}
          <div className="flex items-start gap-2.5 sm:gap-3 pt-2 justify-center md:justify-start">
            <span className="text-gold mt-0.5 text-lg">📍</span>
            <div className="text-left">
              <p className="font-body text-text-primary text-sm sm:text-sm">
                Eurokids Pre-school, Vishambhar Nath Shiv Mandir, Lanka
              </p>
              <p className="font-body text-text-muted text-sm sm:text-sm">Ghazipur, Uttar Pradesh — 233001</p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-4 pt-5 sm:pt-6 border-t border-gold/10">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl sm:text-2xl md:text-3xl text-gold font-semibold">
                  {s.value}
                </div>
                <div className="font-body text-text-muted text-xs sm:text-xs mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
