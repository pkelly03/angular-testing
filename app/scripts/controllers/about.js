'use strict';

/**
 * @ngdoc function
 * @name angularServiceTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularServiceTestApp
 */
angular.module('angularServiceTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
