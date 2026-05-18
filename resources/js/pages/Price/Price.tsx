import WebLayout from '@/layouts/web-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import PricingSection from './plans'

export default function Price() {
  return (
   <WebLayout>
        <Head title='Prices'>

        </Head>

        <PricingSection/>
   </WebLayout>
  )
}

