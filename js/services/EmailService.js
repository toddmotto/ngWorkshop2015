/**
 * - Function passed into .factory()
 * - Locally scoped functions inside the Service
 * - Can't get a $scope instance, but please never try
 * - Revealing module pattern example below
 * return { a: function  () {}}
 * return function (arg1, arg2) {};
 * Services and Factory are singletons
 * - Instantiated once and persisted through the application's lifetime
 *
 *
 * function EmailService() { this.getEmail = function () {} }
 *
 */
function EmailService($http, API) {

  function getEmail(id) {
    return (
      $http
        // API.email = '../api/emails/{{id}}.json'
        .get(API.email.replace(/{{id}}/, id))
        .then(function (response) {
          return response.data;
        }, function (reason) {
          // handle errors
        })
    );
  }

  function getEmails() {
    return (
      $http
        // API.inbox = '../api/inbox.json'
        .get(API.inbox)
        .then(function (response) {
          // return data property
          return response.data;
        }, function (reason) {
          // handle errors
        })
    );
  }

  function deleteEmails() {

  }

  return {
    getEmail: getEmail,
    getEmails: getEmails,
    deleteEmails: deleteEmails
  };

}

angular
  .module('tm.workshop')
  .factory('EmailService', EmailService);
