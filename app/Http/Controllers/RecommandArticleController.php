<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RecommendArticle;

class RecommandArticleController extends Controller
{
    public function get_article_list()
    {
        $date = date('Y-m-d');
        $recommendArticles = RecommendArticle::with('article')
                           ->where([
                               ['have_shown_before', FALSE]
                           ])
                           ->whereDate('created_at', $date)
                           ->paginate(10);

        $articleArray = $recommendArticles->toArray()['data'];
        // 返回文章列表前，将 have_show_before 标签改为 TRUE
        foreach($articleArray as $key=>$item){
            $article = RecommendArticle::where('id', $item['id'])->first();
			$article->have_shown_before = TRUE;
			$article->save();
        }

        //返回文章列表
        return $recommendArticles;
    }
}
