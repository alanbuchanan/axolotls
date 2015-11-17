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

    $scope.showAdvanced = function(controller, templateUrl, thenFunc, url) {
      $mdDialog.show({
        controller: controller,
        templateUrl: templateUrl,
        parent: angular.element(document.body),
        clickOutsideToClose:true,
        locals: {
          url: url
        }
      })
        .then(function(answer) {
          if(thenFunc){
            initialGet();
          }
          $scope.status = 'You said the information was "' + answer + '".';
        }, function() {
          $scope.status = 'You cancelled the dialog.';
        });
    };

    $scope.addPin = function () {
      $scope.showAdvanced('AddPinCtrl', 'app/add-pin/add-pin.html', initialGet, null)
    };

    $scope.bigImage = function (url) {
      $scope.showAdvanced('BigImageCtrl', 'app/big-image/big-image.html', null, url);
    };


  });
