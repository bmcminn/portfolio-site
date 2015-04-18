module.exports.register = function (Handlebars, options) {
  'use strict';

  Handlebars.registerHelper('jsonString', function (obj) {
    return JSON.stringify(obj);
    // if (haystack && needle) {
    //   return haystack.replace(needle, replacement);
    // } else {
    //   return '';
    // }
  });

  Handlebars.registerHelper('jsonPretty', function (obj) {
    return JSON.stringify(obj, null, 2);
  });

};