/**
 * - Looks like it's a global function (** HINT: Wrap inside an IIFE (function () {})(); ** )
 * - $rootScope, $state - dependency injection
 *    - Ask Angular for particular instances/services
 *
 * - Controllers are created and destroyed
 * - Such as a view change from /inbox with InboxCtrl to /trash with TrashCtrl
 *      - InboxCtrl would be destroyed
 *      - TrashCtrl would be created
 *      - $$watcher counts will vary per "View"
 *
 */
function InboxCtrl($rootScope, $state, messages) {

  var vm = this;

  /**
   * $rootScope and $state are now available
   *
   * $scope is the Object in which we bind to the DOM
   * Such as $scope.name = 'Todd' in the HTML we can write {{ name }}
   *
   * controllerAs:
   * - Uses the "this" keyword instead of $scope
   * - Benefits: http://toddmotto.com/digging-into-angulars-controller-as-syntax
   *
   * MVVM pattern:
   * - Model (Business logic) - talks to our APIs, makes GET/PUT/POST requests etc.
   * - View (Represents the Model through HTML) Angular bindings
   * - ViewModel (Presentational layer: Controller)
          $scope.someArray = [{ a: 1 }, { b: 2 }];
          Take this Array, use with <li ng-repeat=item in someArray>
          $scope.someArray.splice(0, 1); // remove the first item
          Angular removes the first DOM node
   * - Keep as light and simple as possible
   * - Delegate shared logic to Services/Factories
   *
   */

   vm.messages = messages;

}

// resolve promises before Controller is instantiated
InboxCtrl.resolve = {
  // Object property names are the ones that
  // will be injected at runtime
  messages: function (EmailService) {
    return EmailService.getEmails();
  }
};

angular
    .module('tm.workshop') // getter method
    .controller('InboxCtrl', InboxCtrl); // pass InboxCtrl into .controller
