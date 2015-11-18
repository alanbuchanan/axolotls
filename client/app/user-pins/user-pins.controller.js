'use strict';

angular.module('axolotlsApp')
  .controller('UserPinsCtrl', function ($scope, $http, $routeParams, Auth) {

    $scope.userId = $routeParams._id;
    console.log('id:', $scope.userId);

    $scope.pins = [];
    $scope.username = '';

    $scope.printUsername = function () {
      return $scope.username + '\'s pins';
    };

    // Get all user's pins
    $http.get('/api/pins/' + $scope.userId).success(function (pins) {
      $scope.username = pins[0].ownerUsername;
      $scope.pins = pins;
    }).error(function (error) {
      console.log('error:', error);
    })

  });
