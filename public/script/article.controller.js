angular.module('rss')
.controller('ArticleController', function($scope, ArticleModel) {
    $scope.name = 'article page'
    console.log($scope.name)
    $scope.model = ArticleModel;
    ArticleModel.getArticleDetail(10);
})