import React, { FormEvent } from 'react';

import { Head, useForm, Link } from '@inertiajs/react';
import { Plus, X, ArrowLeft } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface PricingPlan {
  id: number;
  name: string;
  monthly_price: number | string;
  yearly_price: number | string;
  description: string;
  features: string[] | null;
  is_popular: boolean | number;
  cta_text: string;
  sort_order: number;
}

interface Props {
  plan: PricingPlan;
}

export default function Edit({ plan }: Props) {
  const { data, setData, post, processing, errors } = useForm({
    name: plan.name || '',
    monthly_price: plan.monthly_price || '',
    yearly_price: plan.yearly_price || '',
    description: plan.description || '',
    features: plan.features || [''], 
    is_popular: !!plan.is_popular,
    cta_text: plan.cta_text || 'Get the offer',
    _method: 'PUT' 
  });

  const addFeatureField = (): void => {
    setData('features', [...data.features, '']);
  };

  const removeFeatureField = (index: number): void => {
    setData('features', data.features.filter((_, i) => i !== index));
  };

  const handleFeatureChange = (index: number, value: string): void => {
    const updatedFeatures = [...data.features];
    updatedFeatures[index] = value;
    setData('features', updatedFeatures);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    post(route('admin.pricing.update', plan.id));
  };

  return (
    <AppLayout>
      <Head title="Edit Pricing Plan" />

      <div className="py-12">
        <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-card overflow-hidden shadow-sm sm:rounded-2xl p-8">
            
            {/* Header section */}
            <div className="flex items-center gap-4 mb-6">
              <Link href={route('admin.pricing.index')} className="p-2 bg-background text-foreground hover:bg-card-100 rounded-xl border  transition-colors">
                <ArrowLeft size={16} className="" />
              </Link>
              <h1 className="text-xl  text-foreground">Edit Pricing Plan</h1>
            </div>

            {/* Form section */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-muted-foreground mb-2">Plan Name</label>
                  <input
                    type="text"
                    className="w-full border focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-sm"
                    value={data.name}
                    onChange={e => setData('name', e.target.value)}
                  />
                  {errors.name && <p className="text-rose-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-muted-foreground mb-2">CTA Button Text</label>
                  <input
                    type="text"
                    className="w-full border focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-sm"
                    value={data.cta_text}
                    onChange={e => setData('cta_text', e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-muted-foreground mb-2">Monthly Price ($)</label>
                  <input
                    type="number"
                    className="w-full border focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-sm"
                    value={data.monthly_price}
                    onChange={e => setData('monthly_price', e.target.value)}
                  />
                  {errors.monthly_price && <p className="text-rose-500 text-xs mt-1">{errors.monthly_price}</p>}
                </div>

                <div>
                  <label className="block text-sm font-bold text-muted-foreground mb-2">Yearly Price ($)</label>
                  <input
                    type="number"
                    className="w-full border focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-sm"
                    value={data.yearly_price}
                    onChange={e => setData('yearly_price', e.target.value)}
                  />
                  {errors.yearly_price && <p className="text-rose-500 text-xs mt-1">{errors.yearly_price}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-muted-foreground mb-2">Description</label>
                <textarea
                  rows={3}
                  className="w-full border focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-sm"
                  value={data.description}
                  onChange={e => setData('description', e.target.value)}
                />
                {errors.description && <p className="text-rose-500 text-xs mt-1">{errors.description}</p>}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="is_popular"
                  className="rounded border text-indigo-600 focus:ring-indigo-500 h-4 w-4"
                  checked={data.is_popular}
                  onChange={e => setData('is_popular', e.target.checked)}
                />
                <label htmlFor="is_popular" className="text-sm font-bold text-muted-foreground select-none">Mark as Most Popular</label>
              </div>

              {/* Dynamic Features Management */}
              <div className="border-t  pt-6">
                <div className="flex justify-between items-center mb-4">
                  <label className="text-sm font-bold text-muted-foreground">Plan Features List</label>
                  <button
                    type="button"
                    onClick={addFeatureField}
                    className="text-xs bg-indigo-50 text-indigo-600 hover:bg-indigo-100 px-3 py-1.5 rounded-lg font-bold flex items-center gap-1 transition-colors"
                  >
                    <Plus size={14} /> Add Feature
                  </button>
                </div>

                <div className="space-y-3">
                  {data.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        className="flex-grow border-slate-200 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-2 text-sm"
                        value={feature}
                        onChange={e => handleFeatureChange(index, e.target.value)}
                        placeholder="Feature text"
                        required
                      />
                      {data.features.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeFeatureField(index)}
                          className="p-2 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors"
                        >
                          <X size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                {errors.features && <p className="text-rose-500 text-xs mt-1">{errors.features}</p>}
              </div>

              <div className="flex justify-end pt-4 border-t ">
                <button
                  type="submit"
                  disabled={processing}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm transition-colors disabled:opacity-50"
                >
                  {processing ? 'Updating...' : 'Update Plan'}
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}