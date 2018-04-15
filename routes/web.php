<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// 后端将文章列表分页，前端无论何时获取文章列表时，都要指定是第几页，比如/article_list/{open_id}?page=10
Route::get('/article_list/{open_id}', 'ArticleController@get_article_list');

// 前端每次打开一个页面，同时上传 article_id 和 open_id
// open_id, article_id 会被存到数据库的 reading_hitory 表
// 前端的路由就是 /article_detail/***?open_id=***
Route::get('/article_detail/{article_id}', 'ArticleController@get_article_detail');