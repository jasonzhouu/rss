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

Route::get('/article_list/{page}', 'ArticleController@get_article_list');
Route::get('/article_detail/{id}', 'ArticleController@get_article_detail');

Route::post('/reading_history/{id}', 'ArticleController@save_reading_history');

Route::post('/register', 'Auth\RegisterController@register');
Route::post('/login', 'Auth\LoginController@login');
Route::get('/logout', 'Auth\LogoutController@logout');