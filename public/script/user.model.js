angular.module('rss')
    .factory('UserModel', function ($http, $location, StaredArticlesModel) {
        let model = {};

        model.getStarList = function() {
            $http.get('/get_stared_list').then((data) => {
                console.log('stared article list')
                console.log(data);
            })
        }

        model.getHistoryList = function() {
            $http.get('/reading_history').then(({data}) => {
                console.log('reading history')
                console.log('reading history', data);
                model.reading_history = data;
                $location.path('reading_history');
            })
        }

        model.getStarList = function() {
            $http.get('/get_stared_list').then(({data})=>{
                console.log('stared article', data);
                StaredArticlesModel.article_list = data;
                $location.path('stared_articles');
            })
        }

        return model;
    });