import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { Plus, Edit, Trash2, Star, ArrowLeft } from 'lucide-react';
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
  plans: PricingPlan[];
}

export default function Index({ plans = [] }: Props) {

  const handleDelete = (id: number): void => {
    if (confirm('Are you sure you want to delete this plan?')) {
      router.delete(route('admin.pricing.destroy', id));
    }
  };

  return (
    <AppLayout>
      <Head title="Pricing Plans" />

      <div className="py-12 ">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className=" overflow-hidden shadow-sm sm:rounded-2xl p-6">

            {/* Header Section */}
            <div className="flex justify-between items-center mb-6 bg-background">
              <div className='flex gap-2'>
                
                    <div className="p-2 hover:bg-muted rounded-lg border">
                        <ArrowLeft onClick={() => window.history.back()} className="h-4 w-4 cursor-pointer" />
                    </div>
                <h1 className="text-xl text-foreground ">All Pricing Plans</h1>
              </div>

              <Link
                href={route('admin.pricing.create')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl font-bold text-sm flex items-center gap-2 transition-all"
              >
                <Plus size={16} /> Add New Plan
              </Link>
            </div>

            {/* Table Area */}
            <div className="bg-card border rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/50  text-sm font-semibold text-muted-foreground">
                    <th className="p-4">Plan Name</th>
                    <th className="p-4">Monthly Price</th>
                    <th className="p-4">Yearly Price</th>
                    <th className="p-4">Features</th>
                    <th className="p-4">Popular?</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {plans.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="p-8 text-center ">
                        No plans found. Create one!
                      </td>
                    </tr>
                  ) : (
                    plans.map((plan) => (
                      <tr key={plan.id} className=" hover:bg-background-50/50 transition-colors">
                        <td className="p-4  font-semibold ">{plan.name}</td>
                        <td className="p-4 text-muted-foreground">${plan.monthly_price}</td>
                        <td className="p-4 font-medium">${plan.yearly_price}</td>
                        <td className="p-4">
                          <span className="bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md font-semibold text-xs">
                            {plan.features?.length || 0} Features
                          </span>
                        </td>
                        <td className="p-4">
                          {plan.is_popular ? (
                            <span className="bg-amber-50 text-amber-600 px-2.5 py-1 rounded-md font-bold text-xs flex items-center gap-1 w-fit">
                              <Star size={12} className="fill-amber-600" /> Yes
                            </span>
                          ) : (
                            <span className="text-slate-400">No</span>
                          )}
                        </td>
                        <td className="p-4 text-right flex justify-end gap-2">
                          <Link
                            href={route('admin.pricing.edit', plan.id)}
                            className="p-2 text-green-600 hover:bg-indigo-50 rounded-lg transition-colors"
                          >
                            <Edit size={16} />
                          </Link>
                          <button
                            onClick={() => handleDelete(plan.id)}
                            className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}