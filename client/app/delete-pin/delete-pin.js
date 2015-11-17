'use strict';

angular.module('axolotlsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/delete-pin', {
        templateUrl: 'app/delete-pin/delete-pin.html',
        controller: 'DeletePinCtrl'
      });
  });
