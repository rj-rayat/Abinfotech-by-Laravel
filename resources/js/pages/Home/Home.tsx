import WebLayout from '@/layouts/web-layout'
import { Head, usePage } from '@inertiajs/react'
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

interface aboutAgency {
  badge: string;
  title: string;
  description: string;
  years_of_experience: number;
  main_image: string | null;
  small_image: string | null;
  feature_1: string;
  feature_2: string;
  feature_3: string;
  feature_4: string;
  button_text: string;
  button_url: string;
}

interface DBService {
  id: number;
  title: string;
  description: string;
  icon_name: string;   
  color_theme: string; 
  sort_order: number;
}
interface DBProject {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  github_link?: string; 
}

interface DBTestimonial {
  id: number;
  name: string;
  designation: string;
  review: string;
  rating: number;
  image: string | null;
  sort_order: number;
}

interface clientLogoDB {
  id: number;
  name: string;
  image: string;
  sort_order?: number;
}

interface BlogDB {
 
    id: number;
    title: string;
    slug: string;
    image: string | null; 
    body: string;
    seo_meta_title: string | null;
    seo_meta_description: string | null;
    seo_meta_keywords: string | null;
    og_title: string | null;
    og_description: string | null;
    og_image: string | null;
    is_published: boolean;
    created_at: string;
    updated_at: string;
 
}

interface Props {
  seo?: any;
  slides: DB_Slide[]; 
  funFacts: DB_FunFact;
  aboutAgency:aboutAgency;
  services : DBService[];
  projects:DBProject[];
  testimonials:DBTestimonial[];
  clientLogos:clientLogoDB[];
  blogs : BlogDB[]
  
}

interface DB_FunFact {
  card1_label: string; card1_value: number;
  card2_label: string; card2_value: number;
  card3_label: string; card3_value: number;
  card4_label: string; card4_value: number;
}

export default function Home({ seo, slides, funFacts, services, aboutAgency, projects, testimonials, clientLogos, blogs }: Props) {
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
        <AboutAgency aboutAgency={aboutAgency} />
        <Service services={services} />
        <ProjectSection projects = {projects}  />
        <ReviewCarousel testimonials={testimonials} />
        <HappyClient logos={clientLogos} />
        <BlogSection blogs ={blogs} />
    </WebLayout>
  )
}