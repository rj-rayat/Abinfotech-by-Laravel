<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AboutVideo extends Model
{
    protected $fillable = [
        'sub_title',
        'title',
        'description_1',
        'description_2',
        'video_url',
        'video_thumbnail',
        'btn_text',
        'btn_link',
    ];
}
