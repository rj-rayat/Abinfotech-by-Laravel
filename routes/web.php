<?php

use App\Http\Controllers\Admin\AboutAgencyController;
use App\Http\Controllers\Admin\FunFactController;
use App\Http\Controllers\Admin\HeroSectionController;
use App\Http\Controllers\Admin\PageManagementController;
use App\Http\Controllers\Admin\SeoSettingController;
use App\Http\Controllers\Admin\ServiceController;
use App\Http\Controllers\Admin\SiteSettingController;
use App\Http\Controllers\Admin\UserManagementController;
use App\Models\AboutAgency;
use App\Models\FunFact;
use App\Models\HeroSlide;
use App\Models\SeoSetting;
use App\Models\Service;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $seo = SeoSetting::where('page_slug', 'home')->first();
    $slides = HeroSlide::orderBy('sort_order', 'asc')->get();
    $funFacts = FunFact::firstOrCreate(['id' => 1]);
    $aboutAgency = AboutAgency::firstOrCreate(['id' => 1]);
    $services = Service::orderBy('sort_order', 'asc')->get();
    return Inertia::render('Home/Home', [
        'seo' => $seo,
        'slides' => $slides,
        'funFacts' => $funFacts,
        'aboutAgency' => $aboutAgency,
        'services'     => $services
    ]);
})->name('home');

Route::get('/about', function () {
    return Inertia::render('About/About');
})->name('about');

Route::get('/project', function () {
    return Inertia::render('Project/Project');
})->name('project');

Route::get('/price', function () {
    return Inertia::render('Price/Price');
})->name('price');

Route::get('/blogs', function () {
    return Inertia::render('Blog/Blog');
})->name('blog');

Route::get('/contact', function () {
    return Inertia::render('Contact/Contact');
})->name('contact');

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


});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
