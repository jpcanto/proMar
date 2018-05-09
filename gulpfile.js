var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

gulp.task('sass', function() {
    gulp.src('./sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

//gulp.task('automatizaTaskSass', function() {
//gulp.watch('./sass/**/*.scss', ['sass']);
//}) //a task browser sync já faz o watch e transforma em css


gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./css/*.css').on('change', browserSync.reload)
    gulp.watch('./sass/**/*.scss', ['sass'])
})