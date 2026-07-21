import React from 'react';
import { useForm, Link, Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function Create() {
    const { data, setData, post, errors, processing } = useForm({
        name: '',
        role: '',
        experience_year: '',
        image: null as File | null,
        facebook_link: '',
        linkedin_link: '',
        github_link: '',
        portfolio_link: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.teams.store'));
    };

    return (
        <AppLayout>

            <Head title='Create Team Card' />
             <div className="max-w-4xl mx-auto p-6 md:p-10 bg-background text-foreground">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold tracking-tight">Add New Team Member</h1>
                <Link href={route('admin.teams.index')} className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-xl text-sm font-semibold transition">
                    Back to List
                </Link>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-card p-6 md:p-8 rounded-2xl border shadow-sm" encType="multipart/form-data">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. Abdullah Al Mamun" />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Role / Designation</label>
                        <input type="text" value={data.role} onChange={e => setData('role', e.target.value)} className="w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. Founder & Chairman" />
                        {errors.role && <p className="text-red-500 text-xs mt-1">{errors.role}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Experience (Years)</label>
                        <input type="number" value={data.experience_year} onChange={e => setData('experience_year', e.target.value)} className="w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="e.g. 5" />
                        {errors.experience_year && <p className="text-red-500 text-xs mt-1">{errors.experience_year}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Profile Image</label>
                        <input type="file" onChange={e => setData('image', e.target.files ? e.target.files[0] : null)} className="w-full p-2.5 rounded-xl border bg-background file:mr-4 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
                        {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
                    </div>
                </div>

                <div className="border-t pt-6">
                    <h3 className="text-base font-semibold mb-4 text-muted-foreground">Social & Portfolio Links (Optional)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium mb-2">Facebook URL</label>
                            <input type="url" value={data.facebook_link} onChange={e => setData('facebook_link', e.target.value)} className="w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="https://facebook.com/..." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">LinkedIn URL</label>
                            <input type="url" value={data.linkedin_link} onChange={e => setData('linkedin_link', e.target.value)} className="w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="https://linkedin.com/in/..." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">GitHub URL</label>
                            <input type="url" value={data.github_link} onChange={e => setData('github_link', e.target.value)} className="w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="https://github.com/..." />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Portfolio URL</label>
                            <input type="url" value={data.portfolio_link} onChange={e => setData('portfolio_link', e.target.value)} className="w-full p-3 rounded-xl border bg-background focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="https://myportfolio.com" />
                        </div>
                    </div>
                </div>

                <button type="submit" disabled={processing} className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold rounded-xl transition shadow-lg shadow-indigo-600/10">
                    {processing ? 'Saving Team Member...' : 'Save Member'}
                </button>
            </form>
        </div>

        </AppLayout>
       
    );
}