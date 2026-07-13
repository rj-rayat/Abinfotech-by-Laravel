<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Pricing;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PricingController extends Controller
{
    public function index()
    {
        $plans = Pricing::orderBy('sort_order', 'asc')->get();
        
        return Inertia::render('Admin/PageManagement/Pricing/Index', [
            'plans' => $plans
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/PageManagement/Pricing/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'monthly_price' => 'required|numeric|min:0',
            'yearly_price' => 'required|numeric|min:0',
            'description' => 'required|string',
            'features' => 'required|array|min:1',
            'features.*' => 'required|string|max:255', 
            'is_popular' => 'boolean',
            'cta_text' => 'nullable|string|max:255',
        ]);

        Pricing::create($validated);

        return redirect()->route('admin.pricing.index')
            ->with('success', 'Pricing plan created successfully!');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $plan = Pricing::findOrFail($id);

        return Inertia::render('Admin/PageManagement/Pricing/Edit', [
            'plan' => $plan
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $plan = Pricing::findOrFail($id);

        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'monthly_price' => 'required|numeric|min:0',
            'yearly_price' => 'required|numeric|min:0',
            'description' => 'required|string',
            'features' => 'required|array|min:1',
            'features.*' => 'required|string|max:255',
            'is_popular' => 'boolean',
            'cta_text' => 'nullable|string|max:255',
        ]);

        $plan->update($validated);

        return redirect()->route('admin.pricing.index')
            ->with('success', 'Pricing plan updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $plan = Pricing::findOrFail($id);
        $plan->delete();

        return redirect()->route('admin.pricing.index')
            ->with('success', 'Pricing plan deleted successfully!');
    }
}
