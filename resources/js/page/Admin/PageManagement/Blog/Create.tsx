import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Share2 } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';
import RichTextEditor from '@/components/RichTextEditor';

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    image: null as File | null,
    body: '',
    seo_meta_title: '',
    seo_meta_description: '',
    seo_meta_keywords: '',
    // 🚀 OG Fields State
    og_title: '',
    og_description: '',
    og_image: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('admin.blogs.store'));
  };

  return (
    <AppLayout>
      <Head title="Create New Blog" />

      <div className="p-6 w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="flex items-center gap-4 border-b pb-5">
          <Link href={route('admin.blogs.index')} className="p-2 hover:bg-muted rounded-lg border">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Write a New Blog</h1>
            <p className="text-xs text-muted-foreground">Publish rich content with customized SEO & Open Graph meta tags.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Section 1: Core Blog Details */}
          <div className="border bg-card p-6 rounded-2xl space-y-4 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">1. Blog Info</h2>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">Blog Title</label>
              <input
                type="text"
                value={data.title}
                onChange={e => setData('title', e.target.value)}
                className="w-full p-2.5 bg-background border rounded-xl text-sm"
                placeholder="Enter an eye-catching blog title..."
              />
              {errors.title && <p className="text-red-500 text-xs">{errors.title}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">Featured Image</label>
              <input
                type="file"
                onChange={e => setData('image', e.target.files ? e.target.files[0] : null)}
                className="w-full p-2 bg-background border rounded-xl text-sm cursor-pointer"
                accept="image/*"
              />
              {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}
            </div>
          </div>

          {/* Section 2: Rich Text Paragraph Panel */}
          <div className="border bg-card p-6 rounded-2xl space-y-3 shadow-sm [&_.ql-editor]:min-h-[300px]">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">2. Paragraph Panel (Content)</h2>
            <RichTextEditor
              value={data.body}
              onChange={(html) => setData('body', html)}
              
            />
            {errors.body && <p className="text-red-500 text-xs ">{errors.body}</p>}
          </div>

          {/* Section 3: SEO Customization Settings */}
          <div className="border bg-card p-6 rounded-2xl space-y-4 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">3. Google SEO Customizer</h2>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">SEO Meta Title</label>
              <input
                type="text"
                value={data.seo_meta_title}
                onChange={e => setData('seo_meta_title', e.target.value)}
                className="w-full p-2.5 bg-background border rounded-xl text-sm"
                placeholder="If empty, blog title will be used"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">SEO Meta Description</label>
              <textarea
                rows={3}
                value={data.seo_meta_description}
                onChange={e => setData('seo_meta_description', e.target.value)}
                className="w-full p-2.5 bg-background border rounded-xl text-sm resize-none"
                placeholder="Write a short summary for Google search results..."
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">SEO Meta Keywords</label>
              <input
                type="text"
                value={data.seo_meta_keywords}
                onChange={e => setData('seo_meta_keywords', e.target.value)}
                className="w-full p-2.5 bg-background border rounded-xl text-sm"
                placeholder="e.g. web development, laravel, nextjs"
              />
            </div>
          </div>

          {/* 🚀 Section 4: Open Graph (OG) Customizer */}
          <div className="border bg-card p-6 rounded-2xl space-y-4 shadow-sm border-indigo-500/10 ">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
              <Share2 className="h-4 w-4" />
              <h2 className="text-sm font-bold uppercase tracking-wider">4. Open Graph (Social Media Sharing)</h2>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">OG Title (Facebook/LinkedIn)</label>
              <input
                type="text"
                value={data.og_title}
                onChange={e => setData('og_title', e.target.value)}
                className="w-full p-2.5 bg-background border rounded-xl text-sm"
                placeholder="Attractive title for social links..."
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">OG Description</label>
              <textarea
                rows={2}
                value={data.og_description}
                onChange={e => setData('og_description', e.target.value)}
                className="w-full p-2.5 bg-background border rounded-xl text-sm resize-none"
                placeholder="Short summary that appears when sharing the link..."
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">OG Share Banner Image</label>
              <input
                type="file"
                onChange={e => setData('og_image', e.target.files ? e.target.files[0] : null)}
                className="w-full p-2 bg-background border rounded-xl text-sm cursor-pointer"
                accept="image/*"
              />
              {errors.og_image && <p className="text-red-500 text-xs">{errors.og_image}</p>}
              <p className="text-[10px] text-muted-foreground">Recommended ratio: 1200x630px for standard social templates.</p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={processing}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow transition-all active:scale-[0.99]"
          >
            <Save className="h-4 w-4" /> {processing ? 'Publishing...' : 'Publish Blog with SEO & OG'}
          </button>

        </form>
      </div>
    </AppLayout>
  );
}