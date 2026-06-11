<?php

use App\Http\Controllers\Admin\SiteSettingController;
use App\Http\Controllers\Admin\UserManagementController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home/Home');
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
    Route::get('/users',[UserManagementController::class,'index'])->name('users.index');
    Route::get('/users/store',[UserManagementController::class,'store'])->name('users.store');

    // Site Setting Route
    Route::get('/settings', [SiteSettingController::class, 'index'])->name('settings.index');
    Route::post('/settings/update', [SiteSettingController::class, 'update'])->name('settings.update');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
