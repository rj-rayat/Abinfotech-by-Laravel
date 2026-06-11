<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\SiteSetting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class SiteSettingController extends Controller
{
    public function index(Request $request)
    {
        $settings = SiteSetting::first() ?? new SiteSetting();
        return Inertia::render('Admin/Settings/site-settings', [
            'settings' => $settings
        ]);
    }

    public function update(Request $request)
    {

        $request->validate([
            'site_name'                 => 'required|string|max:255',
            'site_title'                => 'nullable|string|max:255',
            'seo_meta_title'            => 'nullable|string|max:255',
            'seo_meta_description'      => 'nullable|string',
            'seo_meta_keywords'         => 'nullable|string',
            'og_title'                  => 'nullable|string|max:255',
            'og_description'            => 'nullable|string',
            'company_email'             => 'nullable|email|max:255',
            'company_phone'             => 'nullable|string|max:50',
            'company_address'           => 'nullable|string',
            'copyright_text'            => 'nullable|string|max:255',
            
            'google_verification_code'  => 'nullable|string',
            'google_analytics_id'       => 'nullable|string|max:100',
            'robots_meta'               => 'nullable|string|max:50',
            'twitter_card_type'         => 'nullable|string|max:50',
            'fb_app_id'                 => 'nullable|string|max:100',

      
            'favicon'                   => 'nullable|image|mimes:png,ico,jpg,jpeg|max:2048',
            'logo_light'                => 'nullable|image|mimes:png,jpg,jpeg,svg|max:2048',
            'logo_dark'                 => 'nullable|image|mimes:png,jpg,jpeg,svg|max:2048',
            'og_image'                  => 'nullable|image|mimes:png,jpg,jpeg|max:2048',
        ]);

        $settings = SiteSetting::first() ?? new SiteSetting();

   
        $settings->site_name = $request->site_name;
        $settings->site_title = $request->site_title;
        $settings->seo_meta_title = $request->seo_meta_title;
        $settings->seo_meta_description = $request->seo_meta_description;
        $settings->seo_meta_keywords = $request->seo_meta_keywords;
        $settings->og_title = $request->og_title;
        $settings->og_description = $request->og_description;
        $settings->company_email = $request->company_email;
        $settings->company_phone = $request->company_phone;
        $settings->company_address = $request->company_address;
        $settings->copyright_text = $request->copyright_text;
        
        $settings->google_verification_code = $request->google_verification_code;
        $settings->google_analytics_id = $request->google_analytics_id;
        $settings->robots_meta = $request->robots_meta ?? 'index, follow';
        $settings->twitter_card_type = $request->twitter_card_type ?? 'summary_large_image';
        $settings->fb_app_id = $request->fb_app_id;

 
        
        // Favicon
        if ($request->hasFile('favicon')) {
            if ($settings->favicon_path) Storage::disk('public')->delete($settings->favicon_path);
            $settings->favicon_path = $request->file('favicon')->store('settings', 'public');
        }

        // Logo Light
        if ($request->hasFile('logo_light')) {
            if ($settings->logo_light_path) Storage::disk('public')->delete($settings->logo_light_path);
            $settings->logo_light_path = $request->file('logo_light')->store('settings', 'public');
        }

        // Logo Dark
        if ($request->hasFile('logo_dark')) {
            if ($settings->logo_dark_path) Storage::disk('public')->delete($settings->logo_dark_path);
            $settings->logo_dark_path = $request->file('logo_dark')->store('settings', 'public');
        }

        // OG Image
        if ($request->hasFile('og_image')) {
            if ($settings->og_image_path) Storage::disk('public')->delete($settings->og_image_path);
            $settings->og_image_path = $request->file('og_image')->store('settings', 'public');
        }

     
        $settings->save();

        return redirect()->back()->with('success', 'Settings updated successfully!');
    }
}