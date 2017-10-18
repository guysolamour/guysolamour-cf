let gulp = require('gulp'),
    config = require('./gulp.config.js')();

module.exports = function(){
    gulp.start(['watch-scss','watch-babel','watch-jade','watch-markdown','watch-imagemin','watch-sprite']);
};

