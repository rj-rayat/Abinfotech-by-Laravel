import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { Plus, Edit2, Trash2, ArrowLeft, Image as ImageIcon } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface Logo {
  id: number;
  name: string;
  image: string;
  sort_order: number;
}

interface IndexProps {
  logos: Logo[];
}

export default function Index({ logos }: IndexProps) {
  const { delete: destroy } = useForm();

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this partner logo?')) {
      destroy(route('admin.page_management.home.client_logos.destroy', id));
    }
  };

  return (
    <AppLayout>
      <Head title="Industry Partners Logos" />
      
      <div className="p-6 w-6xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b pb-5">
           <div className='flex justify-center items-center gap-5'>
             <Link href={'edit'} className="p-2 hover:bg-muted rounded-lg border transition-colors">
                    <ArrowLeft className="h-4 w-4" />
            </Link>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Industry Partners</h1>
            <p className="text-sm text-muted-foreground">
              Manage the continuous scrolling partner and client logos displayed on the homepage.
            </p>
          </div>
           </div>
          
          <Link
            href={route('admin.page_management.home.client_logos.create')}
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl text-sm font-semibold shadow-sm transition-all active:scale-95 self-start sm:self-center"
          >
            <Plus className="h-4 w-4" /> Add Partner Logo
          </Link>
        </div>

        {/* Content Section */}
        {logos.length === 0 ? (
          <div className="border border-dashed rounded-2xl p-16 text-center bg-card/50">
            <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
              <ImageIcon className="h-6 w-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-lg">No logos added yet</h3>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto mt-1">
              Get started by adding your first client or industry leader logo to show on the landing page carousel.
            </p>
          </div>
        ) : (
          <div className="border bg-card rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-muted/40 border-b text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    <th className="p-4 pl-6 w-16">Order</th>
                    <th className="p-4">Logo Preview</th>
                    <th className="p-4">Partner Name</th>
                    <th className="p-4 text-right pr-6">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y text-sm">
                  {logos.map((logo) => (
                    <tr key={logo.id} className="hover:bg-muted/20 transition-colors group">
                      <td className="p-4 pl-6 font-medium text-muted-foreground">
                        #{logo.sort_order}
                      </td>
                      <td className="p-4">
                        <div className="p-2 border rounded-xl bg-slate-50 dark:bg-slate-900 w-28 h-12 flex items-center justify-center overflow-hidden shadow-inner">
                          <img 
                            src={`/storage/${logo.image}`} 
                            alt={logo.name} 
                            className="max-h-full max-w-full object-contain  group-hover:grayscale-0 transition-all duration-300"
                          />
                        </div>
                      </td>
                      <td className="p-4 font-semibold text-foreground">
                        {logo.name}
                      </td>
                      <td className="p-4 text-right pr-6">
                        <div className="flex items-center justify-end gap-2">
                          <Link
                            href={route('admin.page_management.home.client_logos.edit', logo.id)}
                            className="p-2 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 text-indigo-600 rounded-lg border border-transparent hover:border-indigo-100 transition-all"
                            title="Edit"
                          >
                            <Edit2 className="h-4 w-4" />
                          </Link>
                          <button
                            onClick={() => handleDelete(logo.id)}
                            className="p-2 hover:bg-red-50 dark:hover:bg-red-950/40 text-red-600 rounded-lg border border-transparent hover:border-red-100 transition-all"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
      </div>
    </AppLayout>
  );
}