'use strict';

angular.module('axolotlsApp')
  .controller('AddPinCtrl', function ($scope, $http, Auth, $mdDialog) {

    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.title = '';
    $scope.url = '';

    // User clicked Submit button
    $scope.addPin = function () {

      var urlStart = $scope.url.substr(0, 7);
      var urlExt = $scope.url.substr($scope.url.length - 3);
      console.log('urlStart:', urlStart);
      console.log('urlExt:', urlExt);

      //if (urlStart !== 'http://') {
      //}

      // Prevent invalid images
      if (urlExt !== 'jpg' &&
        urlExt !== 'png' &&
        urlExt !== 'gif') {
        $scope.url = '#';
      }

      var pinToAdd = {
        url: $scope.url,
        ownerId: $scope.getCurrentUser()._id,
        ownerUsername: $scope.getCurrentUser().name,
        title: $scope.title
      };

      console.log('pinToAdd', pinToAdd);

      // Post to db
      $http.post('/api/pins', pinToAdd).success(function () {

      }).error(function (error) {
        console.log('error:', error);
      });

      // Close dialog
      $mdDialog.hide();

    };


  });
