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
        when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        }).
        otherwise({
            redirectTo: '/'
        });
})