'use strict';

angular.module('axolotlsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user-pins', {
        templateUrl: 'app/user-pins/user-pins.html',
        controller: 'UserPinsCtrl'
      });
  });
