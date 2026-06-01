'use client'

import Image from 'next/image'

const galleryImages = [
  { id: 1, title: 'Indian Classical Instruments', src: '/hero-instruments.jpg', local: true },
  { id: 2, title: 'Kathak Dance Performance', src: '/kathak-dancer.jpg', local: true },
  { id: 3, title: 'Harmonium Classes', src: '/harmonium.jpg', local: true },
  { id: 4, title: 'Classical Music Class', src: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800', local: false },
  { id: 5, title: 'Tabla Session', src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800', local: false },
  { id: 6, title: 'Guitar Practice', src: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=800', local: false },
]

export default function Gallery() {
  return (
    <section className="relative py-28 px-6 bg-gradient-to-b from-paper-light via-paper-warm to-paper-antique min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-saffron/10 via-gold/10 to-amber/10 border border-gold/20">
              <div className="h-px w-8 bg-gradient-to-r from-transparent via-saffron to-gold" />
              <span className="text-gold-dark text-xs tracking-[0.35em] uppercase font-body font-semibold">
                Our Moments
              </span>
              <div className="h-px w-8 bg-gradient-to-r from-gold via-saffron to-transparent" />
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-light text-text-primary mb-4">
              <span className="shimmer-text font-semibold">Gallery</span>
            </h1>
            <p className="font-body text-text-secondary text-base">
              Capturing the essence of music and dance at Gandharva Music Academy
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="classical-card group relative overflow-hidden rounded-2xl aspect-square cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-gold/20 hover:border-gold/40"
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={image.local ? 90 : 75}
                  priority={image.id <= 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-text-primary/80 via-text-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-xl text-paper-light font-semibold drop-shadow-lg">
                      {image.title}
                    </h3>
                    {image.local && (
                      <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gold/20 backdrop-blur-sm">
                        <span className="text-gold text-xs">✦</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <div className="mt-16 text-center classical-card p-8 rounded-2xl border-2 border-gold/30 max-w-2xl mx-auto">
            <div className="text-4xl mb-4">🎵</div>
            <h3 className="font-display text-2xl text-text-primary mb-2">More Coming Soon</h3>
            <p className="text-text-secondary">
              We're constantly updating our gallery with new photos from classes, performances, and events.
            </p>
          </div>
        </div>
      </section>
  )
}
