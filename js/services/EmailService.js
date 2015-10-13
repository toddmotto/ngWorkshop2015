function EmailService($http, API) {

  function getEmail() {

  }

  function getEmails() {

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
