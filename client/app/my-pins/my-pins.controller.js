'use strict';

angular.module('axolotlsApp')
  .controller('MyPinsCtrl', function ($scope, $mdDialog) {

    $scope.showAdvanced = function() {
      $mdDialog.show({
        controller: 'AddPinCtrl',
        templateUrl: 'app/add-pin/add-pin.html',
        parent: angular.element(document.body),
        clickOutsideToClose:true
      })
        .then(function(answer) {
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };


  });
