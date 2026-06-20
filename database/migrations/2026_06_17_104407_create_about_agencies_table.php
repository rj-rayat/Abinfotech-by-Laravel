<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('about_agencies', function (Blueprint $table) {
            $table->id();
            // Text and Content Field
            $table->string('badge')->default('About Agency');
            $table->string('title')->default('Unlimited Skills for Super Projects.');
            $table->text('description');
            $table->integer('years_of_experience')->default(5);

            // media image path field
            $table->string('main_image')->nullable(); // বড় টিম ইমেজ
            $table->string('small_image')->nullable(); // লোগো সম্বলিত ছোট স্কয়ার ইমেজ

            // Filter bullet
            $table->string('feature_1')->default('Creative Design');
            $table->string('feature_2')->default('Quick Delivery');
            $table->string('feature_3')->default('24/7 Support');
            $table->string('feature_4')->default('Expert Team');

            // CTA Button
            $table->string('button_text')->default('Get The Offer');
            $table->string('button_url')->default('#');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('about_agencies');
    }
};
