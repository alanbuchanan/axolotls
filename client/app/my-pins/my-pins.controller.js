'use strict';

angular.module('axolotlsApp')
  .controller('MyPinsCtrl', function ($scope, $http, $mdDialog, Auth, $location) {

    $scope.getCurrentUser = Auth.getCurrentUser;
    $scope.pins = [];

    var initialGet = function () {

      $scope.pins = [];

      $http.get('/api/pins').success(function (pins) {

        pins.forEach(function (pin) {
          if (pin.ownerId === $scope.getCurrentUser()._id) {
            $scope.pins.push(pin);
          };
        });

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

    $scope.showConfirm = function(pin) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title('Delete \'' + pin.title + '\'?')
        //.content('All of the banks have agreed to forgive you your debts.')
        .ok('OK')
        .cancel('Cancel');
      $mdDialog.show(confirm).then(function() {

        //Clicked ok

        $http.delete('/api/pins/' + pin._id).success(function () {
        }).error(function (error) {
          console.log('error:', error);
        });

        initialGet();
      }, function() {
        //clicked cancel
      });
    };

    // User clicked add. Call dialog to add to db.
    $scope.addPin = function () {
      $scope.showAdvanced('AddPinCtrl', 'app/add-pin/add-pin.html', initialGet, null)
    };

    // User clicked delete on a pin. Call dialog to confirm.
    $scope.deletePin = function (pin) {

      $scope.showConfirm(pin);

    };

    // User clicked on an image. Call dialog to show big version of the image.
    $scope.bigImage = function (url) {
      $location.path(url);
      //$scope.showAdvanced('BigImageCtrl', 'app/big-image/big-image.html', null, url);
    };

    $scope.deadImageUrl = 'http://google.com/faviconblabla.ico';


  })
  .directive('img', function () {
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        // show an image-missing image
        element.error(function () {
          var w = element.width();
          var h = element.height();
          if (w <= 20) { w = 100; }
          if (h <= 20) { h = 100; }
          var url = 'http://placehold.it/' + w + 'x' + h + '/cccccc/ffffff&text=Image missing';
          element.prop('src', url);
          element.css('border', 'double 3px #cccccc');
        });
      }
    }
  });
