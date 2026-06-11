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

export default function Home() {
  const { global_settings } = usePage<{ global_settings : GlobalSettings }>().props;
  
  return (
    <WebLayout>
        <Head>
            <title>{global_settings?.seo_meta_title || 'Welcome'}</title>
            <meta name="description" content={global_settings?.seo_meta_description || ''} />
            <meta name="keywords" content={global_settings?.seo_meta_keywords || ''} />
            
            {/* ডাইনামিক ফেভিকন লিংক */}
            <link rel="icon" type="image/png" href={`/storage/${global_settings?.favicon_path}`} />

            {/* Open Graph Tags */}
            <meta property="og:title" content={global_settings?.og_title || ''} />
            <meta property="og:description" content={global_settings?.og_description || ''} />
        </Head> {/* 🎯 এই যে ভাই, স্ল্যাশটা আগে দিয়ে সুন্দর করে ক্লোজ করে দিলাম! */}
        
        <Hero/>
        <UltraModernFunFacts/>
        <AboutAgency/>
        <Service/>
        <ProjectSection/>
        <ReviewCarousel/>
        <HappyClient/>
        <BlogSection/>
    </WebLayout>
  )
}