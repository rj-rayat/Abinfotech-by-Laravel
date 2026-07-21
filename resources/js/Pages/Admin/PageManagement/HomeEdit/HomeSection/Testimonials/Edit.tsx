import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save } from 'lucide-react';
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

interface EditProps {
  testimonial: Testimonial;
}

export default function Edit({ testimonial }: EditProps) {
  const { data, setData, post, processing, errors } = useForm({
    name: testimonial.name || '',
    designation: testimonial.designation || '',
    review: testimonial.review || '',
    rating: testimonial.rating || 5,
    image: null as File | null,
    sort_order: testimonial.sort_order || 0,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('admin.page_management.home.testimonials.update', testimonial.id));
  };

  const oldAvatarSrc = testimonial.image?.startsWith('/') || testimonial.image?.startsWith('http')
    ? testimonial.image
    : `/storage/${testimonial.image}`;

  return (
    <AppLayout>
      <Head title="Edit Testimonial" />
      <div className="p-6 max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link 
            href={route('admin.page_management.home.testimonials.index')} 
            className="p-2 hover:bg-muted rounded-lg border transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Edit Testimonial</h1>
            <p className="text-muted-foreground text-sm">Update the details of the customer feedback card.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="border bg-card p-6 rounded-xl space-y-4 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium">Client Name</label>
              <input 
                type="text" 
                value={data.name} 
                onChange={e => setData('name', e.target.value)} 
                className="w-full p-2 bg-background border rounded-lg text-sm"
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">Designation / Company</label>
              <input 
                type="text" 
                value={data.designation} 
                onChange={e => setData('designation', e.target.value)} 
                className="w-full p-2 bg-background border rounded-lg text-sm"
              />
              {errors.designation && <p className="text-red-500 text-xs">{errors.designation}</p>}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium">Review Comment</label>
            <textarea 
              rows={4}
              value={data.review} 
              onChange={e => setData('review', e.target.value)} 
              className="w-full p-2 bg-background border rounded-lg text-sm"
            />
            {errors.review && <p className="text-red-500 text-xs">{errors.review}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium">Rating (1 - 5 Stars)</label>
              <select 
                value={data.rating} 
                onChange={e => setData('rating', parseInt(e.target.value))} 
                className="w-full p-2 bg-background border rounded-lg text-sm"
              >
                {[5, 4, 3, 2, 1].map(num => (
                  <option key={num} value={num}>{num} Stars</option>
                ))}
              </select>
              {errors.rating && <p className="text-red-500 text-xs">{errors.rating}</p>}
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium">Sort Order</label>
              <input 
                type="number" 
                value={data.sort_order} 
                onChange={e => setData('sort_order', parseInt(e.target.value) || 0)} 
                className="w-full p-2 bg-background border rounded-lg text-sm"
              />
              {errors.sort_order && <p className="text-red-500 text-xs">{errors.sort_order}</p>}
            </div>
          </div>

          {/* Avatar Upload Field with Previous Thumbnail Display */}
          <div className="space-y-2">
            <label className="text-xs font-medium">Client Avatar Image</label>
            <div className="flex items-center gap-4">
              {testimonial.image && (
                <div className="h-12 w-12 rounded-full overflow-hidden border bg-muted flex-shrink-0">
                  <img src={oldAvatarSrc} alt="Current profile" className="w-full h-full object-cover" />
                </div>
              )}
              <input 
                type="file" 
                onChange={e => setData('image', e.target.files ? e.target.files[0] : null)} 
                className="w-full p-2 bg-background border rounded-lg text-sm file:mr-4 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-primary file:text-primary-foreground cursor-pointer"
                accept="image/*"
              />
            </div>
            {errors.image && <p className="text-red-500 text-xs">{errors.image}</p>}
          </div>

          <div className="flex justify-end pt-2">
            <button 
              type="submit" 
              disabled={processing}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg text-sm hover:bg-indigo-700 transition-colors disabled:opacity-50"
            >
              <Save className="h-4 w-4" />
              {processing ? 'Saving...' : 'Changes Save'}
            </button>
          </div>
        </form>
      </div>
    </AppLayout>
  );
}