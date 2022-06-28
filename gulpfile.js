var gulp        = require('gulp'),
    shell       = require('gulp-shell'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    rename      = require('gulp-rename'),
    browserSync = require('browser-sync').create();


//* Scripts
gulp.task('themejs', function() {
  gulp.src(['./assets/js/jquery*.js', './assets/js/responsive-menu.js'])
    .pipe(concat('theme-concat.js'))
    .pipe(uglify())
    .pipe(rename({
      basename: "theme",
      suffix: '.min'
    }))
    .pipe(gulp.dest('./assets/js'));
});


//* Run Jekyll build and serve commands
gulp.task('build', shell.task(['jekyll build --config "_config.yml,_config-dev.yml" --watch']));


//* BrowserSync
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: '_site/'
    },
    // browser: '/opt/firefox-dev/firefox',
    reloadDelay: 500
  });
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});


//* Default task (build and serve)
gulp.task('default', ['build', 'browser-sync']);
