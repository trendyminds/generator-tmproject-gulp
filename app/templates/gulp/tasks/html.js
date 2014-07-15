var gulp = require('gulp'),
    useref = require('gulp-useref'),
    globals = require('../globals'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso');

gulp.task('html', function () {

  return gulp.src(globals.appPath + '/' + globals.wrapper)
    .pipe(useref.assets())
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', csso()))
    .pipe(useref.restore())
    .pipe(useref())
    .pipe(gulp.dest(globals.distPath));

});
