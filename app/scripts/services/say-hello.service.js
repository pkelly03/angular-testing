angular.module('angularServiceTestApp').service('SayHello', function ($resource) {
  var self = this;
  var resource = $resource('/say-hello');
  this.saidHello = false;

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
});
