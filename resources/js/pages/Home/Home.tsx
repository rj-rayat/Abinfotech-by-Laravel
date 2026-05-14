import WebLayout from '@/layouts/web-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import Hero from './sections/hero-section/Hero'

import UltraModernFunFacts from './sections/Fun-Facts/UltraModernFunFacts'
import AboutAgency from './sections/AboutAgency/AboutAgency'
import Service from './sections/Services/services'
import Project from './sections/project/project'
import ReviewCarousel from './sections/Review/Review'
import HappyClient from './sections/HappyClients/HappyClient'
import BlogSection from './sections/Blogs/Blogs'


export default function Home() {
  return (
   <WebLayout>
            <Head title="Home" />
            <Hero/>

           <UltraModernFunFacts/>
           <AboutAgency/>
           <Service/>
           <Project/>
           <ReviewCarousel/>
           <HappyClient/>
           <BlogSection/>
    </WebLayout>
  )
}
