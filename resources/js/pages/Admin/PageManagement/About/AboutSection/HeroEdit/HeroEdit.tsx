import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Save, Image as ImageIcon, Loader2, Layers, BarChart3, ArrowLeft } from 'lucide-react';

interface HeroData {
  id?: number;
  badge: string;
  title: string;
  description: string;
  btn_text: string;
  btn_link: string;
  main_image: string | null;
  logo_image: string | null;
  counter_number: string;
  counter_text: string;
  stat_text: string;
}

interface Props {
  hero: HeroData | null;
}

export default function HeroEdit({ hero }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    badge: hero?.badge || '',
    title: hero?.title || '',
    description: hero?.description || '',
    btn_text: hero?.btn_text || '',
    btn_link: hero?.btn_link || '',
    main_image: null as File | null,
    logo_image: null as File | null,
    counter_number: hero?.counter_number || '',
    counter_text: hero?.counter_text || '',
    stat_text: hero?.stat_text || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('admin.about-hero.update'));
  };

  return (
    <AppLayout>
      <Head title="Edit About Full Hero Section" />

      <div className="p-6 max-w-5xl mx-auto space-y-6">

        
        <div className="border-b pb-4 flex gap-2 items-center">
          <div className="p-2 hover:bg-muted rounded-lg border">
                      <ArrowLeft onClick={()=> window.history.back()} className="h-4 w-4 cursor-pointer" />
                    </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">About Page - Dynamic Hero & Stats</h1>
          <p className="text-sm text-muted-foreground">Modify all textual contents, multiple images, and bottom counters.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* 1. TEXT CONTENT BLOCK */}
          <div className="bg-card border rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 font-bold text-indigo-600 dark:text-indigo-400 text-sm border-b pb-2">
              <Layers className="h-4 w-4" /> 1. Hero Main Content
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1 md:col-span-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Section Badge</label>
                <input
                  type="text"
                  value={data.badge}
                  onChange={(e) => setData('badge', e.target.value)}
                  className="w-full px-4 py-2 border rounded-xl text-sm bg-background"
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Main Title *</label>
                <input
                  type="text"
                  value={data.title}
                  onChange={(e) => setData('title', e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-xl text-sm bg-background"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Hero Description *</label>
              <textarea
                value={data.description}
                onChange={(e) => setData('description', e.target.value)}
                rows={4}
                required
                className="w-full px-4 py-2 border rounded-xl text-sm bg-background"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Button Text</label>
                <input type="text" value={data.btn_text} onChange={(e) => setData('btn_text', e.target.value)} className="w-full px-4 py-2 border rounded-xl text-sm bg-background" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Button Link</label>
                <input type="text" value={data.btn_link} onChange={(e) => setData('btn_link', e.target.value)} className="w-full px-4 py-2 border rounded-xl text-sm bg-background" />
              </div>
            </div>
          </div>

          {/* 2. MEDIA UPLOAD BLOCK (TWO IMAGES) */}
          <div className="bg-card border rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Main Image */}
            <div className="space-y-2 border p-4 rounded-xl bg-muted/20">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">Main Team Image (Right Side)</label>
              <div className="flex items-center gap-4">
                {hero?.main_image && !data.main_image && (
                  <div className="w-20 h-14 rounded-lg overflow-hidden border bg-background flex-shrink-0">
                    <img src={`/storage/${hero.main_image}`} className="w-full h-full object-cover" />
                  </div>
                )}
                <input type="file" onChange={(e) => setData('main_image', e.target.files ? e.target.files[0] : null)} className="text-xs" />
              </div>
            </div>

            {/* Logo Image */}
            <div className="space-y-2 border p-4 rounded-xl bg-muted/20">
              <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block">Corner Logo Image</label>
              <div className="flex items-center gap-4">
                {hero?.logo_image && !data.logo_image && (
                  <div className="w-14 h-14 rounded-lg overflow-hidden border bg-background p-1 flex-shrink-0">
                    <img src={`/storage/${hero.logo_image}`} className="w-full h-full object-contain" />
                  </div>
                )}
                <input type="file" onChange={(e) => setData('logo_image', e.target.files ? e.target.files[0] : null)} className="text-xs" />
              </div>
            </div>

          </div>

          {/* 3. COUNTER & STATS BLOCK */}
          <div className="bg-card border rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 font-bold text-indigo-600 dark:text-indigo-400 text-sm border-b pb-2">
              <BarChart3 className="h-4 w-4" /> 3. Bottom Counter & Metrics
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Counter Number (e.g., 5)</label>
                <input
                  type="text"
                  value={data.counter_number}
                  onChange={(e) => setData('counter_number', e.target.value)}
                  placeholder="5"
                  className="w-full px-4 py-2 border rounded-xl text-sm bg-background"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Counter Label Text</label>
                <input
                  type="text"
                  value={data.counter_text}
                  onChange={(e) => setData('counter_text', e.target.value)}
                  placeholder="YEARS OF CRAFTING..."
                  className="w-full px-4 py-2 border rounded-xl text-sm bg-background"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Project Stat Text</label>
                <input
                  type="text"
                  value={data.stat_text}
                  onChange={(e) => setData('stat_text', e.target.value)}
                  placeholder="Over 250+ projects..."
                  className="w-full px-4 py-2 border rounded-xl text-sm bg-background"
                />
              </div>
            </div>
          </div>

          {/* Submit panel */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={processing}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all shadow-sm active:scale-95"
            >
              {processing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />} Save Full Hero Configuration
            </button>
          </div>

        </form>
      </div>
    </AppLayout>
  );
}