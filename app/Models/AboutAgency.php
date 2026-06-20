<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutAgency extends Model
{
    protected $fillable=[
        'badge',
        'title',
        'description',
        'years_of_experience',
        'main_image',
        'small_image',
        'feature_1',
        'feature_2',
        'feature_3',
        'feature_4',
        'button_text',
        'button_url'
    ];
}
