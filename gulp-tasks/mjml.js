let gulp = require("gulp");
let config = require("./gulp.config.js")();
let browserSync = require('browser-sync').create();
let $ = require("gulp-load-plugins")();

module.exports = function() {
    console.log('‐> Compiling MJML Templates')
	 gulp.src(config.mjml.src)
        .pipe($.sourcemaps.init())
    	.pipe($.plumber({
			errorHandler: $.notify.onError("ERROR: MJML Compilation Failed")
		}))
        .pipe($.mjml())
        .pipe($.size({ title: 'MJML In Size' }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.mjml.output))
        .pipe(browserSync.reload({ stream: true }))

};
