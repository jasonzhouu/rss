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

// 返回推荐文章列表
Route::get('/article_list', 'RecommandArticleController@get_article_list');

// 前端每次打开一个页面，同时上传 article_id 和 open_id
// open_id, article_id 会被存到数据库的 reading_hitory 表
Route::get('/article_detail/{article_id}', 'ArticleController@get_article_detail');

//登录、注册
Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/logout', 'Auth\LogoutController@logout');

// 获取阅读历史
Route::get('/reading_history', 'ReadingHistoryController@get_reading_history_list');

// 收藏文章
Route::post('/star', 'StarController@star');
Route::get('/get_stared_list', 'StarController@get_stared_list');