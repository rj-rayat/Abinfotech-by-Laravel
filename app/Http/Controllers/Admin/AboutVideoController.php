<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\AboutVideo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class AboutVideoController extends Controller
{
      public function edit()
    {
        $aboutVideo = AboutVideo::first();
        return Inertia::render('Admin/PageManagement/About/AboutSection/AboutVideo/AboutVideoEdit', [
            'aboutVideo' => $aboutVideo
        ]);
    }

    public function update(Request $request)
    {
        $aboutVideo = AboutVideo::first() ?? new AboutVideo();

        $validated = $request->validate([
            'sub_title'       => 'nullable|string|max:255',
            'title'           => 'nullable|string|max:255',
            'description_1'   => 'nullable|string',
            'description_2'   => 'nullable|string',
            'video_url'       => 'nullable|url',
            'video_thumbnail' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'btn_text'        => 'nullable|string|max:100',
            'btn_link'        => 'nullable|string|max:255',
        ]);

        
        if ($request->hasFile('video_thumbnail')) {
            if ($aboutVideo->video_thumbnail) {
                Storage::disk('public')->delete($aboutVideo->video_thumbnail);
            }
            $validated['video_thumbnail'] = $request->file('video_thumbnail')->store('about', 'public');
        } else {
            unset($validated['video_thumbnail']);
        }

        $aboutVideo->fill($validated)->save();

        return redirect()->back()->with('success', 'About Video section updated successfully!');
    }
}
