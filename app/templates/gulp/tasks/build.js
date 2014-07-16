var gulp = require('gulp'),
    clean = require('gulp-clean'),
    rimraf = require('gulp-rimraf'),
    globals = require('../globals');

gulp.task('build', ['styles', 'scripts'], function () {
  return gulp.start('copy');
});

gulp.task('copy', ['clean'], function() {
  var paths = [
    globals.appPath + '/**/*',
    '!' + globals.appPath + '/*.html',
    '!' + globals.appPath + '/assets/{stylesheets,stylesheets/**}',
    '!' + globals.appPath + '/assets/{javascripts,javascripts/**}',
    '!' + globals.appPath + '/assets/{images,images/**}',
    '!' + globals.appPath + '/{bower_components,bower_components/**}',
    '!' + globals.appPath + '/{_tmp,_tmp/**}'
  ];

  gulp.src(paths)
    .pipe(gulp.dest(globals.distPath));

  gulp.start('images');
  gulp.start('html');
});

gulp.task('clean', function() {
  return gulp.src(globals.distPath, {read: false})
    .pipe(rimraf());
});
