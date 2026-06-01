'use client'

/**
 * Color Palette Preview Component
 * Shows the classical music theme color system
 * Use this to reference colors during development
 */

export default function ColorPalette() {
  const colors = {
    backgrounds: [
      { name: 'Paper Light', var: '--paper-light', hex: '#FFF8F0' },
      { name: 'Paper Warm', var: '--paper-warm', hex: '#F5EFE7' },
      { name: 'Antique White', var: '--antique-white', hex: '#FAF5EE' },
      { name: 'Parchment', var: '--parchment', hex: '#F0E8DC' },
    ],
    accents: [
      { name: 'Saffron', var: '--saffron', hex: '#E8861A' },
      { name: 'Gold', var: '--gold', hex: '#C9A961' },
      { name: 'Gold Dark', var: '--gold-dark', hex: '#A68948' },
      { name: 'Amber', var: '--amber', hex: '#D4A843' },
      { name: 'Crimson', var: '--crimson', hex: '#9B2335' },
      { name: 'Burgundy', var: '--burgundy', hex: '#6B1F3A' },
    ],
    text: [
      { name: 'Primary', var: '--text-primary', hex: '#2C2416' },
      { name: 'Secondary', var: '--text-secondary', hex: '#5A4E3D' },
      { name: 'Muted', var: '--text-muted', hex: '#8A7A6A' },
    ],
  }

  return (
    <div className="p-8 space-y-8">
      <div>
        <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
          Classical Music Theme - Color Palette
        </h2>
        <p className="text-text-secondary mb-6">
          Warm, paper-like tones inspired by traditional music manuscripts
        </p>
      </div>

      {/* Background Colors */}
      <div>
        <h3 className="text-lg font-display font-semibold text-text-primary mb-3">
          Background Colors
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {colors.backgrounds.map((color) => (
            <div key={color.var} className="space-y-2">
              <div
                className="h-24 rounded-lg border-2 border-gold/20 shadow-md"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <p className="font-semibold text-sm text-text-primary">{color.name}</p>
                <p className="text-xs text-text-muted font-mono">{color.hex}</p>
                <p className="text-xs text-text-muted">{color.var}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accent Colors */}
      <div>
        <h3 className="text-lg font-display font-semibold text-text-primary mb-3">
          Accent Colors
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {colors.accents.map((color) => (
            <div key={color.var} className="space-y-2">
              <div
                className="h-24 rounded-lg border-2 border-gold/20 shadow-md"
                style={{ backgroundColor: color.hex }}
              />
              <div>
                <p className="font-semibold text-sm text-text-primary">{color.name}</p>
                <p className="text-xs text-text-muted font-mono">{color.hex}</p>
                <p className="text-xs text-text-muted">{color.var}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Text Colors */}
      <div>
        <h3 className="text-lg font-display font-semibold text-text-primary mb-3">
          Text Colors
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {colors.text.map((color) => (
            <div key={color.var} className="space-y-2">
              <div
                className="h-24 rounded-lg border-2 border-gold/20 shadow-md flex items-center justify-center"
                style={{ backgroundColor: color.hex }}
              >
                <span className="text-paper-light font-semibold">Aa</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-text-primary">{color.name}</p>
                <p className="text-xs text-text-muted font-mono">{color.hex}</p>
                <p className="text-xs text-text-muted">{color.var}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Component Examples */}
      <div>
        <h3 className="text-lg font-display font-semibold text-text-primary mb-3">
          Component Examples
        </h3>

        <div className="space-y-4">
          {/* Classical Card */}
          <div className="classical-card p-6 rounded-lg">
            <h4 className="font-display text-xl text-text-primary mb-2">Classical Card</h4>
            <p className="text-text-secondary">
              This card uses the .classical-card class with paper-texture background and gold border glow.
            </p>
          </div>

          {/* Ornate Divider */}
          <div className="ornate-divider my-6">
            <span className="text-gold text-xl">✦</span>
          </div>

          {/* Ornate Corners */}
          <div className="ornate-corners classical-card p-6 rounded-lg">
            <h4 className="font-display text-xl text-text-primary mb-2">With Ornate Corners</h4>
            <p className="text-text-secondary">
              Notice the decorative floral symbols (❦) in the corners.
            </p>
          </div>

          {/* Gold Glow */}
          <div className="gold-glow p-6 rounded-lg bg-paper-warm">
            <h4 className="font-display text-xl text-text-primary mb-2">Gold Glow Effect</h4>
            <p className="text-text-secondary">
              Soft golden shadow with border for emphasis.
            </p>
          </div>

          {/* Shimmer Text */}
          <div className="text-center py-6">
            <h2 className="shimmer-text text-4xl font-display font-bold">
              Shimmer Text Effect
            </h2>
          </div>
        </div>
      </div>

      {/* Musical Symbols */}
      <div>
        <h3 className="text-lg font-display font-semibold text-text-primary mb-3">
          Musical Symbols Used
        </h3>
        <div className="text-6xl text-gold space-x-4 text-center py-6">
          <span>♪</span>
          <span>♫</span>
          <span>♩</span>
          <span>♬</span>
          <span>✦</span>
          <span>❦</span>
        </div>
      </div>
    </div>
  )
}
