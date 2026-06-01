'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

const NOTES = ['♩', '♪', '♫', '♬', '𝄞', '𝄢']

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: { x: number; y: number; speed: number; size: number; opacity: number; note: string }[] = []

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.6,
        size: 14 + Math.random() * 18,
        opacity: 0.04 + Math.random() * 0.1,
        note: NOTES[Math.floor(Math.random() * NOTES.length)],
      })
    }

    let raf: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.y -= p.speed
        if (p.y < -30) {
          p.y = canvas.height + 20
          p.x = Math.random() * canvas.width
        }
        ctx.globalAlpha = p.opacity
        ctx.font = `${p.size}px serif`
        ctx.fillStyle = '#C9A961'
        ctx.fillText(p.note, p.x, p.y)
      })
      raf = requestAnimationFrame(animate)
    }
    animate()

    const onResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20 sm:pt-24 md:pt-28 pb-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-instruments.jpg"
          alt="Indian Classical Musical Instruments"
          fill
          priority
          className="object-cover"
          quality={90}
        />
        {/* Gradient Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-text-primary/70 via-text-primary/75 to-text-primary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper-warm/40 via-transparent to-text-primary/30" />
        {/* Corner vignette effects */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-text-primary/50" />
      </div>

      {/* Animated music notes canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10 opacity-60" />

      {/* Multiple radial glows for depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[800px] md:h-[600px] rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse, rgba(232,134,26,0.18) 0%, rgba(201,169,97,0.1) 40%, transparent 70%)',
        }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(155,35,53,0.08) 0%, transparent 60%)',
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent z-10" />
      <div className="absolute top-20 sm:top-24 left-0 right-0 flex justify-center gap-8 sm:gap-12 opacity-20 z-10">
        <span className="text-gold text-2xl sm:text-3xl md:text-4xl font-display">♪</span>
        <span className="text-saffron text-xl sm:text-2xl md:text-3xl font-display">✦</span>
        <span className="text-amber text-2xl sm:text-3xl md:text-4xl font-display">♫</span>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Badge - hidden on very small screens */}
        <div className="hidden sm:inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full border-2 border-gold/40 bg-paper-light/15 backdrop-blur-md text-gold text-xs tracking-[0.2em] uppercase font-body shadow-xl">
        </div>

        {/* Main heading */}
        <h1 className="font-display font-light mb-3 sm:mb-4 leading-[1.05] animate-fade-in">
          <span className="block text-paper-light/95 text-lg sm:text-xl md:text-xl lg:text-2xl tracking-[0.3em] sm:tracking-[0.4em] uppercase font-body font-light mb-4 sm:mb-6 drop-shadow-2xl">
            Welcome to
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl shimmer-text font-semibold drop-shadow-2xl mb-2 sm:mb-3">
            Gandharva
          </span>
          <span className="block text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-paper-light font-light tracking-wide drop-shadow-2xl">
            Music Academy
          </span>
        </h1>

        {/* Ornate divider */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 my-6 sm:my-10">
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent via-gold to-gold"></div>
          <span className="text-gold text-xl sm:text-2xl drop-shadow-lg">✦</span>
          <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-gold via-gold to-transparent"></div>
        </div>

        {/* Tagline */}
        <p className="font-display italic text-paper-light text-lg sm:text-xl md:text-xl lg:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-2 sm:mb-3 drop-shadow-lg px-4">
          "Where the soul of Indian classical music meets dedicated artistry"
        </p>
        <div className="flex items-center justify-center gap-2 mb-10 sm:mb-14 flex-wrap px-4">
          <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
          <p className="font-body text-paper-warm text-sm sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase drop-shadow-lg text-center">
            Ghazipur, Uttar Pradesh — Est. in Tradition
          </p>
          <div className="w-1.5 h-1.5 rounded-full bg-gold"></div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center px-4">
          <a
            href="/contact"
            className="group w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-saffron to-amber text-paper-light font-body font-bold text-xs sm:text-sm tracking-widest uppercase rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-saffron/60 relative overflow-hidden text-center"
          >
            <span className="relative z-10">Join Our Academy</span>
            <div className="absolute inset-0 bg-gradient-to-r from-amber to-saffron opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href="/courses"
            className="w-full sm:w-auto px-8 sm:px-10 py-3.5 sm:py-4 border-2 border-paper-light text-paper-light bg-text-primary/20 backdrop-blur-md font-body font-semibold text-xs sm:text-sm tracking-widest uppercase rounded-full hover:border-gold hover:bg-text-primary/30 hover:text-gold transition-all duration-300 shadow-2xl hover:scale-105 text-center"
          >
            Explore Courses
          </a>
        </div>
      </div>

      {/* Enhanced Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        {/* Enhanced gradient transition */}
        <div className="relative pointer-events-none">
          {/* Multi-layer gradient fade */}
          <div className="h-40 sm:h-48 md:h-64 bg-gradient-to-t from-paper-light via-paper-warm/60 to-transparent"></div>

          {/* Decorative elements before wave */}
          <div className="absolute top-12 sm:top-16 md:top-20 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center opacity-20">
              <span className="text-gold text-3xl sm:text-4xl md:text-5xl font-display">♪</span>
              <span className="text-saffron text-2xl sm:text-3xl md:text-4xl">✦</span>
              <span className="text-amber text-3xl sm:text-4xl md:text-5xl font-display">♫</span>
              <span className="text-gold text-2xl sm:text-3xl md:text-4xl hidden sm:block">✦</span>
              <span className="text-crimson text-3xl sm:text-4xl md:text-5xl font-display hidden md:block">♬</span>
            </div>
          </div>

          {/* Bottom ornamental line */}
          <div className="h-1 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
