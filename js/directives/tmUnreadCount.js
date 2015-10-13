function tmUnreadCount($rootScope) {

  return {
    restrict: 'E',
    replace: true,
    scope: {},
    templateUrl: '../partials/directives/tmUnreadCount.html',
    controller: 'tmUnreadCountDirCtrl',
    controllerAs: 'vm'
  };

}

function tmUnreadCountDirCtrl($rootScope) {

  var vm = this;

  var updateMap = {
    'increment': function () {
      vm.count += 1;
    },
    'decrement': function () {
      vm.count -= 1;
    }
  };

  function updateCount(event, direction) {
    updateMap[direction]();
  }

  function renderCount(event, data) {
    vm.count = data;
  }

  // exports
  vm.count = 0;

  // events
  $rootScope.$on('count:render', renderCount);
  $rootScope.$on('count:update', updateCount);

}

angular
  .module('tm.workshop')
  .controller('tmUnreadCountDirCtrl', tmUnreadCountDirCtrl)
  .directive('tmUnreadCount', tmUnreadCount);
