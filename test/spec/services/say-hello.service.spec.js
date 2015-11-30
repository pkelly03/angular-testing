describe('service: original resource', function () {
  var $httpBackend;
  var $rootScope;

  beforeEach(module('angularServiceTestApp'));

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    OriginalResource = $injector.get('SayHello');
  }));

  it('should send a request to say hello', function () {
    $httpBackend.expect('GET', '/say-hello').respond(200, 'success');
    OriginalResource.sayHello("your name");
    $httpBackend.flush();
    expect(OriginalResource.saidHello).toBe(true);
  });

});
