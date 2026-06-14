<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $defaultPages = [
            [
                'title' => 'Home Page',
                'slug' => 'home',
                'meta_title' => 'Zentrox Digital | Best IT Solutions & AI Agency',
                'meta_keywords' => 'agency, ai automation, mern stack',
                'meta_description' => 'Welcome to Zentrox Digital, leading provider of modern web and AI solutions.',
            ],
            [
                'title' => 'About Us',
                'slug' => 'about',
                'meta_title' => 'About Us | Zentrox Digital',
                'meta_keywords' => 'about zentrox, team, web development company',
                'meta_description' => 'Learn more about our mission, vision, and the expert team behind Zentrox Digital.',
            ],
            [
                'title' => 'Our Project',
                'slug' => 'project',
                'meta_title' => 'Our Portfolio & Projects | Zentrox Digital',
                'meta_keywords' => 'portfolio, case studies, react projects',
                'meta_description' => 'Explore our latest case studies, full-stack developments, and creative designs.',
            ],
            [
                'title' => 'Pricing',
                'slug' => 'price',
                'meta_title' => 'Affordable Service Plans | Zentrox Digital',
                'meta_keywords' => 'pricing plans, budget web development, marketing cost',
                'meta_description' => 'Check out our transparent pricing plans tailored for small to enterprise-level businesses.',
            ],
            [
                'title' => 'Blogs',
                'slug' => 'blog',
                'meta_title' => 'Latest News & Insights | Zentrox Digital',
                'meta_keywords' => 'tech blogs, web development tips, digital marketing tips',
                'meta_description' => 'Stay updated with our latest industry insights, tutorials, and tech trends.',
            ],
            [
                'title' => 'Contact Us',
                'slug' => 'contact',
                'meta_title' => 'Get in Touch | Zentrox Digital',
                'meta_keywords' => 'contact number, email support, office location',
                'meta_description' => 'Have a project in mind? Contact our support or visit our office to discuss your next big idea.',
            ],
        ];

        foreach($defaultPages as $pageData){
            Page::updateOrCreate(['slug' => $pageData['slug']], $pageData);
        }
    }
}
