'use strict';

describe('Controller: DeletePinCtrl', function () {

  // load the controller's module
  beforeEach(module('axolotlsApp'));

  var DeletePinCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DeletePinCtrl = $controller('DeletePinCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
