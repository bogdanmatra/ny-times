module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        basePath: "app/js",
        files: [
            'https://ajax.googleapis.com/ajax/libs/angularjs/1.5.11/angular.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/angular-mocks/1.5.11/angular-mocks.js',
            'app.js', // Needs to be the first file included (contains the Angular JS application definition).
            '*!(app.js).js', // All other JS files except 'apps.js'.
        ],
        browsers: ['Chrome']
    })
}