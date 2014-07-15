var gulp = require('gulp');
var browserify = require('gulp-browserify');
var coffeeify = require('coffeeify');
var source = require('vinyl-source-stream');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var globals = require('../globals');

gulp.task('scripts', function () {

  return gulp.src(globals.appPath + '/assets/javascripts/App.coffee', {read: false})
    .pipe(browserify({
      transform: ['browserify-handlebars', 'coffeeify'],
      extensions: ['.coffee']
    }))
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(globals.appPath + '/_tmp/javascripts'))
    .pipe(notify('Gulp successfully compiled your coffeescript files!'));

});
