import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

export default function Create() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    image: null as File | null,
    sort_order: 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('admin.page_management.home.client_logos.store'));
  };

  return (
    <AppLayout>
      <Head title="Add Client Logo" />
      <div className="p-6 max-w-xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link href={route('admin.page_management.home.client_logos.index')} className="p-2 hover:bg-muted rounded-lg border">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold">Add New Client Logo</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="border bg-card p-6 rounded-xl space-y-4 shadow-sm">
          <div className="space-y-1.5">
            <label className="text-xs font-medium">Company Name</label>
            <input type="text" value={data.name} onChange={e => setData('name', e.target.value)} className="w-full p-2 bg-background border rounded-lg text-sm" placeholder="e.g. Grameen Jibon" />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium">Sort Order</label>
            <input type="number" value={data.sort_order} onChange={e => setData('sort_order', parseInt(e.target.value) || 0)} className="w-full p-2 bg-background border rounded-lg text-sm" />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium">Logo File</label>
            <input type="file" onChange={e => setData('image', e.target.files ? e.target.files[0] : null)} className="w-full p-2 bg-background border rounded-lg text-sm cursor-pointer" accept="image/*" />
            {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}
          </div>

          <button type="submit" disabled={processing} className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
            <Save className="h-4 w-4" /> {processing ? 'Saving...' : 'Save Logo'}
          </button>
        </form>
      </div>
    </AppLayout>
  );
}