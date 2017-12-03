module.exports = function() {
    var config = {
        scss: {
            src: './scss/**/*.scss',
            output: 'css'
        },
        pug: {
            src: './pug/**/!(_)*.pug', // compiling only jade files not partials _jade
            output: '.'
        },
        md: {
            src: '*.md',
            output: './'
        },
        mincss: {
            src: 'css/**/*.css',
            output: './min-css'
        },
        uglify: {
            src: 'js/**/*.js',
            output: './min-js'
        },
        babel: {
            src: './js-src/**/*.js',
            output: 'js'
        },
        imagemin: {
            src: 'img/**/*.*',
            output: './img/img-opt'
        },
        sitePublic: {
            src: './*.html',
            output: './site-public',
            img: '.img/img-opt/*.*'
        },
        sprite: {
            src: "img/img-opt/*.*",
            img: '.img/img-opt/*.*',
            distimg: 'img',
            distcss: 'scss'
        },
        mjml: {
            src: "mjml/src/**/*.mjml",
            output: 'mjml/output/'
        }

    }

    return config
};