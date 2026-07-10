"use client"

import React, { useState, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Globe, CheckCircle2, AlertCircle } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface SeoItem {
    id: number;
    page_slug: string;
    meta_title: string;
    last_updated: string;
}

interface Props {
    existingSeos: SeoItem[];
}

export default function SeoCustomize({ existingSeos }: Props) {

    
 
    const availablePages = [
        { name: 'Home Page', slug: 'home' },
        { name: 'About Page', slug: 'about' },
        { name: 'Project Page', slug: 'project' },
        { name: 'Pricing Page', slug: 'price' },
        { name: 'Blog Page', slug: 'blogs' },
        { name: 'Contact Page', slug: 'contact' },
      
    ];

    // Inertia Form Setup
    const { data, setData, post, processing, errors, reset } = useForm({
        page_slug: '',
        meta_title: '',
        meta_description: '',
        meta_keywords: '',
    });


    const handlePageChange = async (slug: string) => {
        setData('page_slug', slug);
        if (!slug) return;

        try {
            const response = await fetch(route('admin.seo.fetch', slug));
            const result = await response.json();
            
            if (result.success && result.data) {
                setData((prev) => ({
                    ...prev,
                    page_slug: slug,
                    meta_title: result.data.meta_title || '',
                    meta_description: result.data.meta_description || '',
                    meta_keywords: result.data.meta_keywords || '',
                }));
            }
        } catch (error) {
            console.error("Error fetching SEO data:", error);
        }
    };

   
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.seo.update'), {
            onSuccess: () => {
                reset('meta_title', 'meta_description', 'meta_keywords', 'page_slug');
            
            
            alert("SEO Updated Successfully!");
            }
        });
    };

    return (
        <AppLayout>
            <Head title="Global SEO Customizer" />

            <div className="p-6 max-w-6xl mx-auto space-y-6">
                

                <div className="flex items-center gap-4">
                    <div
                        onClick={()=> window.history.back()}
                        className="p-2 hover:bg-muted rounded-lg border transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Global SEO Management</h1>
                        <p className="text-muted-foreground text-sm">Configure Search Engine Optimization globally for any specific page.</p>
                    </div>
                </div>

                <hr className="border-border/60" />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    
               
                    <div className="lg:col-span-2 border bg-card p-6 rounded-xl shadow-sm space-y-6">
                        <div className="flex items-center gap-2 border-b pb-3">
                            <Globe className="h-5 w-5 text-primary" />
                            <h2 className="text-lg font-semibold">SEO Configuration Form</h2>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
              
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium">Select Target Page <span className="text-destructive">*</span></label>
                                <select 
                                    value={data.page_slug}
                                    onChange={(e) => handlePageChange(e.target.value)}
                                    className="w-full p-2.5 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm transition-all"
                                >
                                    <option value="">-- Choose a Page --</option>
                                    {availablePages.map((page) => (
                                        <option key={page.slug} value={page.slug}>{page.name} </option>
                                    ))}
                                </select>
                                {errors.page_slug && <p className="text-xs text-destructive">{errors.page_slug}</p>}
                            </div>

                 
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium">Meta Title</label>
                                <input 
                                    type="text"
                                    value={data.meta_title}
                                    onChange={(e) => setData('meta_title', e.target.value)}
                                    placeholder="e.g., Best Tech Solution | AB Infotech"
                                    disabled={!data.page_slug}
                                    className="w-full p-2.5 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                />
                                {errors.meta_title && <p className="text-xs text-destructive">{errors.meta_title}</p>}
                            </div>

                   
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium">Meta Keywords</label>
                                <input 
                                    type="text"
                                    value={data.meta_keywords}
                                    onChange={(e) => setData('meta_keywords', e.target.value)}
                                    placeholder="e.g., web development, agency, software (comma separated)"
                                    disabled={!data.page_slug}
                                    className="w-full p-2.5 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                />
                                {errors.meta_keywords && <p className="text-xs text-destructive">{errors.meta_keywords}</p>}
                            </div>

                          
                            <div className="space-y-1.5">
                                <label className="text-sm font-medium">Meta Description</label>
                                <textarea 
                                    rows={4}
                                    value={data.meta_description}
                                    onChange={(e) => setData('meta_description', e.target.value)}
                                    placeholder="Write a catchy meta description for search snippets..."
                                    disabled={!data.page_slug}
                                    className="w-full p-2.5 bg-background border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none text-sm transition-all disabled:opacity-60 disabled:cursor-not-allowed resize-none"
                                />
                                {errors.meta_description && <p className="text-xs text-destructive">{errors.meta_description}</p>}
                            </div>

                         
                            <button 
                                onClick={()=>handleSubmit}
                                type="submit" 
                                disabled={processing || !data.page_slug}
                                className="flex items-center justify-center gap-2 w-full py-2.5 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Save className="h-4 w-4" />
                                {processing ? 'Saving Changes...' : 'Save & Update SEO'}
                            </button>
                        </form>
                    </div>

           
                    <div className="border bg-card p-5 rounded-xl shadow-sm space-y-4 h-fit">
                        <div className="border-b pb-2">
                            <h3 className="font-semibold text-base">Configured Pages ({existingSeos.length})</h3>
                            <p className="text-xs text-muted-foreground">List of pages with active SEO records.</p>
                        </div>

                        {existingSeos.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-6 text-muted-foreground space-y-1">
                                <AlertCircle className="h-5 w-5 opacity-60" />
                                <span className="text-xs">No pages configured yet.</span>
                            </div>
                        ) : (
                            <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
                                {existingSeos.map((seo) => (
                                    <div 
                                        key={seo.id}
                                        onClick={() => handlePageChange(seo.page_slug)}
                                        className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/60 transition-colors cursor-pointer group"
                                    >
                                        <div className="space-y-0.5">
                                            <span className="text-xs font-semibold px-2 py-0.5 bg-secondary text-secondary-foreground rounded uppercase tracking-wider">
                                                {seo.page_slug}
                                            </span>
                                            <p className="text-xs font-medium text-muted-foreground truncate max-w-[150px] group-hover:text-primary transition-colors">
                                                {seo.meta_title || 'No Title'}
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end gap-1">
                                            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                            <span className="text-[10px] text-muted-foreground">{seo.last_updated}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </AppLayout>
    );
}