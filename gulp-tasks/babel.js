let gulp = require("gulp");
let config = require("./gulp.config.js")();
let browserSync = require('browser-sync').create();
let $ = require("gulp-load-plugins")();


module.exports = function() {
    console.log('‐> Starting Js transpiling in ES5')
    return gulp.src(config.babel.src)
        .pipe($.plumber({
            //errorHandler: $.notify.onError("ERROR: BABEL Transpilation Failed")
        }))
        .pipe($.concat('app.js'))
        .pipe($.babel({
            presets: ['env']
        }))
        .pipe($.size({ title: 'Javascript In Size' }))
        .pipe(gulp.dest(config.babel.output))
        .pipe(browserSync.reload({ stream: true }))
};