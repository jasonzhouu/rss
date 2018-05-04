angular.module('rss')
    .factory('ArticlesListModel', function ($http, ArticleModel, $sce) {
        let model = {};

        model.article_list= [];

        model.pageInformation = {
            current_page: 0,
            still_have_next_or_not: true,
            loading: false,
        }

        function convert_to_safe_content(data) {
            data.forEach((value, index, arr) => {
                arr[index].content = $sce.trustAsHtml(arr[index].content)
            })
        }

        model.getMoreArticle = function() {
            if(model.pageInformation.still_have_next_or_not == true && model.pageInformation.loading == false) {
                model.pageInformation.loading = true;
                return $http.get(`/article_list?page=${model.pageInformation.current_page + 1}`).then(({data})=>{
                    convert_to_safe_content(data.data)
                    model.article_list = [...model.article_list, ...data.data]
                    model.pageInformation.current_page = data.current_page;
                    model.pageInformation.still_have_next_or_not = (data.to != data.total);
                    model.pageInformation.loading = false;
                    console.log(model);
                })
            }
            else {
                console.log('no return')
                return false;
            }
        }

        model.getArticleDetail = ArticleModel.getArticleDetail;

        return model;
    });