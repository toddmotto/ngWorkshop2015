function tmCompose() {

  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: '../partials/directives/tmCompose.html',
    controller: 'tmComposeDirCtrl',
    controllerAs: 'vm'
  };

}

function tmComposeDirCtrl($rootScope) {

  var vm = this;

  var showCompose = false;

  var form = {
    to: '',
    subject: '',
    message: '',
    timestamp: +new Date()
  };

  // exports
  vm.form = form;
  vm.showCompose = showCompose;

  // events
  $rootScope.$on('newEmail', function () {
    vm.showCompose = true;
  });

}

angular
  .module('tm.workshop')
  .controller('tmComposeDirCtrl', tmComposeDirCtrl)
  .directive('tmCompose', tmCompose);
