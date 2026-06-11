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
        Schema::create('site_settings', function (Blueprint $table) {
            $table->id();


            // Text Configurations
            $table->string('site_name')->nullable();
            $table->string('site_title')->nullable();
            $table->string('seo_meta_title')->nullable();
            $table->text('seo_meta_description')->nullable();
            $table->text('seo_meta_keywords')->nullable();
            $table->string('og_title')->nullable();
            $table->text('og_description')->nullable();
            $table->string('company_email')->nullable();
            $table->string('company_phone')->nullable();
            $table->text('company_address')->nullable();
            $table->string('copyright_text')->nullable();
            
            // Integrations & Advanced Meta
            $table->text('google_verification_code')->nullable();
            $table->string('google_analytics_id')->nullable();
            $table->string('robots_meta')->default('index, follow');
            $table->string('twitter_card_type')->default('summary_large_image');
            $table->string('fb_app_id')->nullable();

            // File Paths
            $table->string('favicon_path')->nullable();
            $table->string('logo_light_path')->nullable();
            $table->string('logo_dark_path')->nullable();
            $table->string('og_image_path')->nullable();

            $table->timestamps();

            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('site_settings');
    }
};
