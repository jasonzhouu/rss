angular.module('rss')
.controller('ReadingHistoryController', function($scope, UserModel, ReadingHistoryModel) {
    $scope.name = 'reading history page'
    console.log($scope.name)

    $scope.article_list = UserModel.reading_history;
})