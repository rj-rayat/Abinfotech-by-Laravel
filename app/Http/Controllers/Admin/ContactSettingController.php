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
       $settings = ContactSetting::first();
    
    if (!$settings) {
        $settings = ContactSetting::create([
            'phone' => '',
            'hotline' => '',
            'general_email' => '',
            'support_email' => '',
            'office_address' => '',
            'city_address' => '',
        ]);
    }

        return Inertia::render('Admin/PageManagement/Contact/Edit', [
        'settings' => $settings->fresh()
    ]);
    }

  
    public function update(Request $request)
    {
        $request->validate([
            'phone'          => 'nullable|string|max:50',
            'hotline'        => 'nullable|string|max:50',
            'general_email'  => 'nullable|email|max:100',
            'support_email'  => 'nullable|email|max:100',
            'office_address' => 'nullable|string|max:255',
            'city_address'   => 'nullable|string|max:255',
        ]);
        $settings = ContactSetting::first() ?: new ContactSetting();
        $settings->fill($request->all());
        $settings->save();

    return redirect()->back()->with('success', 'Contact settings updated successfully!');
    }
}
