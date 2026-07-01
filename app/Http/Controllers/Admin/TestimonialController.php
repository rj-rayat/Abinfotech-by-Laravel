<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TestimonialController extends Controller
{
    public function index()
    {
        $testimonials = Testimonial::orderBy('sort_order', 'asc')->get();
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/Testimonials/Index', [
            'testimonials' => $testimonials
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/Testimonials/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'designation' => 'nullable|string|max:255',
            'review' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'sort_order' => 'required|integer',
        ]);

        if ($request->hasFile('image')) {
            // storage/app/public/testimonials ফোল্ডারে সেভ হবে
            $path = $request->file('image')->store('testimonials', 'public');
            $validated['image'] = $path;
        }

        Testimonial::create($validated);

        return redirect()->route('admin.page_management.home.testimonials.index')
            ->with('success', 'Testimonial added successfully!');


        
    }

    public function edit(Testimonial $testimonial)
    {
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/Testimonials/Edit', [
            'testimonial' => $testimonial
        ]);
    }

    public function update(Request $request, Testimonial $testimonial)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'designation' => 'nullable|string|max:255',
            'review' => 'required|string',
            'rating' => 'required|integer|min:1|max:5',
            'image' => 'nullable', 
            'sort_order' => 'required|integer',
        ]);

       
        if ($request->hasFile('image')) {
            
            if ($testimonial->image) {
                Storage::disk('public')->delete($testimonial->image);
            }
            $path = $request->file('image')->store('testimonials', 'public');
            $validated['image'] = $path;
        } else {
            
            unset($validated['image']);
        }

        $testimonial->update($validated);

        return redirect()->route('admin.page_management.home.testimonials.index')
            ->with('success', 'Testimonial updated successfully!');
    }

    public function destroy(Testimonial $testimonial)
    {
        if ($testimonial->image) {
            Storage::disk('public')->delete($testimonial->image);
        }
        
        $testimonial->delete();

        return redirect()->route('admin.page_management.home.testimonials.index')
            ->with('success', 'Testimonial deleted successfully!');
    }
}
