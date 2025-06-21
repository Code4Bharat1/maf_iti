import About from '@/componets/aboutus/aboutus'
import OurManagement from '@/componets/aboutus/ourmanage'
import Ourvision from '@/componets/aboutus/ourvision'
import Committee from '@/componets/aboutus/institute'

import React from 'react'


export default function page() {
  return (
    <div className= 'bg-white'> 
      <About/>
      <Ourvision/>
      <OurManagement/>
      <Committee />
     
     
   
      
    </div>
  )
}
