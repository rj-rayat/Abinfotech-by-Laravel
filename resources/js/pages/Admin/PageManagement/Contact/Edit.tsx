import React, { FormEvent, useEffect } from 'react';
import { Head, useForm, Link } from '@inertiajs/react';
import { Phone, Mail, MapPin, Save, ArrowLeft } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface ContactSettings {
  id: number;
  phone: string | null;
  hotline: string | null;
  general_email: string | null;
  support_email: string | null;
  office_address: string | null;
  city_address: string | null;
}

interface Props {
  settings?: ContactSettings | null; 
}

export default function Edit({ settings }: Props) {
  
  const { data, setData, post, processing, errors } = useForm({
  phone: '',
  hotline: '',
  general_email: '',
  support_email: '',
  office_address: '',
  city_address: '',
});

useEffect(() => {
  if (settings) {
    setData({
      phone: settings.phone ?? '',
      hotline: settings.hotline ?? '',
      general_email: settings.general_email ?? '',
      support_email: settings.support_email ?? '',
      office_address: settings.office_address ?? '',
      city_address: settings.city_address ?? '',
    }); 
  }
}, [settings]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    

    post(route('admin.contact.update'), {
      preserveScroll: true,
      onSuccess: () => {
        alert('Settings updated successfully!');
      },
      onError: (err) => {
        console.error("Submission Errors: ", err);
      }
    }); 
  };

  return (
    <AppLayout>
      <Head title="Contact Settings" />

      <div className="py-12 bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
        <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
          
          {/* Back Button & Header Area */}
          <div className="flex items-center gap-4 mb-6">
            <Link 
              href="/admin/page-management" 
              className="p-2.5 bg-white dark:bg-zinc-900 hover:bg-slate-100 dark:hover:bg-zinc-800 rounded-xl border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 transition-colors shadow-sm"
            >
              <ArrowLeft size={18} />
            </Link>
            <div>
              <h1 className="text-2xl font-black text-slate-800 dark:text-zinc-100 tracking-tight">Contact Settings</h1>
              <p className="text-slate-500 dark:text-zinc-400 text-sm mt-0.5">Update the contact details that will be displayed across the website.</p>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white dark:bg-zinc-900 overflow-hidden shadow-sm border border-slate-100 dark:border-zinc-800/80 sm:rounded-2xl p-8 transition-colors duration-300">
            
            {/* Form section */}
            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* 1. Phone & Hotline Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider">
                  <Phone size={16} />
                  <span>Call Us Today Section</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase mb-2">Phone Number (PS)</label>
                    <input
                      type="text"
                      className="w-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-600 transition-colors"
                      value={data.phone}
                      onChange={e => setData('phone', e.target.value)}
                      placeholder="+8801978224636"
                    />
                    {errors.phone && <p className="text-rose-500 text-xs mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase mb-2">Hotline (HO)</label>
                    <input
                      type="text"
                      className="w-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-600 transition-colors"
                      value={data.hotline}
                      onChange={e => setData('hotline', e.target.value)}
                      placeholder="+8801737515185"
                    />
                    {errors.hotline && <p className="text-rose-500 text-xs mt-1">{errors.hotline}</p>}
                  </div>
                </div>
              </div>

              <hr className="border-slate-100 dark:border-zinc-800/80" />

              {/* 2. Emails Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider">
                  <Mail size={16} />
                  <span>Our Emails Section</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase mb-2">General Email</label>
                    <input
                      type="email"
                      className="w-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-600 transition-colors"
                      value={data.general_email}
                      onChange={e => setData('general_email', e.target.value)}
                      placeholder="info@abinfotech.com.bd"
                    />
                    {errors.general_email && <p className="text-rose-500 text-xs mt-1">{errors.general_email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase mb-2">Support Email</label>
                    <input
                      type="email"
                      className="w-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-600 transition-colors"
                      value={data.support_email}
                      onChange={e => setData('support_email', e.target.value)}
                      placeholder="admin@abinfotech.com.bd"
                    />
                    {errors.support_email && <p className="text-rose-500 text-xs mt-1">{errors.support_email}</p>}
                  </div>
                </div>
              </div>

              <hr className="border-slate-100 dark:border-zinc-800/80" />

              {/* 3. Address Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm uppercase tracking-wider">
                  <MapPin size={16} />
                  <span>Our Address Section</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase mb-2">Office Address</label>
                    <input
                      type="text"
                      className="w-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-600 transition-colors"
                      value={data.office_address}
                      onChange={e => setData('office_address', e.target.value)}
                      placeholder="726/12, Adabor 10"
                    />
                    {errors.office_address && <p className="text-rose-500 text-xs mt-1">{errors.office_address}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-600 dark:text-zinc-400 uppercase mb-2">City Address</label>
                    <input
                      type="text"
                      className="w-full bg-white dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 focus:border-indigo-500 focus:ring-indigo-500 rounded-xl px-4 py-2.5 text-sm text-slate-800 dark:text-zinc-100 placeholder-slate-400 dark:placeholder-zinc-600 transition-colors"
                      value={data.city_address}
                      onChange={e => setData('city_address', e.target.value)}
                      placeholder="Dhaka 1217, Bangladesh"
                    />
                    {errors.city_address && <p className="text-rose-500 text-xs mt-1">{errors.city_address}</p>}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-6 border-t border-slate-100 dark:border-zinc-800/80">
                <button
                  type="submit"
                  disabled={processing}
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all disabled:opacity-50 flex items-center gap-2 shadow-lg shadow-indigo-600/10 active:scale-[0.98]"
                >
                  <Save size={16} />
                  {processing ? 'Saving Changes...' : 'Save Settings'}
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </AppLayout>
  );
}