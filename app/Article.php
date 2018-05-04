<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    //
    public function starsArticle()
    {
        // TODO: 限定用户是当前的用户的 star
        return $this->hasOne('App\StarsArticle');
    }
}
