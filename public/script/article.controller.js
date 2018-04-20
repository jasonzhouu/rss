angular.module('rss')
.controller('ArticleController', function($scope, ArticleModel, $location) {
    $scope.name = 'article page'
    console.log($scope.name)
    // $scope.model = ArticleModel;
    // ArticleModel.getArticleDetail(10);

    $scope.starClick = function() {
        let starInfo = {
          opened_course_id: $scope.courseDetail.id,
          user_id: $cookies.get('user_id'),
          star: $scope.star
        };
        detailModel.star(starInfo);
      }

    console.log("********", ArticleModel.article)
    $scope.article= ArticleModel.article;
})