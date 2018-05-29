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
                                ->paginate(15);
        // @TODO 筛选出当天的文章
    }
}
