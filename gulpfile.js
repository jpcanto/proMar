var gulp = require('gulp');
var sass = require('node-sass');

gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('automatizaTaskSass', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
})