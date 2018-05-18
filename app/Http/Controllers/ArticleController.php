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
        // TODO: 验证登录用户是否阅读过这一篇文章，而不是ID=0的用户
        $exists = ReadingHistoryArticle::where([
            ['user_id', 1],
            ['article_id', $article_id]
        ])->exists();
        if(!$exists){
            $reading_history = new ReadingHistoryArticle;
            // TODO: 用登录用户的 id，而不是0
            $reading_history->user_id = 1;
            $reading_history->article_id = $article_id;
            $reading_history->save();
        }
        return Article::with('starsArticle')->find($article_id);
    }
}
