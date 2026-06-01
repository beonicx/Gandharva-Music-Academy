'use client'

import Courses from '@/components/courses/Courses'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export default function CoursesPage() {
  return (
    <main>
      <Navbar />
      <Courses />
      <Footer />
    </main>
  )
}
