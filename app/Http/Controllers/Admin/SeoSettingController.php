<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SeoSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SeoSettingController extends Controller
{

    public function index()
    {
    
        $existingSeos = SeoSetting::select('id', 'page_slug', 'meta_title', 'updated_at')->get()->map(function ($seo) {
            return [
                'id' => $seo->id,
                'page_slug' => $seo->page_slug,
                'meta_title' => $seo->meta_title,
                'last_updated' => $seo->updated_at->format('d M, Y'),
            ];
        });

  
        return Inertia::render('Admin/PageManagement/SeoCustomize', [
            'existingSeos' => $existingSeos
        ]);
    }
    public function fetchSeo($slug)
    {
        $seo = SeoSetting::where('page_slug', $slug)->first();

        return response()->json([
            'success' => true,
            'data' => $seo ?? [
                'meta_title' => '',
                'meta_description' => '',
                'meta_keywords' => ''
            ]
        ]);
    }

    public function updateSeo(Request $request)
    {
        $request->validate([
            'page_slug' => 'required|string',
            'meta_title' => 'nullable|string|max:255',
            'meta_description' => 'nullable|string',
            'meta_keywords' => 'nullable|string',
        ]);


        $seo = SeoSetting::updateOrCreate(
            ['page_slug' => $request->page_slug],
            [
                'meta_title' => $request->meta_title,
                'meta_description' => $request->meta_description,
                'meta_keywords' => $request->meta_keywords,
            ]
        );

        return redirect()->back()->with('success', 'SEO Settings updated successfully for ' . ucfirst($request->page_slug));
    }
}
