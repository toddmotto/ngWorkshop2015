/*
 * Controls the templates fetched, controllers to instantiate
 *
 */
function config($httpProvider, $compileProvider, $stateProvider, $urlRouterProvider) {

  // ui.router
  $stateProvider
    // base parent state
    // abstract: true (allows child states)
    // template: <ui-view> (where to find it in the DOM)
    .state('parent', {
      abstract: true,
      template: '<ui-view/>'
    })
    // setup a parent.inbox state
    .state('parent.inbox', {
      // tell it what URL we want
      url: '/inbox',
      data: {
        title: 'Inbox',
        breadcrumb: 'Inbox'
      },
      // Views:
      //     - templateUrl (inbox.html) which is the main view
      //     - InboxCtrl -> instantiated and bound to inbox.html
      views: {
        '@': {
          templateUrl: 'partials/inbox.html',
          controller: 'InboxCtrl as vm'
        }
      },
      //
      // This is awesome!!!
      // resolve: Allows you to resolve data before the Controller + template are instantiated
      //
      //
      resolve: InboxCtrl.resolve
    })
    .state('parent.inbox.email', {
      url: '/:id',
      views: {
        'email@parent.inbox': {
          templateUrl: 'partials/email.html',
          controller: 'EmailCtrl as vm'
        }
      },
      resolve: EmailCtrl.resolve
    });

  // /emails -> /inbox
  // Automated redirects
  $urlRouterProvider.otherwise('/inbox');

  // batches $digest cycles for $http calls
  // that resolve within 10ms of eachother
  $httpProvider.useApplyAsync(true);

  // BEFORE: <div ng-controller="MainCtrl as main" class="ng-controller ng-binding"></div>
  //         angular.element('.myClass').scope();
  //
  // AFTER:  <div ng-controller="MainCtrl as main"></div>
  //         - Doesn't add unnecessary class names
  //         - Doesn't bind .scope() / .getIsolateScope() data to each element
  $compileProvider.debugInfoEnabled(false);

}

// controls the dynamic page titles
function run($rootScope) {
  var page = {
    setBreadcrumb: function (name) {
      this.breadcrumb = name;
    },
    setTitle: function (title) {
      this.title = 'ngWorkshop: ' + title;
    }
  };

  function setTitle(event, state) {
    page.setBreadcrumb(state && state.data ? state.data.breadcrumb : '');
    page.setTitle(state && state.data ? state.data.title : '');
  }

  // exports
  $rootScope.page = page;
  $rootScope.$on('$stateChangeSuccess', setTitle);

}

angular
  .module('tm.workshop')
  .run(run)
  .config(config);
