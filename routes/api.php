<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\ReviewController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn (Request $r) => $r->user());

    Route::post('/logout', [AuthController::class, 'logout']);

    Route::post('/organization', [OrganizationController::class, 'store']);
    Route::get('/organization',  [OrganizationController::class, 'show']);
    Route::get('/reviews',       [ReviewController::class, 'index']);
});

