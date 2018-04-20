angular.module('rss')
.controller('StaredArticlesController', function($scope, StaredArticlesModel, $location) {
    $scope.name = 'stared article page'
    console.log($scope.name)

    $scope.model = StaredArticlesModel;

    $scope.article_list = StaredArticlesModel.article_list;
})