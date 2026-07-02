<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('blogs', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->string('image')->nullable(); 
            $table->longText('body'); 
            
            // SEO Customization Fields
            $table->string('seo_meta_title')->nullable();
            $table->text('seo_meta_description')->nullable();
            $table->string('seo_meta_keywords')->nullable();
            
            // 🚀 Open Graph (OG) Customization Fields 
            $table->string('og_title')->nullable();
            $table->text('og_description')->nullable();
            $table->string('og_image')->nullable();
            
            $table->boolean('is_published')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
