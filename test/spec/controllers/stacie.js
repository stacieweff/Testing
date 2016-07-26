'use strict';

describe('Controller: StacieCtrl', function () {

  // load the controller's module
  beforeEach(module('testingApp'));

  var StacieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    StacieCtrl = $controller('StacieCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
