module.exports = function(grunt){

  'use strrict';

  grunt.initConfig({
    /// all of your Task configuration goes in here


    clean: ['build/'],

    jshint:{ // the task name is defined by pliugin

          options: {
            jshintrc: '.jshintrc',
            ignores: ['node_modules/**']
          },

          source: { //this target name is arbitrary, you can make
              files: {
                  src:['src/js/**/*.js']
              }
          },

          test: {
            files: {
              src: ['test/specs/**/*.js']
            }
          }
    },


    sass:{ /// task name
          allStyles: { // target name
            files: {
                  'build/css/styles.css': 'src/sass/main.scss'
            }
          }
    },


    copy: {
        html: {
          files: [
              {
                expand: true,
                cwd: 'src',
                src: ['index.html'],
                dest:  'build/'
              }
          ]
        }

    },

      vendorjs: {
        files: [
          {
            expand: true,
            cwd: 'node_modules/jquery/dist/',
            src: ['jquery.js'],
            dest: 'build/js'
          }
        ]
      },

      concat: {
        js: {
          src: ['src/js/**/*.js'],
          dest: 'build/js/app.js'
        }
      },

      connect: {
        testing: {
          options:{
            port: 8888, ///server
            base: '.'
          }
        }
      },

      mocha: {
        all: {
          options:{
            urls: [
              'http://localhost:8888/test/thoughter.html'
            ]
          }
        }
      }

  });

//first step
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-mocha');


// you can add more task to array
//
//
//  // I need to add test to default

  grunt.registerTask('test', ['jshint', 'connect,'mocha']);

  grunt.registerTask('default', ['clean','sass','copy', 'concat']);

};
