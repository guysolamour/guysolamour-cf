
let gulp = require("gulp");
let config = require("./gulp.config.js")();
let $ = require("gulp-load-plugins")();


module.exports = function() {
	console.log('‐> Optimizing image files')
	return gulp.src(config.imagemin.src)
    	.pipe($.plumber({
			errorHandler: $.notify.onError("ERROR: IMAGEMIN Optimization Failed")
		}))
        .pipe($.imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
        .pipe($.size({ title: 'Image In Size' }))
        .pipe(gulp.dest(config.imagemin.output))
};
