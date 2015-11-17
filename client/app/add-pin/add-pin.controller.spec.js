'use strict';

describe('Controller: AddPinCtrl', function () {

  // load the controller's module
  beforeEach(module('axolotlsApp'));

  var AddPinCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddPinCtrl = $controller('AddPinCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
