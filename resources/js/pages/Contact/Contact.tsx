import WebLayout from '@/layouts/web-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import ContactInfoHero from './ContactInfoHero'
import ContactFormSection from './Contact-form'

export default function Contact() {
  return (
    <WebLayout>
        <Head title='Contact'></Head>
        <ContactInfoHero/>
        <ContactFormSection/>
        
    </WebLayout>
  )
}
