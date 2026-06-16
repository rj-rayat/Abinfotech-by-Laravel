<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HeroSlide;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HeroSectionController extends Controller
{
    public function index()
    {
        
        $slides = HeroSlide::orderBy('sort_order', 'asc')->get();

        
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/HeroEdit', [
            'slides' => $slides
        ]);
    }

   
    public function store(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'desc'        => 'required|string',
            'color_theme' => 'required|string',
        ]);

        HeroSlide::create([
            'title'       => $request->title,
            'desc'        => $request->desc,
            'color_theme' => $request->color_theme,
            'sort_order'  => HeroSlide::count() + 1, 
        ]);

        return redirect()->back()->with('success', 'New slide added to carousel successfully!');
    }

    
    public function update(Request $request, $id)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'desc'        => 'required|string',
            'color_theme' => 'required|string',
        ]);

        $slide = HeroSlide::findOrFail($id);
        $slide->update([
            'title'       => $request->title,
            'desc'        => $request->desc,
            'color_theme' => $request->color_theme,
        ]);

        return redirect()->back()->with('success', 'Slide updated successfully!');
    }

    
    public function destroy($id)
    {
        $slide = HeroSlide::findOrFail($id);
        $slide->delete();

        return redirect()->back()->with('success', 'Slide removed from carousel!');
    }
}
