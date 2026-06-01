'use client'

import { useEffect, useRef } from 'react'

const reviews = [
  {
    name: 'Rahul Verma',
    rating: 5,
    date: '2 months ago',
    text: 'This is the perfect place for making a career in music field. The teachers are highly trained and the atmosphere is very encouraging for beginners.',
    initial: 'R',
    color: '#D4A843',
  },
  {
    name: 'Priya Singh',
    rating: 5,
    date: '3 months ago',
    text: 'The only place to learn classical music in Ghazipur. I have been learning tabla here for 6 months and the progress has been incredible.',
    initial: 'P',
    color: '#9B2335',
  },
  {
    name: 'Amit Kumar',
    rating: 5,
    date: '1 month ago',
    text: 'Gandharva Music Academy Ghazipur is the best classical music class. My daughter is learning Kathak and the transformation in her grace and confidence is visible.',
    initial: 'A',
    color: '#E8861A',
  },
  {
    name: 'Sunita Yadav',
    rating: 5,
    date: '4 months ago',
    text: 'Excellent academy! The teachers are passionate about music and transmit that passion to students. Highly recommend for anyone wanting to learn guitar or sitar.',
    initial: 'S',
    color: '#6B8E6B',
  },
  {
    name: 'Deepak Mishra',
    rating: 5,
    date: '5 months ago',
    text: 'I enrolled my son for harmonium classes and I am delighted with the progress. The teaching methodology follows authentic classical traditions while being approachable.',
    initial: 'D',
    color: '#7B5EA7',
  },
  {
    name: 'Kavita Tiwari',
    rating: 5,
    date: '6 months ago',
    text: 'Truly exceptional! Learning folk singing here has connected me deeply with my cultural roots. The gurukul-style guidance is rare and precious.',
    initial: 'K',
    color: '#2B7A8B',
  },
]

export default function Reviews() {
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
      id="reviews"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-paper-light"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] sm:w-[600px] sm:h-[500px] md:w-[800px] md:h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(155,35,53,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="fade-in-section text-center max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="h-px w-8 sm:w-10 bg-saffron" />
            <span className="text-gold text-xs sm:text-xs tracking-[0.3em] sm:tracking-[0.35em] uppercase font-body">
              Testimonials
            </span>
            <div className="h-px w-8 sm:w-10 bg-saffron" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-text-primary mb-3 sm:mb-4">
            What Our{' '}
            <span className="text-gold font-semibold italic">Students Say</span>
          </h2>
          {/* Aggregate rating */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mt-3 sm:mt-4 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full border border-gold/20 bg-saffron/5">
            <div className="text-center">
              <div className="font-display text-2xl sm:text-3xl text-gold font-semibold">5.0</div>
              <div className="text-text-muted text-xs sm:text-xs font-body">Google</div>
            </div>
            <div className="h-6 sm:h-8 w-px bg-saffron/20" />
            <div className="flex text-gold text-base sm:text-lg md:text-xl">★★★★★</div>
            <div className="h-6 sm:h-8 w-px bg-saffron/20" />
            <div className="text-center">
              <div className="font-display text-2xl sm:text-3xl text-gold font-semibold">5/5</div>
              <div className="text-text-muted text-xs sm:text-xs font-body">JustDial · 81 votes</div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="fade-in-section classical-card group relative p-5 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* Quote mark */}
              <div
                className="font-display text-5xl sm:text-6xl leading-none absolute top-3 sm:top-4 right-4 sm:right-6 opacity-10 pointer-events-none"
                style={{ color: review.color }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex text-saffron text-base sm:text-base mb-3 sm:mb-4">{'★'.repeat(review.rating)}</div>

              {/* Review text */}
              <p className="font-body text-text-secondary text-sm sm:text-sm leading-relaxed mb-5 sm:mb-6 relative z-10">
                "{review.text}"
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-display text-xs sm:text-sm font-semibold text-white shadow-md flex-shrink-0"
                  style={{ background: `${review.color}` }}
                >
                  {review.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-body text-text-primary text-sm sm:text-sm font-medium truncate">{review.name}</div>
                  <div className="font-body text-text-muted text-xs sm:text-xs">{review.date}</div>
                </div>
                <div className="ml-auto opacity-70 flex-shrink-0">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
