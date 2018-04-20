angular.module('rss')
    .factory('ArticleModel', function ($http, $location) {
        let model = {};
        

        model.getArticleDetail = function(article_id) {
            console.log('article click')
            $http.get(`/article_detail/${article_id}`).then(({data})=>{
                model.article = data;
                console.log(data)
                $location.path('article');
            })
        }


        model.star = function(starInfo) {
            $http.post('/star', starInfo);
        };

        return model;
    });