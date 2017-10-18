let gulp = require("gulp");
let config = require("./gulp.config.js")();
let browserSync = require('browser-sync').create();
let $ = require("gulp-load-plugins")();


module.exports = function() {
	gulp.src('site-public/**/*')
    	.pipe($.plumber({
			errorHandler: $.notify.onError("ERROR: ZIP making Failed")
		}))
        .pipe($.zip('build.zip'))
        .pipe($.size({ title: 'Zip In Size' }))
        .pipe(gulp.dest('dist'))
};
