<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RecommendArticle;

class RecommandArticleController extends Controller
{
    // 返回推荐文章列表
    public function get_article_list()
    {
        $date = date('Y-m-d', time());
        return RecommendArticle::with('article')
        ->whereDate('created_at', $date)
        ->paginate(15);
        // @TODO 筛选出当天的文章
    }
}
