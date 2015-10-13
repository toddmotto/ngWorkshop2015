function tmNewEmail($rootScope) {

  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: '../partials/directives/tmNewEmail.html',
    controller: 'tmNewEmailDirCtrl',
    controllerAs: 'vm'
  };

}

function tmNewEmailDirCtrl($rootScope) {

  var vm = this;

  function onClick() {
    $rootScope.$emit('newEmail', true);
  }

  // exports
  vm.onClick = onClick;

}

angular
  .module('tm.workshop')
  .controller('tmNewEmailDirCtrl', tmNewEmailDirCtrl)
  .directive('tmNewEmail', tmNewEmail);
