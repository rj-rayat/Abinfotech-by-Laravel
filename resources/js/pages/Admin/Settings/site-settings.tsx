import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, Search, Share2, Save, Mail, Phone, MapPin, Copyright, PackageSearch } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { Textarea } from '@/components/ui/textarea';


interface SettingsData {
    id?: number;
    site_name: string;
    site_title: string | null;
    seo_meta_title: string | null;
    seo_meta_description: string | null;
    seo_meta_keywords: string | null;
    og_title: string | null;
    og_description: string | null;
    company_email: string | null;
    company_phone: string | null;
    company_address: string | null;
    copyright_text: string | null;
    google_verification_code: string;
    google_analytics_id: string | null;
    robots_meta: string | null;
    fb_app_id: string | null;
    twitter_card_type: string | null;
    
    // ডাটাবেজ থেকে আসা ইমেজ পাথ (স্ট্রিং)
    favicon_path: string | null;
    logo_light_path: string | null;
    logo_dark_path: string | null;
    og_image_path?: string | null;
    
    // আপলোডের জন্য রিয়াল ফাইল অবজেক্ট (যাতে useForm এ টাইপ এরর না দেয়)
    favicon: File | null;
    logo_light: File | null;
    logo_dark: File | null;
    og_image: File | null;
}

interface Props {
    settings: SettingsData;
}

interface BreadcrumbItem {
    title: string;
    href: string;
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/admin/dashboard' },
    { title: 'Site Settings', href: '/admin/settings' },
];

declare const route: (name: string) => string;

export default function SiteSettings({ settings }: Props) {
    //   useForm<SettingsData>
    const { data, setData, post, processing, errors } = useForm<Record<string, any> & SettingsData>({
        site_name: settings?.site_name || '',
        site_title: settings?.site_title || '',
        seo_meta_title: settings?.seo_meta_title || '',
        seo_meta_description: settings?.seo_meta_description || '',
        seo_meta_keywords: settings?.seo_meta_keywords || '',
        og_title: settings?.og_title || '',
        og_description: settings?.og_description || '',
        company_email: settings?.company_email || '',
        company_phone: settings?.company_phone || '',
        company_address: settings?.company_address || '',
        copyright_text: settings?.copyright_text || '',
        
        google_verification_code: settings?.google_verification_code || '',
        google_analytics_id: settings?.google_analytics_id || '',
        robots_meta: settings?.robots_meta || 'index, follow',
        twitter_card_type: settings?.twitter_card_type || 'summary_large_image',
        fb_app_id: settings?.fb_app_id || '',

        favicon_path: settings?.favicon_path || null,
        logo_light_path: settings?.logo_light_path || null,
        logo_dark_path: settings?.logo_dark_path || null,
        og_image_path: settings?.og_image_path || null,

     
        favicon: null,
        logo_light: null,
        logo_dark: null,
        og_image: null
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.settings.update'), {
            forceFormData: true,
            onSuccess: () => alert('Settings updated successfully! 🎉'),
        });
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Site & SEO Settings" />

            <div className="w-full space-y-6 p-6">
                {/* Header Title */}
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Site Configuration</h1>
                    <p className="text-muted-foreground mt-1 text-sm">
                        Global website settings, branding assets, and SEO configurations.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="w-full">
                    <Tabs defaultValue="general" className="space-y-6">
                        <TabsList className="bg-muted/60 p-1 rounded-xl border border-border flex flex-wrap h-auto gap-1 sm:w-max">
                            <TabsTrigger value="general" className="cursor-pointer rounded-lg gap-2 text-sm py-2">
                                <Globe className="w-4 h-4" /> General Info
                            </TabsTrigger>
                            <TabsTrigger value="seo" className="cursor-pointer rounded-lg gap-2 text-sm py-2">
                                <Search className="w-4 h-4" /> Google SEO
                            </TabsTrigger>
                            <TabsTrigger value="social" className="cursor-pointer rounded-lg gap-2 text-sm py-2">
                                <Share2 className="w-4 h-4" /> Social SEO
                            </TabsTrigger>
                            <Link href={route('admin.seo.customize')}>
                                <TabsTrigger value='page-seo ' className='cursor-pointer rounded-lg gap-2 text-sm py-2'>
                                    <PackageSearch className="w-4 h-4" /> All Page SEO
                                </TabsTrigger>
                            </Link>
                        </TabsList>

                        {/*  GENERAL INFO TAB */}
                        <TabsContent value="general" className="space-y-6">
                            <Card className="rounded-2xl border-border shadow-sm">
                                <CardHeader>
                                    <CardTitle>General Identity</CardTitle>
                                    <CardDescription>Configure basic branding and icons for light/dark modes.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="site_name">Site Name</Label>
                                            <Input id="site_name" value={data.site_name} onChange={(e) => setData('site_name', e.target.value)} className="rounded-xl" />
                                            {errors.site_name && <p className="text-xs text-red-500">{errors.site_name}</p>}
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="site_title">Site Title</Label>
                                            <Input id="site_title" value={data.site_title || ''} onChange={(e) => setData('site_title', e.target.value)} className="rounded-xl" />
                                        </div>
                                    </div>

                                    {/* Logos grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                                        {/* Favicon */}
                                        <div className="space-y-2">
                                            <Label>Favicon</Label>
                                            <div className="flex flex-col gap-3 p-4 border border-dashed rounded-xl bg-muted/20 min-h-[140px] justify-between">
                                                <div className="flex items-center justify-center h-12">
                                                    {settings?.favicon_path ? (
                                                        <img src={`/storage/${settings.favicon_path}`} alt="Favicon" className="w-10 h-10 object-contain p-1 border rounded-lg bg-white" />
                                                    ) : (
                                                        <span className="text-xs text-muted-foreground">No Favicon</span>
                                                    )}
                                                </div>
                                                <Input type="file" accept="image/*" onChange={(e) => setData('favicon', e.target.files?.[0] || null)} className="cursor-pointer file:text-sky-600 rounded-xl text-xs" />
                                            </div>
                                        </div>

                                        {/* Light Mode Logo */}
                                        <div className="space-y-2">
                                            <Label>Logo (Light Mode)</Label>
                                            <div className="flex flex-col gap-3 p-4 border border-dashed rounded-xl bg-muted/20 min-h-[140px] justify-between">
                                                <div className="flex items-center justify-center h-12 bg-slate-900 rounded-lg p-2">
                                                    {settings?.logo_light_path ? (
                                                        <img src={`/storage/${settings.logo_light_path}`} alt="Light Logo" className="h-8 object-contain" />
                                                    ) : (
                                                        <span className="text-xs text-slate-400">Shown on Dark Header</span>
                                                    )}
                                                </div>
                                                <Input type="file" accept="image/*" onChange={(e) => setData('logo_light', e.target.files?.[0] || null)} className="cursor-pointer file:text-sky-600 rounded-xl text-xs" />
                                            </div>
                                        </div>

                                        {/* Dark Mode Logo */}
                                        <div className="space-y-2">
                                            <Label>Logo (Dark Mode)</Label>
                                            <div className="flex flex-col gap-3 p-4 border border-dashed rounded-xl bg-muted/20 min-h-[140px] justify-between">
                                                <div className="flex items-center justify-center h-12 bg-white border rounded-lg p-2">
                                                    {settings?.logo_dark_path ? (
                                                        <img src={`/storage/${settings.logo_dark_path}`} alt="Dark Logo" className="h-8 object-contain" />
                                                    ) : (
                                                        <span className="text-xs text-muted-foreground">Shown on Light Header</span>
                                                    )}
                                                </div>
                                                <Input type="file" accept="image/*" onChange={(e) => setData('logo_dark', e.target.files?.[0] || null)} className="cursor-pointer file:text-sky-600 rounded-xl text-xs" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* 📞 CONTACT & LOCAL SEO CARD */}
                            <Card className="rounded-2xl border-border shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-xl flex items-center gap-2">Corporate Business Info</CardTitle>
                                    <CardDescription>Essential contact metrics used for Schema.org and Local SEO rankings.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <Label htmlFor="company_email" className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> Official Email</Label>
                                            <Input id="company_email" type="email" value={data.company_email || ''} onChange={(e) => setData('company_email', e.target.value)} className="rounded-xl" placeholder="info@abinfotech.com" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <Label htmlFor="company_phone" className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> Hotline Number</Label>
                                            <Input id="company_phone" value={data.company_phone || ''} onChange={(e) => setData('company_phone', e.target.value)} className="rounded-xl" placeholder="+880 1XXX XXXXXX" />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="company_address" className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Physical Address</Label>
                                        <Textarea id="company_address" rows={2} value={data.company_address || ''} onChange={(e) => setData('company_address', e.target.value)} className="rounded-xl resize-none" placeholder="House #00, Road #00, Sector #00, Uttara, Dhaka" />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="copyright_text" className="flex items-center gap-1.5"><Copyright className="w-3.5 h-3.5" /> Footer Copyright Text</Label>
                                        <Input id="copyright_text" value={data.copyright_text || ''} onChange={(e) => setData('copyright_text', e.target.value)} className="rounded-xl" placeholder="© 2026 AB Infotech. All Rights Reserved." />
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/*  GOOGLE SEO TAB */}
                        <TabsContent value="seo">
                            <Card className="rounded-2xl shadow-sm">
                                <CardHeader>
                                    <CardTitle>Google SEO Configuration</CardTitle>
                                    <CardDescription>Default meta structures for global search engine crawlers.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="seo_meta_title">Global Meta Title</Label>
                                        <Input
                                            id="seo_meta_title"
                                            value={data.seo_meta_title || ''}
                                            onChange={(e) => setData('seo_meta_title', e.target.value)}
                                            className="rounded-xl"
                                            placeholder="Main keyword target title (e.g., Best IT Solutions in Bangladesh)"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="seo_meta_keywords">Global Meta Keywords</Label>
                                        <Input
                                            id="seo_meta_keywords"
                                            value={data.seo_meta_keywords || ''}
                                            onChange={(e) => setData('seo_meta_keywords', e.target.value)}
                                            className="rounded-xl"
                                            placeholder="it solution, web development, marketing (comma separated)"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="seo_meta_description">Global Meta Description</Label>
                                        <Textarea
                                            id="seo_meta_description"
                                            rows={4}
                                            value={data.seo_meta_description || ''}
                                            onChange={(e) => setData('seo_meta_description', e.target.value)}
                                            className="rounded-xl resize-none"
                                            placeholder="Provide a short excerpt between 150-160 characters..."
                                        />
                                    </div>

                                    <hr className="my-4 border-muted" />

                                    <div className="space-y-1.5">
                                        <Label htmlFor="google_verification_code">Google Site Verification Code</Label>
                                        <Input
                                            id="google_verification_code"
                                            value={data.google_verification_code}
                                            onChange={(e) => setData('google_verification_code', e.target.value)}
                                            className="rounded-xl"
                                            placeholder="e.g., 4ZbX7... (Paste only the content value from the HTML meta tag)"
                                        />
                                        <p className="text-xs text-muted-foreground">Used to verify ownership in Google Search Console.</p>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="google_analytics_id">Google Analytics ID (GA4)</Label>
                                        <Input
                                            id="google_analytics_id"
                                            value={data.google_analytics_id || ''}
                                            onChange={(e) => setData('google_analytics_id', e.target.value)}
                                            className="rounded-xl"
                                            placeholder="e.g., G-XXXXXXXXXX"
                                        />
                                        <p className="text-xs text-muted-foreground">Traffic analytics tracking code identifier.</p>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="robots_meta">Search Engine Visibility (Robots)</Label>
                                        <select
                                            id="robots_meta"
                                            value={data.robots_meta || 'index, follow'}
                                            onChange={(e) => setData('robots_meta', e.target.value)}
                                            className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="index, follow">Index, Follow (Allow search engines to index your site)</option>
                                            <option value="noindex, nofollow">No-Index, No-Follow (Hide your site from search engines)</option>
                                        </select>
                                        <p className="text-xs text-muted-foreground">Set to No-Index if the site is still under development or maintenance.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/*  SOCIAL SEO TAB */}
                        <TabsContent value="social">
                            <Card className="rounded-2xl shadow-sm">
                                <CardHeader>
                                    <CardTitle>Social SEO (Open Graph)</CardTitle>
                                    <CardDescription>
                                        Controls how the website snippet looks when shared on Facebook, LinkedIn, Twitter, and WhatsApp.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-1.5">
                                        <Label htmlFor="og_title">Social Share Title</Label>
                                        <Input
                                            id="og_title"
                                            value={data.og_title || ''}
                                            onChange={(e) => setData('og_title', e.target.value)}
                                            className="rounded-xl"
                                            placeholder="Attractive title for social media cards..."
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="og_description">Social Share Description</Label>
                                        <Textarea
                                            id="og_description"
                                            rows={4}
                                            value={data.og_description || ''}
                                            onChange={(e) => setData('og_description', e.target.value)}
                                            className="rounded-xl resize-none"
                                            placeholder="Short engaging excerpt for Facebook/LinkedIn links..."
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="fb_app_id">Facebook App ID</Label>
                                        <Input
                                            id="fb_app_id"
                                            value={data.fb_app_id || ''}
                                            onChange={(e) => setData('fb_app_id', e.target.value)}
                                            className="rounded-xl"
                                            placeholder="e.g., 123456789012345 (Optional)"
                                        />
                                        <p className="text-xs text-muted-foreground">Used for Facebook domain verification and insights analytics.</p>
                                    </div>

                                    <div className="space-y-1.5">
                                        <Label htmlFor="twitter_card_type">Twitter Card Type</Label>
                                        <select
                                            id="twitter_card_type"
                                            value={data.twitter_card_type || 'summary_large_image'}
                                            onChange={(e) => setData('twitter_card_type', e.target.value)}
                                            className="flex h-10 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <option value="summary_large_image">Summary with Large Image (Standard Card)</option>
                                            <option value="summary">Summary Card (Small Thumbnail)</option>
                                        </select>
                                        <p className="text-xs text-muted-foreground">Defines the visual size of the snippet card when shared on X (Twitter).</p>
                                    </div>

                                    <hr className="my-2 border-muted" />

                                    {/* Social Share Banner (OG Image) */}
                                    <div className="space-y-2">
                                        <Label>Social Share Banner (OG Image)</Label>
                                        <div className="flex flex-col gap-3 p-4 border border-dashed rounded-xl bg-muted/20 min-h-[140px] justify-between">
                                            <div className="flex items-center justify-center h-24 bg-slate-100 rounded-lg p-2 dark:bg-slate-800">
                                                {data.og_image_path ? (
                                                    <img src={`/storage/${data.og_image_path}`} alt="Social Banner Preview" className="h-full object-contain rounded" />
                                                ) : (
                                                    <span className="text-xs text-muted-foreground">Recommended size: 1200 x 630 pixels (PNG/JPG)</span>
                                                )}
                                            </div>
                                            <Input
                                                type="file"
                                                id="og_image"
                                                accept="image/*"
                                                onChange={(e) => setData('og_image', e.target.files?.[0] || null)}
                                                className="cursor-pointer file:text-sky-600 rounded-xl text-xs"
                                            />
                                        </div>
                                        <p className="text-xs text-muted-foreground">This image will appear automatically on social platforms when anyone shares your link.</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>

                    <div className="mt-6 flex justify-end">
                        <Button onClick={handleSubmit} type="submit" disabled={processing} className="bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold gap-2 px-6 w-full sm:w-auto">
                            <Save className="w-4 h-4" /> {processing ? 'Saving...' : 'Save Settings'}
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}