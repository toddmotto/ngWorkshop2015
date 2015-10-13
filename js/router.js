function config($httpProvider, $compileProvider, $stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('parent', {
      abstract: true,
      template: '<ui-view/>'
    })
    .state('parent.inbox', {
      url: '/inbox',
      data: {
        title: 'Inbox',
        breadcrumb: 'Inbox'
      },
      views: {
        '@': {
          templateUrl: 'partials/inbox.html',
          controller: 'InboxCtrl as vm'
        }
      },
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

  $urlRouterProvider.otherwise('/inbox');

  $httpProvider.useApplyAsync(true);

  $compileProvider.debugInfoEnabled(false);

}

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
