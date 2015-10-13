function tmEmail() {

  return {
    restrict: 'E',
    replace: true,
    scope: {},
    bindToController: {
      model: '='
    },
    templateUrl: '../partials/directives/tmEmail.html',
    controller: 'tmEmailDirCtrl',
    controllerAs: 'vm'
  };

}

function tmEmailDirCtrl($rootScope, $state) {

  var vm = this;

  function onClick(message) {
    message.read = true;
    $state.go('parent.inbox.email', {
      id: message.id
    });
    $rootScope.$emit('count:update', 'decrement');
  }

  // exports
  vm.onClick = onClick;

}

angular
  .module('tm.workshop')
  .controller('tmEmailDirCtrl', tmEmailDirCtrl)
  .directive('tmEmail', tmEmail);
