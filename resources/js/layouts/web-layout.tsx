import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { Head, usePage } from '@inertiajs/react'
import React from 'react'
import ScrollToTop from '../components/ToTop/ScrollToTop'

export default function WebLayout({ children }:{ children: React.ReactNode}) {
  const {globalSettings} = usePage().props as any

  const faviconUrl = globalSettings?.favicon_path 
        ? `/storage/${globalSettings.favicon_path}` 
        : '/default-favicon.ico';
  return (
    <>
    <Head>
      <link rel="icon" type="image/x-icon" href={faviconUrl} />
      <title>{globalSettings?.site_name || 'AB Infotech Ltd'}</title>
      <title>{`${globalSettings?.site_name} - ${globalSettings?.site_title}`}</title>
    </Head>
       <Navbar/>
            <main>{children}</main>
        <Footer/>
        <ScrollToTop/>
    </>
  )
}

