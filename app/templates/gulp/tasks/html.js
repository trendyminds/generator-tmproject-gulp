var gulp = require('gulp'),
    usemin = require('gulp-usemin'),
    globals = require('../globals'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso');

gulp.task('html', function () {

  return gulp.src(globals.appPath + '/' + globals.wrapper)
    .pipe(usemin({
      outputRelativePath: './',
      css: [csso(), rev()],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest(globals.distPath));

});
