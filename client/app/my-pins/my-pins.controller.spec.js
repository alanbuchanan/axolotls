'use strict';

describe('Controller: MyPinsCtrl', function () {

  // load the controller's module
  beforeEach(module('axolotlsApp'));

  var MyPinsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyPinsCtrl = $controller('MyPinsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
