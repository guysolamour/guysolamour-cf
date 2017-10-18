let gulp = require("gulp");
let config = require("./gulp.config.js")();
let browserSync = require('browser-sync').create();
let $ = require("gulp-load-plugins")();

module.exports = function() {
    console.log('‐> Compiling Jade Templates')
	 gulp.src(config.jade.src)
        .pipe($.sourcemaps.init())
    	.pipe($.plumber({
			errorHandler: $.notify.onError("ERROR: JADE Compilation Failed")
		}))
        .pipe($.jade({
            pretty: true
        }))
        .pipe($.size({ title: 'Jade In Size' }))
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(config.jade.output))
        .pipe(browserSync.reload({ stream: true }))

};
