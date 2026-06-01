'use client'

import Courses from '@/components/courses/Courses'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function InstrumentsPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        <Courses />
      </div>
      <Footer />
    </main>
  )
}
