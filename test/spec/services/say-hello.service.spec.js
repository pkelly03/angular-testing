describe('service: original resource', function () {
  var $httpBackend;
  var $rootScope;

  beforeEach(module('angularServiceTestApp'));

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    SayHello = $injector.get('SayHello');
  }));

  it('should send a request to say hello', function () {
    $httpBackend.expect('GET', '/say-hello').respond(200, 'success');
    SayHello.sayHello("your name");
    $httpBackend.flush();
    expect(SayHello.saidHello).toBe(true);
  });

  it('should send a request to say goodbye', function () {
    $httpBackend.expect('GET', '/say-goodbye').respond(200, 'success');
      SayHello.sayGoodbye();
    $httpBackend.flush();
    expect(SayHello.saidGoodbye).toBe(true);
  });

});
