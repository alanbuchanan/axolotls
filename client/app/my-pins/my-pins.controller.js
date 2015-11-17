'use strict';

angular.module('axolotlsApp')
  .controller('MyPinsCtrl', function ($scope, $http, $mdDialog) {

    $scope.pins = [];

    var initialGet = function () {
      $http.get('/api/pins').success(function (pins) {
        $scope.pins = pins;
      }).error(function (error) {
        console.log('error:', error);
      });
    };
    initialGet();

    $scope.showAdvanced = function() {
      $mdDialog.show({
        controller: 'AddPinCtrl',
        templateUrl: 'app/add-pin/add-pin.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true
      })
        .then(function(answer) {
          initialGet();
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };


  });
