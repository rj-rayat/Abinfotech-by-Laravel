<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutHero;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AboutHeroController extends Controller
{
    public function edit()
    {
        return Inertia::render('Admin/PageManagement/About/AboutSection/HeroEdit/HeroEdit', [
            'hero' => AboutHero::first()
        ]);
    }

    public function update(Request $request)
    {
        $hero = AboutHero::first();

        $validated = $request->validate([
            'badge' => 'nullable|string|max:255',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'btn_text' => 'nullable|string|max:255',
            'btn_link' => 'nullable|string|max:255',
            'main_image' => 'nullable|image|mimes:jpeg,png,jpg,webp,svg|max:3072',
            'logo_image' => 'nullable|image|mimes:jpeg,png,jpg,webp,svg|max:2048',
            'counter_number' => 'nullable|string|max:50',
            'counter_text' => 'nullable|string|max:255',
            'stat_text' => 'nullable|string|max:255',
        ]);

  
        if ($request->hasFile('main_image')) {
            if ($hero && $hero->main_image) {
                Storage::disk('public')->delete($hero->main_image);
            }
            $validated['main_image'] = $request->file('main_image')->store('about/hero', 'public');
        } else {
            unset($validated['main_image']);
        }

   
        if ($request->hasFile('logo_image')) {
            if ($hero && $hero->logo_image) {
                Storage::disk('public')->delete($hero->logo_image);
            }
            $validated['logo_image'] = $request->file('logo_image')->store('about/hero', 'public');
        } else {
            unset($validated['logo_image']);
        }

        AboutHero::updateOrCreate(['id' => 1], $validated);

        return redirect()->back()->with('success', 'Full About Hero section updated with all stats!');
    }
}
