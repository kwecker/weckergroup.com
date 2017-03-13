var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var del = require('del');
var runSequence = require('run-sequence');

// Plugins
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');


// Browser Syncing
gulp.task('browserSync', function() {
});

// SASS Processing
gulp.task('sass', function() {
	return gulp.src('app/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('serve', ['sass'], function() {
	browserSync.init({
		proxy: 'http://webdev.local:8081'
	});

	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/js/**/*.js').on('change', browserSync.reload);
	gulp.watch('app/**/*.+(php|html)').on('change', browserSync.reload);
});


// Optimization
// Image Optimization
gulp.task('images', function() {
	return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
		.pipe(cache(imagemin({
				interlaced: true
			})))
		.pipe(gulp.dest('dist/images'));
});

// Font Copying
gulp.task('fonts', function() {
	return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'));
});

// Top Level Misc Copying
gulp.task('misc', function() {
	return gulp.src('app/+(favicon.ico|sitemap.xml|robots.txt)')
		.pipe(gulp.dest('dist'));
});

// htaccess
gulp.task('ht', function() {
	return gulp.src('app/.ht*')
		.pipe(gulp.dest('dist'));
});

// Distribution Processing
gulp.task('useref', function() {
	return gulp.src('app/**/*.+(php|html)')
		.pipe(useref())
		// Minify JS
		.pipe(gulpIf('*.js', uglify()))
		// Minify CSS
		.pipe(gulpIf('*.css', cssnano()))
		.pipe(gulp.dest('dist'));
});


// Maintenance
gulp.task('clean:dist', function() {
	return del.sync('dist');
});

gulp.task('cache:clear', function(callback) {
	return cache.clearAll(callback);
})


// Build
gulp.task('build', function(callback) {
	runSequence('clean:dist',
		['sass', 'useref', 'images', 'fonts', 'misc', 'ht'],
		callback
	);
});

gulp.task('default', function(callback) {
	runSequence(['sass', 'serve'],
		callback
	);
});