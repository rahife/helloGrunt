module.exports = function(grunt) {

    // Project configuration.
   grunt.initConfig({

       karma: {
           unit: {
               configFile: 'karma.conf.js'
           }
       }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', 'karma' );

};