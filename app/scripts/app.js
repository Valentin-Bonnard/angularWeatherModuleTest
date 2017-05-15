'use strict';

/**
 * @ngdoc overview
 * @name weatherTestApp
 * @description
 * # weatherTestApp
 *
 * Main module of the application.
 */
var app = angular.module('weatherTestApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'openweather'

]);
app.controller('controller', ['$scope', 'openweathermapFactory', function (scope, openWeatherTest) {

  let _appid = "105ac2b2036bdfbb8c6ae07ae71bbc79";


  openWeatherTest.getWeatherFromCitySearchByName({
    q: "paris",
    appid: _appid,
    units: "Metric"
  }).then(function (_data, _err) {
    if (!_err) {
      console.info("weather from city by name", _data.data.name);
      scope.page_data =  _data.data.name;
    }
    else
      console.info("This is an error", _err);
  });

}]);


app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .otherwise({
      redirectTo: '/'
    });
});
