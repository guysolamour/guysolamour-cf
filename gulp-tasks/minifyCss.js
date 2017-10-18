let gulp = require("gulp");
let config = require("./gulp.config.js")();
let browserSync = require('browser-sync').create();
let $ = require("gulp-load-plugins")();


module.exports = function() {
    console.log('‐> Minifying Css Templates')
	return gulp.src(config.mincss.src)
    	.pipe($.plumber({
			errorHandler: $.notify.onError("ERROR: MINIFY-CSS Compilation Failed")
		}))
        .pipe($.csso())
        .pipe($.rename({
            suffix: '.min'
        }))
        .pipe($.size({ title: 'Minified Css In Size' }))
        .pipe(gulp.dest(config.mincss.output))
        .pipe(browserSync.reload({ stream: true }))
};
