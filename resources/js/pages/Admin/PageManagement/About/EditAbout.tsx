import React from 'react';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowLeft,
    Search,
    Sparkles,
    BarChart3,
    UserCheck,
    Briefcase,
    FolderGit2,
    MessageSquareQuote,
    Handshake,
    FileText
} from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface Props {
    page: {
        id: number;
        title: string;
        slug: string;
    };
}

export default function EditAbout({ page }: Props) {
    return (
        <AppLayout>
            <Head title={`Edit ${page.title}`} />

            <div className="p-6 max-w-5xl mx-auto space-y-6">


                <div className="flex items-center gap-4">
                    <Link
                        href={route('admin.page_management.index')}
                        className="p-2 hover:bg-muted rounded-lg border transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Link>

                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">{page.title} Customizer</h1>
                        <p className="text-muted-foreground text-sm">Select a section to customize its content, layouts, and data fields.</p>
                    </div>
                </div>

                <hr className="border-border/60" />


                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">


                    <Link
                        href={route('admin.seo.customize')}
                        className="group border bg-card hover:border-primary/40 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer block"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg border border-blue-500/10 group-hover:scale-105 transition-transform">
                                <Search className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">1. SEO Optimization</h3>
                                <p className="text-xs text-muted-foreground">Meta Title, Keywords, and Description configuration for search engines.</p>
                            </div>
                        </div>
                    </Link>

                    {/* Hero Edit */}
                    <Link
                        href={'/admin/page-management/about-hero'}
                        className="group border bg-card hover:border-primary/40 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer block"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-500/10 text-purple-500 rounded-lg border border-purple-500/10 group-hover:scale-105 transition-transform">
                                <Sparkles className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">2. About Hero Section</h3>
                                <p className="text-xs text-muted-foreground">Update Main Title, Subtitle, CTA buttons, and background media.</p>
                            </div>
                        </div>
                    </Link>


                    <Link
                        href={'/admin/page-management/about-video'}
                        className="block group border bg-card hover:border-primary/40 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-lg border border-emerald-500/10 group-hover:scale-105 transition-transform">
                                <UserCheck className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">4. About Video Section</h3>
                                <p className="text-xs text-muted-foreground">Customize agency introduction story, short experience summary, and skills list.</p>
                            </div>
                        </div>
                    </Link>


            



                   <Link href={'/admin/page-management/teams'}>
                         <div className="group border bg-card hover:border-primary/40 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-orange-500/10 text-orange-500 rounded-lg border border-orange-500/10 group-hover:scale-105 transition-transform">
                                <FileText className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">9. Team Section</h3>
                                <p className="text-xs text-muted-foreground">Configure the recent news feed layout area headers and descriptions.</p>
                            </div>
                        </div>
                    </div>
                   </Link>

                </div>
            </div>
        </AppLayout>
    );
}