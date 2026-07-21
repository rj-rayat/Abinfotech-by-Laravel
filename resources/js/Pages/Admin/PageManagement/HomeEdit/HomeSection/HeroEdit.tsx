import React, { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Plus, Trash2, Edit2, Layers } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

export const HERO_COLOR_THEMES = {
    'blue-cyan': {
        name: 'Blue to Cyan',
        classes: 'from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400',
        preview: 'bg-gradient-to-r from-blue-500 to-cyan-400'
    },
    'purple-indigo': {
        name: 'Purple to Indigo',
        classes: 'from-purple-600 to-indigo-500 dark:from-purple-400 dark:to-indigo-400',
        preview: 'bg-gradient-to-r from-purple-500 to-indigo-400'
    },
    'orange-rose': {
        name: 'Orange to Rose',
        classes: 'from-orange-500 to-rose-500 dark:from-orange-400 dark:to-rose-400',
        preview: 'bg-gradient-to-r from-orange-500 to-rose-400'
    },
    'emerald-teal': {
        name: 'Emerald to Teal',
        classes: 'from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-400',
        preview: 'bg-gradient-to-r from-emerald-500 to-teal-400'
    },
    'blue-indigo': {
        name: 'Blue to Indigo',
        classes: 'from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-400',
        preview: 'bg-gradient-to-r from-blue-500 to-indigo-500'
    }
};

interface Slide {
    id: number;
    title: string;
    desc: string;
    color_theme: string;
}

interface Props {
    slides: Slide[];
}

export default function HeroEdit({ slides }: Props) {
    const [editId, setEditId] = useState<number | null>(null);

    const { data, setData, post, put, delete: destroy, processing, errors, reset } = useForm({
        title: '',
        desc: '',
        color_theme: 'blue-cyan',
    });

    // ফর্ম সাবমিট (নতুন স্লাইড তৈরি অথবা এক্সিস্টিং স্লাইড আপডেট)
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editId) {
            put(route('admin.page_management.home.hero.update', editId), {
                onSuccess: () => { setEditId(null); reset(); }
            });
        } else {
            post(route('admin.page_management.home.hero.store'), {
                onSuccess: () => reset()
            });
        }
    };

    // এডিট মোড অন করা
    const handleEdit = (slide: Slide) => {
        setEditId(slide.id);
        setData({
            title: slide.title,
            desc: slide.desc,
            color_theme: slide.color_theme,
        });
    };

    return (
        <AppLayout>
            <Head title="Home Hero Customizer" />

            <div className="p-6 max-w-6xl mx-auto space-y-3">
        
                <div className="flex items-center gap-4">
                    <Link 
                        href={'edit'}
                        className="p-2 hover:bg-muted rounded-lg border transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Hero Section Slides Customizer</h1>
                        <p className="text-muted-foreground text-sm">Manage, color-theme, and structure your landing carousel slides.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* 🛠️ ফর্ম কলাম (২ ভাগ) */}
                    <div className="lg:col-span-2 border bg-card p-6 rounded-xl shadow-sm space-y-4">
                        <h2 className="text-lg font-semibold flex items-center gap-2">
                            <Layers className="h-5 w-5 text-primary" />
                            {editId ? 'Modify Slide Settings' : 'Create New Carousel Slide'}
                        </h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium">Slide Title / Headline</label>
                                <input 
                                    type="text"
                                    value={data.title}
                                    onChange={e => setData('title', e.target.value)}
                                    placeholder="e.g., Mobile App Development"
                                    className="w-full p-2.5 bg-background border rounded-lg outline-none text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                                {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-medium">Slide Description</label>
                                <textarea 
                                    rows={3}
                                    value={data.desc}
                                    onChange={e => setData('desc', e.target.value)}
                                    placeholder="Crafting intuitive and powerful applications..."
                                    className="w-full p-2.5 bg-background border rounded-lg outline-none text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                                />
                                {errors.desc && <p className="text-xs text-destructive">{errors.desc}</p>}
                            </div>

                          
                            <div className="space-y-2">
                                <label className="text-sm font-medium block">Select Text Gradient Color Theme</label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {Object.entries(HERO_COLOR_THEMES).map(([key, config]) => (
                                        <div 
                                            key={key}
                                            onClick={() => setData('color_theme', key)}
                                            className={`p-3 border rounded-xl cursor-pointer transition-all duration-200 flex items-center gap-2 ${data.color_theme === key ? 'border-primary bg-primary/5 ring-2 ring-primary/20' : 'hover:bg-muted/50'}`}
                                        >
                                            <div className={`h-4 w-4 rounded-full ${config.preview}`} />
                                            <span className="text-xs font-medium truncate">{config.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-2 pt-2">
                                <button 
                                    type="submit" 
                                    disabled={processing}
                                    className="flex cursor-pointer  items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg text-sm hover:bg-primary/90 transition-colors"
                                >
                                    {editId ? <Save className="h-4 w-4 cursor-pointer " /> : <Plus className="h-4 w-4 cursor-pointer " />}
                                    {editId ? 'Update Slide' : 'Add to Carousel'}
                                </button>
                                {editId && (
                                    <button 
                                        type="button" 
                                        onClick={() => { setEditId(null); reset(); }}
                                        className="cursor-pointer  px-4 py-2 border rounded-lg text-sm hover:bg-muted transition-colors"
                                    >
                                        Cancel
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="border bg-card p-5 rounded-xl shadow-sm space-y-4 h-fit">
                        <h3 className="font-semibold text-base border-b pb-2">Active Slides ({slides.length})</h3>
                        
                        <div className="space-y-3 max-h-[450px] overflow-y-auto pr-1">
                            {slides.map((slide) => {
                                const currentTheme = HERO_COLOR_THEMES[slide.color_theme as keyof typeof HERO_COLOR_THEMES] || HERO_COLOR_THEMES['blue-cyan'];
                                return (
                                    <div key={slide.id} className="p-3.5 border rounded-xl space-y-2 bg-background/50">
                                        <div className="flex items-start justify-between gap-2">
                                            <div className="space-y-0.5">
                                                <h4 className="text-sm font-bold truncate max-w-[180px]">{slide.title}</h4>
                                                <div className="flex items-center gap-1.5">
                                                    <div className={`h-2.5 w-2.5 rounded-full ${currentTheme.preview}`} />
                                                    <span className="text-[11px] text-muted-foreground">{currentTheme.name}</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <button onClick={() => handleEdit(slide)} className="p-1.5 cursor-pointer hover:bg-muted rounded text-muted-foreground hover:text-primary transition-colors">
                                                    <Edit2 className="h-3.5 w-3.5" />
                                                </button>
                                                <button onClick={() => destroy(route('admin.page_management.home.hero.destroy', slide.id))} className="cursor-pointer p-1.5 hover:bg-muted rounded text-destructive/70 hover:text-destructive transition-colors">
                                                    <Trash2 className="h-3.5 w-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                        <p className="text-xs text-muted-foreground line-clamp-2">{slide.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}