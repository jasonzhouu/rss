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

// 获取页面的 html, js 文件
Route::get('/', 'HomeController@index');

// 后端将文章列表分页，前端无论何时获取文章列表时，都要指定是第几页，比如/article_list/{open_id}?page=10
// Route::get('/article_list/{open_id}', 'ArticleController@get_article_list');

// 先不管登录的事情
Route::get('/article_list', 'ArticleController@get_article_list');

// 前端每次打开一个页面，同时上传 article_id 和 open_id
// open_id, article_id 会被存到数据库的 reading_hitory 表
// 前端的路由就是 /article_detail/***?open_id=***
Route::get('/article_detail/{article_id}', 'ArticleController@get_article_detail');

//登录、注册
Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/logout', 'Auth\LogoutController@logout');

// 获取阅读历史
Route::get('/reading_history', 'ReadingHistoryController@get_reading_history_list');

// 收藏文章
Route::post('/star', 'StarController@star');
Route::post('/unstar', 'StarController@unstar');
Route::get('/get_stared_list', 'StarController@get_stared_list');