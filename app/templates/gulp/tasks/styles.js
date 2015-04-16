var gulp = require('gulp'),
    sass = require('gulp-sass'),
    pixrem = require('gulp-pixrem'),
    minifyCSS = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    globals = require('../globals');

gulp.task('styles', function () {

  gulp.src(globals.appPath + '/assets/stylesheets/**/*.scss')
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(sass())
    .pipe(prefix())
    .pipe(minifyCSS())
    .pipe(pixrem())
    .pipe(gulp.dest(globals.appPath + '/_tmp/stylesheets'))
    .pipe(notify('Gulp successfully compiled your sass files!'));

});
