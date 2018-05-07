var app = angular.module("ajaxApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'FirstController',
    })
    .when('/results', {
        templateUrl: 'templates/results.html',
        controller: 'ResultsController'
    })
    .when('/weather', {
        templateUrl: 'templates/weather.html',
        controller: 'WeatherController'
    })
    .when('/weatherResults/:city', {
        templateUrl: 'templates/weather-results.html',
        controller: 'WeatherResultsController'
    })
});