'use strict';

describe('ArticlesController', function () {
    beforeEach(module("ny-times"));

    var $controller, $rootScope, $injector, $q;

    beforeEach(inject(function (_$controller_, _$rootScope_, _$injector_, _$q_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $injector = _$injector_;
        $q = _$q_;
    }));

    describe('search', function () {
        it('calls NYTimesService and sets scope accordingly', function () {

            // Mocks.
            var articleList = ["article1", "article2"];
            var $scope = $rootScope.$new();
            $controller('ArticlesController', {$scope: $scope});

            var mockFoursquareAPIService = $injector.get('NYTimesService');
            var deferred = $q.defer();
            deferred.resolve(articleList);
            mockFoursquareAPIService.getVenues = jasmine.createSpy("getArticles").and.returnValue(deferred.promise);

            // Call tested function.
            $scope.search();

            expect($scope.loading).toBe(true);
            expect($scope.articles).toEqual([]);
            deferred.promise.then(function () {
                expect($scope.articles).toBe(articleList);
                expect($scope.loading).toBe(false);
            })

        });
    });

    describe('init', function () {
        it('sets scope accordingly when controller is initialized', function () {
            var $scope = $rootScope.$new();

            // Call controller.
            $controller('ArticlesController', {$scope: $scope});

            expect($scope.topic).toBe("Amsterdam");
            expect($scope.search).toBeDefined();
            expect($scope.selectImage).toBeDefined();
            expect($scope.openModal).toBeDefined();
            expect($scope.selectAll).toBeDefined();
        });
    });

    describe('selectImage', function () {
        it('sets the wide image as the selected image', function () {
            var $scope = $rootScope.$new();
            $controller('ArticlesController', {$scope: $scope});

            // Call tested function.
            var images = [{subType: "wide", url: "fakeUrl"}];
            var selectedImage = $scope.selectImage(images);

            expect(selectedImage).toEqual("http://www.nytimes.com/fakeUrl");
            expect(images.favourite).toEqual("http://www.nytimes.com/fakeUrl");
        });
    });

    describe('selectImage', function () {
        it('sets the default image', function () {
            var $scope = $rootScope.$new();
            $controller('ArticlesController', {$scope: $scope});

            // Call tested function.
            var images = [];
            var selectedImage = $scope.selectImage(images);

            expect(selectedImage).toEqual("app/images/newspaper.png");
            expect(images.favourite).toEqual("app/images/newspaper.png");
        });
    });

});