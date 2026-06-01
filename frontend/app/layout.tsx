import type { Metadata } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Gandharva Music Academy — Classical Music & Dance, Ghazipur',
  description:
    'Learn classical & semi-classical singing, folk, harmonium, tabla, guitar, sitar, kathak, bollywood dance and more at Gandharva Music Academy in Ghazipur, UP.',
  keywords: 'music academy ghazipur, classical music ghazipur, tabla classes, guitar classes, kathak dance ghazipur',
  openGraph: {
    title: 'Gandharva Music Academy',
    description: 'The finest classical music and dance academy in Ghazipur, Uttar Pradesh.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
