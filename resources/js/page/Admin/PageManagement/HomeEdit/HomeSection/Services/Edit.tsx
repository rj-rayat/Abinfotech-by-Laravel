import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

// Define the type for incoming Laravel Service Model data
interface ServiceItem {
    id: number;
    title: string;
    description: string;
    icon_name: string;
    color_theme: string;
    sort_order: number;
}

interface EditProps {
    service: ServiceItem; // Prop coming from ServiceController@edit
}

export default function Edit({ service }: EditProps) {
    // Initialize the useForm hook using the existing service data from DB
    const { data, setData, post, processing, errors } = useForm({
        title: service.title || '',
        description: service.description || '',
        icon_name: service.icon_name || 'Monitor',
        color_theme: service.color_theme || 'blue-cyan',
        sort_order: service.sort_order || 0,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Passing the direct component prop 'service.id' to the route parameter
        post(route('admin.page_management.home.services.update', service.id));
    };

    return (
        <AppLayout>
            <Head title="Edit Service" />
            <div className="p-6 max-w-2xl mx-auto space-y-6">
                <div className="flex items-center gap-4">
                    <Link href={route('admin.page_management.home.services.index')} className="p-2 hover:bg-muted rounded-lg border transition-colors">
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Edit Service Settings</h1>
                        <p className="text-muted-foreground text-sm">Modify information for this dynamic dashboard panel component.</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="border bg-card p-6 rounded-xl space-y-4 shadow-sm">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2 space-y-1.5">
                            <label className="text-xs font-medium">Service Title</label>
                            <input
                                type="text"
                                value={data.title}
                                onChange={e => setData('title', e.target.value)}
                                className="w-full p-2 bg-background border rounded-lg text-sm"
                                required
                            />
                            {errors.title && <p className="text-xs text-destructive">{errors.title}</p>}
                        </div>
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

                    <div className="space-y-1.5">
                        <label className="text-xs font-medium">Description</label>
                        <textarea
                            rows={4}
                            value={data.description}
                            onChange={e => setData('description', e.target.value)}
                            className="w-full p-2 bg-background border rounded-lg text-sm leading-relaxed"
                            required
                        />
                        {errors.description && <p className="text-xs text-destructive">{errors.description}</p>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium">Lucide Icon Name / Component Tag</label>
                            <input
                                type="text"
                                placeholder="e.g., <MonitorIcon /> or search-check"
                                value={data.icon_name}
                                onChange={e => {
                                    let val = e.target.value;

                                    // Regex to strip < /> and common Lucide suffixes like 'Icon' or 'lucide'
                                    // Example: "<MonitorIcon />" -> "Monitor"
                                    const cleanedName = val
                                        .replace(/[<\s\/>]/g, '')                // Remove <, >, spaces and slashes
                                        .replace(/(Icon|icon|Lucide|lucide)$/, ''); // Strip trailing 'Icon' or 'lucide' words

                                    setData('icon_name', cleanedName);
                                }}
                                className="w-full p-2 bg-background border rounded-lg text-sm font-mono placeholder:font-sans"
                                required
                            />
                            <p className="text-[10px] text-muted-foreground mt-1">
                                Paste lucide icon name here
                            </p>
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-medium">Color Theme Preset</label>
                            <select
                                value={data.color_theme}
                                onChange={e => setData('color_theme', e.target.value)}
                                className="w-full p-2 bg-background border rounded-lg text-sm"
                            >
                                <option value="blue-cyan">Blue to Cyan</option>
                                <option value="purple-indigo">Purple to Indigo</option>
                                <option value="rose-orange">Rose to Orange</option>
                                <option value="emerald-teal">Emerald to Teal</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end pt-2">
                        <button
                            type="submit"
                            disabled={processing}
                            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl text-sm hover:bg-primary/90 transition-colors shadow-md"
                        >
                            <Save className="h-4 w-4" /> {processing ? 'Updating...' : 'Save Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}