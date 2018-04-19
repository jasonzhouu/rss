<?php

use Illuminate\Database\Seeder;
use App\Article;

class ArticleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();
        Article::truncate();
        for($i=0;$i<50;$i++) {
            $article = Article::create(array(
                'title' => $faker->realText(rand(30,40)),
                'content' => $faker->realText(rand(500,1000)),
                'publish_time' => $faker->date($format = 'Y-m-d', $max = 'now'),
                'publish_source' => $faker->name
            ));
        }
    }
}
