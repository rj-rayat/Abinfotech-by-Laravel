import WebLayout from '@/layouts/web-layout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Home() {
  return (
   <WebLayout>
            <Head title="Home Page" />
            <div  className="hero-section h-screen">
                <h1>Welcome to AB Infotech</h1>

            </div>
            <div className='h-screen'>

            </div>
    </WebLayout>
  )
}
