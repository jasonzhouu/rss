<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RecommendArticlesTablePlus extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::dropIfExists('recommend_articles');
        Schema::create('recommend_articles', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('user_id');
            $table->integer('article_id');
            $table->char('similarity');
            $table->boolean('have_shown_before');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::dropIfExists('recommend_articles');
    }
}
