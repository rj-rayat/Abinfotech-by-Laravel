<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Blog;
use App\Models\ContactSetting;

class PageManagementController extends Controller
{
    public function index(Request $request)
    {
        $pages = Page::select('id', 'title', 'slug', 'status', 'updated_at')->get()->map(function ($page) {
            return [
                'id' => $page->id,
                'title' => $page->title,
                'slug' => $page->slug,
                'status' => $page->status,
                'last_updated' => $page->updated_at->format('d M, Y'),
            ];
        });

        return Inertia::render('Admin/PageManagement/Index', [
            'pages' => $pages
        ]);
    }



    public function editHome(Page $page)
    {

        if ($page->slug === 'blog') {
            return $this->editBlog($page);
        }

        if ($page->slug === 'about') {
            return $this->editAbout($page);
        }
        if ($page->slug === 'price') {
            return $this->editPricing($page);
        }
        if ($page->slug === 'contact') {
            return $this->editContact($page);
        }




        return Inertia::render('Admin/PageManagement/HomeEdit/EditHome', [
            'page' => $page
        ]);
    }

    public function editBlog(Page $page)
    {
        return Inertia::render('Admin/PageManagement/Blog/Index', [
            'page' => $page,
            'blogs' => Blog::latest()->get()
        ]);
    }
    public function editAbout(Page $page)
    {
        return Inertia::render('Admin/PageManagement/About/EditAbout', [
            'page' => $page,
        ]);
    }
    public function editPricing(Page $page)
    {
        return Inertia::render('Admin/PageManagement/Pricing/EditPricing', [
            'page' => $page,
        ]);
    }
    public function editContact(Page $page)
    {
        return Inertia::render('Admin/PageManagement/Contact/Edit', [
            'page' => $page,
            'settings' => ContactSetting::first()
        ]);
    }
}
