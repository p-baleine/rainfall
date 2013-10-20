
module.exports = function(grunt) {

  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    watch: {
      jshint: {
        files: ['Gruntfile.js', 'app.js', 'lib/**/*.js'],
        tasks: ['jshint']
      },
      browserify: {
        files: ['lib/client/**/*.js'],
        tasks: ['browserify']
      },
      less: {
        files: ['less/**/*.less'],
        tasks: ['less']
      },
      mochacli: {
        files: ['spec/**/*.spec.js'],
        tasks: ['mochacli']
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
    },

    cucumberjs: {
      files: 'features'
    },

    mochacli: {
      options: {
        ui: 'bdd',
        reporter: 'spec'
      },

      all: {
        src: ['spec/**/*.spec.js']
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: ['Gruntfile.js', 'app.js', 'lib/**/*.js']
    }

  });

  // compile client js and less files.
  grunt.registerTask('build:dev', [
    'clean',
    'browserify:dev',
    'less:dev'
  ]);

  // start development server.
  grunt.registerTask('devsrv', [
    'env:dev',
    'nodemon'
  ]);

  // ci tasks.
  grunt.registerTask('ci', [
    'clean',
    'browserify:dev',
    'less:dev',
    'mochacli',
    'cucumberjs'
  ]);

  // prepare production assets for heroku.
  grunt.registerTask('heroku:production', [
    'clean',
    'browserify:prod',
    'less'
  ]);

};
