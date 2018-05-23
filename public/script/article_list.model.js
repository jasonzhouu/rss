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
            return data.map((value, index, arr) => {
                arr[index].article.content = $sce.trustAsHtml(arr[index].article.content)
                return arr[index].article
            })
        }

        model.getMoreArticle = function() {
            if(model.pageInformation.still_have_next_or_not == true && model.pageInformation.loading == false) {
                model.pageInformation.loading = true;
                return $http.get(`/article_list?page=${model.pageInformation.current_page + 1}`).then(({data})=>{
                    // console.log("article list ========== \n", data.data)
                    let safe_content = convert_to_safe_content(data.data)
                    console.log('safe_content ======= \n', safe_content)
                    model.article_list = [...model.article_list, ...safe_content]
                    model.pageInformation.current_page = data.current_page;
                    model.pageInformation.still_have_next_or_not = (data.to != data.total);
                    model.pageInformation.loading = false;
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