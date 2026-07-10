import React from 'react';
import { Head, Link } from '@inertiajs/react';
import WebLayout from '@/layouts/web-layout';
import { Calendar, ArrowLeft } from 'lucide-react';

interface BlogItem {
  id: number;
  title: string;
  slug: string;
  image: string | null;
  body: string;
  seo_meta_title: string | null;
  seo_meta_description: string | null;
  seo_meta_keywords: string | null;
  created_at: string;
}

interface Props {
  blog: BlogItem;
}

export default function Show({ blog }: Props) {
  
  const bannerSrc = blog.image?.startsWith('/') || blog.image?.startsWith('http')
    ? blog.image
    : `/storage/${blog.image}`;

  return (
    <WebLayout>
     
      <Head>
        <title>{blog.seo_meta_title || blog.title}</title>
        <meta name="description" content={blog.seo_meta_description || ''} />
        <meta name="keywords" content={blog.seo_meta_keywords || ''} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.seo_meta_description || ''} />
        {blog.image && <meta property="og:image" content={bannerSrc} />}
      </Head>

      <article className="py-16 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          
          {/* Back Button */}
          <div
             
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft onClick={()=>window.history.back()} className="h-4 w-4 cursor-pointer" /> Back to Blogs
          </div>

          {/* Title & Meta */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>
                {new Date(blog.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          {blog.image && (
            <div className="w-full aspect-[16/9] border rounded-2xl overflow-hidden shadow-sm bg-muted">
              <img 
                src={bannerSrc} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
            </div>
          )}

        
          <div 
            className="prose prose-slate dark:prose-invert max-w-none 
                       prose-headings:font-bold prose-headings:tracking-tight 
                       prose-p:leading-relaxed prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: blog.body }} 
          />

        </div>
      </article>
    </WebLayout>
  );
}