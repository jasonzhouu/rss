angular.module('rss')
.controller('ArticlesListController', function($scope, ArticlesListModel) {
    $scope.name = 'home page'
    console.log($scope.name)
    console.log('*********')
    $scope.nextPage = ArticlesListModel.getMoreArticle;
    $scope.articleList = ArticlesListModel.pageInformation.current_page;
})