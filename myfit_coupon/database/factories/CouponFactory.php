<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Coupon
 */
class CouponFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween($min = 0, $max = 10),
            'text'    => $this->faker->text(),
            'price'   => $this->faker->randomFloat(),
            'percent' => $this->faker->numberBetween(10,50),
            'expiration_date' =>  $this->faker->dateTimeInInterval('now','+ 1 month'),
        ,
        ];
    }
}
