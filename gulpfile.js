/*

 */

var gulp = require( 'gulp' ),
	sass = require( 'gulp-ruby-sass' ),
	autoprefixer = require( 'gulp-autoprefixer' ),
	plumber = require( 'gulp-plumber' ),
	uglify = require( 'gulp-uglify' ),
	imagemin = require( 'gulp-imagemin' ),
	livereload = require( 'gulp-livereload' );

var sass_config = {
	style: 'compressed'
};

var imagemin_config = {
	progressive: true
};

var plumber_config = {
	errorHandler: function (err) {
		console.log(err.toString());
		this.emit('end');
	}
};

/*
CSS
 */
gulp.task( 'css', function() {

	return gulp.src( 'src/css/**/*.scss', { base: 'src/css' } )
		.pipe( plumber( plumber_config ) )
		.pipe( sass( sass_config ) )
		.pipe( autoprefixer() )
		.pipe( gulp.dest( 'dist/css' ) );

} );

gulp.task( 'css_watch', function() {
	gulp.watch( 'src/css/**/*', [ 'css' ] );
} );

/*
JS
 */
gulp.task( 'js', function() {
	return gulp.src( 'src/js/**/*.js', { base: 'src/js' } )
		.pipe( plumber( plumber_config ) )
		.pipe( uglify() )
		.pipe( gulp.dest( 'dist/js' ) );
} );

/*
Images
 */
gulp.task( 'images', function() {
	return gulp.src( 'src/images/**/*', { base: 'src/images' } )
		.pipe( plumber( plumber_config ) )
		.pipe( imagemin( imagemin_config ) )
		.pipe( gulp.dest( 'dist/images' ) );
} );


/*
Livereload
 */
gulp.task( 'livereload', function() {

	livereload.listen();
	gulp.watch( [ '*.html', 'dist/**/*', 'src/js/**/*', '!**/*.map' ], function( evt ){
		livereload.changed( evt.path );
	} );

} );


/*
Dev
 */
gulp.task( 'dev', [ 'css_watch', 'livereload' ] );
gulp.task( 'default', [ 'css', 'js', 'images' ] )