'use strict';

angular.module('axolotlsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:_id', {
        templateUrl: 'app/user-pins/user-pins.html',
        controller: 'UserPinsCtrl'
      });
  });
