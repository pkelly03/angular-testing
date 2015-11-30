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
    $httpBackend.expect('GET', '/say-goodbye').respond(200, ['success']);
    var onError = {
      run: function(response) {}
    }
    spyOn(onError, 'run')
    SayHello.sayGoodbye(onError.run);
    $httpBackend.flush();
    expect(SayHello.saidGoodbye).toBe(true);
    expect(onError.run).toHaveBeenCalled();
  });

  it('should log an error of false if there was an error', function () {
    $httpBackend.expect('GET', '/say-goodbye').respond(400, ['error']);
    var onError = {
      run: function(response) {}
    }
    SayHello.sayGoodbye(onError.run);
    $httpBackend.flush();
    expect(SayHello.saidGoodbye).toBe(false);
  });


});
