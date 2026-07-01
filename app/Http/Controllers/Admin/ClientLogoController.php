<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ClientLogo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ClientLogoController extends Controller
{
    public function index()
    {
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/ClientLogos/Index', [
            'logos' => ClientLogo::orderBy('sort_order', 'asc')->get()
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/ClientLogos/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            'sort_order' => 'required|integer',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('client_logos', 'public');
        }

        ClientLogo::create($validated);

        return redirect()->route('admin.page_management.home.client_logos.index')->with('success', 'Logo added successfully!');
    }

    public function edit(ClientLogo $clientLogo)
    {
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/ClientLogos/Edit', ['logo' => $clientLogo]);
    }

    public function update(Request $request, ClientLogo $clientLogo)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'image' => 'nullable',
            'sort_order' => 'required|integer',
        ]);

        if ($request->hasFile('image')) {
            if ($clientLogo->image) {
                Storage::disk('public')->delete($clientLogo->image);
            }
            $validated['image'] = $request->file('image')->store('client_logos', 'public');
        } else {
            unset($validated['image']);
        }

        $clientLogo->update($validated);

        return redirect()->route('admin.page_management.home.client_logos.index')->with('success', 'Logo updated successfully!');
    }

    public function destroy(ClientLogo $clientLogo)
    {
        if ($clientLogo->image) {
            Storage::disk('public')->delete($clientLogo->image);
        }
        $clientLogo->delete();
        return redirect()->route('admin.page_management.home.client_logos.index')->with('success', 'Logo deleted successfully!');
    }
}
