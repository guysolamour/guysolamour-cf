let gulp = require("gulp");
let config = require("./gulp.config.js")();
let browserSync = require('browser-sync').create();
let $ = require("gulp-load-plugins")();

module.exports = function() {
    console.log('‐> Compiling Css Templates')
    return gulp.src(config.scss.src)
        .pipe($.sourcemaps.init())
        .pipe($.plumber({
            //errorHandler: $.notify.onError("ERROR: SASS Compilation Failed")
        }))
        .pipe($.sass())
        .pipe($.csscomb())
        .pipe($.csscomb())
        .pipe($.cssbeautify({
            indent: '    '
        }))
        .pipe($.autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe($.size({ title: 'Css In Size' }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.scss.output))
        .pipe(browserSync.reload({ stream: true }))
};
