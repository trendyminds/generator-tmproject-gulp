var gulp = require('gulp');
var livereload = require('gulp-livereload');
var globals = require('../globals');

gulp.task('watch', [], function () {
  livereload.listen();

  gulp.watch([
    globals.appPath + '/_tmp/stylesheets/**/*.css',
    globals.appPath + '/_tmp/javascripts/**/*.js'
  ]).on('change', livereload.changed);

  gulp.watch(globals.appPath + '/assets/stylesheets/**/*.scss', ['styles']);
  gulp.watch([
      globals.appPath + '/assets/javascripts/**/*.coffee',
      globals.appPath + '/assets/templates/**/*.hbs',
    ],
    ['scripts']);

});
