import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, Image as ImageIcon } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

export default function Create() {
    // Initializing the useForm hook with project input states
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        category: 'React', // Setting default category matching tab list
        image: null as File | null,
        link: '',
        github_link: '',
        sort_order: 0
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Triggering the post action to our freshly defined laravel route
        post(route('admin.page_management.home.projects.store'));
    };

    return (
        <AppLayout>
            <Head title="Add New Project" />
            <div className="p-6 max-w-2xl mx-auto space-y-6">
                
                {/* Top Back Action Bar */}
                <div className="flex items-center gap-4">
                    <Link 
                        href={route('admin.page_management.home.projects.index')} 
                        className="p-2 hover:bg-muted rounded-lg border transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Add New Project</h1>
                        <p className="text-muted-foreground text-sm">Upload a new premium work sample into the database repository.</p>
                    </div>
                </div>

                {/* Input Management Form */}
                <form onSubmit={handleSubmit} className="border bg-card p-6 rounded-xl space-y-4 shadow-sm">
                    
                    <div className="grid grid-cols-3 gap-4">
                        {/* Title field */}
                        <div className="col-span-2 space-y-1.5">
                            <label className="text-xs font-medium">Project Title</label>
                            <input 
                                type="text" 
                                value={data.title} 
                                onChange={e => setData('title', e.target.value)} 
                                className="w-full p-2 bg-background border rounded-lg text-sm" 
                                required 
                            />
                            {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
                        </div>
                        
                        {/* Order management sequence */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium">Sort Order</label>
                            <input 
                                type="number" 
                                value={data.sort_order} 
                                onChange={e => setData('sort_order', parseInt(e.target.value) || 0)} 
                                className="w-full p-2 bg-background border rounded-lg text-sm" 
                                required 
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Category Selector dropdown mapped with front-end filter tabs */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium">Category</label>
                            <select 
                                value={data.category} 
                                onChange={e => setData('category', e.target.value)} 
                                className="w-full p-2 bg-background border rounded-lg text-sm"
                            >
                                <option value="React">React</option>
                                <option value="WordPress">WordPress</option>
                                <option value="Next">Next</option>
                                <option value="Laravel">Laravel</option>
                                <option value="Django">Django</option>
                                <option value="Flutter">Flutter</option>
                            </select>
                            {errors.category && <p className="text-xs text-destructive">{errors.category}</p>}
                        </div>

                        {/* Multipart Form Image file uploader */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium flex items-center gap-1"><ImageIcon className="h-3.5 w-3.5" /> Project Cover</label>
                            <input 
                                type="file" 
                                onChange={e => setData('image', e.target.files ? e.target.files[0] : null)} 
                                className="w-full text-xs block file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" 
                                required 
                            />
                            {errors.image && <p className="text-xs text-destructive">{errors.image}</p>}
                        </div>
                    </div>

                    {/* External Link Parameters */}
                    <div className="grid grid-cols-2 gap-4 border-t pt-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium">Live Demo URL</label>
                            <input 
                                type="url" 
                                placeholder="https://example.com"
                                value={data.link} 
                                onChange={e => setData('link', e.target.value)} 
                                className="w-full p-2 bg-background border rounded-lg text-sm" 
                            />
                            {errors.link && <p className="text-xs text-destructive">{errors.link}</p>}
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium">Github Repository URL</label>
                            <input 
                                type="url" 
                                placeholder="https://github.com/..."
                                value={data.github_link} 
                                onChange={e => setData('github_link', e.target.value)} 
                                className="w-full p-2 bg-background border rounded-lg text-sm" 
                            />
                            {errors.github_link && <p className="text-xs text-destructive">{errors.github_link}</p>}
                        </div>
                    </div>

                    {/* Action trigger footer */}
                    <div className="flex justify-end pt-2">
                        <button 
                            type="submit" 
                            disabled={processing} 
                            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl text-sm hover:bg-primary/90 transition-colors shadow-md"
                        >
                            <Save className="h-4 w-4" /> {processing ? 'Uploading...' : 'Save Project Data'}
                        </button>
                    </div>

                </form>
            </div>
        </AppLayout>
    );
}