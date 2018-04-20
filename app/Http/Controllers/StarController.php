<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\StarsArticle;

class StarController extends Controller
{
    public function star()
    {
        $request = request()->all();
        $exists = StarsArticle::where([
            ['user_id', request('user_id')],
            ['article_id', request('article_id')]
            ])->exists();
        if($exists){
            $star = StarsArticle::where([
                ['user_id', request('user_id')],
                ['article_id', request('article_id')]
                ])->first();
            $star->star = request('star');
            $star->save();
        }
        else {
            $newStar = new StarsArticle;
            $newStar->user_id = request('user_id');
            $newStar->article_id = request('article_id');
            $newStar->star = request('star');
            $newStar->save();
            return('new star');
        }
        return compact('exists');
    }

    public function unstar()
    {

    }

    public function get_stared_list()
    {

    }
}
