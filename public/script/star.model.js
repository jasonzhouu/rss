angular.module('rss')
    .factory('StaredArticlesModel', function ($http, $location, ArticleModel) {
        let model = {};
        
        model.getArticleDetail = ArticleModel.getArticleDetail;

        return model;
    });