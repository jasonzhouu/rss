angular.module('rss')
.factory('TabModel', function () {
    let model = {};
    
    model.showTab = true;
    console.log(model.showTab)

    return model;
});