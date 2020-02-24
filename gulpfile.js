const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile sccs into css

function style() {
    // 1. where is my css file?
    return gulp.src('./scss/**/*.scss')
        // 2. pass that file through the sass compiler
        .pipe(sass())
        // 3. Where do I save the compiled css
        .pipe(gulp.dest('./css'))
        // 4. stream changes to all browsers
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
        // ,
        // // Change the default port 
        // // https://browsersync.io/docs/options#option-port

        // port: 8888

    });
    gulp.watch('./wp-content/themes/2020tattoo/sass/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./*.php').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}

function defaultTask(cb) {
    // place code for your default task here
    cb();
}



exports.style = style;
exports.watch = watch;
exports.default = defaultTask;