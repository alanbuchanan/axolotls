'use strict';

angular.module('axolotlsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.pins = [];

    $http.get('/api/pins').success(function (pins) {
      $scope.pins = pins;
    })

  });
