import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import { ArrowLeft, Save, BarChart3 } from 'lucide-react';
import AppLayout from '@/layouts/app-layout';

interface FactsData {
    id: number;
    card1_label: string; card1_value: number;
    card2_label: string; card2_value: number;
    card3_label: string; card3_value: number;
    card4_label: string; card4_value: number;
}

interface Props {
    facts: FactsData;
}

export default function FunFactsEdit({ facts }: Props) {
    const { data, setData, post, processing, errors } = useForm({
        card1_label: facts.card1_label, card1_value: facts.card1_value,
        card2_label: facts.card2_label, card2_value: facts.card2_value,
        card3_label: facts.card3_label, card3_value: facts.card3_value,
        card4_label: facts.card4_label, card4_value: facts.card4_value,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.page_management.home.fun_facts.update'));
    };

    return (
        <AppLayout>
            <Head title="Fun Facts Customizer" />

            <div className="p-6 max-w-4xl mx-auto space-y-6">
                {/* হেডার ব্যাক বাটন */}
                <div className="flex items-center gap-4">
                    <Link 
                        href={'edit'} 
                        className="p-2 hover:bg-muted rounded-lg border transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Fun Facts Management</h1>
                        <p className="text-muted-foreground text-sm">Update the statistics counters displayed on the homepage.</p>
                    </div>
                </div>

                {/* ফর্ম স্টার্ট */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* 📊 Card 1 */}
                        <div className="border bg-card p-5 rounded-xl shadow-sm space-y-4">
                            <h3 className="font-semibold text-sm text-blue-400 flex items-center gap-2 border-b pb-2">
                                <BarChart3 className="h-4 w-4" /> Card 1 (e.g., Happy Customers)
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="col-span-2 space-y-1.5">
                                    <label className="text-xs font-medium">Label</label>
                                    <input type="text" value={data.card1_label} onChange={e => setData('card1_label', e.target.value)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium">Value</label>
                                    <input type="number" value={data.card1_value} onChange={e => setData('card1_value', parseInt(e.target.value) || 0)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                                </div>
                            </div>
                        </div>

                        {/* 📊 Card 2 */}
                        <div className="border bg-card p-5 rounded-xl shadow-sm space-y-4">
                            <h3 className="font-semibold text-sm text-amber-400 flex items-center gap-2 border-b pb-2">
                                <BarChart3 className="h-4 w-4" /> Card 2 (e.g., Cups of Coffee)
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="col-span-2 space-y-1.5">
                                    <label className="text-xs font-medium">Label</label>
                                    <input type="text" value={data.card2_label} onChange={e => setData('card2_label', e.target.value)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium">Value</label>
                                    <input type="number" value={data.card2_value} onChange={e => setData('card2_value', parseInt(e.target.value) || 0)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                                </div>
                            </div>
                        </div>

                        {/* 📊 Card 3 */}
                        <div className="border bg-card p-5 rounded-xl shadow-sm space-y-4">
                            <h3 className="font-semibold text-sm text-purple-400 flex items-center gap-2 border-b pb-2">
                                <BarChart3 className="h-4 w-4" /> Card 3 (e.g., Innovations)
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="col-span-2 space-y-1.5">
                                    <label className="text-xs font-medium">Label</label>
                                    <input type="text" value={data.card3_label} onChange={e => setData('card3_label', e.target.value)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium">Value</label>
                                    <input type="number" value={data.card3_value} onChange={e => setData('card3_value', parseInt(e.target.value) || 0)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                                </div>
                            </div>
                        </div>

                        {/* 📊 Card 4 */}
                        <div className="border bg-card p-5 rounded-xl shadow-sm space-y-4">
                            <h3 className="font-semibold text-sm text-emerald-400 flex items-center gap-2 border-b pb-2">
                                <BarChart3 className="h-4 w-4" /> Card 4 (e.g., Great Projects)
                            </h3>
                            <div className="grid grid-cols-3 gap-3">
                                <div className="col-span-2 space-y-1.5">
                                    <label className="text-xs font-medium">Label</label>
                                    <input type="text" value={data.card4_label} onChange={e => setData('card4_label', e.target.value)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium">Value</label>
                                    <input type="number" value={data.card4_value} onChange={e => setData('card4_value', parseInt(e.target.value) || 0)} className="w-full p-2 bg-background border rounded-lg text-sm" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* সাবমিট বাটন */}
                    <div className="flex justify-end">
                        <button 
                            onClick={()=>handleSubmit}
                            type="submit" 
                            disabled={processing}
                            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-xl text-sm hover:bg-primary/90 transition-colors shadow-md"
                        >
                            <Save className="h-4 w-4" />
                            {processing ? 'Saving...' : 'Save Analytics Changes'}
                        </button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}