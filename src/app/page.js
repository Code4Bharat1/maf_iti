
import HomeAboutUs from '@/componets/home/aboutus'
import BlogSection from '@/componets/home/blog'
import Company from '@/componets/home/company'
import FacultySection from '@/componets/home/faculty'
import FAQPage from '@/componets/home/faq'
import Hero from '@/componets/home/hero'
import NoticeBoardPage from '@/componets/home/noticeboard'
import CoursesSection from '@/componets/home/ourcourses'
import ManagementSection from '@/componets/home/ourmanagement'
import RegisterPage from '@/componets/home/register'
import Testimonials from '@/componets/home/testimonials'
import VideoGallery from '@/componets/home/videogallery'
import WelcomeSection from '@/componets/home/welcome'

import React from 'react'

export default function page() {
  return (
    <div>
      <Hero/>
      <WelcomeSection/>
      <HomeAboutUs/>
      <NoticeBoardPage/>
      <CoursesSection/>
      <RegisterPage/>
      <FAQPage/>
      <ManagementSection/>
      <FacultySection/>
      <BlogSection/>
      <Company/>
      <VideoGallery/>
      <Testimonials/>
      
    </div>
  )
}
