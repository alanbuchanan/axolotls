'use strict';

describe('Controller: UserPinsCtrl', function () {

  // load the controller's module
  beforeEach(module('axolotlsApp'));

  var UserPinsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserPinsCtrl = $controller('UserPinsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
