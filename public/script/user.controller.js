angular.module('rss')
.controller('UserController', function($scope, UserModel) {
    $scope.name = 'user page'
    console.log($scope.name)
    console.log('*********')

    $scope.model = UserModel;
})