var gulp = require('gulp'),
browsersync = require('browser-sync').create(),
sass = require('gulp-sass'),
del = require('del');

gulp.task('serve', () =>
  browsersync.init({
      server: "./",
      port: 8070,
      baseDir: "./"
  }),
  gulp.watch("*.html").on('change', browsersync.reload)
);

gulp.task('sass', () => {
    return gulp.src('src/styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/styles/css'));
});

gulp.task('del', () => {
    return del([
        'src/styles/css/main.css'
    ]);
});

gulp.task('default', gulp.series(['del', 'sass', 'serve']));