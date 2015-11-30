'use strict';

/**
 * @ngdoc function
 * @name angularServiceTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularServiceTestApp
 */
angular.module('angularServiceTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
