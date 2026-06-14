<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PageManagementController extends Controller
{
    public function index(Request $request){
        $pages = Page::select('id', 'title', 'slug', 'status', 'updated_at')->get()->map(function($page) {
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
        return Inertia::render('Admin/PageManagement/HomeEdit/EditHome', [
            'page' => $page
        ]);
    }
}
