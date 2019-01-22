'use-strict';

/**
 * Connects to the New York Times API.
 */
app.service('NYTimesService', function ($http) {

    var NY_TIME_ENDPOINT = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var NY_TIMES_API_KEY = "UBBw3bVl28TCMIiJT6dOBjlK8dZNgZiX";

    /**
     * Gets the max 10 article list.
     */
    this.getArticles = function (topic) {
        return $http({
            url: NY_TIME_ENDPOINT,
            method: "GET",
            dataType: "jsonp",
            params: {
                q: topic,
                sort: "newest",
                'api-key': NY_TIMES_API_KEY,

            }
        }).then(function (apiData) {
            return apiData.data.response.docs;
        });
    };

    this.getImageHost = function () {
        return 'http://www.nytimes.com/';
    }

});
