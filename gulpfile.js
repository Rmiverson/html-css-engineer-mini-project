const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', () => {
    return gulp.src('app/scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});

gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
gulp.task('default', gulp.series(['sass']));