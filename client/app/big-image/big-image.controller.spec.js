'use strict';

describe('Controller: BigImageCtrl', function () {

  // load the controller's module
  beforeEach(module('axolotlsApp'));

  var BigImageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BigImageCtrl = $controller('BigImageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
