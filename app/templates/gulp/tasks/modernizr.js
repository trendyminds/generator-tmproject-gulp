var gulp = require('gulp'),
    modernizr = require('gulp-modernizr'),
    uglify = require('gulp-uglify'),
    globals = require('../globals');

gulp.task('modernizr', function () {

  var paths = [
    globals.appPath + '/assets/stylesheets/**/*.styl',
    globals.appPath + '/assets/javascripts/**/*.js'
  ];

  return gulp.src(paths)
    .pipe(modernizr({
      "options": [
        "setClasses",
        "addTest",
        "html5printshiv",
        "testProp",
        "fnBind"
      ]
    }))
    .pipe(uglify())
    .pipe(gulp.dest(globals.appPath + '/_tmp/javascripts'));
});
