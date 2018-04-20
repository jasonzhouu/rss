<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;
use App\ReadingHistoryArticle;

class ArticleController extends Controller
{
    public function get_article_list()
    {
        return Article::paginate(15);
    }

    public function get_article_detail($article_id)
    {
        $reading_history = new ReadingHistoryArticle;
        $reading_history->user_id = 0;
        $reading_history->article_id = $article_id;
        $reading_history->save();
        return Article::find($article_id);
    }
}
