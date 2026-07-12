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

interface AboutVideoData {
  sub_title:string;
  title:string;
  description_1:string;
  description_2:string;
  video_url:string;
  video_thumbnail:string | null;
  btn_text:string;
  btn_link:string;
}

interface TeamMember {
    id: number;
    name: string;
    role: string;
    image: string | null;
    experience_year: number | string;
    facebook_link?: string;
    linkedin_link?: string;
    github_link?: string;
    portfolio_link?: string;
}

interface Props {
  aboutHero: AboutHeroData | null;
  aboutVideo: AboutVideoData | null;
  teamMembers: TeamMember[];
}
export default function About({aboutHero, aboutVideo, teamMembers}:Props) {
  return (
    <WebLayout>
        <Head title="About" />
        <AboutHero data={aboutHero} />
        <AboutVideoSection data = {aboutVideo} />
        <TeamSection members={ teamMembers} />
    </WebLayout>
  )
}

