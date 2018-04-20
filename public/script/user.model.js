angular.module('rss')
    .factory('UserModel', function ($http, $location) {
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

        return model;
    });