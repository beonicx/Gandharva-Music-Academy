'use client'

import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  showPopup?: boolean
}

export default function WhatsAppButton({
  phoneNumber = '916388250645', // Default number (remove country code +)
  message = 'Hello! I would like to inquire about music classes at Gandharva Music Academy.',
  showPopup = true,
}: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    // Show button after 3 seconds of page load
    const timer = setTimeout(() => setIsVisible(true), 3000)

    // Show tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true)
      // Auto-hide after 5 seconds
      setTimeout(() => setShowTooltip(false), 5000)
    }, 5000)

    return () => {
      clearTimeout(timer)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  if (!isVisible) return null

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        {/* Tooltip Popup */}
        {showPopup && showTooltip && (
          <div className="absolute bottom-full right-0 mb-4 w-64 animate-bounce-subtle">
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 border-2 border-green-500/10">
              {/* Close button */}
              <button
                onClick={() => setShowTooltip(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow-lg"
              >
                <X size={14} />
              </button>

              {/* Content */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-body font-semibold text-text-primary text-sm mb-1">
                    Have questions?
                  </p>
                  <p className="font-body text-text-secondary text-xs leading-relaxed">
                    Chat with us on WhatsApp for quick assistance!
                  </p>
                </div>
              </div>

              {/* Arrow pointer */}
              <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r-2 border-b-2 border-green-500/20 transform rotate-45"></div>
            </div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          className="relative w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 flex items-center justify-center group-hover:rotate-12"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

          {/* Icon */}
          <MessageCircle size={28} className="relative z-10" />

          {/* Online indicator dot */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse"></span>
        </button>

        {/* Label (hidden on mobile) */}
        <div className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-text-primary text-paper-light px-4 py-2 rounded-lg shadow-lg whitespace-nowrap font-body text-sm">
            Chat on WhatsApp
            <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-text-primary transform rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Custom animation */}
      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
