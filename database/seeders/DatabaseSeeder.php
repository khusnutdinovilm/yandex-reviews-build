<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Organization;
use App\Models\Review;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        $user = User::updateOrCreate(
            ['email' => 'admin@example.com'],
            ['name' => 'Admin', 'password' => Hash::make('password')]
        );

        $org = Organization::updateOrCreate(
            ['url' => 'https://yandex.ru/maps/org/mock/1'],

            [
                'user_id' => $user->id,
                'name' => 'Тестовая организация',
                'rating' => 4.6,
                'ratings_count' => 320,
                'reviews_count' => 120
            ]
        );

        if ($org->reviews()->count() === 0) {
            Review::factory()->count(120)->for($org)->create();
        }
    }
}
