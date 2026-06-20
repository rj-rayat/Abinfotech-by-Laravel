import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, FileText, Image as ImageIcon } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface AboutData {
    id: number; badge: string; title: string; description: string; years_of_experience: number;
    main_image: string | null; small_image: string | null;
    feature_1: string; feature_2: string; feature_3: string; feature_4: string;
    button_text: string; button_url: string;
}

interface Props { about: AboutData; }

export default function AboutAgencyEdit({ about }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        badge: about.badge, title: about.title, description: about.description,
        years_of_experience: about.years_of_experience,
        feature_1: about.feature_1, feature_2: about.feature_2, feature_3: about.feature_3, feature_4: about.feature_4,
        button_text: about.button_text, button_url: about.button_url,
        main_image: null as File | null, small_image: null as File | null,
        _method: 'POST' 
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.page_management.home.about_agency.update'));
    };

    return (
        <AppLayout>
            <Head title="About Agency Customizer" />
            <div className="p-6 max-w-5xl mx-auto space-y-6">
                
                <div className="flex items-center gap-4">
                    <Link href={'edit'} className="p-2 hover:bg-muted rounded-lg border transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">About Agency Section</h1>
                        <p className="text-muted-foreground text-sm">Customize text, bullet points, images, and CTA link from here.</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             
                    <div className="lg:col-span-2 space-y-6">
                        <div className="border bg-card p-6 rounded-xl space-y-4 shadow-sm">
                            <h3 className="font-semibold text-sm flex items-center gap-2 border-b pb-2"><FileText className="h-4 w-4 text-sky-500" /> Content Settings</h3>
                            
                            <div className="grid grid-cols-3 gap-4">
                                <div className="col-span-2 space-y-1.5">
                                    <label className="text-xs font-medium">Badge Tagline</label>
                                    <input type="text" value={data.badge} onChange={e => setData('badge', e.target.value)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium">Years Exp.</label>
                                    <input type="number" value={data.years_of_experience} onChange={e => setData('years_of_experience', parseInt(e.target.value) || 0)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-medium">Main Heading</label>
                                <input type="text" value={data.title} onChange={e => setData('title', e.target.value)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-medium">Description</label>
                                <textarea rows={4} value={data.description} onChange={e => setData('description', e.target.value)} className="w-full p-2 bg-background border rounded-lg text-sm leading-relaxed" />
                            </div>
                        </div>

                        {/* ফিচার ও বাটন গ্রিড */}
                        <div className="border bg-card p-6 rounded-xl space-y-4 shadow-sm">
                            <h3 className="font-semibold text-sm border-b pb-2"> Bullet List Features & CTA</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" value={data.feature_1} onChange={e => setData('feature_1', e.target.value)} className="p-2 bg-background border rounded-lg text-sm" placeholder="Feature 1" />
                                <input type="text" value={data.feature_2} onChange={e => setData('feature_2', e.target.value)} className="p-2 bg-background border rounded-lg text-sm" placeholder="Feature 2" />
                                <input type="text" value={data.feature_3} onChange={e => setData('feature_3', e.target.value)} className="p-2 bg-background border rounded-lg text-sm" placeholder="Feature 3" />
                                <input type="text" value={data.feature_4} onChange={e => setData('feature_4', e.target.value)} className="p-2 bg-background border rounded-lg text-sm" placeholder="Feature 4" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 border-t pt-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium">Button Text</label>
                                    <input type="text" value={data.button_text} onChange={e => setData('button_text', e.target.value)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium">Button Redirect URL</label>
                                    <input type="text" value={data.button_url} onChange={e => setData('button_url', e.target.value)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>

          
                    <div className="space-y-6">
                        <div className="border bg-card p-6 rounded-xl space-y-4 shadow-sm">
                            <h3 className="font-semibold text-sm flex items-center gap-2 border-b pb-2"><ImageIcon className="h-4 w-4 text-purple-500" /> Media & Images</h3>
                            
                            <div className="space-y-2">
                                <label className="text-xs font-medium block">Main Banner Image (Landscape)</label>
                                {about.main_image && <img src={`/storage/${about.main_image}`} className="h-28 w-full object-cover rounded-lg mb-2 border" alt="Main preview" />}
                                <input type="file" onChange={e => setData('main_image', e.target.files ? e.target.files[0] : null)} className="w-full text-xs block file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-sky-500/10 file:text-sky-500 hover:file:bg-sky-500/20" />
                            </div>

                            <div className="space-y-2 border-t pt-4">
                                <label className="text-xs font-medium block">Logo Overlay Image (Square)</label>
                                {about.small_image && <img src={`/storage/${about.small_image}`} className="h-20 w-20 object-cover rounded-lg mb-2 border" alt="Small preview" />}
                                <input type="file" onChange={e => setData('small_image', e.target.files ? e.target.files[0] : null)} className="w-full text-xs block file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-purple-500/10 file:text-purple-500 hover:file:bg-purple-500/20" />
                            </div>
                        </div>

                        <button onClick={()=>handleSubmit} type="submit" disabled={processing} className="w-full flex items-center justify-center gap-2 p-3 bg-primary text-primary-foreground font-semibold rounded-xl text-sm hover:bg-primary/90 transition-colors shadow-md">
                            <Save className="h-4 w-4" />
                            {processing ? 'Saving Changes...' : 'Save Section Details'}
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}