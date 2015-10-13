function EmailCtrl(message) {

  var vm = this;

  // exports
  vm.message = message;

}

EmailCtrl.resolve = {
  message: function (EmailService, $stateParams) {
    // $stateParams is an Object with properties declared from
    // the router bound to it
    return EmailService.getEmail($stateParams.id);
  }
};

angular
    .module('tm.workshop')
    .controller('EmailCtrl', EmailCtrl);
