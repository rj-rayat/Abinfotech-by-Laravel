import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Plus, MoveLeft, Star, ArrowLeft, Pencil, Trash2 } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface Testimonial {
    id: number;
    name: string;
    designation: string;
    review: string;
    rating: number;
    image: string;
    sort_order: number;
}

interface IndexProps {
    testimonials: Testimonial[];
}



export default function Index({ testimonials = [] }: IndexProps) {
    const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      router.delete(route('admin.page_management.home.testimonials.destroy', id));
    }
  };
    return (
        <AppLayout>
            <Head title="Testimonials Management" />

            <div className="p-6 w-6xl mx-auto space-y-6">

                {/* Header */}


                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href={'edit'} className="p-2 hover:bg-muted rounded-lg border transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight">Testimonials / Reviews</h1>
                            <p className="text-muted-foreground text-sm">Manage client feedback displayed on the landing page carousel.</p>
                        </div>
                    </div>
                    <Link href={route('admin.page_management.home.testimonials.create')} className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-xl text-sm hover:bg-primary/90 transition-colors">
                        <Plus className="h-4 w-4" /> Add Testimonial
                    </Link>
                </div>

                {/* Table / List View */}
                <div className="border bg-card rounded-2xl overflow-hidden shadow-sm">
                    {testimonials.length === 0 ? (
                        <div className="text-center py-16 text-muted-foreground space-y-2">
                            <p className="font-medium text-base">No testimonials found.</p>
                            <p className="text-xs">Click the button above to add your first client review.</p>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-muted/50 border-b text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                        <th className="p-4 w-16 text-center">Order</th>
                                        <th className="p-4">Client</th>
                                        <th className="p-4">Review</th>
                                        <th className="p-4 w-32">Rating</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y text-sm">
                                    {testimonials.map((item) => {
                                        const avatarSrc = item.image?.startsWith('/') || item.image?.startsWith('http')
                                            ? item.image
                                            : `/storage/${item.image}`;

                                        return (
                                            <tr key={item.id} className="hover:bg-muted/20 transition-colors">
                                                <td className="p-4 text-center font-bold text-muted-foreground">
                                                    {item.sort_order}
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="h-10 w-10 rounded-full overflow-hidden bg-slate-100 border flex-shrink-0">
                                                            {item.image ? (
                                                                <img src={avatarSrc} alt={item.name} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center font-bold text-xs bg-indigo-50 text-indigo-600 dark:bg-slate-800 dark:text-sky-400">
                                                                    {item.name.charAt(0)}
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-foreground">{item.name}</div>
                                                            <div className="text-xs text-muted-foreground">{item.designation || 'Client'}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-4 max-w-xs md:max-w-md">
                                                    <p className="truncate text-muted-foreground" title={item.review}>
                                                        {item.review}
                                                    </p>
                                                </td>
                                                <td className="p-4">
                                                    <div className="flex items-center gap-0.5 text-amber-500">
                                                        {Array.from({ length: item.rating }).map((_, i) => (
                                                            <Star key={i} className="h-3.5 w-3.5 fill-current" />
                                                        ))}
                                                    </div>
                                                </td>

                                                <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Link
                              href={route('admin.page_management.home.testimonials.edit', item.id)}
                              className="p-1.5 text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors border border-transparent hover:border-blue-500/20"
                              title="Edit"
                            >
                              <Pencil className="h-4 w-4" />
                            </Link>
                            <button
                              onClick={() => handleDelete(item.id)}
                              className="p-1.5 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors border border-transparent hover:border-red-500/20"
                              title="Delete"
                            >
                              <Trash2 className="h-4 w-4 cursor-pointer" />
                            </button>
                          </div>
                        </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

            </div>
        </AppLayout>
    );
}