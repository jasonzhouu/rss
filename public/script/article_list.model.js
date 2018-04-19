angular.module('rss')
    .factory('ArticlesListModel', function ($http) {
        let model = {};

        model.pageInformation = {
            total: null,
            current_page: 0,
            last_page: null, //最后一页
            still_have_next_or_not: true,
        }

        model.getArticleList = function() {
            if(model.pageInformation.still_have_next_or_not) {
                return $http.get(`/article_list?page=${model.pageInformation.current_page + 1}`).then(({data})=>{
                    model.article_list = {...model.article_list, ...data.data};
                    model.pageInformation.total = data.total;
                    model.pageInformation.next_page_url = data.next_page_url;
                    model.pageInformation.current_page = data.current_page;
                    model.pageInformation.last_page = data.last_page;
                    model.pageInformation.still_have_next_or_not = (data.current_page != data.last_page);
                    console.log(model);
                })
            }
            else {
                return false;
            }
        }
        return model;
    });