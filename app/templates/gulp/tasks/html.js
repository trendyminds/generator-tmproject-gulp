var gulp = require('gulp');
var useref = require('gulp-useref');
var globals = require('../globals');

gulp.task('html', function () {

  return gulp.src(globals.appPath + globals.wrapper)
    .pipe(useref.restore())
    .pipe(useref())
    .pipe(gulp.dest(globals.distPath));

});
