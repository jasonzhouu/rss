angular.module('rss')
    .factory('UserModel', function ($http) {
        let model = {};

        model.getStarList = function() {
            $http.get('/get_stared_list').then((data) => {
                console.log('stared article list')
                console.log(data);
            })
        }

        model.getHistoryList = function() {
            $http.get('/reading_history').then((data) => {
                console.log('reading history')
                console.log(data);
            })
        }

        return model;
    });