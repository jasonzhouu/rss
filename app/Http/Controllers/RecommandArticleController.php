<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\RecommendArticle;

class RecommandArticleController extends Controller
{
    public function get_article_list()
    {
        $recommendArticlesCollection = RecommendArticle::limit(5)->get();
	$articleArray = $recommendArticlesCollection->toArray();
	foreach($articleArray as $x=>$item)
	{
		if(isset($item['id']))
		{
			$article = RecommendArticle::where('id', $item['id'])->first();
			$article->have_shown_before = TRUE;
			$article->save();
		}
	}
    }
}
