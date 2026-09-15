<?php

namespace Database\Factories;

use App\Models\Review;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Review>
 */
class ReviewFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'author' => fake()->name(),
            'rating' => fake()->numberBetween(1, 5),
            'text' => fake()->boolean(80) ? fake()->realText(200) : null,
            'published_at' => fake()->dateTimeBetween('-2 years', 'now'),
        ];
    }
}
