var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    babel = require('babelify'),
    source = require('vinyl-source-stream'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    globals = require('../globals');

gulp.task('scripts', function () {
  return gulp.src(globals.appPath + '/assets/javascripts/App.js', { read: false })
    .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
    .pipe(browserify({
      debug: true,
      transform: [
        babel,
        'browserify-handlebars'
      ]
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest(globals.appPath + '/_tmp/javascripts'))
    .pipe(notify('Gulp successfully compiled your JavaScript files'));
});
