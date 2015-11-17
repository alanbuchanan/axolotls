'use strict';

angular.module('axolotlsApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.pins = [];

    for (var i = 0; i < 4; i++) {
      $scope.pins.push({
        icon: 'http://c.files.bbci.co.uk/9273/production/_86719473_oneill.jpg',
        title: "aids"
      });
    }

  });
