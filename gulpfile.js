/*

 */

var gulp = require( 'gulp' ),
	sass = require( 'gulp-ruby-sass' ),
	autoprefixer = require( 'gulp-autoprefixer' ),
	plumber = require( 'gulp-plumber' ),
	livereload = require( 'gulp-livereload' );

var sass_config = {

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
Livereload
 */
gulp.task( 'livereload', function() {

	livereload.listen();
	gulp.watch( [ '*.html', 'dist/**/*', 'src/js/**/*' ], function( evt ){
		livereload.changed( evt.path );
	} );

} );


/*
Dev
 */
gulp.task( 'dev', [ 'css_watch', 'livereload' ] );