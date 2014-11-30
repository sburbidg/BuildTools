//jshint node: true

'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.initConfig ({
    clean: {
      dev: {
        src: ['build/']
      }
    },

    copy: {
      cwd: 'app/',
      src: ['**/*.html', 'css/**/*.css'],
      expand: true,
      dest: 'build/'
    },

    browserify: {
      dev: {
        src: ['app/js/**/*.js'],
        dest: 'build/bundle.js',
        options: {
          transform: ['debowerify']
        }

      }
    }
  });
  grunt.registerTasks('build:dev', ['clean:dev', 'copy', 'browserify:dev']);
};
