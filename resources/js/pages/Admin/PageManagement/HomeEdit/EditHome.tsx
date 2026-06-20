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

export default function EditHome({ page }: Props) {
    return (
        <AppLayout>
            <Head title={`Edit ${page.title}`} />

            <div className="p-6 max-w-4xl mx-auto space-y-6">


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
                        href={route('admin.page_management.home.hero.index')}
                        className="group border bg-card hover:border-primary/40 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer block"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-500/10 text-purple-500 rounded-lg border border-purple-500/10 group-hover:scale-105 transition-transform">
                                <Sparkles className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">2. Hero Section</h3>
                                <p className="text-xs text-muted-foreground">Update Main Title, Subtitle, CTA buttons, and background media.</p>
                            </div>
                        </div>
                    </Link>

                    <Link
                        href={route('admin.page_management.home.fun_facts.index')}
                        className="..."
                    >
                        <div className="group border bg-card hover:border-primary/40 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg border border-amber-500/10 group-hover:scale-105 transition-transform">
                                    <BarChart3 className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-semibold text-base group-hover:text-primary transition-colors">3. Fun Facts</h3>
                                    <p className="text-xs text-muted-foreground">Manage animated statistics counters (e.g., Projects Done, Happy Clients).</p>
                                </div>
                            </div>
                        </div>

                    </Link>



                    <Link
                        href={route('admin.page_management.home.about_agency.index')}
                        className="block group border bg-card hover:border-primary/40 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-lg border border-emerald-500/10 group-hover:scale-105 transition-transform">
                                <UserCheck className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">4. About Section</h3>
                                <p className="text-xs text-muted-foreground">Customize agency introduction story, short experience summary, and skills list.</p>
                            </div>
                        </div>
                    </Link>


                    <Link href={route('admin.page_management.home.services.index')}>
                        <div className="group border bg-card hover:border-primary/40 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-lg border border-indigo-500/10 group-hover:scale-105 transition-transform">
                                    <Briefcase className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-semibold text-base group-hover:text-primary transition-colors">5. Service Section</h3>
                                    <p className="text-xs text-muted-foreground">Edit service grid content headers, subheadings, and icons representation.</p>
                                </div>
                            </div>
                        </div>
                    </Link>




                    <div className="group border bg-card hover:border-primary/40 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-pink-500/10 text-pink-500 rounded-lg border border-pink-500/10 group-hover:scale-105 transition-transform">
                                <FolderGit2 className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">6. Projects Section</h3>
                                <p className="text-xs text-muted-foreground">Manage case studies grid title, categories filter, and showcase alignments.</p>
                            </div>
                        </div>
                    </div>


                    <div className="group border bg-card hover:border-primary/40 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-cyan-500/10 text-cyan-500 rounded-lg border border-cyan-500/10 group-hover:scale-105 transition-transform">
                                <MessageSquareQuote className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">7. Reviews</h3>
                                <p className="text-xs text-muted-foreground">Customize customer feedback testimonials slider section headlines.</p>
                            </div>
                        </div>
                    </div>


                    <div className="group border bg-card hover:border-primary/40 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-teal-500/10 text-teal-500 rounded-lg border border-teal-500/10 group-hover:scale-105 transition-transform">
                                <Handshake className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">8. Industry Partners</h3>
                                <p className="text-xs text-muted-foreground">Manage continuous scrolling partner logos grid row settings.</p>
                            </div>
                        </div>
                    </div>


                    <div className="group border bg-card hover:border-primary/40 p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-orange-500/10 text-orange-500 rounded-lg border border-orange-500/10 group-hover:scale-105 transition-transform">
                                <FileText className="h-5 w-5" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-base group-hover:text-primary transition-colors">9. Blog Section</h3>
                                <p className="text-xs text-muted-foreground">Configure the recent news feed layout area headers and descriptions.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AppLayout>
    );
}