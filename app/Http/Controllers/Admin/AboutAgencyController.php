<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutAgency;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AboutAgencyController extends Controller
{
    public function index()
    {
        $about = AboutAgency::firstOrCreate(['id' => 1], [
            'description' => 'Whether you need a new logo, website, video, marketing campaign, or ebook created for your business...',
        ]);

        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/AboutAgencyEdit', [
            'about' => $about
        ]);
    }

    public function update(Request $request)
    {
        $about = AboutAgency::findOrFail(1);

        $request->validate([
            'badge'               => 'required|string|max:255',
            'title'               => 'required|string|max:255',
            'description'         => 'required|string',
            'years_of_experience' => 'required|integer|min:0',
            'feature_1'           => 'required|string|max:100',
            'feature_2'           => 'required|string|max:100',
            'feature_3'           => 'required|string|max:100',
            'feature_4'           => 'required|string|max:100',
            'button_text'         => 'required|string|max:50',
            'button_url'          => 'required|string',
            'main_image'          => 'nullable|image|mimes:jpeg,png,jpg,webp|max:3072',
            'small_image'         => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);

        $data = $request->except(['main_image', 'small_image']);

        // Large image handler
        if ($request->hasFile('main_image')) {
            if ($about->main_image) {
                Storage::disk('public')->delete($about->main_image);
            }
            $data['main_image'] = $request->file('main_image')->store('about', 'public');
        }

        // Small square image handler
        if ($request->hasFile('small_image')) {
            if ($about->small_image) {
                Storage::disk('public')->delete($about->small_image);
            }
            $data['small_image'] = $request->file('small_image')->store('about', 'public');
        }

        $about->update($data);

        return redirect()->back()->with('success', 'About Agency section updated successfully!');
    }
}
