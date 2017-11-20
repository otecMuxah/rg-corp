'use strict';

const gulp            = require('gulp');
const path            = require('path');
const sass            = require('gulp-sass');
const autoprefixer    = require('gulp-autoprefixer');
const concat          = require('gulp-concat');
const minify          = require('gulp-minify');
const cleanCss        = require('gulp-clean-css');
// const rev             = require('gulp-rev');
// const gzip            = require('gulp-gzip');

const root      = path.resolve(__dirname);
const src       = path.resolve(root, 'scss');
const dest      = path.resolve(root, '');

const config = {};

config.styles = {
    src:        path.join(src, '**', '*.scss'),
    dest:       path.join(dest, 'css')
};

//sass compile
gulp.task('sass', function () {
    return gulp.src(config.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.styles.dest));
});

//sass watch
gulp.task('sass:watch', function () {
    gulp.watch(config.styles.src, ['sass']);
});



gulp.task('pack-js', function () {
    return gulp.src(['js/*.js', '!js/bundle.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify({
            ext:{
                min:'.js'
            },
            noSource: true
        }))
        .pipe(gulp.dest('js'));
});

gulp.task('pack-css', function () {
    return gulp.src(['css/custom/*.css', 'css/main.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
    .pipe(gulp.dest('css/'));
});

gulp.task('build', ['pack-css', 'pack-js']);
