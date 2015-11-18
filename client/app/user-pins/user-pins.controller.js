'use strict';

angular.module('axolotlsApp')
  .controller('UserPinsCtrl', function ($scope, $http, $routeParams, Auth) {

    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.userId = $routeParams._id;
    console.log('id:', $scope.userId);

    $scope.pins = [];

    // Get all user's pins
    $http.get('/api/pins/' + $scope.userId).success(function (pins) {
      $scope.pins = pins;
    }).error(function (error) {
      console.log('error:', error);
    })

  });
