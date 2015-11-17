'use strict';

angular.module('axolotlsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/big-image', {
        templateUrl: 'app/big-image/big-image.html',
        controller: 'BigImageCtrl'
      });
  });
