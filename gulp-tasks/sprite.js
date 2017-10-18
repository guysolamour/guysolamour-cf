let gulp = require("gulp");
let config = require("./gulp.config.js")();
let $ = require("gulp-load-plugins")();





module.exports = function() {
    gulp.task('sprite', function() {
        var spriteData = gulp.src(config.sprite.src)
            .pipe($.spritesmith({
                imgName: 'sprite.png',
                cssName: '_sprite.scss'
            }))
        spriteData.img.pipe(gulp.dest(config.sprite.distimg)) // where the sprite image will be saved
        spriteData.css.pipe(gulp.dest(config.sprite.distcss)) // where the sprite css rules will be saved
    });
};