'use strict';

angular.module('axolotlsApp')
  .controller('UserPinsCtrl', function ($scope, $http, $routeParams) {
    $scope.userId = $routeParams._id;
    console.log('id:', $scope.userId);

    $scope.pins = [];

    $http.get('/api/pins/' + $scope.userId).success(function (pins) {
      $scope.pins = pins;
    }).error(function (error) {
      console.log('error:', error);
    })

  });
