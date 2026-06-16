import WebLayout from '@/layouts/web-layout'
import { Head, usePage } from '@inertiajs/react'
import React from 'react'
import Hero from './sections/hero-section/Hero'

usePage
import UltraModernFunFacts from './sections/Fun-Facts/UltraModernFunFacts'
import AboutAgency from './sections/AboutAgency/AboutAgency'
import Service from './sections/Services/services'

import ReviewCarousel from './sections/Review/Review'
import HappyClient from './sections/HappyClients/HappyClient'
import BlogSection from './sections/Blogs/Blogs'
import ProjectSection from './sections/project/project-section'

interface GlobalSettings {
  site_name: string,
  seo_meta_title: string,
  seo_meta_description: string,
  seo_meta_keywords: string,
  favicon_path: string,
  og_title: string,
  og_description: string
}

interface DB_Slide {
  id: number;
  title: string;
  desc: string;
  color_theme: string;
}

interface Props {
  seo?: any;
  slides: DB_Slide[]; 
  funFacts: DB_FunFact;
}

interface DB_FunFact {
  card1_label: string; card1_value: number;
  card2_label: string; card2_value: number;
  card3_label: string; card3_value: number;
  card4_label: string; card4_value: number;
}

export default function Home({ seo, slides, funFacts }: Props) {
  const { global_settings } = usePage<{ global_settings : GlobalSettings }>().props;
  
  return (
    <WebLayout>
        <Head>
            <title>{global_settings?.seo_meta_title || 'Welcome'}</title>
            <meta name="description" content={global_settings?.seo_meta_description || ''} />
            <meta name="keywords" content={global_settings?.seo_meta_keywords || ''} />

            <title>{seo?.meta_title || "Welcome to AB Infotech LTD"}</title>
            <meta name="description" content={seo?.meta_description || "Default description for AB Infotech LTD"} />
            <meta name="keywords" content={seo?.meta_keywords || "web development, AI solutions, laravel, react"} />
            
          
            <link rel="icon" type="image/png" href={`/storage/${global_settings?.favicon_path}`} />

            {/* Open Graph Tags */}
            <meta property="og:title" content={global_settings?.og_title || ''} />
            <meta property="og:description" content={global_settings?.og_description || ''} />
        </Head> 
        
        <Hero slides={slides} />
        <UltraModernFunFacts funFacts={funFacts} />
        <AboutAgency/>
        <Service/>
        <ProjectSection/>
        <ReviewCarousel/>
        <HappyClient/>
        <BlogSection/>
    </WebLayout>
  )
}