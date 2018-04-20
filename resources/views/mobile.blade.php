<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="bower_components/weui/dist/style/weui.css" />
    <link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="styles/main.css">
    <title>老年人新闻 RSS 推荐</title>
</head>
<body ng-app="rss">
    <div class="weui-tab">
        <div class="weui-tab__panel">
            <ng-view></ng-view>
        </div>
        <div ng-include="'views/tab.html'"></div>
    </div>
   
<!-- bower.js -->
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-route/angular-route.js"></script>
<script src="bower_components/angular-touch/angular-touch.js"></script>
<!-- end bower -->

<!-- script -->
<script src="app.js"></script>
<script src="script/article_list.controller.js"></script>
<script src="script/article_list.model.js"></script>
<script src="script/tab.controller.js"></script>
<script src="script/course.directive.js"></script>
<script src="script/article.controller.js"></script>
<script src="script/article.model.js"></script>
<script src="script/user.controller.js"></script>
<script src="script/reading_history.controller.js"></script>
<script src="script/reading_history.model.js"></script>
<script src="script/user.model.js"></script>
<script src="script/login.js"></script>
<!-- end script -->
</body>
</html>