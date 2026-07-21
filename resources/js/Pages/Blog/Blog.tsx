import WebLayout from '@/layouts/web-layout'
import { Head } from '@inertiajs/react'
import React from 'react'
import BlogPage from './blog-post'
interface BlogProps {
  blogs: {
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
  }[];
}
export default function Blog({ blogs }: BlogProps) {
  return (
    <WebLayout>
        <Head title='Blogs'></Head>
        <BlogPage blogs={blogs} />
    </WebLayout>
  )
}

