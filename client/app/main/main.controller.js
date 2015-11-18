'use strict';

angular.module('axolotlsApp')
  .controller('MainCtrl', function ($scope, $http, Auth) {


$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',
  gutter: 10
});
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.pins = [];

    $http.get('/api/pins').success(function (pins) {
      $scope.pins = pins;
    })

  });
