var app = angular.module('ajaxApp');

app.factory('getWeather', ['$http', function ($http) {
    var weather = {
        inputWeather: function (city) {
            var url = `http://api.apixu.com/v1/forecast.json?key=5625a2b074dd45a88ef115234182204&q=${city}`;
            return $http.get(url).then(function (data) { return data.data;});
        }
    };
    return weather;
}]);