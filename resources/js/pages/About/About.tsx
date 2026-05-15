import WebLayout from '@/layouts/web-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import AboutHero from './sections/about-hero'
import AboutVideoSection from './sections/about-video'
import TeamSection from './sections/team'

export default function About() {
  return (
    <WebLayout>
        <Head title="About" />
        <AboutHero/>
        <AboutVideoSection/>
        <TeamSection/>
    </WebLayout>
  )
}

