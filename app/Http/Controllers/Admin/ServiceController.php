<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    // List all services
    public function index()
    {
        $services = Service::orderBy('sort_order', 'asc')->get();
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/Services/Index', [
            'services' => $services
        ]);
    }

    // Show create form
    public function create()
    {
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/Services/Create');
    }

    // Store new service
    public function store(Request $request)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'icon_name'   => 'required|string',
            'color_theme' => 'required|string',
            'sort_order'  => 'required|integer',
        ]);

        Service::create($request->all());
        return redirect()->route('admin.page_management.home.services.index')->with('success', 'Service created successfully.');
    }

    // Show edit form
    public function edit(Service $service)
    {
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/Services/Edit', [
            'service' => $service
        ]);
    }

    // Update service
    public function update(Request $request, Service $service)
    {
        $request->validate([
            'title'       => 'required|string|max:255',
            'description' => 'required|string',
            'icon_name'   => 'required|string',
            'color_theme' => 'required|string',
            'sort_order'  => 'required|integer',
        ]);

        $service->update($request->all());
        return redirect()->route('admin.page_management.home.services.index')->with('success', 'Service updated successfully.');
    }

    // Delete service
    public function destroy(Service $service)
    {
        $service->delete();
        return redirect()->back()->with('success', 'Service deleted successfully.');
    }
}
