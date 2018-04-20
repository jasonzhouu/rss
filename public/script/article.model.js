angular.module('rss')
    .factory('ArticleModel', function ($http) {
        let model = {};
        
        model.getArticleDetail = function(article_id) {
            $http.get(`/article_detail/${article_id}`).then((data)=>{
                console.log(data)
            })
        }
        return model;
    });