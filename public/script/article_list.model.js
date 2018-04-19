angular.module('rss')
    .factory('ArticlesListModel', function ($http) {
        let model = {};

        model.article_list= [];

        model.pageInformation = {
            current_page: 0,
            still_have_next_or_not: true,
        }

        model.getMoreArticle = function() {
            if(model.pageInformation.still_have_next_or_not) {
                return $http.get(`/article_list?page=${model.pageInformation.current_page + 1}`).then(({data})=>{
                    console.log(data)
                    model.article_list = [...model.article_list, ...data.data]
                    model.pageInformation.current_page = data.current_page;
                    model.pageInformation.still_have_next_or_not = (data.to != data.total_page);
                    console.log(model);
                })
            }
            else {
                console.log('no more page')
                return false;
            }
        }
        return model;
    });