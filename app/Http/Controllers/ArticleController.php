<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller
{
    public function get_article_list()
    {
        return Article::paginate(15);
    }

    public function get_article_detail($article_id)
    {
        return Article::find($article_id);
    }
}
