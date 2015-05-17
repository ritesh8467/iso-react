var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var react = require('gulp-react');

gulp.task('brow', function() {
	gulp.src('./main.jsx')
		.pipe(browserify({transform: 'reactify'}))
		.pipe(concat('dist.js'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('react', function () {
	gulp.src('./app.jsx')
		.pipe(react({harmony: true}))
		.pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
	gulp.watch(['./*.jsx'], ['brow', 'react']);
});

gulp.task('default',['brow', 'react', 'watch']);
