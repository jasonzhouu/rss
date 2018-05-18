angular.module('rss')
.controller('ReadingHistoryController', function($scope, UserModel, ReadingHistoryModel, $window) {
    $scope.name = 'reading history page'
    console.log($scope.name)

    $scope.article_list = UserModel.reading_history;

    $scope.model = ReadingHistoryModel;
    
    $scope.goBack = function() {
        $window.history.back();
    }
})