var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    coffeeify = require('coffeeify'),
    source = require('vinyl-source-stream'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    globals = require('../globals');

gulp.task('scripts', function () {

  return gulp.src(globals.appPath + '/assets/javascripts/App.coffee', {read: false})
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(browserify({
      debug: true,
      transform: ['browserify-handlebars', 'coffeeify'],
      extensions: ['.coffee']
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(globals.appPath + '/_tmp/javascripts'))
    .pipe(notify('Gulp successfully compiled your CoffeeScript files'));

});
