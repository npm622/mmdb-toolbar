var gulp = require( 'gulp' ), bower = require( 'gulp-bower' ), angularTemplateCache = require( 'gulp-angular-templatecache' );

var clientApp = './src/';
var config = {
	bowerDir : './bower_components',
	htmltemplates : clientApp + '**/*.html',
	templateCache : {
		file : 'templates.js',
		options : {
			module : 'mmdb.toolbar',
			root : '',
			standAlone : false
		}
	},
	temp : './.tmp/'
};

gulp.task( 'bower', function() {
	return bower().pipe( gulp.dest( config.bowerDir ) )
} );

gulp.task( 'templateCache', function() {
	return gulp.src( config.htmltemplates ).pipe( angularTemplateCache( config.templateCache.file, config.templateCache.options ) ).pipe( gulp.dest( config.temp ) );
} );

gulp.task( 'default', [ 'bower', 'templateCache' ] );
