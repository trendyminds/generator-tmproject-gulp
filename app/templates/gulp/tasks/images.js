var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var globals = require('../globals');

gulp.task('images', function () {

  return gulp.src(globals.appPath + '/assets/images/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(globals.distPath + '/assets/images'));

});
