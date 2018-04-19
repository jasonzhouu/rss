angular.module('rss')
.controller('ArticlesListController', function($scope, ArticlesListModel) {
    $scope.name = 'test'
    console.log($scope.name)
    console.log('*****************')
    ArticlesListModel.getMoreArticle();
    $scope.nextPage = ArticlesListModel.getMoreArticle;
})