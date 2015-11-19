'use strict';

angular.module('axolotlsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/my-pins', {
        templateUrl: 'app/my-pins/my-pins.html',
        controller: 'MyPinsCtrl',
        authenticate: true
      });
  });
