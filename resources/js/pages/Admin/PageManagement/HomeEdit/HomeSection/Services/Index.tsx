import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Plus, Edit2, Trash2, ArrowLeft, Layers } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface ServiceItem {
    id: number; title: string; icon_name: string; color_theme: string; sort_order: number;
}
interface Props { services: ServiceItem[]; }

export default function Index({ services }: Props) {
    const handleDelete = (id: number) => {
        if(confirm('Are you sure you want to delete this service?')) {
            router.delete(route('admin.page_management.home.services.destroy', id));
        }
    };

    return (
        <AppLayout>
            <Head title="Manage Services" />
            <div className="p-6 max-w-5xl mx-auto space-y-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href={''} className="p-2 hover:bg-muted rounded-lg border transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Services Management</h1>
                            <p className="text-muted-foreground text-sm">Create, edit, or remove services shown on the website carousel.</p>
                        </div>
                    </div>
                    <Link href={route('admin.page_management.home.services.create')} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-xl text-sm hover:bg-primary/90 transition-colors">
                        <Plus className="h-4 w-4" /> Add New Service
                    </Link>
                </div>

                <div className="border rounded-xl bg-card overflow-hidden shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-muted/50 text-xs font-bold uppercase tracking-wider border-b text-muted-foreground">
                                <th className="p-4 w-20 text-center">Order</th>
                                <th className="p-4">Title</th>
                                <th className="p-4">Theme Slug</th>
                                <th className="p-4">Icon Name</th>
                                <th className="p-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y text-sm">
                            {services.map(service => (
                                <tr key={service.id} className="hover:bg-muted/20 transition-colors">
                                    <td className="p-4 font-semibold text-center">{service.sort_order}</td>
                                    <td className="p-4 font-bold">{service.title}</td>
                                    <td className="p-4 text-xs text-muted-foreground">{service.color_theme}</td>
                                    <td className="p-4 text-xs font-mono">{service.icon_name}</td>
                                    <td className="p-4 text-right space-x-2">
                                        <Link href={route('admin.page_management.home.services.edit', service.id)} className="inline-flex p-2 text-sky-500 hover:bg-sky-500/10 rounded-lg border border-transparent hover:border-sky-500/20 transition-colors"><Edit2 className="h-4 w-4" /></Link>
                                        <button onClick={() => handleDelete(service.id)} className="inline-flex p-2 text-rose-500 hover:bg-rose-500/10 rounded-lg border border-transparent hover:border-rose-500/20 transition-colors"><Trash2 className="h-4 w-4" /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}