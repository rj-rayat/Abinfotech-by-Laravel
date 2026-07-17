<?php

use App\Http\Controllers\Admin\AboutAgencyController;
use App\Http\Controllers\Admin\AboutHeroController;
use App\Http\Controllers\Admin\AboutVideoController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\ClientLogoController;
use App\Http\Controllers\Admin\FunFactController;
use App\Http\Controllers\Admin\HeroSectionController;
use App\Http\Controllers\Admin\PageManagementController;
use App\Http\Controllers\Admin\PricingController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\SeoSettingController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\SiteSettingController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\Admin\TestimonialController;
use App\Http\Controllers\Admin\UserManagementController;
use App\Models\AboutAgency;
use App\Models\AboutHero;
use App\Models\AboutVideo;
use App\Models\Blog;
use App\Models\ClientLogo;
use App\Models\FunFact;
use App\Models\HeroSlide;
use App\Models\Pricing;
use App\Models\Project;
use App\Models\SeoSetting;
use App\Models\Service;
use App\Models\Team;
use App\Models\Testimonial;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $seo = SeoSetting::where('page_slug', 'home')->first();
    $slides = HeroSlide::orderBy('sort_order', 'asc')->get();
    $funFacts = FunFact::firstOrCreate(['id' => 1]);
    $aboutAgency = AboutAgency::firstOrCreate(['id' => 1, 'description' => '']);
    $services = Service::orderBy('sort_order', 'asc')->get();
    $projects = Project::orderBy('sort_order', 'asc')->get();
    $testimonials = Testimonial::orderBy('sort_order', 'asc')->get();
    $clientLogos = ClientLogo::orderBy('sort_order', 'asc')->get();
    $blogs = Blog::where('is_published', true)
        ->latest()
        ->get();
    return Inertia::render('Home/Home', [
        'seo' => $seo,
        'slides' => $slides,
        'funFacts' => $funFacts,
        'aboutAgency' => $aboutAgency,
        'services'     => $services,
        'projects' => $projects,
        'testimonials' => $testimonials,
        'clientLogos' => $clientLogos,
        'blogs' => $blogs
    ]);
})->name('home');

Route::get('/about', function () {
    $aboutHero = AboutHero::first();
    $aboutVideo = AboutVideo::first();
    $teamMembers = Team::latest()->get();
    return Inertia::render('About/About', [
        'aboutHero' => $aboutHero,
        'aboutVideo' => $aboutVideo,
        'teamMembers' => $teamMembers
    ]);
})->name('about');

Route::get('/project', function () {
    $projects = Project::orderBy('sort_order', 'asc')->get();
    return Inertia::render('Project/Project', [
        'projects' => $projects,
    ]);
})->name('project');

Route::get('/price', function () {
    $plans = Pricing::orderBy('sort_order', 'asc')->get();
    return Inertia::render('Price/Price', [
        'plans' => $plans
    ]);
})->name('price');

Route::get('/blogs', function () {
    $blogs = Blog::where('is_published', true)
        ->latest()
        ->get();
    return Inertia::render('Blog/Blog', [
        'blogs' => $blogs
    ]);
})->name('blog');

Route::get('/contact', function () {
    return Inertia::render('Contact/Contact');
})->name('contact');

Route::get('/blog/{slug}', [BlogController::class, 'show'])->name('blogs.show');

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    //User management routes_____
    Route::get('/users', [UserManagementController::class, 'index'])->name('users.index');
    Route::get('/users/store', [UserManagementController::class, 'store'])->name('users.store');

    // Site Setting Route
    Route::get('/settings', [SiteSettingController::class, 'index'])->name('settings.index');
    Route::post('/settings/update', [SiteSettingController::class, 'update'])->name('settings.update');

    //Page Management Route

    Route::get('/page-management', [PageManagementController::class, 'index'])->name('page_management.index');

    //Edit Home Route
    Route::get('/page-management/{page:slug}/edit', [PageManagementController::class, 'editHome'])->name('page_management.home');








    // Page Seo management Routes
    Route::get('/seo-customize', [SeoSettingController::class, 'index'])->name('seo.customize');
    Route::get('/fetch/{slug}', [SeoSettingController::class, 'fetchSeo'])->name('seo.fetch');
    Route::post('/update', [SeoSettingController::class, 'updateSeo'])->name('seo.update');

    // Home Hero Section Routes
    Route::prefix('/page-management/home/hero')->name('page_management.home.hero.')->group(function () {
        Route::get('/', [HeroSectionController::class, 'index'])->name('index');
        Route::post('/store', [HeroSectionController::class, 'store'])->name('store');
        Route::put('/update/{id}', [HeroSectionController::class, 'update'])->name('update');
        Route::delete('/destroy/{id}', [HeroSectionController::class, 'destroy'])->name('destroy');
    });


    Route::prefix('page-management/home/fun-facts')->name('page_management.home.fun_facts.')->group(function () {
        Route::get('/', [FunFactController::class, 'index'])->name('index');
        Route::post('/update', [FunFactController::class, 'update'])->name('update');
    });

    //  Home About Agency Routes
    Route::prefix('page-management/home/about-agency')->name('page_management.home.about_agency.')->group(function () {
        Route::get('/', [AboutAgencyController::class, 'index'])->name('index');
        Route::post('/update', [AboutAgencyController::class, 'update'])->name('update');
    });

    // Home Services Resource Routes
    Route::prefix('page-management/home/services')->name('page_management.home.services.')->group(function () {
        Route::get('/', [ServiceController::class, 'index'])->name('index');
        Route::get('/create', [ServiceController::class, 'create'])->name('create');
        Route::post('/store', [ServiceController::class, 'store'])->name('store');
        Route::get('/{service}/edit', [ServiceController::class, 'edit'])->name('edit');
        Route::post('/{service}/update', [ServiceController::class, 'update'])->name('update');
        Route::delete('/{service}/destroy', [ServiceController::class, 'destroy'])->name('destroy');
    });

    //  Home Projects Management Routes 
    Route::prefix('page-management/home/projects')->name('page_management.home.projects.')->group(function () {
        Route::get('/', [ProjectController::class, 'index'])->name('index');
        Route::get('/create', [ProjectController::class, 'create'])->name('create');
        Route::post('/store', [ProjectController::class, 'store'])->name('store');
        Route::get('/{project}/edit', [ProjectController::class, 'edit'])->name('edit');
        Route::post('/{project}/update', [ProjectController::class, 'update'])->name('update');
        Route::delete('/{project}/destroy', [ProjectController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('page-management/home/testimonials')->name('page_management.home.testimonials.')->group(function () {
        Route::get('/', [TestimonialController::class, 'index'])->name('index');
        Route::get('/create', [TestimonialController::class, 'create'])->name('create');
        Route::post('/store', [TestimonialController::class, 'store'])->name('store');

        Route::get('/{testimonial}/edit', [TestimonialController::class, 'edit'])->name('edit');
        Route::post('/{testimonial}/update', [TestimonialController::class, 'update'])->name('update');
        Route::delete('/{testimonial}/destroy', [TestimonialController::class, 'destroy'])->name('destroy');
    });

    // Home Client Logos Management Routes
    Route::prefix('page-management/home/client-logos')->name('page_management.home.client_logos.')->group(function () {
        Route::get('/', [ClientLogoController::class, 'index'])->name('index');
        Route::get('/create', [ClientLogoController::class, 'create'])->name('create');
        Route::post('/store', [ClientLogoController::class, 'store'])->name('store');
        Route::get('/{clientLogo}/edit', [ClientLogoController::class, 'edit'])->name('edit');
        Route::post('/{clientLogo}/update', [ClientLogoController::class, 'update'])->name('update');
        Route::delete('/{clientLogo}/destroy', [ClientLogoController::class, 'destroy'])->name('destroy');
    });



    //  Admin Blog Management Routes 
    Route::prefix('page-management/blogs')->name('blogs.')->group(function () {

        Route::get('/', [BlogController::class, 'index'])->name('index');
        Route::get('/create', [BlogController::class, 'create'])->name('create');

        Route::post('/store', [BlogController::class, 'store'])->name('store');
        Route::get('/{blog}/edit', [BlogController::class, 'edit'])->name('edit');
        Route::post('/{blog}/update', [BlogController::class, 'update'])->name('update');
        Route::delete('/{blog}/destroy', [BlogController::class, 'destroy'])->name('destroy');
    });


    Route::prefix('page-management/about-hero')->name('about-hero.')->group(function () {
        Route::get('/', [AboutHeroController::class, 'edit'])->name('edit');
        Route::post('/update', [AboutHeroController::class, 'update'])->name('update');
    });

    // Admin Page Management - About Video Routes
    Route::prefix('page-management/about-video')->name('about-video.')->group(function () {
        Route::get('/', [AboutVideoController::class, 'edit'])->name('edit');
        Route::post('/update', [AboutVideoController::class, 'update'])->name('update');
    });

    Route::prefix('page-management/teams')->name('teams.')->group(function () {
        Route::get('/', [TeamController::class, 'index'])->name('index');       // URL: page-management/teams | Name: teams.index
        Route::get('/create', [TeamController::class, 'create'])->name('create'); // URL: page-management/teams/create | Name: teams.create
        Route::post('/store', [TeamController::class, 'store'])->name('store');   // URL: page-management/teams/store | Name: teams.store

        Route::get('/{team}/edit', [TeamController::class, 'edit'])->name('edit');     // URL: page-management/teams/{team}/edit
        Route::post('/{team}/update', [TeamController::class, 'update'])->name('update'); // URL: page-management/teams/{team}/update

        Route::delete('/{team}', [TeamController::class, 'destroy'])->name('destroy'); // URL: page-management/teams/{team} | Name: teams.destroy
    });

    Route::prefix('page-management/pricing')->name('pricing.')->group(function () {
        Route::get('/', [PricingController::class, 'index'])->name('index');
        Route::get('/create', [PricingController::class, 'create'])->name('create');
        Route::post('/store', [PricingController::class, 'store'])->name('store');
        Route::get('/{pricing}/edit', [PricingController::class, 'edit'])->name('edit');
        Route::put('/{pricing}/update', [PricingController::class, 'update'])->name('update');
        Route::delete('/{pricing}/destroy', [PricingController::class, 'destroy'])->name('destroy');
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
