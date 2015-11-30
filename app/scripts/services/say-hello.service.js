angular.module('angularServiceTestApp').service('SayHello', function ($resource) {
  var self = this;
  var resource = $resource('/say-hello');
  var resource2 = $resource('/say-goodbye');
  this.saidHello = false;
  this.saidGoodbye = false;

  this.sayHello = function (name) {
    return resource.get({}, { name: name }).$promise.then(
      function (response) {
        self.saidHello = true;
        console.log('success!');
      },
      function (error) {
        self.saidHello = false;
        console.log('failure: ' + error);
      }
    );
  }

  this.sayGoodbye = function (onError) {
    return resource2.query({}).$promise.then(
      function (response) {
        if (onError) {
          onError(response);
        }
        self.saidGoodbye = true;
        console.log('success!');
      },
      function (error) {
        self.saidGoodbye = false;
        console.log('failure: ' + error);
      }
    );
  }

});
