<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    protected $fillable = [
        'title','slug', 'image', 'body', 'seo_meta_title', 'seo_meta_description', 'seo_meta_keywords', 'og_title', 'og_description', 'og_image', 'is_published'
    ];
}
