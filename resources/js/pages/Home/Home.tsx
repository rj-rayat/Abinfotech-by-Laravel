import WebLayout from '@/layouts/web-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import Hero from './sections/hero-section/Hero'

import UltraModernFunFacts from './sections/Fun-Facts/UltraModernFunFacts'
import AboutAgency from './sections/AboutAgency/AboutAgency'


export default function Home() {
  return (
   <WebLayout>
            <Head title="Home Page" />
            <Hero/>
       
           <UltraModernFunFacts/>
           <AboutAgency/>
    </WebLayout>
  )
}
