<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class TeamController extends Controller
{
    public function index()
    {
        $members = Team::latest()->get();
        return Inertia::render('Admin/PageManagement/About/AboutSection/Teams/Index', [
            'members' => $members
        ]);
    }

   
    public function create()
    {
        return Inertia::render('Admin/PageManagement/About/AboutSection/Teams/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'experience_year' => 'required|integer|min:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
            'facebook_link' => 'nullable|url',
            'linkedin_link' => 'nullable|url',
            'github_link' => 'nullable|url',
            'portfolio_link' => 'nullable|url',
        ]);

        if ($request->hasFile('image')) {
          
            $validated['image'] = $request->file('image')->store('team', 'public');
        }

        Team::create($validated);

        return redirect()->route('admin.teams.index')->with('success', 'Team member added successfully!');
    }

    public function edit(Team $team)
    {
        return Inertia::render('Admin/PageManagement/About/AboutSection/Teams/Edit', [
            'member' => $team
        ]);
    }

    public function update(Request $request, Team $team)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'role' => 'required|string|max:255',
        'experience_year' => 'required|integer|min:0',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        'facebook_link' => 'nullable|url',
        'linkedin_link' => 'nullable|url',
        'github_link' => 'nullable|url',
        'portfolio_link' => 'nullable|url',
    ]);

   
    if ($request->hasFile('image')) {
      
        if ($team->image) {
            Storage::disk('public')->delete($team->image);
        }
      
        $validated['image'] = $request->file('image')->store('team', 'public');
    } else {
    
        unset($validated['image']);
    }

    $team->update($validated);

    return redirect()->route('admin.teams.index')->with('success', 'Team member updated successfully!');
}


    public function destroy(Team $team)
    {
        if ($team->image) {
            Storage::disk('public')->delete($team->image);
        }
        $team->delete();
        return redirect()->back()->with('success', 'Team member deleted successfully!');
    }
}
