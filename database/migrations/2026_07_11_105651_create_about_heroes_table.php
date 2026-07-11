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
        Schema::create('about_heroes', function (Blueprint $table) {
            $table->id();

            // Left Content
            $table->string('badge')->nullable();
            $table->string('title');
            $table->text('description');
            $table->string('btn_text')->nullable();
            $table->string('btn_link')->nullable();
            
            // Images
            $table->string('main_image')->nullable();
            $table->string('logo_image')->nullable();
            
            // Bottom Stats/Counter
            $table->string('counter_number')->nullable(); // e.g., "5"
            $table->string('counter_text')->nullable();   // e.g., "YEARS OF CRAFTING..."
            $table->string('stat_text')->nullable();      // e.g., "Over 250+ projects..."
            
            $table->timestamps();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('about_heroes');
    }
};
