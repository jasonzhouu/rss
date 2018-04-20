angular.module('rss')
    .factory('ArticlesListModel', function ($http, $location) {
        let model = {};

        model.article_list= [];

        model.pageInformation = {
            current_page: 0,
            still_have_next_or_not: true,
            loading: false,
        }

        model.getMoreArticle = function() {
            if(model.pageInformation.still_have_next_or_not == true && model.pageInformation.loading == false) {
                model.pageInformation.loading = true;
                return $http.get(`/article_list?page=${model.pageInformation.current_page + 1}`).then(({data})=>{
                    model.article_list = [...model.article_list, ...data.data]
                    model.pageInformation.current_page = data.current_page;
                    model.pageInformation.still_have_next_or_not = (data.to != data.total_page);
                    model.pageInformation.loading = false;
                    console.log(model);
                })
            }
            else {
                console.log('no return')
                return false;
            }
        }

        model.getArticleDetail = function(article_id) {
            console.log('article click')
            $http.get(`/article_detail/${article_id}`).then(({data})=>{
                model.article = data;
                console.log(data)
                $location.path('article');
            })
        }
        return model;
    });