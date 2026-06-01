'use client'

import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import About from '@/components/about/About'
import Courses from '@/components/courses/Courses'
import Reviews from '@/components/home/Reviews'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Reviews />
      <Footer />
    </main>
  )
}
