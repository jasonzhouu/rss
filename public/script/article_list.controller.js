angular.module('rss')
.controller('ArticlesListController', function($scope, ArticlesListModel, $location) {
    $scope.name = 'home page'
    console.log($scope.name)
    console.log('*********')
    $scope.model = ArticlesListModel;
    ArticlesListModel.getMoreArticle();
})