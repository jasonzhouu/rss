angular.module('rss')
.controller('TabController', function($scope, $location, ArticlesListModel) {
    function tabChange() {
        switch ($location.path().split('/')[1]) {
          case '':
            $scope.active = [1,0];
            break;
          case 'user':
            $scope.active = [0,1];
            break;
          default:
            break;
        }
      }
      // 因为刷新页面时，不激活 locationChangeSuccess 事件，所以必须先初始化一下
      tabChange();
      // 监听路由变化，按钮状态由路由决定
      $scope.$on('$locationChangeSuccess', tabChange);

      $scope.refresh = function() {
        ArticlesListModel.article_list = [];
        ArticlesListModel.getMoreArticle();
      }
})