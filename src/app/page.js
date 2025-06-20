
import HomeAboutUs from '@/componets/home/aboutus'
import Hero from '@/componets/home/hero'
import WelcomeSection from '@/componets/home/welcome'
import React from 'react'

export default function page() {
  return (
    <div>
      <Hero/>
      <WelcomeSection/>
      <HomeAboutUs/>
    </div>
  )
}
