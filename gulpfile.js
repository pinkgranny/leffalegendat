var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('default', ['copy'], () => {
    gulp.src('./')
        .pipe(webserver({
            livereload: true,
            open: 'dist/index.html'
        }));
});

gulp.task('copy', () =>
    gulp.src([
        'index.html',
    ])
    .pipe(gulp.dest('dist'))
);