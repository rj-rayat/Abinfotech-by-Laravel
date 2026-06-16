<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class HeroSlide extends Model
{
    protected $fillable = [
        'title',
        'desc',
        'color_theme',
        'sort_order',
       
    ];
}
