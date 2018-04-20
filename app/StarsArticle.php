<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StarsArticle extends Model
{
    //
    public function article()
    {
        return $this->belongsTo('App\Article');
    }
}
