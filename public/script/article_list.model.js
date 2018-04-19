angular.module('rss')
    .factory('ArticlesListModel', function ($http) {
        let model = {};

        model.getArticleList = function() {
            return $http.get('/article_list').then(({data})=>{
                console.log(data.data);
            })
        }
        return model;
    });