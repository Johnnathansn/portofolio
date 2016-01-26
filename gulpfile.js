var gulp   = require('gulp'),
    jade   = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    sass   = require('gulp-sass'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps');

/*
variable for the enviroment
Developtment:
    compile sass with sourcemaps
Production:
    compress sass
*/
var env       = process.env.NODE_ENV || 'development';

var outputDir = 'builds/development/';

var inputDir  = {
        jade : 'src/**/*.jade',
        js   :
            [
                'src/lib/jquery-1.11.3.js',
                'src/lib/angular.min.js',
                'src/lib/angular-ui-router.min.js',
                'src/**/*.start.js',
                'src/**/*.code.js',
                'src/**/*.js',
                'src/app.start.js'
            ],
        sass : 'src/**/*.scss',
        images: 'src/**/*.{gif,jpg,png,jpeg}'
        };

// copy files
gulp.task('copy', function() {
    return gulp.src(inputDir.images)
        .pipe(gulp.dest(outputDir));
});

//jade compilation task
gulp.task('jade', function() {
    return gulp.src(inputDir.jade)
        .pipe(jade())
        .pipe(gulp.dest(outputDir));
});

// js compilation task
gulp.task('js', function() {
    return gulp.src(inputDir.js)
        .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(outputDir+'core/'));
});

// sass compilation task
gulp.task('sass', function() {
    var config = {};

    if (env === 'development') {
        config.sourceComments = 'map';
    }

    if (env === 'production') {
        config.outputStyle = 'compressed';
    }

    return gulp.src(inputDir.sass)
        .pipe(concat('style.scss'))
        .pipe(sass(config))
        .pipe(gulp.dest(outputDir+'core/style/'));
});

// watch task

gulp.task('watch', function() {
    gulp.watch(inputDir.jade,['jade']);
    gulp.watch(inputDir.js,['js']);
    gulp.watch(inputDir.sass,['sass']);
});

//default task
gulp.task('default', ['copy', 'jade', 'js', 'sass', 'watch']);
