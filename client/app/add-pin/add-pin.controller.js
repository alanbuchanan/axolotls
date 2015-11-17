'use strict';

angular.module('axolotlsApp')
  .controller('AddPinCtrl', function ($scope, $http, Auth, $mdDialog) {

    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.title = '';
    $scope.url = '';

    // User clicked Submit button
    $scope.addPin = function () {

      var pinToAdd = {
        url: $scope.url,
        owner: $scope.getCurrentUser()._id,
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

      //TODO: form validation: cannot submit if fields are invalid

    };


  });
