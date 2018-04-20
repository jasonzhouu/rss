<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ReadingHistoryArticle;

class ReadingHistoryController extends Controller
{
    public function get_reading_history_list()
    {
        return ReadingHistoryArticle::with('article')->get();
    }
}
