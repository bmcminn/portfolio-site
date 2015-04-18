module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    pkg: grunt.file.readJSON('./package.json'),

    //
    paths: {
      dest:     './public/'

    , content:  './site/content/'
    , pages:    './site/content/pages'

    , engine:   './site/engine/'
    , helpers:  './site/engine/helpers/'
    , layouts:  './site/engine/layouts/'
    , partials: './site/engine/partials/'
    },


    urls: {
      home: "/"
    },


    //
    assemble: {
      options: {
        pkg: '<%= pkg %>',
        urls: '<%= urls %>',
        version: '<%= pkg.version %>',
        layout: 'page.hbs',
        layoutdir: '<%= paths.layouts %>',
        partials: '<%= paths.partials %>**/*.hbs',

        helpers: '<%= paths.helpers %>**/*.js',

        collections: [
          {
            name: 'post',
            sortby: 'posted',
            sortorder: 'descending'
          }
        ]
      },
      posts: {
        files: [
          {
            cwd: './site/content/',
            dest: '<%= paths.dest %>',
            expand: true,
            src: [
              '**/*.md'
            , '!pages/**/*.md'
            ]
          },
          {
            cwd: './site/content/pages/',
            dest: '<%= paths.dest %>',
            expand: true,
            src: '**/*.md'
          }
        ]
      }
    },

    //
    connect: {
      dev: {
        options: {
          port: 3005,
          base: '<%= paths.dest %>',
          hostname: '192.168.1.82',
          keepalive: true
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('assemble');


  grunt.registerTask('default', [ 'assemble', 'connect' ]);

};