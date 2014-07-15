var gulp = require('gulp');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var globals = require('../globals');

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
    '!/{_tmp,_tmp/**}'
  ];

  gulp.src(paths)
    .pipe(gulp.dest(globals.distPath));

  gulp.src(globals.appPath + '/_tmp/stylesheets/**/*')
    .pipe(csso())
    .pipe(gulp.dest(globals.distPath + '/assets/stylesheets'));

  gulp.src(globals.appPath + '/_tmp/javascripts/**/*')
    .pipe(uglify())
    .pipe(gulp.dest(globals.distPath + '/assets/javascripts'));

  gulp.start('images');
  gulp.start('html');
});

gulp.task('clean', function() {
  return gulp.src(globals.distPath, {read: false})
    .pipe(clean());
});
