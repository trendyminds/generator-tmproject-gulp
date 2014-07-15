var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var globals = require('../globals');

gulp.task('styles', function () {

  gulp.src(globals.appPath + '/assets/stylesheets/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass())
    .pipe(prefix('last 2 version'))
    .pipe(gulp.dest(globals.appPath + '/_tmp/stylesheets'))
    .pipe(notify('Gulp successfully compiled your sass files!'));

});
