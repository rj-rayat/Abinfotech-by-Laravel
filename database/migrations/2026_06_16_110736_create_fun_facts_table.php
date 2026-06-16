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
        Schema::create('fun_facts', function (Blueprint $table) {
            $table->id();
            // Card 1
            $table->string('card1_label')->default('Happy Customers');
            $table->integer('card1_value')->default(308);

            // Card 2
            $table->string('card2_label')->default('Cups of Coffee');
            $table->integer('card2_value')->default(9);

            // Card 3
            $table->string('card3_label')->default('Innovations');
            $table->integer('card3_value')->default(957);

            // Card 4
            $table->string('card4_label')->default('Great Projects');
            $table->integer('card4_value')->default(624);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fun_facts');
    }
};
