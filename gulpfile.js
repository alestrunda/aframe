"use strict";

var gulp = require('gulp');

var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var concat = require('gulp-concat');
var postcss = require('gulp-postcss');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');



/*
 * concat task
 * run: concat
 */
gulp.task('concat', function() {
	return gulp.src('src/*.scss')
		.pipe(concat('aframe.scss'))
		.pipe(gulp.dest('dest'));
});


/*
 * sass task
 * run: sass
 */
gulp.task('sass', function() {
	return gulp.src('main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(rename('aframe.css'))
		.pipe(gulp.dest('dest'));
});


/*
 * css task
 * run: autoprefixer, cssnano
 */
gulp.task('css', function() {
	var processors = [
        autoprefixer({browsers: ['last 5 versions']}),
		cssnano()
    ];
	return gulp.src('dest/aframe.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('dest'));
});


/*
 * run-css task
 * run: sass and css tasks sequentially
 */
gulp.task('run-css', function() {
	runSequence('sass', 'css');
});


//default task
gulp.task('default', ['concat', 'run-css']);