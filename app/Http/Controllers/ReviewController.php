<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ReviewResource;
use App\Models\Review;

class ReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::query()->latest('published_at')->paginate(50);
        return ReviewResource::collection($reviews);
    }
}
