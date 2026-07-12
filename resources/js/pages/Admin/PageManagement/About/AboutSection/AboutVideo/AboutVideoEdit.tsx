import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { ArrowLeft } from 'lucide-react';

interface Props {
    aboutVideo: any;
}

export default function AboutVideoEdit({ aboutVideo }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        sub_title: aboutVideo?.sub_title || '',
        title: aboutVideo?.title || '',
        description_1: aboutVideo?.description_1 || '',
        description_2: aboutVideo?.description_2 || '',
        video_url: aboutVideo?.video_url || '',
        video_thumbnail: null as any,
        btn_text: aboutVideo?.btn_text || '',
        btn_link: aboutVideo?.btn_link || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
      
        post(route('admin.about-video.update'));
    };

    return (
        <AppLayout >
            <Head title="Edit About Video Section" />
            <div className="max-w-4xl mx-auto p-6 bg-card rounded-2xl border border-border shadow-sm">

                 <div className="border-b pb-4 flex gap-2 items-center">
                          <div className="p-2 hover:bg-muted rounded-lg border">
                                      <ArrowLeft onClick={()=> window.history.back()} className="h-4 w-4 cursor-pointer" />
                                    </div>
                          <div>
                            <h1 className="text-2xl font-bold text-foreground">About Video</h1>
                          <p className="text-sm text-muted-foreground">Modify all textual contents, multiple images, and bottom counters.</p>
                          </div>
                        </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Sub Title</label>
                            <input type="text" value={data.sub_title} onChange={e => setData('sub_title', e.target.value)} className="w-full p-3 rounded-xl border bg-background" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Title</label>
                            <input type="text" value={data.title} onChange={e => setData('title', e.target.value)} className="w-full p-3 rounded-xl border bg-background" />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Description 1</label>
                        <textarea rows={3} value={data.description_1} onChange={e => setData('description_1', e.target.value)} className="w-full p-3 rounded-xl border bg-background" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Description 2</label>
                        <textarea rows={3} value={data.description_2} onChange={e => setData('description_2', e.target.value)} className="w-full p-3 rounded-xl border bg-background" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">YouTube Video URL</label>
                            <input type="url" value={data.video_url} onChange={e => setData('video_url', e.target.value)} className="w-full p-3 rounded-xl border bg-background" placeholder="https://www.youtube.com/watch?v=..." />
                            {errors.video_url && <p className="text-red-500 text-xs mt-1">{errors.video_url}</p>}
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Video Thumbnail</label>
                            <input type="file" onChange={e => setData('video_thumbnail', e.target.files?.[0] || null)} className="w-full p-2.5 rounded-xl border bg-background" />
                            {aboutVideo?.video_thumbnail && (
                                <p className="text-xs text-muted-foreground mt-1">Current: /storage/{aboutVideo.video_thumbnail}</p>
                            )}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Button Text</label>
                            <input type="text" value={data.btn_text} onChange={e => setData('btn_text', e.target.value)} className="w-full p-3 rounded-xl border bg-background" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Button Link</label>
                            <input type="text" value={data.btn_link} onChange={e => setData('btn_link', e.target.value)} className="w-full p-3 rounded-xl border bg-background" />
                        </div>
                    </div>

                    <button type="submit" disabled={processing} className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all">
                        {processing ? 'Saving...' : 'Save Changes'}
                    </button>
                </form>
            </div>
        </AppLayout>
    );
}