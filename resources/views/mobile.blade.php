<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="bower_components/weui/dist/style/weui.css" />
    <link rel="stylesheet" href="bower_components/font-awesome/web-fonts-with-css/css/fontawesome.css">
    <title>老年人新闻 RSS 推荐</title>
</head>
<body ng-app="rss">

    <ng-view></ng-view>
   
<!-- bower.js -->
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-route/angular-route.js"></script>
<script src="bower_components/angular-touch/angular-touch.js"></script>
<!-- end bower -->

<!-- script -->
<script src="app.js"></script>
<script src="script/article_list.controller.js"></script>
<script src="script/article_list.model.js"></script>
<script src="script/article.js"></script>
<script src="script/login.js"></script>
<!-- end script -->
</body>
</html>