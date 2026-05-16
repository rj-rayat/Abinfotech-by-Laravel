<?php

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

Route::middleware(['auth'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
