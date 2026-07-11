<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutHero extends Model
{
    protected $fillable = [
    'badge',
    'title',
    'description',
    'btn_text',
    'btn_link',
    'main_image',
    'logo_image',
    'counter_number',
    'counter_text',
    'stat_text'
];
}
