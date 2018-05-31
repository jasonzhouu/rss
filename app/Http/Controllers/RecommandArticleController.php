<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RecommendArticle;

class RecommandArticleController extends Controller
{
    // 返回推荐文章列表
    public function get_article_list()
    {
        //$date = date('Y-m-d');
        return RecommendArticle::with('article')
        ->whereDate('created_at', '2018-06-01')
        ->paginate(15);
    }
}
