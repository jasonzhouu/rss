angular.module('rss')
    .factory('ReadingHistoryModel', function ($http, ArticleModel) {
        let model = {};

        model.getArticleDetail = ArticleModel.getArticleDetail;
        
        return model;
    });