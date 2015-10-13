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

  function getEmail() {

  }

  function getEmails() {
    return (
      $http
        .get(API.inbox) // '../api/inbox.json'
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
