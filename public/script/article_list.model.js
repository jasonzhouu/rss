angular.module('rss')
    .factory('ArticlesListModel', function ($http, $location, $routeParams, CoursesModel, Upload) {
        let model = {};


        // model.submitCourse = function(courseData) {
        //     let _method = 'PUT';

        //     Upload.upload({
        //         url: `/admin/courses/${$routeParams.id}`,
        //         data: {_method, ...courseData}
        //     }).then(({data})=>{
        //         CoursesModel.getNewlyEditedCourse($routeParams.id)
        //                     .then(()=>{
        //                         $location.path(`/course/${$routeParams.id}`);
        //                     })
        //     }, (data)=>{}, (event)=>{})
        // };

        // model.cancel = function() {
        //     CoursesModel.getCourseDetailIfNull($routeParams.id);
        //     $location.path(`/course/${$routeParams.id}`);
        // };
        return model;
    });