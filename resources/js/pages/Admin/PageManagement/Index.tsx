import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { FileText, Edit2, Calendar, Globe, EyeOff, LayoutGrid } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface PageItem {
    id: number;
    title: string;
    slug: string;
    status: 'published' | 'draft';
    last_updated: string;
}

interface Props {
    pages: PageItem[];
}

export default function Index({ pages }: Props) {
    return (
        <>
            <AppLayout>
                <Head title="Page Management" />

                <div className="p-6 max-w-6xl mx-auto space-y-8">

                    <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between bg-gradient-to-r from-background to-muted/30 p-4 rounded-xl border border-border/60">
                        <div className="space-y-0.5">
                            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent flex items-center gap-2">
                                <LayoutGrid className="h-5 w-5 text-primary" />
                                Page Management
                            </h1>
                            <p className="text-muted-foreground text-sm">
                                Select a page from the list below to customize its content, layouts, and page-specific SEO configurations.
                            </p>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {pages.map((page) => (
                            <div
                                key={page.id}
                                className="group relative flex flex-col justify-between p-5 bg-card rounded-xl border border-border/80 shadow-[0_2px_8px_-3px_rgba(0,0,0,0.05)] hover:border-primary/40 hover:shadow-[0_8px_24px_-10px_rgba(0,0,0,0.1)] transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">

                                    <div className="p-3 bg-primary/5 text-primary rounded-xl border border-primary/10 group-hover:bg-primary/10 group-hover:scale-105 transition-all duration-300">
                                        <FileText className="h-5 w-5" />
                                    </div>


                                    <div className="space-y-1.5 flex-1 min-w-0">
                                        <div className="flex items-center justify-between gap-2 flex-wrap">
                                            <h3 className="font-semibold text-base tracking-tight truncate text-foreground/90 group-hover:text-primary transition-colors duration-200">
                                                {page.title}
                                            </h3>

                                            {/*  Status Badge */}
                                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-medium tracking-wide border transition-colors ${page.status === 'published'
                                                    ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
                                                    : 'bg-amber-500/10 text-amber-500 border-amber-500/20'
                                                }`}>
                                                {page.status === 'published' ? (
                                                    <>
                                                        <Globe className="h-3 w-3" /> Published
                                                    </>
                                                ) : (
                                                    <>
                                                        <EyeOff className="h-3 w-3" /> Draft
                                                    </>
                                                )}
                                            </span>
                                        </div>

                                        {/*  URL Slug Info */}
                                        <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                                            <span className="font-mono text-muted-foreground/60">Route:</span>
                                            <span className="font-mono bg-muted/80   rounded text-foreground/80 text-[11px] border border-border/40 truncate">
                                                /{page.slug}
                                            </span>
                                        </p>
                                    </div>
                                </div>


                                <div className="mt-5 pt-4 border-t border-border/40 flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground/80">
                                        <Calendar className="h-3.5 w-3.5 text-muted-foreground/50" />
                                        <span>Updated: {page.last_updated}</span>
                                    </div>


                                    <Link
                                        href={route('admin.page_management.home', { page: page.slug })}
                                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 text-xs font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-200"
                                    >
                                        <Edit2 className="h-3.5 w-3.5" />
                                        Customize Page
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AppLayout>
        </>
    );
}