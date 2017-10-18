var gulp = require('gulp'),
    config = require('./gulp.config.js')();

module.exports = function(){

    gulp.watch(config.jade.src, ['jade']);

};

