'use strict';

angular.module('axolotlsApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {

    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.pins = [];

    $http.get('/api/pins').success(function (pins) {
      $scope.pins = pins;
    })

  });
