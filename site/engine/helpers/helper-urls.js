var url = require('url')
  , path = require('path')
  , paths = {
      root: process.cwd()
    }
  ;

module.exports.register = function (Handlebars, options) {
  'use strict';

  Handlebars.registerHelper('url', function (path) {


    return 'PANTS';
  });






};