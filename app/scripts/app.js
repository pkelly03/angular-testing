'use strict';

/**
 * @ngdoc overview
 * @name angularServiceTestApp
 * @description
 * # angularServiceTestApp
 *
 * Main module of the application.
 */
angular
  .module('angularServiceTestApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
