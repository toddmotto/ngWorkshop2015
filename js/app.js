/**
 * setters:
 * - Creates a new module
 * - With a setter, you have a second argument as an Array
 * - Array of Strings referring to other module names
 * - angular.module('app', []) // no dependencies
 * - angular.module('app', ['ngMessages']) // ngMessages dependency
 *
 * getters:
 * - We need to talk to our module
 * - No second argument:
 * - angular.module('app')
 *
 */
angular
  .module('tm.workshop', [
    'ui.router',
    'ngMessages'
  ]);

/**
 *
 * Debugging tips:
 * AngularGraph
 * Batarang
 *
 */
