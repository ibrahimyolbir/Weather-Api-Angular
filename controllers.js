//controller.js
var app = angular.module('ajaxApp');
app.controller('FirstController' , ['$scope', '$http', function ($scope, $http){       
    $scope.name = 'ibo';
    $scope.names = ['Max','Pelle','Calle'];

    $scope.show = function () {
        console.log('HEJ DÄR');
    };

    $scope.showData = function () {
        var url = 'http://jsonplaceholder.typicode.com/posts';
        $http.get(url)
        .then(function (data){
            $scope.data = data.data;
            console.log(data.data)
        });
    };
    $scope.visaBilder = function () {
        var url = 'http://jsonplaceholder.typicode.com/photos';
        $http.get(url)
        .then(function (bilder){
            // eftersom vad vi får tillbaka är i data array måste vi skriva så här 
            $scope.bilder = bilder.data;
            console.log($scope.bilder)
        });
    }
}]);

app.controller('ResultsController', ['$scope', function ($scope){
    $scope.name = 'Batman';
    $scope.results = [
        { name: 'Peter', score: 4 },
        { name: 'Fredrik', score: 14 },
        { name: 'Moses', score: 44 },
    ];
}]);

app.controller('WeatherController', ['$scope', '$location', function($scope, $location){
    $scope.weather = function (city){
        $location.path('/weatherResults/' + city);
        console.log(city);
    };

}]);
app.controller('WeatherResultsController', ['$scope','$routeParams','getWeather', function($scope, $routeParams,getWeather){
    var city = $routeParams.city;
    getWeather.inputWeather(city)
    .then(function (data){
        console.log(data);
        $scope.location = data.location.name;
        $scope.temp_c = data.current.temp_c;
        $scope.description = data.current.condition.text;
        $scope.image = data.current.condition.icon;

    });
}]);