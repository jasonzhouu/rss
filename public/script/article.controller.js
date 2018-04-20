angular.module('rss')
.controller('ArticleController', function($scope, ArticleModel, $location) {
    $scope.name = 'article page'
    console.log($scope.name)
    // $scope.model = ArticleModel;
    // ArticleModel.getArticleDetail(10);

    $scope.starClick = function() {
        console.log('star', $scope.star)

        let starInfo = {
            user_id: 0,
            // user_id: $cookies.get('user_id'),
            article_id: ArticleModel.article.id,
            star: $scope.star ? 1 : 0,
        };
        console.log('star info', starInfo);
        ArticleModel.star(starInfo);
      }

    console.log("********", ArticleModel.article)
    $scope.article= ArticleModel.article;
})