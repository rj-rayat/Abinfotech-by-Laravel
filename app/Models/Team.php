<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    protected $fillable = [
        'name', 'role', 'image', 'experience_year', 
        'facebook_link', 'linkedin_link', 'github_link', 'portfolio_link'
    ];
}
