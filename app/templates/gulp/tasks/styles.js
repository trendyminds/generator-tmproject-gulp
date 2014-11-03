var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    pixrem = require('gulp-pixrem'),
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    globals = require('../globals');

gulp.task('styles', function () {
  gulp.src(globals.appPath + '/assets/stylesheets/*.styl')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(stylus())
    .pipe(prefix())
    .pipe(pixrem())
    .pipe(gulp.dest(globals.appPath + '/_tmp/stylesheets'))
    .pipe(notify('Gulp successfully compiled your Stylus files!'));
});
