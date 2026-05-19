import WebLayout from '@/layouts/web-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import BlogPage from './blog-post'

export default function Blog() {
  return (
    <WebLayout>
        <Head title='Blogs'></Head>
        <BlogPage/>
    </WebLayout>
  )
}

