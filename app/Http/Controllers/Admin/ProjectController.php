<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProjectController extends Controller
{
    
    public function index()
    {
        $projects = Project::orderBy('sort_order', 'asc')->get();
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/Projects/Index', [
            'projects' => $projects
        ]);
    }

    
    public function create()
    {
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/Projects/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'image' => 'required|image|mimes:jpeg,png,jpg,webp|max:2048',
            'link' => 'nullable|url',
            'github_link' => 'nullable|url',
            'sort_order' => 'nullable|integer',
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('projects', 'public');
        }

        Project::create([
            'title' => $request->title,
            'category' => $request->category,
            'image' => $imagePath,
            'link' => $request->link,
            'github_link' => $request->github_link,
            'sort_order' => $request->sort_order ?? 0,
        ]);

        return redirect()->route('admin.page_management.home.projects.index')->with('success', 'Project created successfully.');
    }

  
    public function edit(Project $project)
    {
        return Inertia::render('Admin/PageManagement/HomeEdit/HomeSection/Projects/Edit', [
            'project' => $project
        ]);
    }


    public function update(Request $request, Project $project)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'link' => 'nullable|url',
            'github_link' => 'nullable|url',
            'sort_order' => 'nullable|integer',
        ]);

        $data = [
            'title' => $request->title,
            'category' => $request->category,
            'link' => $request->link,
            'github_link' => $request->github_link,
            'sort_order' => $request->sort_order ?? 0,
        ];

        if ($request->hasFile('image')) {
           
            if ($project->image) {
                Storage::disk('public')->delete($project->image);
            }
            $data['image'] = $request->file('image')->store('projects', 'public');
        }

        $project->update($data);

        return redirect()->route('admin.page_management.home.projects.index')->with('success', 'Project updated successfully.');
    }

  
    public function destroy(Project $project)
    {
        if ($project->image) {
            Storage::disk('public')->delete($project->image);
        }
        $project->delete();

        return redirect()->back()->with('success', 'Project deleted successfully.');
    }
}