module.exports.register = function (Handlebars, options) {
  'use strict';

  Handlebars.registerHelper('console', function (obj) {
    var result = [
      '<script>console.log(',
    , JSON.stringify(obj)
    , ');</script>'
    ].join('');

    return new Handlebars.SafeString(result);
  });

};