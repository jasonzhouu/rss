angular.module('rss')
.controller('ArticleController', function($scope, ArticleModel, ArticlesListModel, $location) {
    $scope.name = 'article page'
    console.log($scope.name)
    // $scope.model = ArticleModel;
    // ArticleModel.getArticleDetail(10);

    console.log("********", ArticlesListModel.article)
    $scope.article= ArticlesListModel.article;
})