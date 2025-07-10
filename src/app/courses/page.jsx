
import DubaiDry from '@/componets/course/dubaidry'
import OurTrade from '@/componets/coursess/our_trade'
import BlogSection from '@/componets/home/blog'
import VideoGallery from '@/componets/home/videogallery'
import React from 'react'

export default function page() {
  return (
    <div>
      <OurTrade/>
      <DubaiDry/>
      <BlogSection/>
      <VideoGallery/>            
    </div>
  )
}
