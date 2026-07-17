<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactSetting extends Model
{
    use HasFactory;
    protected $fillable = [
        'phone',
        'hotline',
        'general_email',
        'support_email',
        'office_address',
        'city_address',
    ];
}
