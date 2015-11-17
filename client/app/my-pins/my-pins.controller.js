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

    $scope.showConfirm = function() {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title('Would you like to delete your debt?')
        .content('All of the banks have agreed to forgive you your debts.')
        .ok('Please do it!')
        .cancel('Sounds like a scam');
      $mdDialog.show(confirm).then(function() {
        $scope.status = 'You decided to get rid of your debt.';
      }, function() {
        $scope.status = 'You decided to keep your debt.';
      });
    };

    // User clicked add. Call dialog to add to db.
    $scope.addPin = function () {
      $scope.showAdvanced('AddPinCtrl', 'app/add-pin/add-pin.html', initialGet, null)
    };

    // User clicked delete on a pin. Call dialog to confirm.
    $scope.deletePin = function (pin) {
      $scope.showConfirm();

      $http.delete('/api/pins/' + pin._id).success(function () {

      }).error(function (error) {
        console.log('error:', error);
      })
    };

    // User clicked on an image. Call dialog to show big version of the image.
    $scope.bigImage = function (url) {
      $scope.showAdvanced('BigImageCtrl', 'app/big-image/big-image.html', null, url);
    };


  });
