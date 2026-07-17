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
        Schema::create('contact_settings', function (Blueprint $table) {
            $table->id();
            // Call Us Today Section Fields
            $table->string('phone')->nullable();          // PS: +8801978224636
            $table->string('hotline')->nullable();        // HO: +8801737515185
            
            // Our Emails Section Fields
            $table->string('general_email')->nullable();  // GENERAL: info@abinfotech.com.bd
            $table->string('support_email')->nullable();  // SUPPORT: admin@abinfotech.com.bd
            
            // Our Address Section Fields
            $table->string('office_address')->nullable(); // OFFICE: 726/12, Adabor 10
            $table->string('city_address')->nullable();   // CITY: Dhaka 1217, Bangladesh
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contact_settings');
    }
};
