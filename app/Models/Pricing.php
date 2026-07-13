<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pricing extends Model
{
    protected $fillable = [
        'name',
        'monthly_price',
        'yearly_price',
        'description',
        'features',
        'is_popular',
        'cta_text',
        'sort_order'
    ];

  
    protected $casts = [
        'features' => 'array',
        'is_popular' => 'boolean',
    ];
}
