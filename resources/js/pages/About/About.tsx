import WebLayout from '@/layouts/web-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import AboutHero from './sections/about-hero'
import AboutVideoSection from './sections/about-video'
import TeamSection from './sections/team'
interface AboutHeroData {
  badge: string;
  title: string;
  description: string;
  btn_text: string;
  btn_link: string;
  main_image: string | null;
  logo_image: string | null;
  counter_number: string;
  counter_text: string;
  stat_text: string;
}

interface Props {
  aboutHero: AboutHeroData | null;
}
export default function About({aboutHero}:Props) {
  return (
    <WebLayout>
        <Head title="About" />
        <AboutHero data={aboutHero} />
        <AboutVideoSection/>
        <TeamSection/>
    </WebLayout>
  )
}

