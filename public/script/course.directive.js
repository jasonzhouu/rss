'use strict';

angular.module('rss')
.directive('rssArticleDirective', function() {
    return {
        restrict: 'AE',
        replace: true,
        templateUrl: 'app/views/template/rss_article.html'
    }
})