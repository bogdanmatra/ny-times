'use strict';

/**
 * Controls the main functionality of the application.
 * Calls the NY Times API with the current user selected topic.
 */
app.controller('ArticlesController', function ($scope, NYTimesService, $uibModal) {

    $scope.topic = "Amsterdam";

    $scope.search = function () {
        $scope.loading = true;
        $scope.articles = [];
        NYTimesService.getArticles($scope.topic)
            .then(function (articles) {
                $scope.articles = articles;
                $scope.loading = false;
            });
    };


    $scope.openModal = function (article) {
        $uibModal.open({
            templateUrl: 'app/templates/modal.html',
            size: 'md',
            controller: function ($scope) {
                $scope.summary = article.snippet;
                $scope.url = article.web_url;
                $scope.favouriteImage = article.multimedia.favourite;
            }
        });
    }

    $scope.selectImage = function (images) {
        var image = images.find(function (image) {
            return image.subType = "wide";
        });
        images.favourite = image ? 'http://www.nytimes.com/' + image.url : "app/images/newspaper.png";
        return images.favourite;
    };

    $scope.search();
});