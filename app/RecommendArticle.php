<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RecommendArticle extends Model
{
    //
    public function article()
    {
        return $this->belongsTo('App\Article');
    }
}
