

'use strict';

angular.module('axolotlsApp')
  .controller('MainCtrl', function ($scope, $http, Auth, $mdDialog) {

    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.pins = [];

    $http.get('/api/pins').success(function (pins) {
      $scope.pins = pins;
    })

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

    // User clicked on an image. Call dialog to show big version of the image.
    $scope.bigImage = function (url) {
      $scope.showAdvanced('BigImageCtrl', 'app/big-image/big-image.html', null, url);
    };

  });
