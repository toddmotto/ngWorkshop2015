angular
  .module('tm.workshop')
  .constant('API', {
    inbox: '../api/inbox.json',
    email: '../api/emails/{{id}}.json'
  });
