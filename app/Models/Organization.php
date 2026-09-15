<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Organization extends Model
{
    protected $fillable = [
        'user_id',
        'url',
        'business_id',
        'name',
        'rating',
        'ratings_count',
        'reviews_count',
    ];

    protected $casts = [
        'rating' => 'float',
    ];

    public function reviews(): HasMany
    {
        return $this->hasMany(Review::class);
    }
}
