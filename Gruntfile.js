module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'img/',
            src: ['**/*.{png,jpg,gif,jpeg}'],
            dest: 'images/build/'
        }]
    }
}
  });
  // Load the plugins tasks
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  // Default task(s).
  grunt.registerTask('default', ['imagemin']);
};
