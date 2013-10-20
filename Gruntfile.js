
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
      prod: {
        files: {
          'public/application.js': ['lib/client/boot.js']
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

    env: {
      dev: {
        NODE_ENV: 'development',
        PORT: 3000,
        src: 'credentials.json'
      },
      heroku: {
        src: '.env'
      }
    },

    nodemon: {
      app: {
        ignoredFiles: ['lib/client/**/*.js'],
        watchedExtensions: ['js']
      }
    },

    clean: {
      app: ['public']
    }

  });

  grunt.registerTask('build:dev', [
    'clean',
    'browserify:dev',
    'less:dev'
  ]);

  grunt.registerTask('devsrv', [
    'env:dev',
    'nodemon'
  ]);

  grunt.registerTask('heroku:production', [
    'clean',
    'browserify:prod',
    'less'
  ]);

};
