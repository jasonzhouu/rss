<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RecommendArticle;

class RecommandArticleController extends Controller
{
    // 返回推荐文章列表
    public function get_article_list()
    {
        return RecommendArticle::with('article')
                                ->orderBy('similarity')
                                ->paginate(15);
    }
}
