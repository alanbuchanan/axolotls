'use strict';

angular.module('axolotlsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/add-pin', {
        templateUrl: 'app/add-pin/add-pin.html',
        controller: 'AddPinCtrl'
      });
  });
