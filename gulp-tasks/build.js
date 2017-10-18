
let gulp = require("gulp");
let config = require("./gulp.config.js")();
let $ = require("gulp-load-plugins")();


module.exports = function() {
    
    // move html files in site-public directory
     console.log('‐> Building site-public site')
     gulp.src(config.sitePublic.src)
    	.pipe($.plumber({
			errorHandler: $.notify.onError("ERROR: USEREF Complilation Failed")
		}))
        .pipe($.useref())
        // rename only html files in php
        .pipe($.if('*.html', $.rename(function (path){path.extname = ".php"})))
        .pipe(gulp.dest(config.sitePublic.output))


    // move images
     gulp.src("img/img-opt/*.*")
        .pipe($.plumber({
            errorHandler: $.notify.onError("ERROR: USEREF Complilation Failed")
        }))
        .pipe(gulp.dest(config.sitePublic.output+"/img"))

    // move other files
     gulp.src(["humans.txt","robots.txt","favicon.ico","README.md",".htaccess"])
        .pipe($.plumber({
            errorHandler: $.notify.onError("ERROR: USEREF Complilation Failed")
        }))
        .pipe(gulp.dest(config.sitePublic.output))

    // move fonts
     gulp.src("fonts/*.*")
        .pipe($.plumber({
            errorHandler: $.notify.onError("ERROR: USEREF Complilation Failed")
        }))
        .pipe(gulp.dest(config.sitePublic.output+"/fonts"))

};


