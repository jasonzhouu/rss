angular.module('rss', [
    'ngRoute',
    'ngTouch'
])
.config(['$locationProvider', function($locationProvider) {
    'use strict';
    $locationProvider.hashPrefix('');
}])
.config(function ($routeProvider) {
    'use strict';
    $routeProvider
        .when('/', {
            templateUrl:'views/article_list.html',
            controller: 'ArticlesListController'
        }).
        when('/article', {
            templateUrl: 'views/article.html',
            controller: 'ArticleController'
        }).
        when('/user', {
            templateUrl: 'views/user.html',
            controller: 'UserController'
        }).
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        }).
        when('/reading_history', {
            templateUrl: 'views/reading_history.html',
            controller: 'ReadingHistoryController'
        }).
        when('/stared_articles', {
            templateUrl: 'views/stared_articles.html',
            controller: 'StaredArticlesController'
        }).
        otherwise({
            redirectTo: '/'
        });
})