//include gulp
var gulp = require('gulp');

//include gulp-sass
var sass = require('gulp-sass');

//automatically run gulp sass command when there is a change
gulp.task('default', function() {
    gulp.watch(['src/scss/*', 'src/scss/**/*'], ['sass']);
});

//create gulp task to something
gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'));
});

