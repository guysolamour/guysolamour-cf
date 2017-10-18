let gulp = require("gulp");
let config = require("./gulp.config.js")();
let browserSync = require('browser-sync').create();
let $ = require("gulp-load-plugins")();


module.exports = function() {
    browserSync.init({
        notify: true,
        port: 9000,
        server: {
            baseDir: ['./']
        }
    });
    gulp.watch(config.scss.src, ['sass']);
    //gulp.watch(config.imagemin.src, ['imagemin']);
    gulp.watch(config.jade.src, ['jade']);
    gulp.watch(config.babel.src, ['babel']);
    //gulp.watch(config.sprite.src, ['sprite']);
    gulp.watch(config.scss.src).on("change", browserSync.reload);
    gulp.watch(config.babel.output).on("change", browserSync.reload);
    gulp.watch('css/*.css').on("change", browserSync.reload);
    gulp.watch('*.html').on("change", browserSync.reload);
};