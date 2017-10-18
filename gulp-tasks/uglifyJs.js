
let gulp = require("gulp");
let config = require("./gulp.config.js")();
let browserSync = require('browser-sync').create();
let $ = require("gulp-load-plugins")();


module.exports = function() {
	console.log('‐> Uglifying Js')
	return gulp.src(config.uglify.src)
    	.pipe($.plumber({
			errorHandler: $.notify.onError("ERROR: UGLIFY-JS Compilation Failed")
		}))
        .pipe($.concat('concat.js'))
        .pipe($.uglify())
        .pipe($.size({ title: 'Uglified Js In Size' }))
        .pipe(gulp.dest(config.uglify.output))
        .pipe(browserSync.reload({ stream: true }))
};
