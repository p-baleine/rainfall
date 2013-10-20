
module.exports = function(grunt) {

  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    watch: {
      browserify: {
        files: ['lib/client/**/*.js'],
        tasks: ['browserify']
      },
      less: {
        files: ['less/**/*.less'],
        tasks: ['less']
      }
    },

    browserify: {
      dev: {
        files: {
          'public/application.js': ['lib/client/boot.js']
        },
        options: {
          debug: true
        }
      },
      options: {
        shim: {
          topojson: {
            path: 'node_modules/topojson/topojson.js',
            exports: 'topojson'
          }
        }
      }
    },

    less: {
      dev: {
        files: {
          'public/application.css': ['less/**/*.less']
        }
      }
    },

    nodemon: {
      dev: {
        ignoredFiles: ['lib/client/**/*.js'],
        watchedExtensions: ['js']
      }
    }

  });

};
