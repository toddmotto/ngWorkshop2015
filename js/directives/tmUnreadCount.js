/**
 * function passed into .directive()
 * .directive('tmUnreadCount', tmUnreadCount);
 * - Dictates the custom element name
 * - camelCase will translate to <camel-case>
 * - tmUnreadCount -> <tm-unread-count></tm-unread-count>
 * - Not recommended to ng-* namespace
 * - Libraries like Polymer make you use two words per element
 */
function tmUnreadCount($rootScope) {

  // Returns an Object
  return {
    // restrict: 'EAMC'
    // - Tells you/developers how the Directive can be used
    // USE:
    //     E: Element -> <tm-unread-count></tm-unread-count>
    //        - Elements for injecting templates
    //     A: Attribute -> <div tm-unread-count></div>
    //        - Binding to existing elements
    // **DO NOT USE!**
    //     M: Comment -> <!-- directive:tm-unread-count -->
    //     C: Class name -> <div class="tm-unread-count"></div>
    restrict: 'E',

    // Replaces the root element where it was declared in the DOM
    replace: true,

    /*
     * scope: true (avoid)
     *    Inherit $scope from wherever the element is placed
     *    <div ng-controller="SomeCtrl as some">
            <tm-unread-count></tm-unread-count>
          </div>
          <div ng-controller="AnotherCtrl as another">
            <tm-unread-count></tm-unread-count>
          </div>
     *
     *
     * isolate scopes:
     * - Create an isolate scope using {}
     * - Allows you to pass methods/data/properties down into the component from a parent Ctrl
     *
          scope: {
            name: '='
          }

          ->    <tm-unread-count name="someProp"></tm-unread-count>

          -> $scope.name in the isolate scope (Controller/link function)

     *
     *   scope: { prop: '=' } is for two-way binding
     *   scope: { prop: '@' } is for obtaining the value as a String
     *   scope: { prop: '&' } is for passing data down as an expression (such as a function like $scope.foo())
     *
     *   scope: {
             name: '=',
             foo: '@',
             bar: '='
         }
     *
     * // avoid $scope overload
     * <tm-unread-count options={}></tm-unread-count>
     * scope: { options: '=' }
     *
     */
    scope: {},

    /*
     * fetches the template for the Directive
     * Possible syntaxes:
     * - template: '<div></div>'
     * - templateUrl: '../partials/mydirective.html'
     *
     * After the GET request has been made, Angular will add the template to it's internal
     * $templateCache Object
     * <script type="text/ng-template" id="tmUnreadCount.html">
     *
     * Gulp/Grunt: ngTemplateCache
     *
     */
    templateUrl: '../partials/directives/tmUnreadCount.html',

    /**
     * controller:
     * - Owner of the data/control for the Directive
     * - Either a function or String value that corresponds to a function passed into .controller()
     */
    controller: 'tmUnreadCountDirCtrl',

    /** controllerAs "vm" (stands for ViewModel)
     * Inside the template for this Directive we can then use vm.
     *
     * Aids in debugging as $scope Object has a lot of things bound
     * to it, whereas "controllerAs" binds to $scope.vm namespace for easier dev tools console inspection
     */
    controllerAs: 'vm',

    /**
     * link function for DOM manipulation (post-compile)
     */
    link: function ($scope, $element, $attrs, $ctrl) {
      /**
       * Try and avoid $scope here, use $ctrl as the fourth argument
       * to call Controller methods
       */
    }
  };

}

function tmUnreadCountDirCtrl($rootScope) {

  // variables up top
  var vm = this;

  var updateMap = {
    'increment': function () {
      vm.count += 1;
    },
    'decrement': function () {
      vm.count -= 1;
    }
  };

  // functions in the middle
  function updateCount(event, direction) {
    updateMap[direction]();
  }

  function renderCount(event, data) {
    vm.count = data;
  }

  // exports at the bottom
  vm.count = 0;

  // events
  $rootScope.$on('count:render', renderCount);
  $rootScope.$on('count:update', updateCount);

}

angular
  .module('tm.workshop')
  .controller('tmUnreadCountDirCtrl', tmUnreadCountDirCtrl)
  .directive('tmUnreadCount', tmUnreadCount);
