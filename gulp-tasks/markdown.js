let gulp = require("gulp");
let config = require("./gulp.config.js")();
let browserSync = require('browser-sync').create();
let $ = require("gulp-load-plugins")();


module.exports = function() {
	console.log('‐> Starting Markdown compilation')
	return gulp.src(config.md.src)
    	.pipe($.plumber({
			errorHandler: $.notify.onError("ERROR: MARKDOWN Compilation Failed")
		}))
        .pipe($.markdown())
        .pipe($.size({ title: 'Markdown In Size' }))
        .pipe(gulp.dest(config.md.output))
        .pipe(browserSync.reload({ stream: true }))
};
