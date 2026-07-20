import WebLayout from '@/layouts/web-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import ContactInfoHero from './ContactInfoHero'
import ContactFormSection from './Contact-form'
interface ContactData {
  phone:string,
  hotline:string,
  general_email:string,
  support_email:string,
  office_address:string,
  city_address:string,
}

interface Props {
  contacts:ContactData | null
}
export default function Contact({contacts}:Props) {

  return (
    <WebLayout>
        <Head title='Contact'></Head>
        <ContactInfoHero data = {contacts} />
        <ContactFormSection/>
        
    </WebLayout>
  )
}
