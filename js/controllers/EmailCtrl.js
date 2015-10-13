function EmailCtrl(message) {

  var vm = this;

  // exports
  vm.message = message;

}

EmailCtrl.resolve = {
  message: function (EmailService, $stateParams) {
    return EmailService.getEmail($stateParams.id);
  }
};

angular
    .module('tm.workshop')
    .controller('EmailCtrl', EmailCtrl);
