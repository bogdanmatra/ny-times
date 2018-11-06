'use strict';

/**
 * Controls the main functionality of the application.
 * Calls the NY Times API with the current user selected topic.
 */
app.controller('ArticlesController', function ($scope, NYTimesService, $uibModal) {

    var DEFAULT_ICON = "app/images/newspaper.png";
    $scope.topic = "Amsterdam";

    // Selects all text when clicking on the input.
    $scope.selectAll = function ($event) {
        $event.target.select();
    }

    // Searches for articles.
    $scope.search = function () {
        $scope.loading = true;
        $scope.articles = [];
        NYTimesService.getArticles($scope.topic)
            .then(function (articles) {
                $scope.articles = articles;
            }).finally(function () {
            $scope.loading = false;
        });
    };

    // Opens modal on row click.
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

    // Select an image from the array.
    $scope.selectImage = function (images) {
        var image = images.find(function (image) {
            return image.subType = "wide";
        });
        images.favourite = image ? NYTimesService.getImageHost() + image.url : DEFAULT_ICON;
        return images.favourite;
    };

    // First search.
    $scope.search();
});