<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ContactSetting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactSettingController extends Controller
{
public function edit()
    {
        
        $settings = ContactSetting::first() ?: ContactSetting::create([
            'phone' => '',
            'hotline' => '',
            'general_email' => '',
            'support_email' => '',
            'office_address' => '',
            'city_address' => '',
        ]);

        return Inertia::render('Admin/PageManagement/Contact/Edit', [
            'settings' => $settings
        ]);
    }

    public function update(Request $request)
    {
        $settings = ContactSetting::first() ?? new ContactSetting();
        $validated = $request->validate([
            'phone'          => 'nullable|string',
            'hotline'        => 'nullable|string',
            'general_email'  => 'nullable|email',
            'support_email'  => 'nullable|email',
            'office_address' => 'nullable|string',
            'city_address'   => 'nullable|string',
        ]);

      
        $settings->fill($validated)->save();

        return redirect()->back()->with('success', 'Contact settings updated successfully.');
    }
}
