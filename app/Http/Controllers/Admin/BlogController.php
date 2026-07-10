<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Inertia\Inertia;

class BlogController extends Controller
{

    public function show($slug)
    {
        
        $blog = Blog::where('slug', $slug)->firstOrFail();

        return Inertia::render('Blog/Show', [
            'blog' => $blog
        ]);
    }
    public function index()
    {
        return Inertia::render('Admin/PageManagement/Blog/Index', [
            'blogs' => Blog::latest()->get()
        ]);
    }


    public function create()
    {
        return Inertia::render('Admin/PageManagement/Blog/Create');
    }


    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:3072', // Max 3MB
            'body' => 'required|string',
            'seo_meta_title' => 'nullable|string|max:255',
            'seo_meta_description' => 'nullable|string',
            'seo_meta_keywords' => 'nullable|string|max:255',
            'og_title' => 'nullable|string|max:255',
            'og_description' => 'nullable|string',
            'og_image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048', // Max 2MB
        ]);


        $slug = Str::slug($request->title);
        $count = Blog::where('slug', 'LIKE', "{$slug}%")->count();
        $validated['slug'] = $count ? "{$slug}-" . ($count + 1) : $slug;

        // Featured image upload
        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('blogs/featured', 'public');
        }

        // Og Image upload
        if ($request->hasFile('og_image')) {
            $validated['og_image'] = $request->file('og_image')->store('blogs/og_shares', 'public');
        } else {

            $validated['og_image'] = $validated['image'] ?? null;
        }


        $validated['seo_meta_title'] = $request->seo_meta_title ?: $request->title;
        $validated['og_title'] = $request->og_title ?: $request->title;

        Blog::create($validated);

        return redirect()->route('admin.blogs.index')->with('success', 'Awesome! Blog post published successfully.');
    }

    // Blog Edit page
    public function edit(Blog $blog)
    {
        return Inertia::render('Admin/PageManagement/Blog/Edit', [
            'blog' => $blog
        ]);
    }


    public function update(Request $request, Blog $blog)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg,webp|max:3072',
            'body' => 'required|string',
            'seo_meta_title' => 'nullable|string|max:255',
            'seo_meta_description' => 'nullable|string',
            'seo_meta_keywords' => 'nullable|string|max:255',
            'og_title' => 'nullable|string|max:255',
            'og_description' => 'nullable|string',
            'og_image' => 'nullable|image|mimes:jpeg,png,jpg,webp|max:2048',
        ]);


        unset($validated['image']);
        unset($validated['og_image']);

        // Slug generation logic
        if ($blog->title !== $request->title) {
            $slug = Str::slug($request->title);
            $count = Blog::where('slug', 'LIKE', "{$slug}%")->where('id', '!=', $blog->id)->count();
            $validated['slug'] = $count ? "{$slug}-" . ($count + 1) : $slug;
        }

        // Featured image upload check
        if ($request->hasFile('image')) {
            if ($blog->image) {
                Storage::disk('public')->delete($blog->image);
            }
            $validated['image'] = $request->file('image')->store('blogs/featured', 'public');
        }

        // Og Image upload check
        if ($request->hasFile('og_image')) {
            if ($blog->og_image && $blog->og_image !== $blog->image) {
                Storage::disk('public')->delete($blog->og_image);
            }
            $validated['og_image'] = $request->file('og_image')->store('blogs/og_shares', 'public');
        }

        // SEO and OG Title missing handlers
        $validated['seo_meta_title'] = $request->seo_meta_title ?: $request->title;
        $validated['og_title'] = $request->og_title ?: $request->title;


        $blog->update($validated);

        return redirect()->route('admin.blogs.index')->with('success', 'Blog post updated successfully.');
    }

    // Blog Delete
    public function destroy(Blog $blog)
    {
        if ($blog->image) {
            Storage::disk('public')->delete($blog->image);
        }
        if ($blog->og_image && $blog->og_image !== $blog->image) {
            Storage::disk('public')->delete($blog->og_image);
        }

        $blog->delete();

        return redirect()->route('admin.blogs.index')->with('success', 'Blog post deleted permanently.');
    }
}
