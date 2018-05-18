angular.module('rss')
.controller('StaredArticlesController', function($scope, StaredArticlesModel, $location, $window) {
    $scope.name = 'stared article page'
    console.log($scope.name)

    $scope.model = StaredArticlesModel;

    $scope.article_list = StaredArticlesModel.article_list;

    $scope.goBack = function() {
        $window.history.back();
    }
})